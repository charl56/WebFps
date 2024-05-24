const express = require('express');
const router = express.Router();
const mapService = require('../models/mapModel');

router.get('/maps', async (req, res) => {
    try {
        const maps = await mapService.getAll();
        res.status(200).json({ data: maps });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;