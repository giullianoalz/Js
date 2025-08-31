// src/Pages/Cart/index.jsx
import React from 'react';
import './cart.css';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      {/* Elimina esta línea */}
      {/* <h1>Carrito de Compras</h1> */} 
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imagen} alt={item.titulo} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.titulo}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.precio}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">
                Eliminar
              </button>
            </div>
          ))}
          <div className="cart-summary">
            <h2>Total: ${calculateTotal()}</h2>
            <button className="checkout-button">Pagar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;