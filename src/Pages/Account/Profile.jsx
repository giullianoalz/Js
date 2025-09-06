// src/Pages/Account/Profile.jsx
import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Profile = () => {
  const { user, handleSave, formData, setFormData, onLogout } = useOutletContext();

  if (!user) {
    return <p>Cargando perfil...</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="account-details">
      <form>
        <div className="form-group">
          <label>Usuario:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} disabled />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Apellido:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
      </form>
      <button className="save-button" onClick={handleSave}>
        Guardar Cambios
      </button>
      <button className="logout-button" onClick={onLogout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;