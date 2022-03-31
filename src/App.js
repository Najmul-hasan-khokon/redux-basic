import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import UserDetails from "./components/UserDetails";
import UsersListing from "./components/UsersListing";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UsersListing />} />
        <Route path="/user/:userId" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
