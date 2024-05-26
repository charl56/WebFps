const express = require('express');
const router = express.Router();
const userService = require('../models/userModel');
const mapService = require('../models/mapModel');

router.post('/login', async (req, res) => {
    try {
        const { username, map } = req.body;
        if (!username) {
            return res.status(400).json({ message: 'Username is required.' });
        }
        const existingUser = await userService.findByName(username);
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists. Please choose another username.' });
        }
        const newUser = await userService.create(username, map);
        mapService.incrementPlayerCount(map);

        res.status(200).json({ message: 'User created successfully.', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
