// src/Pages/Men/index.jsx
import React from 'react';
import ProductCard from '../../Components/ProductCard';
import { products } from '../../data/products';

const Men = ({ addToCart }) => {
  const menProducts = products.filter(product => product.categoria === 'hombre');

  return (
    <div className="products-grid">
      {menProducts.length > 0 ? (
        menProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      ) : (
        <p>No hay productos para hombre disponibles en este momento.</p>
      )}
    </div>
  );
};

export default Men;