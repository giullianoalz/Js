// src/Components/Navbar/index.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsBag, BsPerson, BsSearch } from 'react-icons/bs';
import Logo from '../../assets/Clothing-logo.png';
import '../../App.css';

const Navbar = ({ totalItems }) => {
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
          <NavLink to='/search'><BsSearch size={20} /></NavLink> 
          <NavLink to='/profile'><BsPerson size={24} /></NavLink> {/* Ajusta el tamaño aquí */}
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