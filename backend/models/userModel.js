class User {
    constructor(username, id, mapName, skin) {
        this.username = username;
        this.id = id;
        this.mapName = mapName;
        this.skin = skin;
    }
}

const userList = [];

exports.getAll = () => userList;
exports.findByName = (username) => userList.find(user => user.username === username);
exports.lastUser = () => userList[userList.length - 1];
exports.create = (username, mapName, skin) => {
    const newUser = new User(username, userList.length + 1, mapName, skin);
    userList.push(newUser);
    return newUser;
};