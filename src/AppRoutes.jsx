// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductDetail';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Account from './Pages/Account';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import ChangePassword from './Pages/ChangePassword';
import Search from './Pages/Search';
import Profile from './Pages/Account/Profile';
import OrderHistory from './Pages/Account/OrderHistory';
import { users } from './data/users';

const AppRoutes = ({ cart, setCart, addToCart, user, setUser, searchResults }) => {
  const navigate = useNavigate();

  // ... (funciones handleLogin, handleRegister, etc. se mantienen igual)
  const handleLogin = (username, password) => {
    // ... (mismo código)
  };
  const handleRegister = (newUser) => {
    // ... (mismo código)
  };
  const handleUpdateUser = (updatedUserData) => {
    setUser(updatedUserData);
    localStorage.setItem('currentUser', JSON.stringify(updatedUserData));
  };
  const handleLogout = () => {
    // ... (mismo código)
  };
  const handleCheckEmail = (email) => {
    // ... (mismo código)
  };
  const handleChangePassword = (email, newPassword) => {
    // ... (mismo código)
  };

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductPage addToCart={addToCart} />} />
      <Route path='/men' element={<Men addToCart={addToCart} />} />
      <Route path='/women' element={<Women addToCart={addToCart} />} />
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      <Route path='/login' element={<Login onLogin={handleLogin} />} />

      {/* Configuración de rutas anidadas para la página de cuenta */}
      <Route path='/account' element={<Account user={user} onUpdateUser={handleUpdateUser} onLogout={handleLogout} />}>
        <Route index element={<Profile />} /> {/* Ruta por defecto: /account */}
        <Route path='profile' element={<Profile />} /> {/* Ruta para /account/profile */}
        <Route path='orders' element={<OrderHistory />} /> {/* Ruta para /account/orders */}
      </Route>

      <Route path='/register' element={<Register onRegister={handleRegister} />} />
      <Route path='/forgot-password' element={<ForgotPassword onCheckEmail={handleCheckEmail} />} />
      <Route path='/change-password' element={<ChangePassword onChangePassword={handleChangePassword} />} />
      <Route path='/search' element={<Search searchResults={searchResults} />} />
    </Routes>
  );
};

export default AppRoutes;