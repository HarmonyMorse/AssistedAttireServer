// INstall express
const express = require('express')

// Create a router
const router = express.Router()

// Import the WishlistItem controller
const wishlistCtrl = require("../controllers/wishlist");

// ROUTES

// Index (all wishlist items)
// GET /wishlist
router.get("/", wishlistItemCtrl.index);

// Create
// POST /wishlist
router.post("/", wishlistItemCtrl.create);

// Show (one wishlist item)
// GET /wishlist/:id
router.get("/:id", wishlistItemCtrl.show);

// Update
// PUT /wishlist/:id
router.put("/:id", wishlistItemCtrl.update);

// Delete
// DELETE /wishlist/:id
router.delete("/:id", wishlistItemCtrl.destroy);

module.exports = router