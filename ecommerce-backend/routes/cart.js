const express = require("express");
const router = express.Router();
const { getCart, addToCart, removeFromCart } = require("../controllers/cartController");
const { verifyToken } = require("../middleware/authMiddleware");

router.get("/", verifyToken, getCart);
router.post("/", verifyToken, addToCart);
router.delete("/:productId", verifyToken, removeFromCart);

module.exports = router;
