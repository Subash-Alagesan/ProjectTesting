import React from "react";
import SideNavbar from "../src/Navbar/Leftsidebar/SideNavbar";
import { Routes, Route } from "react-router-dom";
import Login from "../src/Loginform/Loginform";
import ProtectedRoutes from "./Component/ProductedRoutes/index";
import { AuthProvider } from "./Component/Helper/Context/AuthContext";
import "./index.css";

function App() {
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}

export default App;
