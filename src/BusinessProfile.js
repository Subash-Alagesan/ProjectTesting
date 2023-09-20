import * as React from 'react';
import{ useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import contact_page from './images/contact_page.png';
import  './Businessprofile.css';
import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import super_admin from './images/super_admin.png';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));





export default function RowAndColumnSpacing() {

  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    // You can fetch and set the values from your data source here
    // For example:
    // const data = fetchDataFromApi();
    // setName(data.name);
    // setExperience(data.experience);
    // setDesignation(data.designation);
    // Enable edit mode
    setIsEditing(true);
  };
  const handleUpdateClick = () => {
    // Perform your update logic here
    // Disable edit mode
    setIsEditing(false);
  };

  const [businessname, setBusinessname] = useState('');
  const [profilename, setBusinessname] = useState('');

  
  
  return (
    <Box sx={{ backgroundColor: "blueviolet", paddingTop: 2, paddingLeft: 3, paddingRight: 3 }}>
  <Grid container  rowSpacing={2} columnSpacing={{ xs: 5, sm: 5, md: 3 }} >
    <Grid item xs={12}>
      <Item>

<div className='header'>
  <div className='header-img'>
  <img
            src={contact_page}
            alt="contact_page.png"
            className='img'
          />
        <div className="name-container">
    <h1 className='profile'><b>Business Profile</b></h1>
    
  </div>
  {/* <div className='pname'>
  Profile Name:
  </div> */}
  <div>
        <label>Profile Name:</label>
        {isEditing ? (
          <input
            type="text"
            value={profilename}
            onChange={(e) => setBusinessname(e.target.value)}
          />
        ) : (
          <span>{profilename}</span>
        )}
      </div>

  {/* <div className="Edit-btn">
            <Button className="btn1" variant="contained" size="small" endIcon={<CreateOutlinedIcon />}>
              Edit
            </Button>
          </div> */}

{isEditing ? (
        <button onClick={handleUpdateClick}>Update</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
  </div>
  
</div>
      </Item>
    </Grid>

    {/* End of the header */}
    
    <Grid item xs={12}>
      <Item>
       <div className='body'>
      <div className="super_admi1">
        <img src={super_admin} alt="super admin" />
        </div>

<div>
<h1 className='ename'>Enter Name</h1>
{/* <h2 className='bname'>Business Name:</h2> */}
<div>
        <label>Business Name:</label>
        {isEditing ? (
          <input
            type="text"
            value={businessname}
            onChange={(e) => setBusinessname(e.target.value)}
          />
        ) : (
          <span>{businessname}</span>
        )}
      </div>
<p className='dname'>Enter Details</p>
</div>

<div className='btype'>
<h1 className='ename'>Business Type</h1>
<p className='dname'>Instant Kitchen</p>
</div>

        </div>
        <div className='divider'>
        <hr
            style={{
              background: "#84828A",
              height: "2px",
            }}
          />
        
        </div>
        
      </Item>
    </Grid>
   
  </Grid>
</Box>


  );
}

