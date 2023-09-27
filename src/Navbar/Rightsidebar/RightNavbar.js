import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import add_alert from '../../Assets/images/add_alert.png';
import account_circle from '../../Assets/images/account_circle.png';
import settings from '../../Assets/images/settings.png';
import super_admin from '../../Assets/images/super_admin.png';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './Rightnavbar.css';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
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
    <Box >
      <CssBaseline />
      
        <Toolbar>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{
              ...(open && { display: 'none' }),
              position: 'fixed',
              top: '10px', 
              right: '10px',
            }}
          >
            <MenuIcon    />
          </IconButton>
        </Toolbar>
    
    
        <DrawerHeader />
    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <div className="logo">
        
        <a href="/#">
          <img
            src={settings}
            alt="settings.png"
            className="settings1-img"
          />
        </a>

        <a href="/#">
          <img
            src={add_alert}
            alt="add_alert.png"
            className="add_alert1-img"
          />
        </a>
        <a href="/#">
          <img
            src={account_circle}
            alt="account_circlet.png"
            className="account_circle1-img"
          />
        </a>
        
      </div>

        </DrawerHeader>
        <Divider />
        <List>
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

      <div className='logout-button1'>
      <button className="logout-button" onClick={handleLogout}>
        <ExitToAppIcon className="logout-icon" />
        Logout
      </button>
</div>
      
     </div>

        </List>
        
      </Drawer>
    </Box>
  );
}