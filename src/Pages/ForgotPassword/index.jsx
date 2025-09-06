import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgotPassword.css';

const ForgotPassword = ({ onCheckEmail }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onCheckEmail(email)) {
      alert('Correo electrónico verificado. Ahora puedes cambiar tu contraseña.');
      navigate(`/change-password?email=${email}`);
    } else {
      alert('No se encontró un usuario con ese correo electrónico.');
    }
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <h2>Recuperar Contraseña</h2>
        <p>Ingresa el correo electrónico de tu cuenta para continuar.</p>
        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Continuar
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;