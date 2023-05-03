import React from 'react';
import Homepage from './Homepage';
import About from './About';
import MainBar from './MainBar';
import Donate from './Donate';
import { Route, Routes, Navigate} from 'react-router-dom';
import SignIn from './SignIn'

export const AppRoutes = () => {
  return (
    <div>
      <MainBar />
      
      <Routes>
        <Route path="/Homepage" element={<Homepage/>} />
        <Route path="/" element={<Navigate to="/Homepage"/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/Donate" element={<Donate/>} />
      </Routes>
    </div>
  );
};