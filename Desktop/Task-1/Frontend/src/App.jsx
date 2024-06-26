import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import StepperComponent from "./components/Stepper";
import ProductDetail from "./components/pDetail/ProductDetail";
import Login from "./Auth/Login";
import Checkout from "./Pages/Checkout";
import Products from "./Pages/Product";
import Signup from "./Auth/Register";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <div>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart /> } />
          <Route path="/productDetail" element={<ProductDetail />}  />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
