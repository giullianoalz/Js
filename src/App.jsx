// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductDetail';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Cart from './Pages/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, selectedSize) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find(
        (item) => item.id === product.id && item.selectedSize === selectedSize
      );

      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, selectedSize, quantity: 1 }];
      }
    });
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <Navbar totalItems={totalItems} />
      <main className='main-layout'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/product/:id'
            element={<ProductPage addToCart={addToCart} />}
          />
          <Route path='/men' element={<Men addToCart={addToCart} />} />
          <Route path='/women' element={<Women addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;