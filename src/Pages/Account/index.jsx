// src/Pages/Account/index.jsx
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../App.css';

const Account = ({ user, onUpdateUser, onLogout }) => {
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
  });

  const handleSave = () => {
    onUpdateUser({ ...user, ...formData });
    alert('Información actualizada correctamente.');
  };

  return (
    <div className="account-container">
      {/* Se eliminó la línea: <h1>Mi Cuenta</h1> */}
      
      {/* Menú de navegación con viñetas */}
      <nav className="account-nav">
        <ul>
          <li>
            <NavLink 
              to="/account/profile" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Perfil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/account/orders" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Historial de Pedidos
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet context={{ user, handleSave, formData, setFormData, onLogout }} />
    </div>
  );
};

export default Account;