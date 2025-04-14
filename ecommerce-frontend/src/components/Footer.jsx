// components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
