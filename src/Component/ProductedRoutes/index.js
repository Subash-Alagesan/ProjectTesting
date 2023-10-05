import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Helper/Context/AuthContext"; // Import your authentication context

const ProtectedRoutes = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoutes;
