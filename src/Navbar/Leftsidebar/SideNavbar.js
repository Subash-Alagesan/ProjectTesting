import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import profile from '../../Assets/images/Profile.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import '../Leftsidebar/SideNavbar.css';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Drawer from '@mui/material/Drawer';
import logo from '../../Assets/images/logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import RightNavbar from '../Rightsidebar/RightNavbar';
import Employee from '../../Employee/Employee';
import Customer from '../../Customer/Customer';
import MainContent from '../../MainDashboard/MainContent';
import CustomerNavbar from '../../Customer/CustomerNavbar';
import EmployeeNavbar from '../../Employee/EmployeeNavbar';
import santhosh from '../../Assets/images/santhosh.jpeg';



const drawerWidth = 240;
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));




const SideNavbar = () => {
 
  


  const [clickedButton, setClickedButton] = useState(<MainContent />);
  
  const [grid3Component, setGrid3Component] = useState(<RightNavbar />);


  const handleHomeClick = () => {
    setClickedButton(<MainContent />);
    setGrid3Component(<RightNavbar />);
  };

  const handleContactClick = () => {
    setClickedButton(<Customer />);
    setGrid3Component(<CustomerNavbar />);
    
  };

  const handleAboutClick = () => {
    setClickedButton(<Employee />);
    setGrid3Component(<EmployeeNavbar />);
  };

  const handleProjectClick = () => {
    setClickedButton("Project Monitoring");
  };

  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  return (

    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {/* Content for the first grid */}

          <Box sx={{ display: "flex" }} >
            <CssBaseline />
            <div>
              <Toolbar>
                <IconButton
                  color="dark"
                  aria-label=""
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: "none" }) }}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </div>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              
              <DrawerHeader>
              
                <div className="logo-img">
                  <img src={logo} alt="logo.png" className="logo-img" />
                </div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              
              <h4 className="admin">User Panel</h4>
             

              <div className="dashboard-btn">
                <button className="add-customer-button1" onClick={handleHomeClick}>
                  <div className="button-content1">
                    <DashboardIcon />
                    <span className="button-text1">Dashboard</span>
                  </div>
                </button>

                <button className="add-customer-button1" onClick={handleContactClick}>
                  <div className="button-content1">
                    <PeopleAltIcon />
                    <span className="button-text1">Customer Database</span>
                  </div>
                </button>

                <button className="add-customer-button1" onClick={handleAboutClick}>
                  <div className="button-content1">
                    <WorkIcon />
                    <span className="button-text1">Employee Database</span>
                  </div>
                </button>

                <button className="add-customer-button1" onClick={handleProjectClick}>
                  <div className="button-content1">
                    <DeviceHubIcon />
                    <span className="button-text1">Project Monitoring</span>
                  </div>
                </button>
              </div>

              <List >
                <h4 className="admin1">No Admin created</h4>
                <div className="adm-btn">
                  <Button
                    variant=""
                    color="primary"
                    style={{
                      width: "190px",
                      height: "60px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginLeft: "30px",
                    }}
                  >
                    <StyledBadge overlap="circular">
                      <Avatar img src={santhosh} alt="santhosh.jpg" />
                    </StyledBadge>

                    <Box>
                      <div className="title">
                        <h1 className="subtitle">Santhosh</h1>
                        <p className="body2">Front-end</p>
                      </div>
                    </Box>
                    <MoreVertIcon className="icon1" />
                  </Button>
                  <Button
                    variant=""
                    color="primary"
                    style={{
                      width: "190px",
                      height: "60px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginLeft: "30px",
                    }}
                  >
                    <StyledBadge overlap="circular">
                      <Avatar img src={profile} alt="Profile.png" />
                    </StyledBadge>
                    <Box>
                      <div className="title">
                        <h1 className="subtitle">Subash</h1>
                        <p className="body2">Admin</p>
                      </div>
                    </Box>
                    <MoreVertIcon className="icon1" />
                  </Button>

                  <Button
                    variant=""
                    color="primary"
                    style={{
                      width: "190px",
                      height: "60px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginLeft: "30px",
                    }}
                  >
                    <StyledBadge overlap="circular" variant="dot">
                      <Avatar img src={profile} alt="Profile.png" />
                    </StyledBadge>
                    <Box>
                      <div className="title">
                        <h1 className="subtitle">Subash</h1>
                        <p className="body2">Admin</p>
                      </div>
                    </Box>
                    <MoreVertIcon className="icon1" />
                  </Button>
                </div>


              </List>
            </Drawer>

          </Box>


        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          
          {clickedButton}
         
        </Grid>
        <Grid item xs={2}>
          
          <div >
          {grid3Component}
          </div>
        </Grid>
      </Grid>
    </div>
   
  );
};

export default SideNavbar;

