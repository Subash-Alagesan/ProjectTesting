import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNavbar from '../src/Navbar/Leftsidebar/SideNavbar';
import Grid from '@mui/material/Grid';
import MainContent from '../src/MainDashboard/MainContent.js';
import RightNavbar from '../src/Navbar/Rightsidebar/RightNavbar';
import Customer from '../src/Customer/Customer'; 
import Employee from '../src/Employee/Employee';


function App() {
  const [renderedComponents, setRenderedComponents] = useState([]);

  const handleRenderComponents = (componentNames) => {
    setRenderedComponents(componentNames);
  };

  return (
    <Router>
     
      <Grid item sm={2}>
      <SideNavbar  onRenderComponents={handleRenderComponents} />
      </Grid>
        
      
          <Grid item sm={8}>
            <Routes>
              <Route
                path="/"
                element={
                  renderedComponents.includes("MainContent") && <MainContent />
                }
              />
              <Route
                path="/customer"
                element={
                  renderedComponents.includes("Customer") && <Customer />
                }
              />
              <Route
                path="/employee"
                element={
                  renderedComponents.includes("Employee") && <Employee />
                }
              />
            </Routes>
          </Grid>
          <Grid item sm={2}>
            <RightNavbar />
          </Grid>
        
    
    </Router>
  );
}

export default App;