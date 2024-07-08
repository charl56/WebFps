const WebSocket = require('ws');
const userService = require('../service/userService');
const mapService = require('../service/mapService');

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
    }, 1000 / 60);

    wss.on('connection', (ws) => {
        // const id = ws._socket.remoteAddress + ":" + ws._socket.remotePort;
        const lastUser = userService.getLastUser();
        if(lastUser === undefined || lastUser.username === undefined) return

        const id = lastUser.username 

        console.log(`${id} is connected`);

        players[id] = {
            position: [0, 0, 0],
            direction: [0, 0, 0],
            health: 100,
            kills: 0,
            deaths: 0,
            skin: lastUser.skin
        };

        broadcast({ type: 'player connect', playerId: id, playerCount: wss.clients.size, skin: players[id].skin });

        ws.send(JSON.stringify({ type: 'initPlayer', playerId:id, playerCount: wss.clients.size, players: players }));

        ws.on('close', () => {
            console.log(`${id} is disconnected`);
            mapService.decrementPlayerCount(id); 
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
                            players[data.victim].health = 100;
                            players[data.victim].deaths++;
                            players[id].kills++;
                            broadcast({ type: 'kill message', shooter: id, victim: data.victim });
                        }
                    }
                    break;
                default:
                    console.error('Unknown message type:', data.type);
            }
        });
    });

    return wss;
};

module.exports = initWebSocket;
