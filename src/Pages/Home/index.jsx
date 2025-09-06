// src/Pages/Home/index.jsx

import React from 'react';
import ProductCard from '../../Components/ProductCard';
import { products } from '../../data/products';
import { NavLink } from 'react-router-dom';
import '../../App.css'; // Asegúrate de importar el CSS para los estilos

const Home = ({ addToCart }) => {
  return (
    <div className='home-container'>
      <div className='products-grid'>
        {products.map(product => (
          <NavLink key={product.id} to={`/product/${product.id}`} className='product-card-link'>
            <ProductCard product={product} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;