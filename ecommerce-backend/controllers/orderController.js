const Order = require("../models/Order");
const Cart = require("../models/Cart");

// Place an order
exports.placeOrder = async (req, res) => {
  try {
    const { address } = req.body;
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const totalAmount = cart.items.reduce((total, item) => {
      return total + item.quantity * item.productId.price; // Note: `populate()` not used here
    }, 0);

    const newOrder = await Order.create({
      userId: req.user.id,
      items: cart.items,
      totalAmount,
      address,
    });

    await Cart.findOneAndDelete({ userId: req.user.id }); // Clear cart after order

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user's orders
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin: Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "name email");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
