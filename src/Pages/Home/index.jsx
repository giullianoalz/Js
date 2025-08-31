// src/Pages/Home/index.jsx
import React from 'react';
import ProductCard from '../../Components/ProductCard';
import { products } from '../../data/products';

const Home = () => {
  return (
    <div className='products-grid'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Home;