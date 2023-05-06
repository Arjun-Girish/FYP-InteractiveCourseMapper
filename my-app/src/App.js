import React from 'react'
import LandingPage from './LandingPage';
import Main from './Main';
import {Route, Routes} from 'react-router-dom';
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