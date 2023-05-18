import React from 'react'
import './header.css';
import logo from './logo.png'

const Header = () => {
  return (
    <div className="header-container">

      <div className="header">
      <img src={logo} className="logo-container" alt={logo}></img>
      <h1 className="header-text"> Monash Course Planner</h1>
      <div className="ghost"></div>


      </div>
    
    </div>
  )
}

export default Header