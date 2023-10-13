import React from 'react';
import '../Customer/Customer.css';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import assignment from '../Assets/images/assignment_ind.png'
import group from '../Assets/images/group.png';
import contact from '../Assets/images/contact_page.png'
import badge from '../Assets/images/badge.png'
import personaddd from '../Assets/images/person_add.png'
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import Pagination from '@mui/material/Pagination';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';



const columns = [

  {
    field: 'Name',
    headerName: 'Name',
    width: 180,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={params.row.PhotoURL} style={{ marginRight: '8px' }} />
        {params.row.Name}
      </div>
    ),
  },
  {
    field: 'contact',
    headerName: 'Contact Number',
    type: 'contact number',
    width: 150,
  },
  {
    field: 'Business',
    headerName: 'Business',
    sortable: true,
    width: 150,
  },
  { field: 'Place', headerName: 'Place', width: 160 },
  // {
  //   field: 'View Details', headerName: 'View Details', width: 160,
  //   renderCell: (params) => (

  //     <Button variant="contained" href="#contained-buttons" size='small' style={{background:"#6425FE"}}>
  //       view
  //     </Button>
  //   ),
  // },
  {
    field: 'View Details',
    headerName: 'View Details',
    width: 120,
    renderCell: (params) => (
      
        <Button variant="contained" size='small' style={{ background: "#6425FE" }}>
          View
        </Button>
     
    ),
  }
  
];

const rows = [
  { id: 1, Name: 'Snow', contact: 9687453214, PhotoURL: 'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png', Business: "Finance", Place: "karur" },
  { id: 2, Name: 'Lannister', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkoXDY3bU7DweqPS20T11LyFjcXgGiCIxtSt6Ge7Y6GKU1dzLw9PFZg6opGSmlcdVwVs&usqp=CAU', Business: "Marketing", Place: "Erode", ViewDetails: "view" },
  { id: 3, Name: 'Lannister', contact: 9687453214, PhotoURL: 'https://i.pinimg.com/736x/ea/6c/93/ea6c931c623881ecd29955db118c7742.jpg', Business: "Mobile shop", Place: "Trichy" },
  { id: 4, Name: 'Stark', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPgBy055W8Fv89RLVNlBPcJTJBiim5LToWpujXkofvROJaOIMBteTlj3GA3LXjOjG3Yc&usqp=CAU', Business: "Photo Studio", Place: "Coimbatore" },
  { id: 5, Name: 'Targaryen', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIh4Nokge-Nr94TMgcEjnC4KLgkwi2hequV-RvTaCZ1w10xYwlfJknU4yL5jUJ9YiQf2Y&usqp=CAU', Business: "Banking", Place: "Chennai" },
  { id: 6, Name: 'Melisandre', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleGHIC0JtgiP5cWOR5HaTvIP4ENhviiE-flyDurOIt31sYa6RmqOq7hECn6G1AJmVwqo&usqp=CAU', Business: "Real-estate", Place: "Madurai" },
  { id: 7, Name: 'Clifford', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrhUb7VQWOQJGKQSBG-HdqODWBe8WhgZsHi558ATMjy-a2MYFDSwwNCBVrkHInuL6M5U&usqp=CAU', Business: "Hotel", Place: "Namakal" },
  { id: 8, Name: 'Frances', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj6f1TEt2umBEnBStuEAIHnuGRP3qGjmdyug&usqp=CAU', Business: "Engineer", Place: "Dindukal" },
  { id: 9, Name: 'Roxie', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVGbMFDRqo5S1_EQf_yoTm5yNCmQaqvVS1hn_QiKt9n6xHCUAMj_bD82D87fyuYwA7UQ&usqp=CAU', Business: "Driver", Place: "Palani" }
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    // width: '50%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      height: "16px"
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Customer() {
  return (

      <Grid container spacing={2} className='customerdb-container'>
        <Grid item xs={12} md={12} lg={12}   >
          <Item  >
            <div className='customerdb-title'  >
              <div><img src={group} alt='' className='customerdb-container-group-img' /></div>
              <div> <h5 className='Customerdb-heading'>Customer Database</h5></div>

            </div>
            <Grid container spacing={1} className='customerdb-details'>
              <Grid item xs={12} md={12} lg={3}>
           
                  <div className='total-item1'>
                    <div><img src={contact} alt='contact-img' className='customerdb-container-contact-img' /></div>
                    <div> <h5 className='Customerdb-totalCustomer'>Total Customers</h5>
                      <p className='Total-content'>22</p>
                    </div>
                  </div>
              
              </Grid>
              <Grid item xs={12} md={12} lg={3} s>
           
                  <div className='total-item1'>
                    <div><img src={assignment} alt='assignment-img' className='customerdb-container-assignment-img' /></div>
                    <div> <h5 className='Customerdb-ourCustomer'>Our Customers</h5>
                      <p className='Total-content'>8</p>
                    </div>

                  </div>
                
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
             
                  <div className='total-item1'>
                    <div><img src={badge} alt='' className='customerdb-container-badge-img' /></div>
                    <div> <h5 className='Customerdb-otherCustomer'>Other Customers</h5>
                      <p className='Total-content'>14</p>
                    </div>
                  </div>
            
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                     <div className='total-item1'>
                    <div><img src={personaddd} alt='' className='customerdb-container-personadd-img' /></div>
                    <div> <h5 className='Customerdb-newlyadded'>Newly Added</h5>
                      <p className='Total-content'>2</p>
                    </div>
                  </div>
                
              </Grid>
            </Grid>
          </Item>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Item >
            <div  className='allcustomer-header' >
              <div><h4 className='All-Customers'>All Customers</h4></div>
              <div className='Search-content' >
                <Search className='Search-bar' >
                 
                    <SearchIcon />
                
                  <StyledInputBase
                    placeholder="Search Customers"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </div>

            <div  className="Form-Control">
            <FormControl sx={{ m: 1.5, minWidth: 120 }} size="small" style={{
                background: "#F7F6F9", borderRadius: "8px"
              }}>
                <InputLabel  style={{
                  fontSize: "15px"

                }}>Short By:</InputLabel>

                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"

                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            </div>


             <div className='Datagrid-table' >
             <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5, 10]}
                checkboxSelection

              /> 
              <Pagination className='pagination-content' count={5} color="secondary" />
            </div> 

          </Item>
        </Grid>
      </Grid>

  );
}
