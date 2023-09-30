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
}

export default App;
