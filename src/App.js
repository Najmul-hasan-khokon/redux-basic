import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
