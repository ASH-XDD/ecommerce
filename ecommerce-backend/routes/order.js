const express = require("express");
const router = express.Router();
const { placeOrder, getUserOrders, getAllOrders } = require("../controllers/orderController");
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

router.post("/", verifyToken, placeOrder);
router.get("/", verifyToken, getUserOrders);
router.get("/all", verifyAdmin, getAllOrders);

module.exports = router;
