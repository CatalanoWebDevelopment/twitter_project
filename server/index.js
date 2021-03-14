const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

// Enable access to .env
require("dotenv").config();

// Route Variables
const searchTweets = require("../routes/api/searchTweets");

// Midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);

// Routes
app.use("/api/searchTweets/", searchTweets);

// Handle Production Environment
if (process.env.NODE_ENV === "production") {
    // Serve Static Files
    app.use(express.static(path.join(__dirname, "src/build")));

    // Handle React routing, return all requests back to React App
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "src/build", "index.html"));
    });
};

// Start Server
app.listen(PORT, () => console.info(`Express server is running on http://localhost:${PORT}`));