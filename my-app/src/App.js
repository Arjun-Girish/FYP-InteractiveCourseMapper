import React from 'react'
import {Header, Navbar, Footer, Grid, Hero, SearchUnits} from './components/index';
import LandingPage from './LandingPage';
import Main from './Main';
import UnitSwap from './components/unit-swap/UnitSwap';

import {Route, Routes, BrowserRouter} from 'react-router-dom';
import SpecialisationPage from './SpecialisationPage';
import UnitSearchPage from './UnitSearchPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/unitsearchpage" element={<UnitSearchPage/>}/>
      <Route path="/specialisationpage" element={<SpecialisationPage/>}/>
    </Routes>
  )
}

export default App