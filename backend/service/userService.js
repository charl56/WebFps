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
    userList.forEach((user, index) => {     // For each, because sometimes an user is added multiple times
        if (user.username === username) {
            userList.splice(index, 1);
        }
    });
};

