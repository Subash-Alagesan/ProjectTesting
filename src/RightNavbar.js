import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
// import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import './Layout.css';
import settings from './images/settings.png';
import add_alert from './images/add_alert.png';
import account_circle from './images/account_circle.png';
import super_admin from './images/super_admin.png';



const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen
//       }),
//       marginRight: 0
//     })
//   })
// );

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start"
}));

export default function RightNavbar() {
  const handleLogout = () => {
    // Implement your logout logic here
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" , border: "none"}}>
      <CssBaseline />
      <Typography variant="h6" noWrap sx={{ flexGrow: 20 }} component="div">
           
           </Typography>

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>

      {/* <Main open={open}>
      
       
       
      </Main> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth
          }
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
        <div className="logo">
        <a href="/#">
          <img src={settings} alt="settings.png" className="settings-img" />
        </a>
        <a href="/#">
          <img src={add_alert} alt="add_alert.png" className="add_alert-img" />
        </a>
        <a href="/#">
          <img
            src={account_circle}
            alt="account_circle.png"
            className="account_circle-img"
          />
        </a>
      </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
       
        <div className="right-navbar-container">
      
      <div className="super_admin">
        <img src={super_admin} alt="super admin" />
        <h3 className="admin-name">
          <b>Peter Prem Kumar</b>
        </h3>
        <p className="admin-role">Founder</p>
      </div>
<div className="database">
      <div>
        <p className="admin-name1">Manage Database</p>
      </div>

      <button className="add-customer-button">
        <div className="button-content">
          <ControlPointIcon className="icon" />
          <span className="button-text">Add Customer</span>
        </div>
      </button>

      <button className="add-customer-button">
        <div className="button-content">
          <ControlPointIcon className="icon" />
          <span className="button-text">Add Employee</span>
        </div>
      </button>

      <button className="add-customer-button">
        <div className="button-content">
          <ControlPointIcon className="icon" />
          <span className="button-text">Add Project</span>
        </div>
      </button>
      </div>

      <button className="logout-button" onClick={handleLogout}>
        <ExitToAppIcon className="logout-icon" />
        Logout
      </button>
     </div>

       
      </Drawer>
    </Box>
  );
}
