// components/Sidebar.jsx
import React from "react";
import { ListGroup } from "react-bootstrap";

const Sidebar = ({ categories, onCategoryChange }) => {
  return (
    <div className="sidebar">
      <h4>Categories</h4>
      <ListGroup>
        {categories.map((category, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
