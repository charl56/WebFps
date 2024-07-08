const userModel = require('./userModel')

class Map {
    constructor(id, name, quantity, nbplayer, availability) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.nbplayer = nbplayer;
        this.availability = availability;
        this.users = []; 
    }
}

const mapList = [
    new Map(1, 'Space', 5, 0, true),
    new Map(2, 'Zombie', 6, 0, false),
];

exports.getAll = () => mapList.map(map => ({...map }));
exports.getByName = (mapName) => {
    console.log("getname : ", mapList.find(map => map.name === mapName))
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
    const userList = userModel.getAll()
    const userIndex = userList.findIndex(user => user.username === username);

    if (userIndex!== -1) {
        const user = userList[userIndex];
        const map = mapList.find(map => map.name === user.mapName);

        if (map && map.nbplayer > 0) {
            map.nbplayer -= 1;
            map.users = map.users.filter(u => u.username !== username);
            userList.splice(userIndex, 1);
        }
    }
};
