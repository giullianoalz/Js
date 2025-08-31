// src/Pages/Women/index.jsx
import React from 'react';
import ProductCard from '../../Components/ProductCard';
import { products } from '../../data/products';

const Women = ({ addToCart }) => {
  const womenProducts = products.filter(product => product.categoria === 'mujer');

  return (
    <div className="products-grid">
      {womenProducts.length > 0 ? (
        womenProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      ) : (
        <p>No hay productos para mujer disponibles en este momento.</p>
      )}
    </div>
  );
};

export default Women;