import React from 'react';
import { useState } from 'react';
import logo from './images/logo.png';
import './Loginform.css';
import settings from './images/settings.png';
import add_alert from './images/add_alert.png';
import account_circle from './images/account_circle.png';
import incan from './images/incan.png';
import Grid from '@mui/material/Grid';
import Registerform from './Registerform';
import Register from './Register'
import { Button } from '@mui/material';

function Loginform() {

    const [openPopup, setOpenPopup] = useState(false);

    return (

        <>
            <div className='login'>

                <Grid container spacing={2}>
                    <Grid xs={3}>
                        <img src={incan} alt='incan.png' className='incan-img' />
                    </Grid>
                    <Grid xs={9} className='setting'>
                        <img src={settings} alt="settings.png" className='settings-img' />
                        <img src={add_alert} alt="add_alert.png" className='add_alert-img' />
                        <img
            src={account_circle}
            alt="account_circle.png" className='account-img' />
                        <div className='plus'>

                            <Button variant="contained" href="#contained-buttons" className='plus-img' onClick={() => setOpenPopup(true)} >
                                Register
                            </Button>
                        </div>


                    </Grid>
                </Grid>

                <div className='form_container'>
                    <form className='login-form'>
                        <img src={logo} alt='logo.png' className='logo-img' style={{ height: "30px", width: "55px" }} />
                        <h3 className='text-center'>Incandescent Login</h3>
                        <div className='mb-2'>

                            <label htmlFor='Text' className='email'>
                                <strong>
                                    User Name
                                </strong>
                            </label>
                            <br></br>
                            <input className='form-control' />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='Password' className='Password'>
                                <strong>Password</strong>
                            </label>
                            <br></br>
                            <input type='Password' className='form-control' />
                        </div>
                        <div className='forgot-password'>
                            <a href='/'>Forgot Password?</a>
                        </div>
                        <div className='login-btn'>
                            <button className='d-grid'>
                                <h6 className='log'>Login</h6>
                            </button>
                        </div>
                    </form>
                </div>
                <Registerform />
            </div>
            <Registerform openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <Register />

            </Registerform>
        </>



    );
}
export default Loginform;