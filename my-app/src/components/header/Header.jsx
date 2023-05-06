import React from 'react'
import './header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div className="header-container">
      <img class="logo" src={logo} alt="React Image" />
      <h1 class="header-text"> Interactive Course Planner</h1>
    </div>
  )
}

export default Header