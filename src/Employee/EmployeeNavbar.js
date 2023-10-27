import React, { useState, useEffect } from "react";
import axios from "../Component/Axios Base URL/axios";
import { useAuth } from '../Component/Helper/Context/AuthContext';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import add_alert from '../../src/Assets/images/add_alert.png';
import account_circle from '../Assets/images/account_circle.png';
import settings from '../Assets/images/settings.png';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './EmployeeNavbar.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import profile from '../Assets/images/Profile.png';
import Modal from '@mui/material/Modal';
import AddEmployee from "../Employee/AddEmployee";
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';

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
  justifyContent: 'flex-start',
}));

export default function EmployeeNavbar() {
  const {logout} = useAuth();
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  const handleLogout = () => {
    logout();
    navigate("/")
  };
  useEffect(() => {
    // Fetch the list of admins from your backend when the component mounts
    axios
      .get("/api/emp/RecentEmployee") // Replace with your actual API route
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const gridStyle  = {
    position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'1500',
  backgroundColor: '#F7F6F9',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  };
  
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);

  const handleOpen = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  }

  const handleClose = () => {
    setModalContent(null); 
    setIsModalOpen(false);
  }


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
        {/* <Divider /> */}
        <List>
        <div className="right-navbar-container">

        <List >
          
                <h4 className="emp-admin1">Recently Added</h4>
                <div className="emp-adm-btn">
                <List>
                {employees.length > 0 ? (
                  employees.map((employees, index) => (


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
                      <Avatar 
                      img 
                      src={`http://localhost:4070/uploads/images/${employees.profile_pic}`}
                      alt={employees.name} 
                       />
                    </StyledBadge>

                    <Box>
                      <div className="emp-title">
                        <h1 className="empnavbar-subtitle">{employees.name} </h1>
                        <p className="empnavbar-body2">{employees.designation} </p>
                      </div>
                    </Box>
                   
                  </Button>
                   ))
                   ) : (
                     <h4 className="admin1"></h4>
                   )}
                 </List>

                  {/* <Button
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
                        <h1 className="emp-subtitle">Subash</h1>
                        <p className="emp-body2">Admin</p>
                      </div>
                    </Box>
                    
                  </Button> */}

                </div>
                <h4 className="emp-admin1">Recently Viewed </h4>
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
                      <Avatar img src={profile} alt="Profile.png" />
                    </StyledBadge>

                    <Box>
                      <div className="title">
                        <h1 className="emp-subtitle">Subash</h1>
                        <p className="emp-body2">Admin</p>
                      </div>
                    </Box>
                   
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
                        <h1 className="emp-subtitle">Subash</h1>
                        <p className="emp-body2">Admin</p>
                      </div>
                    </Box>
                    
                  </Button>

                </div>



              </List>
      
      
<div className="database">
      <div>
        <p className="admin-name1">Add New Employee</p>
      </div>

      <button className="add-customer-button" onClick={() => handleOpen(<AddEmployee />)}>
        <div className="button-content">
          <ControlPointIcon className="icon" />
          <span className="button-text">Add Employee</span>
        </div>
      </button>

  
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalOpen}>
         
          <Grid item  xs={12} sm={12} md={6} lg={6} style={gridStyle}>
          
          {modalContent}
         
        </Grid>
        </Fade>
      </Modal>

      <div className='logout-button2'>
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