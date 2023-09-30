import React from 'react'
// import SideNavbar from '../src/Navbar/Leftsidebar/SideNavbar'
import Loginform from './Loginform/Loginform'
import {Route, Routes } from 'react-router-dom';
import SideNavbar from './Navbar/Leftsidebar/SideNavbar';

function App() {
  return (
  
      <Routes>
        <Route path="/dashboard" element={<SideNavbar />} />
        <Route path="/" element={<Loginform />} />
      </Routes>
   
  )
}

export default App