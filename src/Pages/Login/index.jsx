// src/Pages/Login/index.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Ingresar
        </button>
        <div className="login-links">
          <NavLink to="/forgot-password" className="forgot-password-link">¿Olvidaste tu contraseña?</NavLink>
          <p className="register-link">
            ¿No tienes una cuenta? <NavLink to="/register">Crea una</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;