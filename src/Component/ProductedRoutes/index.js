import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

let currentTime;
let decoded;

if (localStorage.jobs) {
  const token = localStorage.getItem("ibms");
  decoded = jwt_decode(token);
  console.log(decoded);

  currentTime = Date.now() / 1000;
  console.log(new Date(currentTime), new Date(decoded.exp * 1000));
  console.log(currentTime / 1000);
}

const ProtectedRoutes = ({ children }) => {
  if (!localStorage.ibms || decoded?.exp < currentTime) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoutes;