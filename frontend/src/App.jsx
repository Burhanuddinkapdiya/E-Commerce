import React from "react";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Success from "./pages/Success";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList/>} />
        <Route path="products" element={<ProductList/>} />
        <Route path="product" element={<Product/>} />
        <Route path="product/:id" element={<Product/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="success" element={<Success/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;
