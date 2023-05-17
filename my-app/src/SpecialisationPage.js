import React from 'react'
import {Header, Navbar, Footer, Specialisation, SearchUnits} from './components/index';
import {Route,Link} from 'react-router-dom'

const SpecialisationPage = () => {

  
  return (
    <div className = "specialisation-page">
        <Header />
        <Navbar />
        <Specialisation />
        <Footer />
      </div>

  )
}

export default SpecialisationPage