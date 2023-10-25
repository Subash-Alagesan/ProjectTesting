import * as React from "react";
import { useAuth } from "../../Component/Helper/Context/AuthContext";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import add_alert from "../../Assets/images/add_alert.png";
import account_circle from "../../Assets/images/account_circle.png";
import settings from "../../Assets/images/settings.png";
import super_admin from "../../Assets/images/super_admin.png";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./Rightnavbar.css";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import AddCustomer from "../../Customer/AddCustomer";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddEmployee from "../../Employee/AddEmployee";



const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function RightNavbar() {
  const navigate = useNavigate();
  const {user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const imageUrl = 
   `http://localhost:4070/uploads/images/${user.profile_pic}`
  
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
    <Box>
      <CssBaseline />

      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{
            ...(open && { display: "none" }),
            position: "fixed",
            top: "10px",
            right: "10px",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <DrawerHeader />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
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
            <div className="super_admin">
              <img src={imageUrl} alt="super admin" />
              <h3 className="admin-name">
                <b>{user.name}</b>
              </h3>
              <p className="admin-role">Founder</p>
            </div>
            <div className="database">
              <div>
                <p className="admin-name1">Manage Database</p>
              </div>

              {/* <button className="add-customer-button">
                <div className="button-content">
                  <ControlPointIcon className="icon" />
                  <span className="button-text">Add Customer</span>
                </div>
              </button> */}

<div>
     
      <button className="add-customer-button" onClick={() => handleOpen(<AddCustomer />)}>
                <div className="button-content">
                  <ControlPointIcon className="icon" />
                  <span className="button-text">Add Customer</span>
                </div>
              </button>
     
    </div>

    <button className="add-customer-button" onClick={() => handleOpen(<AddEmployee />)}>
        <div className="button-content">
          <ControlPointIcon className="icon" />
          <span className="button-text">Add Employee</span>
        </div>
      </button>

              {/* <button className="add-customer-button">
                <div className="button-content">
                  <ControlPointIcon className="icon" />
                  <span className="button-text">Add Employee</span>
                </div>
              </button> */}

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
          {/* <Grid sx={style}>
           
              {modalContent}
           
          </Grid> */}
          <Grid item  xs={12} sm={12} md={6} lg={6} style={gridStyle}>
          
          {modalContent}
         
        </Grid>
        </Fade>
      </Modal>


              <button className="add-customer-button">
                <div className="button-content">
                  <ControlPointIcon className="icon" />
                  <span className="button-text">Add Project</span>
                </div>
              </button>
            </div>

            <div className="logout-button1">
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
