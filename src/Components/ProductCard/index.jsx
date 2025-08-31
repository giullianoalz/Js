// src/Components/ProductCard/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img src={product.imagen} alt={product.titulo} className="product-image" />
        <div className="product-info">
          <p className="product-name">{product.titulo}</p>
          <p className="product-price">${product.precio}</p>
        </div>
        <div className="product-sizes">
          {product.tallas.map((talla, index) => (
            <button key={index} className="size-button">
              {talla}
            </button>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;