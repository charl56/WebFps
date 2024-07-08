// mapService.js
const { Map, mapList } = require('../models/mapModel');
const userService = require('../service/userService');

exports.getAllMaps = () => mapList.map(map => ({ ...map }));

exports.getMapByName = (mapName) => {
    console.log("getname : ", mapList.find(map => map.name === mapName));
    return mapList.find(map => map.name === mapName);
};

exports.incrementPlayerCount = (mapName, username, skin) => {
    const map = mapList.find(map => map.name === mapName);
    if (map && map.availability && map.nbplayer < map.quantity) {
        map.nbplayer += 1;
        map.users.push({ username, skin });
    } else {
        throw new Error('Map not found or not available');
    }
};

exports.decrementPlayerCount = (username) => {
    const userList = userService.getAllUsers();
    const userIndex = userList.findIndex(user => user.username === username);

    if (userIndex !== -1) {
        const user = userList[userIndex];
        const map = mapList.find(map => map.name === user.mapName);

        if (map && map.nbplayer > 0) {
            map.nbplayer -= 1;
            map.users = map.users.filter(u => u.username !== username);
            userList.splice(userIndex, 1);
        }
    }
};