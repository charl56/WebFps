const express = require('express');
const router = express.Router();
const mapService = require('../service/mapService');

router.get('/maps', async (req, res) => {
    try {
        const maps = await mapService.getAllMaps();
        res.status(200).json({ data: maps });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/maps/:name', async (req, res) => {
    try {
        const mapName = req.params.name;
        const map = await mapService.getMapByName(mapName);
        if (map) {
            res.status(200).json({ data: map });
        } else {
            res.status(404).json({ error: 'Map not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = router;