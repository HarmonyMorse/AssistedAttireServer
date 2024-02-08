// Install express
const express = require('express')

// Create a router
const router = express.Router()

// ROUTES

// Index (all clothing items)
// GET /clothingItems
router.get("/", async (req, res) => {
	res.status(200).json({message: "clothing items index route"})
});

// Create
// POST /clothingItems
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "clothing items create route"})
});

// Show (one clothing item)
// GET /clothingItems/:id
router.get("/:id", async (req, res) => {
    res.status(200).json({message: "clothing items show route"})
});

// Update
// PUT /clothingItems/:id
router.put("/:id", async (req, res) => {
    res.status(200).json({message: "clothing items update route"})
});

// Delete
// DELETE /clothingItems/:id
router.delete("/:id", async (req, res) => {
    res.status(200).json({message: "clothing items delete route"})
});

module.exports = router
