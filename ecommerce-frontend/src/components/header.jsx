// components/Header.jsx
import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { useCart } from "../context/CartContext"; // Ensure the path is correct
import { Link } from "react-router-dom";


const Header = ({  onLogout,searchTerm, setSearchTerm, priceFilter, setPriceFilter }) => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Big Bazaar</Navbar.Brand>

       
        {/* Search Bar */}
        <Form className="d-flex me-3">
          <FormControl
            type="search"
            placeholder="Search ..."
            className="me-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Price Filter Dropdown */}
          <Form.Select
            className="me-2"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="All">All Prices</option>
            <option value="0-20">Below $20</option>
            <option value="20-50">$20 - $50</option>
            <option value="50+">Above $50</option>
          </Form.Select>
        </Form>

        <Nav>
        <nav>
  <Link to="/cart" className="d-flex align-items-center text-decoration-none">
    <span className="fs-4 me-2">🛒</span> {/* Cart Icon */}
    Cart 
    {totalItems > 0 && (
      <span className="badge bg-primary ms-2">{totalItems}</span>
    )}
  </Link>
</nav>

          <Button variant="outline-light" onClick={onLogout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
