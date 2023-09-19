import ReactDOM from 'react-dom/client';
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Nav from "./components/nav";
import Footer from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Home from "./pages/home";
import Login from "./pages/login";

const App = () => {
  useEffect(() => {
    // Update title
    document.title = 'CinéPalais';

    // Update favicon
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = '/assets/logo.png';
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);