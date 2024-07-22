// userService.js
const { User, userList } = require('../models/userModel');

exports.getAllUsers = () => userList;

exports.findUserByName = (username) => userList.find(user => user.username === username);

exports.getLastUser = () => userList[userList.length - 1];

exports.createUser = (username, mapName, skin) => {
    const newUser = new User(username, userList.length + 1, mapName, skin);
    userList.push(newUser);
    return newUser;
};

exports.deleteUser = (username) => {
    const userIndex = userList.findIndex(user => user.username === username);
    if (userIndex < 0) return false;
    userList.splice(userIndex, 1);
    return true;
};

