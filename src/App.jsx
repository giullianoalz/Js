// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom'; // Cambiado de BrowserRouter a HashRouter
import AppRoutes from './AppRoutes';
import Navbar from './Components/Navbar';
import './App.css';
import { products } from './data/products';

const App = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cart, setCart] = useState(() => {
    if (user) {
      const userCartKey = `cart_${user.username}`;
      const savedCart = localStorage.getItem(userCartKey);
      return savedCart ? JSON.parse(savedCart) : [];
    } else {
      // Carga el carrito del invitado si no hay usuario logueado
      const savedCart = localStorage.getItem('guest_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
  });

  const [searchResults, setSearchResults] = useState([]);

  // Sincroniza el carrito con localStorage
  useEffect(() => {
    if (user) {
      // Si hay un usuario, guarda el carrito con su nombre
      const userCartKey = `cart_${user.username}`;
      localStorage.setItem(userCartKey, JSON.stringify(cart));
      localStorage.removeItem('guest_cart'); // Y elimina el de invitado
    } else {
      // Si no hay usuario, guarda el carrito con la clave de invitado
      localStorage.setItem('guest_cart', JSON.stringify(cart));
    }
  }, [cart, user]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find(
        (item) => item.id === product.id && item.selectedSize === product.selectedSize
      );

      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleSearch = (searchTerm) => {
    const results = products.filter(
      (product) => product.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <Navbar totalItems={totalItems} user={user} onSearch={handleSearch} />
      <main className='main-layout'>
        <AppRoutes 
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
          user={user}
          setUser={setUser}
          searchResults={searchResults}
        />
      </main>
    </Router>
  );
};

export default App;