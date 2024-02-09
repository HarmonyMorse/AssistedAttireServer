// Install express
const express = require('express')

// Create a router
const router = express.Router()

// Import the ClothingItem controller
const clothingItemCtrl = require("../controllers/clothingItem");

// ROUTES

// Index (all clothing items)
// GET /clothingItems
router.get("/", clothingItemCtrl.index);

// Create
// POST /clothingItems
router.post("/", clothingItemCtrl.create);

// Show (one clothing item)
// GET /clothingItems/:id
router.get("/:id", clothingItemCtrl.show);

// Update
// PUT /clothingItems/:id
router.put("/:id", clothingItemCtrl.update);

// Delete
// DELETE /clothingItems/:id
router.delete("/:id", clothingItemCtrl.destroy);

module.exports = router
