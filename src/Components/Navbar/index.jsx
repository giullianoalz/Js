// src/Components/Navbar/index.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BsBag, BsPerson, BsSearch } from 'react-icons/bs';
import Logo from '../../assets/Clothing-logo.png';
import '../../App.css';

const Navbar = ({ totalItems, user, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      onSearch(searchTerm);
      navigate('/search');
      setIsSearchVisible(false); // Ocultar el input después de buscar
      setSearchTerm(''); // Limpiar el término de búsqueda
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const profileLink = user ? '/account' : '/login';

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-left'>
          <NavLink to='/men'>HOMBRE</NavLink>
          <NavLink to='/women'>MUJER</NavLink>
        </div>
        <div className='navbar-center'>
          <NavLink to='/'>
            <img src={Logo} alt='Clothing Logo' className='navbar-logo' />
          </NavLink>
        </div>
        <div className='navbar-right'>
          <div className="search-container">
            {isSearchVisible && (
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="search-input"
              />
            )}
            <BsSearch 
              size={20} 
              className={`search-icon ${isSearchVisible ? 'visible' : ''}`}
              onClick={toggleSearch} 
            />
          </div>
          <NavLink to={profileLink}><BsPerson size={24} /></NavLink>
          <NavLink to='/cart' className='cart-link'>
            <BsBag size={20} />
            <div className='cart-count'>{totalItems}</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;