import React from "react";
import { useCart } from "../context/CartContext"; // For cart state management
import { Button, Card, Col, Row, Container } from "react-bootstrap"; // Bootstrap components

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Destructure functions from cart context

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <Container className="my-5">
      <h2>Your Cart</h2>
      {/* Check if cart is empty */}
      {cart.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Your cart is empty. Start adding products!
        </div>
      ) : (
        <Row>
          {/* Loop through the cart items */}
          {cart.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>

                  {/* Quantity Selector */}
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      onClick={() => updateQuantity(product.id, product.quantity - 1)}
                      disabled={product.quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="mx-2">{product.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      onClick={() => updateQuantity(product.id, product.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="danger"
                    className="mt-2"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Cart Summary */}
      <div className="cart-summary mt-4">
        <h4>Cart Summary</h4>
        <div className="d-flex justify-content-between">
          <span>Total Items:</span>
          <span>{cart.reduce((total, product) => total + product.quantity, 0)}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Total Price:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>

        {/* Checkout Button */}
        <Button
          variant="primary"
          className="mt-3"
          onClick={() => alert("Proceeding to checkout")}
        >
          Proceed to Checkout
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
