// Install express
const express = require('express')

// Create a router
const router = express.Router()

// ROUTES

// Index (all outfits)
// GET /outfits
router.get("/", async (req, res) => {
	res.status(200).json({message: "outfits index route"})
});

// Create
// POST /outfits
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "outfits create route"})
});

// Show (one outfit)
// GET /outfits/:id
router.get("/:id", async (req, res) => {
    res.status(200).json({message: "outfits show route"})
});

// Update
// PUT /outfits/:id
router.put("/:id", async (req, res) => {
    res.status(200).json({message: "outfits update route"})
});

// Delete
// DELETE /outfits/:id
router.delete("/:id", async (req, res) => {
    res.status(200).json({message: "outfits delete route"})
});

module.exports = router
