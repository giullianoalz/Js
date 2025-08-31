import React, { useContext } from 'react';
import Layout from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const { logIn } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para validar credenciales en una app real
    logIn();
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <Layout>
      <div className="signin-container">
        <form className="signin-form" onSubmit={handleLogin}>
          <h2>Sign In</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="add-to-cart-btn-detail">
            Log In
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default SignIn;