// Install express
const express = require('express')

// Create a router
const router = express.Router()

// ROUTES

// Clothing Item index route
// GET /clothingItems
router.get("/", async (req, res) => {
	res.status(200).json({message: "clothing items index route"})
});

// Clothing Item create route
// POST /clothingItems
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "clothing items create route"})
});

module.exports = router
