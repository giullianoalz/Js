import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './changePassword.css';

const ChangePassword = ({ onChangePassword }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    onChangePassword(email, newPassword);
    alert('Contraseña cambiada exitosamente.');
    navigate('/login');
  };

  return (
    <div className="change-password-container">
      <form onSubmit={handleSubmit} className="change-password-form">
        <h2>Cambiar Contraseña</h2>
        <div className="form-group">
          <label>Nueva Contraseña</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Cambiar Contraseña
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;