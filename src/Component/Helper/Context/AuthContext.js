import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "../../Axios Base URL/axios";
import jwt_decode from "jwt-decode";
import SetAuthToken from "../SetAuthToken";
// Create an AuthContext
const AuthContext = createContext();

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user information
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [customerId, setCustomerId] = useState(null);

  // Function to check and set authentication on page load
  const checkAuthentication = () => {
    const token = localStorage.getItem("ibms"); // Update storage key
    if (token) {
      const decoded = jwt_decode(token);
      console.log("Decoded Value is", decoded);
      const currentTime = Date.now() / 1000;
      if (decoded.exp > currentTime) {
        setIsLoggedIn(true);
        SetAuthToken(token);
        setUser(decoded);
      } else {
        setIsLoggedIn(false);
        SetAuthToken(null); // Remove expired token
        setUser(null);
      }
    } else {
      setIsLoggedIn(false);
      SetAuthToken(null);
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuthentication(); // Check authentication on component mount
  }, []);

  // Function to handle user login
  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/loginSuperAdmin", {
        email,
        password,
      });

      const token = response?.data?.AccessToken;

      if (token) {
        localStorage.setItem("ibms", token);
        SetAuthToken(token);
        const decoded = jwt_decode(token);
        setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
        setUser(decoded);
      } else {
        throw new Error("Invalid login credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred while logging in. Please try again later.");
      setIsLoggedIn(false); // Set isLoggedIn to false in case of login failure
      throw error;
    }
  };

  // Function to handle user logout
  const logout = () => {
    localStorage.removeItem("ibms"); // Remove the token from localStorage
    SetAuthToken(null);
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        setUser,
        login,
        logout,
        user,
        error,
        customerId, // Include customerId in the context value
        setCustomerId, // Add a function to set customerId
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
