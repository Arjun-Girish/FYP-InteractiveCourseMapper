import React from 'react'
import './header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div className="header-container">
      <img class="logo" src={logo} alt="React Image" />
    </div>
  )
}

export default Header