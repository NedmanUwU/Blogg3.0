import React, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Profile from './profile';

const Header = ({isLoggedIn, onLogin}) => {
  return (
    <header>
      <div className='header'>
        <img src={logo} alt="logo" className='Logo' />
        <div className='nav'>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          
          <Profile isLoggedIn={isLoggedIn} onLogin={onLogin} />
        </div>
      </div>
    </header>
  );
};

export default Header