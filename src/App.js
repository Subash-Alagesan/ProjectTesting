<<<<<<< HEAD
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
=======
import React from "react";
import SideNavbar from "../src/Navbar/Leftsidebar/SideNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/Loginform/Loginform";
import MainContent from "./MainDashboard/MainContent";
import ProtectedRoutes from "./Component/ProductedRoutes";

function App() {
  return (
    <>
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<SideNavbar />} />
        </Routes>
      </div>
    </>
  );
>>>>>>> 54398f7fb536a699e3b6d5ac51b076f77d658250
}

export default App;
