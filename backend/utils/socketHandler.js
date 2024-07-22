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
        let id = '';

        ws.on('close', () => {
            console.log(`${id} is disconnected`);
            userService.deleteUser(id);
            mapService.decrementPlayerCount(id);
            broadcast({ type: 'player disconnect', playerId: id, playerCount: wss.clients.size });
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
                case 'initUser':
                    const { username, map, skin } = data;
                    if (username === null || username === '') return

                    userService.createUser(username, map, skin);
                    id = username;
                    
                    players[username] = {
                        position: [0, 0, 0],
                        direction: [0, 0, 0],
                        health: 100,
                        kills: 0,
                        deaths: 0,
                        skin: skin
                    };

                    console.log(`${username} connected with map ${map} and skin ${skin}`);

                    broadcast({ type: 'player connect', playerId: username, playerCount: wss.clients.size, skin: players[username].skin });
                    ws.send(JSON.stringify({ type: 'initPlayer', playerId: username, playerCount: wss.clients.size, players: players }));

                    break;
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
