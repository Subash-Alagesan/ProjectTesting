import React from "react";
import SideNavbar from "../src/Navbar/Leftsidebar/SideNavbar";
import { Routes, Route } from "react-router-dom";
import Login from "../src/Loginform/Loginform";
import ProtectedRoutes from "./Component/ProductedRoutes/index";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <SideNavbar />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
