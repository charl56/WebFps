class User {
    constructor(username, id, mapName, skin) {
        this.username = username;
        this.id = id;
        this.mapName = mapName;
        this.skin = skin;
    }
}

const userList = [];

module.exports = {
    User,
    userList,
};