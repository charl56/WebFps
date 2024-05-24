const WebSocket = require('ws');
const userService = require('../models/userModel');

const initWebSocket = (http) => {
    const wss = new WebSocket.Server({ server: http });

    let players = {};

    const broadcast = (data) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(data));
            }
        });
    };

    setInterval(() => {
        broadcast({ type: 'playerPositions', players });
    }, 8);

    wss.on('connection', (ws) => {
        // const id = ws._socket.remoteAddress + ":" + ws._socket.remotePort;
        const lastuSer = userService.lastUser();
        if(lastuSer === undefined || lastuSer.username === undefined) return

        const id = lastuSer.username 

        console.log(`${id} is connected`);

        players[id] = {
            position: [0, 0, 0],
            direction: [0, 0, 0],
            health: 100,
        };

        broadcast({ type: 'player connect', playerId: id, playerCount: wss.clients.size });

        ws.send(JSON.stringify({ type: 'initPlayer', playerId:id, playerCount: wss.clients.size, players: Object.keys(players) }));

        ws.on('close', () => {
            console.log(`${id} is disconnected`);
            broadcast({ type: 'player disconnect', playerId:id, playerCount: wss.clients.size });
            delete players[id];
        });

        ws.on('message', (message) => {
            let data;
            try {
                data = JSON.parse(message);
            } catch (e) {
                console.error('Invalid message', e);
                return;
            }

            switch (data.type) {
                case 'chat message':
                    broadcast({ type: 'chat message', username: data.username, message: data.message });
                    break;
                case 'kill message':
                    broadcast({ type: 'kill message', shooter: data.shooter, killed: data.killed });
                    break;
                case 'updateClientPos':
                    if (players[id]) {
                        players[id].position = data.position;
                        players[id].direction = data.direction;
                    }
                    break;
                case 'updateClientHealth':
                    if (players[data.victim]) {
                        players[data.victim].health -= data.damage;
                        if (players[data.victim].health <= 0) {
                            broadcast({ type: 'kill message', shooter: id, victim: data.victim });
                        }
                    }
                    break;
                case 'triggerRemoteRocket':
                    broadcast({ type: 'shootSyncRocket', player: players[id], id });
                    break;
                default:
                    console.error('Unknown message type:', data.type);
            }
        });
    });

    return wss;
};

module.exports = initWebSocket;
