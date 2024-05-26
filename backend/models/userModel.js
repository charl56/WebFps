class User {
    constructor(username, id, mapName) {
        this.username = username;
        this.id = id;
        this.mapName = mapName;
    }
}

const userList = [];

exports.getAll = () => userList;
exports.findByName = (username) => userList.find(user => user.username === username);
exports.lastUser = () => userList[userList.length - 1];
exports.create = (username, mapName) => {
    const newUser = new User(username, userList.length + 1, mapName);
    userList.push(newUser);
    return newUser;
};