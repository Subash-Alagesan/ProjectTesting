import React, { useState } from 'react';
import SideNavbar from './SideNavbar';
import Grid from '@mui/material/Grid';
import MainContent from './MainContent';
import RightNavbar from './RightNavbar';
import Customer from './Pages/Customer'; 
import Employee from './Pages/Employee';

function App() {
    const [renderedComponents, setRenderedComponents] = useState([]);

  const handleRenderComponents = (componentNames) => {
    setRenderedComponents(componentNames);
};
  return (
    <div>
    <SideNavbar onRenderComponents={handleRenderComponents} />
    <Grid container>
      <Grid item sm={8}>
        {renderedComponents.includes('MainContent') && <MainContent />}
        {renderedComponents.includes('Customer') && <Customer />}
        {renderedComponents.includes('Employee') && <Employee />}
      </Grid>
      
    </Grid>
    <Grid item sm={2}>
         <RightNavbar />
       </Grid>
  </div>
  );
}

export default App;
