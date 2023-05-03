import React from 'react'
import {Header, Navbar, Footer, Grid, Hero, SearchUnits} from './components/index';
import {Route,Link} from 'react-router-dom'

const UnitSearchPage = () => {
  return (
    <div className = "unit-search">
        <Header />
        <Navbar />
        <SearchUnits />
        <Footer />
      </div>
  )
}

export default UnitSearchPage