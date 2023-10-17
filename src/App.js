import React from "react";
import SideNavbar from "../src/Navbar/Leftsidebar/SideNavbar";
import { Routes, Route } from "react-router-dom";
import Login from "../src/Loginform/Loginform";
import ProtectedRoutes from "./Component/ProductedRoutes/index";
import { AuthProvider } from "./Component/Helper/Context/AuthContext";
import "./index.css";
import Businessprofile from "./Customer/BusinessProfile";
import Customer from "./Customer/Customer";
import AddCustomer from "./Customer/AddCustomer";

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
         <Route path="/businessprofile" element={<Businessprofile />} />
        <Route path="/customer" element={<Customer />} /> 
         <Route path = "/addcustomer" element={<AddCustomer/>} />

      </Routes>
      </AuthProvider>
    </>
  );
}
export default App;
