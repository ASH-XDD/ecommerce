// src/components/AddToCartButton.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    console.log("AddToCartButton clicked for product:", product);
    addToCart(product);
  };

  return (
    <button onClick={handleAdd} className="add-to-cart-btn">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
