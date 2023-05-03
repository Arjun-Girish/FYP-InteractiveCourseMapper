import React from 'react'
import {Header, Navbar, Footer, Grid, Hero} from './components/index';
import {Route,Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className = "landingpage">
        <Header />
        <Navbar />
        <Hero />
        <Footer />
      </div>

  )
}

export default LandingPage