import React from 'react'
import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="navbar-container">
      <li><a class = "navbar-font"> </a><Link to="/">Home</Link></li> 
      <li><a class = "navbar-font"> </a><Link to="https://forms.monash.edu/course-advice?chatbot=nomount">Course Advice Request</Link></li> 
      <li><a class = "navbar-font"> </a><Link to="https://forms.monash.edu/enrolment-amendment?chatbot=nomount">Enrolment Amendment</Link></li> 
    </div>

  )
}

export default Navbar