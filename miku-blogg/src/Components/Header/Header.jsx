import React, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Profile from './profile';

const Header = () => {
  return (
    <header>
      <div className='header'>
        <img src={logo} alt="logo" className='Logo' />
        <div className='nav'>
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/about" className='nav-link'>About</Link>      
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header