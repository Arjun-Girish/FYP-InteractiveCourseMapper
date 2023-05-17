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
          <h1 className="specialisation-name">{nameMajor}</h1>
              <div className="unit-swap-component"> <UnitSwap/> </div>
        </div>

        <Footer />
    </div>
  )
}

export default Main