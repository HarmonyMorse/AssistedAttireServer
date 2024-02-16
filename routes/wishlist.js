// INstall express
const express = require('express')

// Create a router
const router = express.Router()

// Import the WishlistItem controller
const wishlistCtrl = require("../controllers/wishlist");

// ROUTES

// Index (all wishlist items)
// GET /wishlist
router.get("/", wishlistCtrl.index);

// Create
// POST /wishlist
router.post("/", wishlistCtrl.create);

// Show (one wishlist item)
// GET /wishlist/:id
router.get("/:id", wishlistCtrl.show);

// Update
// PUT /wishlist/:id
router.put("/:id", wishlistCtrl.update);

// Delete
// DELETE /wishlist/:id
router.delete("/:id", wishlistCtrl.destroy);

module.exports = router