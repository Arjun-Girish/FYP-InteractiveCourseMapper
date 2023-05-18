import React from 'react'
import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <li><a className = "navbar-font"> </a><Link to="/">Home</Link></li> 
      <li><a className = "navbar-font"> </a><Link to="https://forms.monash.edu/course-advice?chatbot=nomount" target = "_blank">Course Advice Request</Link></li> 
      <li><a className = "navbar-font"> </a><Link to="https://forms.monash.edu/enrolment-amendment?chatbot=nomount" target = "_blank">Enrolment Amendment</Link></li> 
    </div>

  )
}

export default Navbar