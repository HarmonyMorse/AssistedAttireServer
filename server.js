// Initialize .env variables
require("dotenv").config();

// Establish connection
require('./config/db.connection.js')

// Get port
const { PORT } = process.env;

// Import express
const express = require("express");

// Create application object
const app = express();

// Import router
const clothingItemsRouter = require("./routes/clothingItems.js");

// Middleware

// Routes
// Test route
app.get("/", (req, res) => {
    res.send("hello world");
});
app.use("/clothingItems", clothingItemsRouter);

// Listen on port
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
