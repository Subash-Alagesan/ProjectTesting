import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// import CircularProgress from '@mui/material/CircularProgress';
import './Dashboard.css'
import tactic from '../Component/Images/tactic.png'
import Business from '../Component/Images/business_center.png'
import group from '../Component/Images/group.png'
import "bootstrap/dist/css/bootstrap.min.css";
import CircularProgress from '@mui/joy/CircularProgress';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function FullWidthGrid() {
  return (
    <Grid container spacing={3} className='grid-container'>
      <Grid item xs={8} sm={9} md={6} lg={6} >
        <Item className='grid-content'>
          <h4 className='good-mrng-content'>
            Hi Sir, Good Morning.
          </h4>
          <p className='today-top'>
            Today’s top priorities
          </p>
          <div className='order-list'>
            <ol >
              <li>You have appointment with KSR Institution manager
              </li>
              <li > Schedule Ad for Webinar (11-09-2023)
              </li>
              <li >
                You have appointment with KSR Institution manager
              </li>
            </ol>
          </div>
        </Item>
      </Grid>
      <Grid item xs={8} sm={9} md={6} lg={6}  >
        <Item className='grid-content'>
          <p className='todaytop-content1'>
            Today’s other priorities
          </p>
          <div className='order-list'>
            <ol >
              <li>You have appointment with KSR Institution manager
              </li>
              <li > Schedule Ad for Webinar (11-09-2023)
              </li>
              <li >
                You have appointment with KSR Institution manager
              </li>
            </ol>
          </div>
        </Item>
      </Grid>
      <Grid item xs={8} sm={9} md={4} lg={4} >
        <Item id='tactic-content' >
          <div style={{ display: "flex" }}>
            <div><img src={tactic} alt='tactic-img' className='tactic-img'/></div>
            <div> <h3 className='tactic1'> Project Monitoring</h3></div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <h4 className='tactic2'> Current Projects</h4>
              <p className='project-count'><strong>2</strong></p>
            </div>
            <div className='progress-icon'>
              <CircularProgress size="lg"  color="success" determinate value={75.67}>
                75%</CircularProgress>
            </div>
          </div>
        </Item>
      </Grid>
      <Grid item xs={8} sm={10} md={4} lg={4}>
        <Item id='business-content' >
          <div style={{ display: "flex" }}>
            <div><img src={Business} alt='tactic-img' className='tactic-img' /></div>
            <div> <h3 className='tactic1'>Employee Database</h3></div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <h4 className='tactic2'> Total Employee</h4>
              <p className='project-count'><strong>2</strong></p>
            </div>
            <div className='progress-icon'>
              <CircularProgress size="lg" color="danger" determinate value={25.67}>
                25%</CircularProgress>
            </div>
          </div>
        </Item>
      </Grid>
      <Grid item xs={8} sm={10} md={4} lg={4}>
        <Item id='customer-content'>
          <div style={{ display: "flex" }} className='customer-content1'>
            <div><img src={group} alt='tactic-img' className='tactic-img' /></div>
            <div> <h3 className='tactic1'> Customer Database</h3></div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <h4 className='tactic2'>Total Customers</h4>
              <p className='project-count'><strong>2</strong></p>
            </div>
            <div className='progress-icon' color='#6425FE'>
              <CircularProgress size="lg"  color="primary" determinate value={52.67}>
                52%</CircularProgress>
            </div>
          </div>
        </Item>
      </Grid>
      <Grid item xs={8} sm={10} md={6} lg={6}>
        <Item className='emp-data'>
          <div className='customer-leftside'>
            <div className='Customer-db'>
              <h4 className='Customer-db1'> Customer Database</h4>
              <h4 className='Customer-db2'>See More</h4>
            </div >
            <div className='CircularProgress' >
              <div >
                <CircularProgress size="lg" color="danger" determinate value={15.67}>
                  15%</CircularProgress>
                <h4 className='total-content'>Total</h4>
              </div>
              <div>
                <CircularProgress size="lg"  color="success" determinate value={55.67}>
                  55%</CircularProgress>
                <h4 className='ourcustomer-content'>Our Customers</h4>
              </div>
              <div>
                <CircularProgress size="lg" color="primary" determinate value={85.67}>
                  85%</CircularProgress>
                <h4 className='others-content'>Others</h4>
              </div>
            </div>
          </div>
        </Item>
      </Grid>
      <Grid item xs={8} sm={10} md={6} lg={6}>
        <Item className='emp-data'>
          <div>
            <div className='Customer-db'>
              <div> <h4 className='Customer-db1'> Employee Database</h4></div>
              <div> <h4 className='Customer-db3'>See More</h4></div>
            </div >
            <div className='CircularProgress' >
              <div>
                <CircularProgress size="lg" color="danger" determinate value={45.67}>
                  45%</CircularProgress>
                <h4 className='total-content'>Total</h4>
              </div>
              <div>
                <CircularProgress size="lg" color="success" determinate value={75.67}>
                  75%</CircularProgress>
                <h4 className='ourcustomer-content'>Our Customers</h4>
              </div>
              <div>
                <CircularProgress size="lg" determinate value={25.67}>
                  25%</CircularProgress>
                <h4 className='others-content'>Others</h4>
              </div>
            </div>
          </div>
        </Item>
      </Grid>
      <Grid item xs={8} sm={10} md={6} lg={6} >
        <Item>
          <h4 className='footer-monitor'>Project Monitoring</h4>
          <h4 className='IBMS-project'>IBMS Project</h4>
          <div style={{ display: "flex" }}>
            <div>
              <div className='project-progress'>
                <h4 >
                  Progress
                </h4>
                <h4>
                  Team
                </h4>
                <h4>
                  Team Lead
                </h4>
              </div>
            </div>
            <div className='project-progress1'>
              <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
              </div>
              <br></br>
              <div class="progress">
                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="25" style={{ width: "95%" }} aria-valuemin="0" aria-valuemax="100">95%</div>
              </div>
              <br></br>
              <div ><h5 className='lead-name'>Revathi Selvaraj</h5></div>
            </div>
          </div>
        </Item>
      </Grid>
      <Grid item xs={8} sm={10} md={6} lg={6} >
        <Item>
          <h4 className='see-more'>See More</h4>
          <h4 className='saloon-project'>Salon Management System Project</h4>
          <div style={{ display: "flex" }}>
            <div>
              <div className='project-progress'>
                <h4>
                  Progress
                </h4>
                <h4>
                  Team
                </h4>
                <h4>
                  Team Lead
                </h4>
              </div>
            </div>
            <div className='project-progress1'>
              <div class="progress ">
                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" style={{ width: "75%" }} aria-valuemin="0" aria-valuemax="100">75%</div>
              </div>
              <br></br>
              <div class="progress">
                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="45" style={{ width: "45%" }} aria-valuemin="0" aria-valuemax="100">45%</div>
              </div>
              <br></br>
              <div><h5 className='lead-name'>Revathi Selvaraj</h5></div>
            </div>
          </div>
        </Item>
      </Grid>
    </Grid >
  );
}