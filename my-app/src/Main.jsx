import React,  {useState} from 'react'
import {Header, Navbar, Footer, Grid, Hero, UnitSwap, Specialisation} from './components/index';
import './main-styling.css';

const Main = () => {
  
  const [nameMajor, setNameMajor] = useState('Specialisation - Aerospace Engineering');
  console.log(nameMajor)

  return (


    <div className = "main-container">
        <Header />
        <Navbar />
        <div className="main-component">
          <a href="/specialisationpage">
            <button className="back-button"> Back </button>
          </a>
          <h1 className="specialisation-name">{nameMajor}</h1>
              <div className="unit-swap-component"> <UnitSwap/> </div>
              <button className="submit-button"> Submit </button>
        </div>

        <Footer />
    </div>
  )
}

export default Main