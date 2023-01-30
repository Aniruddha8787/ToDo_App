import React from 'react'
import Home from './Home'
import {Routes,Route} from "react-router-dom"
import Summery from './Summery';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/s" element={<Summery />} />
    </Routes>
  );
}

export default MainRoutes