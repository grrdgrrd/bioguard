const express = require("express");
const router = express.Router();
const SensorData = require("../models/SensorData");

router.get("/sensors", async (req, res) => {
    try {
        const sensors = await SensorData.find();
        res.json(sensors);
    } catch (err) {
        res.status(500).send("Server Error");
    };
});

router.post("/sensors", async (req, res) => {
    try {
        const newSensorData = new SensorData({
            location: req.body.location,
            viralLoad: req.body.viralLoad
        });
        const sensor = await newSensorData.save();
        res.json(sensor);
    } catch (err) {
        res.status(500).send("Server Error");
    };
});

module.exports = router;