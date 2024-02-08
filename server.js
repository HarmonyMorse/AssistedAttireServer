// Initialize .env variables
require("dotenv").config();

// Establish connection
require('./config/db.connection.js')

// Get port
const { PORT } = process.env;

// Import dependencies
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

// Create application object
const app = express();

// Import router
const clothingItemsRouter = require("./routes/clothingItems.js");

// Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(cors());
app.use(morgan("dev"))

// Routes
// Test route
app.get("/", (req, res) => {
    res.send("hello world");
});
app.use("/clothingItems", clothingItemsRouter);

// Listen on port
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
