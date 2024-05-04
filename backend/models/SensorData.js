const mongoose = require("mongoose");

const SensorDataSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    viralLoad: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("SensorData", SensorDataSchema);