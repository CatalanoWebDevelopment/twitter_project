const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const path = require("path");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

// Route Variables
const connectToSampleStream = require("../routes/api/connectToSampleStream");

// Midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);

// Routes
app.use("/api/connectToSampleStream", connectToSampleStream);

if (process.env.NODE_ENV === "production") {
    // Serve Static Files
    app.use(express.static(path.join(__dirname, "src/build")));

    // Handle React routing, return all requests back to React App
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "src/build", "index.html"));
    });
};

app.listen(PORT, () => console.info(`Express server is running on http://localhost:${PORT}`));