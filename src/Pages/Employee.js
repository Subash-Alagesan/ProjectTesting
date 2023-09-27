
import React from 'react';
import './Employee.css';
import { Grid } from '@mui/material';
import assignment from '../images/assignment_ind.png'
import group from '../images/group.png';
import contact from '../images/contact_page.png'
import badge from '../images/badge.png'
import personaddd from '../images/person_add.png'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
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
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



const columns: GridColDef[] = [

  {
    field: 'Name',
    headerName: 'Name',
    width: 200,
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
    width: 180,
  },
  {
    field: 'Email',
    headerName: 'Email',
    sortable: true,
    width: 200,
  },
  { field: 'Experience', headerName: 'Experience', width: 160 },
  {
    field: 'View Details', headerName: 'View Details', width: 160,
    renderCell: (params) => (

      <Button variant="contained" href="#contained-buttons" size='small' style={{background:"#6425FE"}}>
        view
      </Button>
    ),
  },
];

const rows = [
  { id: 1, Name: 'Snow', contact: 9687453214, PhotoURL: 'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png', Email: "samdonaldand@gmail.com", Experience: "7+(dev)", ViewDetails: "view" },
  { id: 2, Name: 'Lannister', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkoXDY3bU7DweqPS20T11LyFjcXgGiCIxtSt6Ge7Y6GKU1dzLw9PFZg6opGSmlcdVwVs&usqp=CAU', Email: "divyadharshini881@gmail.com", Experience: "5+(dev)", ViewDetails: "view" },
  { id: 3, Name: 'Lannister', contact: 9687453214, PhotoURL: 'https://i.pinimg.com/736x/ea/6c/93/ea6c931c623881ecd29955db118c7742.jpg', Email: "samdonaldand@gmail.com", Experience: "5+(dev)", ViewDetails: "view" },
  { id: 4, Name: 'Stark', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPgBy055W8Fv89RLVNlBPcJTJBiim5LToWpujXkofvROJaOIMBteTlj3GA3LXjOjG3Yc&usqp=CAU', Email: "samdonaldand@gmail.com", Experience: "6+(dev)", ViewDetails: "view" },
  { id: 5, Name: 'Targaryen', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIh4Nokge-Nr94TMgcEjnC4KLgkwi2hequV-RvTaCZ1w10xYwlfJknU4yL5jUJ9YiQf2Y&usqp=CAU', Email: "samdonaldand@gmail.com", Experience: "4+(dev)", ViewDetails: "view" },
  { id: 6, Name: 'Melisandre', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleGHIC0JtgiP5cWOR5HaTvIP4ENhviiE-flyDurOIt31sYa6RmqOq7hECn6G1AJmVwqo&usqp=CAU', Email: "samdonaldand@gmail.com", Experience: "8+(dev)", ViewDetails: "view" },
  { id: 7, Name: 'Clifford', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrhUb7VQWOQJGKQSBG-HdqODWBe8WhgZsHi558ATMjy-a2MYFDSwwNCBVrkHInuL6M5U&usqp=CAU', Email: "Hsamdonaldand@gmail.comotel", Experience: "10+(dev)", ViewDetails: "view" },
  { id: 8, Name: 'Frances', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj6f1TEt2umBEnBStuEAIHnuGRP3qGjmdyug&usqp=CAU', Email: "samdonaldand@gmail.com", Experience: "9+(dev)", ViewDetails: "view" },
  { id: 9, Name: 'Roxie', contact: 9687453214, PhotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVGbMFDRqo5S1_EQf_yoTm5yNCmQaqvVS1hn_QiKt9n6xHCUAMj_bD82D87fyuYwA7UQ&usqp=CAU', Email: "samdonaldand@gmail.com", Experience: "5+(dev)", ViewDetails: "view" },

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

export default function Employee() {
  return (

      <Grid container spacing={2} className='Employeedb-container'>
        <Grid item xs={12} md={12} lg={12}   >
          <Item  >
            <div className='Employeedb-title'  >
              <div><img src={group} alt='' className='Employeedb-container-group-img' /></div>
              <div> <h5 className='Employeedb-heading'>Employee Database</h5></div>

            </div>
            <Grid container spacing={1} className='Employeedb-details'>
              <Grid item xs={9} md={8} lg={3}>
             
                  <div className='total-item1'>
                    <div><img src={contact} alt='contact-img' className='Employeedb-container-contact-img' /></div>
                    <div> <h5 className='Employeedb-totalCustomer'>Total Customers</h5>
                      <p className='Total-content'>22</p>
                    </div>
                  </div>
              
              </Grid>
              <Grid item xs={9} md={8} lg={3} s>
                        <div className='total-item1'>
                    <div><img src={assignment} alt='assignment-img' className='Employeedb-container-assignment-img' /></div>
                    <div> <h5 className='Employeedb-ourCustomer'>Our Customers</h5>
                      <p className='Total-content'>8</p>
                    </div>

                  </div>
               
              </Grid>
              <Grid item xs={9} md={8} lg={3}>
             
                  <div className='total-item1'>
                    <div><img src={badge} alt='' className='Employeedb-container-badge-img' /></div>
                    <div> <h5 className='Employeedb-otherCustomer'>Other Customers</h5>
                      <p className='Total-content'>14</p>
                    </div>
                  </div>
           
              </Grid>
              <Grid item xs={9} md={8} lg={3}>
         
                  <div className='total-item1'>
                    <div><img src={personaddd} alt='' className='Employeedb-container-personadd-img' /></div>
                    <div> <h5 className='Employeedb-newlyadded'>Newly Added</h5>
                      <p className='Total-content'>2</p>
                    </div>
                  </div>
             
              </Grid>
            </Grid>
          </Item>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Item >
            <div  className='allEmployee-header' >
              <div><h4 className='All-Employee'>All Employees</h4></div>
              <div className='Search-content' >
                <Search className='Search-bar' >
                 
                    <SearchIcon />
                
                  <StyledInputBase
                    placeholder="Search Customers"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </div>

              <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{
                background: "#F7F6F9", borderRadius: "8px"
              }}>
                <InputLabel id="demo-select-small-label" style={{
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


             <div className='Datagrid-table'>
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
