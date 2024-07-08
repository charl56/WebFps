const express = require('express');
const router = express.Router();
const userService = require('../service/userService');
const mapService = require('../service/mapService');

router.post('/login', async (req, res) => {
    try {
        const { username, map, skin } = req.body;
        if (!username) {
            return res.status(400).json({ message: 'Username is required.' });
        }
        const existingUser = await userService.findUserByName(username);
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists. Please choose another username.' });
        }
        const newUser = await userService.createUser(username, map, skin);
        mapService.incrementPlayerCount(map, username, skin);

        res.status(200).json({ message: 'User created successfully.', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
