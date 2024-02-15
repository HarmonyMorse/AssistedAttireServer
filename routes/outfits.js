// Install express
const express = require('express')

// Create a router
const router = express.Router()

// Import the Outfit controller
const outfitCtrl = require("../controllers/outfit");


// ROUTES

// Index (all outfits)
// GET /outfits
router.get("/", outfitCtrl.index);

// Create
// POST /outfits
router.post("/", outfitCtrl.create);

// Show (one outfit)
// GET /outfits/:id
router.get("/:id", outfitCtrl.show);

// Update
// PUT /outfits/:id
router.put("/:id", outfitCtrl.update);

// Delete
// DELETE /outfits/:id
router.delete("/:id", outfitCtrl.destroy);

module.exports = router
