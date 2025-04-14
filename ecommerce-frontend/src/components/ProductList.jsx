// components/ProductList.jsx
import React, { useState } from "react";

import { Row, Col, Card, Pagination } from "react-bootstrap";
import AddToCartButton from "../components/AddToCartButton"; // update the path if it's in a different folder

const ProductList = ({ selectedCategory, products, loading, error, searchTerm,priceFilter,onAddToCart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
  
    // Filter by category and search
    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    const priceFilteredProducts = filteredProducts.filter((product) => {
        const price = product.price;
        if (priceFilter === "0-20") return price < 20;
        if (priceFilter === "20-50") return price >= 20 && price <= 50;
        if (priceFilter === "50+") return price > 50;
        return true; // 'All'
      });
      
      const totalPages = Math.ceil(priceFilteredProducts.length / productsPerPage);
      const currentProducts = priceFilteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
      );
      
  
    return (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
  
        <Row>
          {currentProducts.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <AddToCartButton product={product}  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
  
        <Pagination>
          {[...Array(totalPages)].map((_, idx) => (
            <Pagination.Item
              key={idx}
              active={idx + 1 === currentPage}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </>
    );
  };
export default ProductList;  