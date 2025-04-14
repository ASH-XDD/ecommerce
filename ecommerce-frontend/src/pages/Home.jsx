// pages/Home.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("All");
 


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const productData = response.data;
        setProducts(productData);
        setCategories(["All", ...new Set(productData.map(p => p.category))]);
      } catch (err) {
        setError("Error loading products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleLogout = () => {
    // remove token, clear session, redirect, etc.
    localStorage.removeItem("token");
    window.location.href = "/login"; // or use navigate if using react-router
  };

  return (
    <>
     <Header
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  priceFilter={priceFilter}
  setPriceFilter={setPriceFilter}
  onLogout={handleLogout}
/>
      <div className="main-content d-flex">
        <div className="sidebar-container me-4">
          <Sidebar categories={categories} onCategoryChange={setSelectedCategory} />
        </div>
        <div className="product-list-container flex-grow-1">
        <ProductList
  selectedCategory={selectedCategory}
  products={products}
  loading={loading}
  error={error}
  searchTerm={searchTerm}
  priceFilter={priceFilter}
 
/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
