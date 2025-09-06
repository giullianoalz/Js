// src/Pages/ProductDetail/index.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import './productPage.css';

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <div className="product-page-container">Producto no encontrado.</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, selectedSize });
      alert(`${product.titulo}, talla ${selectedSize} ha sido añadido al carrito.`);
    } else {
      alert("Por favor, selecciona una talla antes de añadir al carrito.");
    }
  };

  return (
    <div className="product-page-container">
      <div className="product-image-container">
        <img src={product.imagen} alt={product.titulo} className="product-page-image" />
      </div>
      <div className="product-details-container">
        <h1 className="product-page-title">{product.titulo}</h1>
        <p className="product-page-price">${product.precio}</p>
        <div className="size-selection-container">
          <p>Tallas disponibles:</p>
          <div className="size-buttons">
            {product.tallas.map((talla, index) => (
              <button
                key={index}
                className={`size-button ${selectedSize === talla ? 'selected' : ''}`}
                onClick={() => setSelectedSize(talla)}
              >
                {talla}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductPage;