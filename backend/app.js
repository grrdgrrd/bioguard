const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");
const sensorRoutes = require("./routes/sensorRoutes");

const app = express();
connectDB();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use("/api", sensorRoutes)

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});