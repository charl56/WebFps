class User {
    constructor(username, id) {
        this.username = username;
        this.id = id;
    }
}

const userList = [];

exports.findByName = (username) => userList.find(user => user.username === username);
exports.lastUser = () => userList[userList.length - 1];
exports.create = (username) => {
    const newUser = new User(username, userList.length + 1);
    userList.push(newUser);
    return newUser;
};
