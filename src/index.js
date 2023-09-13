import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SideNavbar from './SideNavbar';
import MainContent from './MainContent';
import RightNavbar from './RightNavbar';
import reportWebVitals from './reportWebVitals';
import Grid from '@mui/material/Grid';
import Loginform from './Loginform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    {/* <Grid container className='grid-index' spacing={2}>
      <Grid item sm={2}>
        <SideNavbar />
      </Grid>
      <Grid item sm={8}>
        <MainContent />
      </Grid>
      <Grid item sm={2}>
        <RightNavbar />
      </Grid>
    </Grid> */}
    <Loginform/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
