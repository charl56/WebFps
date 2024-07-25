const WebSocket = require('ws');
const userService = require('../service/userService');
const mapService = require('../service/mapService');

const initWebSocket = (http) => {
    const wss = new WebSocket.Server({ server: http });

    let players = {};
    let rooms = {};

    const broadcast = (roomId, data) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && client.roomId === roomId) {
                client.send(JSON.stringify(data));
            }
        });
    };

    setInterval(() => {
        for (const roomId in rooms) {
            broadcast(roomId, { type: 'playerPositions', players: rooms[roomId].players });
        }
    }, 1000 / 60);

    wss.on('connection', (ws) => {
        // const id = ws._socket.remoteAddress + ":" + ws._socket.remotePort;
        let id = '';
        ws.roomId = '';

        ws.on('close', () => {
            console.log(`${id} is disconnected`);
            userService.deleteUser(id);
            mapService.decrementPlayerCount(id);

            if (ws.roomId && rooms[ws.roomId]) {
                rooms[ws.roomId].clients.delete(ws);
                broadcast(ws.roomId, { type: 'player disconnect', playerId: id, playerCount: rooms[ws.roomId].clients.size });
                delete rooms[ws.roomId].players[id];
            }
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
                    if (!username) return;

                    id = username;
                    ws.roomId = map;

                    if (!rooms[map]) {
                        rooms[map] = { players: {}, clients: new Set() };
                    }

                    rooms[map].clients.add(ws);
                    rooms[map].players[username] = {
                        position: [0, 0, 0],
                        direction: [0, 0, 0],
                        health: 100,
                        kills: 0,
                        deaths: 0,
                        skin: skin
                    };

                    userService.createUser(username, map, skin);
                    console.log(`${username} connected with map ${map} and skin ${skin}`);

                    broadcast(map, { type: 'player connect', playerId: username, playerCount: rooms[map].clients.size, skin: skin });
                    ws.send(JSON.stringify({ type: 'initPlayer', playerId: username, playerCount: rooms[map].clients.size, players: rooms[map].players }));
                    break;
                case 'chat message':
                    console.log(ws.roomId)
                    broadcast(ws.roomId, { type: 'chat message', username: data.username, message: data.message });
                    break;
                case 'kill message':
                    broadcast(ws.roomId, { type: 'kill message', shooter: data.shooter, killed: data.killed });
                    break;
                case 'updateClientPos':
                    if (rooms[ws.roomId] && rooms[ws.roomId].players[id]) {
                        rooms[ws.roomId].players[id].position = data.position;
                        rooms[ws.roomId].players[id].direction = data.direction;
                    }
                    break;
                case 'updateClientHealth':
                    if (rooms[ws.roomId] && rooms[ws.roomId].players[data.victim]) {
                        rooms[ws.roomId].players[data.victim].health -= data.damage;
                        if (rooms[ws.roomId].players[data.victim].health <= 0) {
                            rooms[ws.roomId].players[data.victim].health = 100;
                            rooms[ws.roomId].players[data.victim].deaths++;
                            rooms[ws.roomId].players[data.victim].position = [0, 27, 0];
                            rooms[ws.roomId].players[id].kills++;
                            broadcast(ws.roomId, { type: 'kill message', shooter: id, victim: data.victim });
                        }
                    }
                    break;
                case 'ping':
                    ws.send(JSON.stringify({ type: 'pong' }));
                    break;
                default:
                    console.error('Unknown message type:', data.type);
            }
        });
    });

    return wss;
};

module.exports = initWebSocket;
