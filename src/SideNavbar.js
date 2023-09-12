import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './SideNavbar.css';
import logo from './images/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Dashboard from './Pages/Dashboard';
import Customer from './Pages/Customer';
import Employee from './Pages/Employee';
import Projectmonitor from './Pages/Projectmonitor';
import Createadmin from './Pages/Createadmin';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import profile from './images/Profile.png';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';




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
  
// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//  ({ theme, open }) => ({
//      flexGrow: 1,
//      padding: theme.spacing(3),
//      transition: theme.transitions.create('margin', {
//          easing: theme.transitions.easing.sharp,
//          duration: theme.transitions.duration.leavingScreen,
//      }),
//      marginLeft: `-${drawerWidth}px`,
//      ...(open && {
//          transition: theme.transitions.create('margin', {
//              easing: theme.transitions.easing.easeOut,
//              duration: theme.transitions.duration.enteringScreen,
//          }),
//          marginLeft: 0,
//      }),
//  }),
// );
// const AppBar = styled(MuiAppBar, {
//  shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//  transition: theme.transitions.create(['margin', 'width'], {
//      easing: theme.transitions.easing.sharp,
//      duration: theme.transitions.duration.leavingScreen,
//  }),
//  ...(open && {
//      width: `calc(100% - ${drawerWidth}px)`,
//      marginLeft: `${drawerWidth}px`,
//      transition: theme.transitions.create(['margin', 'width'], {
//          easing: theme.transitions.easing.easeOut,
//          duration: theme.transitions.duration.enteringScreen,
//      }),
//  }),
// }));
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
export default function SideNavbar() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [menudata, setmenudata] = useState("Dashboard");
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <div>
                <Toolbar>
                    <IconButton
                        color="dark"
                        aria-label=""
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </div>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <div className='logo-img'>
                        <img src={logo} alt='logo.png' className='logo-img' />
                    </div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <h4 className='admin'>User Panel</h4>
               
                <List style={{ paddingTop: "20px" }}>
                    <ListItem disablePadding sx={{ display: 'block' }} className='section' onClick={() => setmenudata("Dashboard")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 1.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" className='dashboard-content' style={{ fontcolor: '10px' }} />

                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} className='section' onClick={() => setmenudata("Customer")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 1.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Customer Database" className='side-content' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} className='section' onClick={() => setmenudata("Employee")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 1.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <WorkIcon />
                            </ListItemIcon>
                            <ListItemText primary="Employee Database" className='side-content'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} className='section' onClick={() => setmenudata("Projectmonitor")}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 1.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <DeviceHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="Project Monitoring" className='side-content'/>
                        </ListItemButton>
                    </ListItem>

                    
                <h4 className='admin'>No Admin created</h4>

                <div className="adm-btn">
                <Button 
      variant=""
      color="primary"
      style={{
        width: '190px',
        height: '60px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '30px',
            }}
    >
        <StyledBadge
        overlap="circular"
        
        
      >
        <Avatar img src={profile} alt="Profile.png"  />
      </StyledBadge>
      
      <Box>
      
      <div className="title">
        <Typography className="subtitle">Subash</Typography>
        <Typography className="body2">Admin</Typography>
        </div>
      </Box>
      <MoreVertIcon className="icon1" />
                 </Button>
                 <Button
      variant=""
      color="primary"
      style={{
        width: '190px',
        height: '60px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '30px',
            }}
    >
       <StyledBadge
        overlap="circular"
    
      >
        <Avatar img src={profile} alt="Profile.png"  />
      </StyledBadge>
      <Box>
      
      <div className="title">
        <Typography className="subtitle">Subash</Typography>
        <Typography className="body2">Admin</Typography>
        </div>
      </Box>
      <MoreVertIcon className="icon1" />
                       </Button>
              
                <Button
      variant=""
      color="primary"
      style={{
        width: '190px',
        height: '60px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '30px',
            }}
    >
      <StyledBadge
        overlap="circular"
        
        variant="dot"
      >
        <Avatar img src={profile} alt="Profile.png"  />
      </StyledBadge>
      <Box>
      
      <div className="title">
        <Typography className="subtitle">Subash</Typography>
        <Typography className="body2">Admin</Typography>
        </div>
      </Box>
      <MoreVertIcon className="icon1" />
                             </Button>
               
    </div>
                    
                    
                    <ListItem disablePadding sx={{ display: 'block' }} className='section1' onClick={() => setmenudata("Createadmin")}>
                        <ListItemButton
                            sx={{
                                minHeight: 20,
                                justifyContent: open ? 'initial' : 'center',
                                px: 1.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <ControlPointIcon />
                            </ListItemIcon>
                            <ListItemText primary="Create Admin" className='side-content' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {menudata == "Dashboard" && <Dashboard />}
                {menudata == "Customer" && <Customer />}
                {menudata == "Employee" && <Employee />}
                {menudata == "Projectmonitor" && <Projectmonitor />}
                {menudata == "Createadmin" && <Createadmin />}
            </Box>
        </Box>
    );
}