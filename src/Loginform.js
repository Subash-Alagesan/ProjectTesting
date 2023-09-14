import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import logo from './images/logo.png';
import './Loginform.css';
import incan from './images/incan.png';
import Grid from '@mui/material/Grid';
import Registerform from './Registerform';
import Register from './Register';
import { Button } from '@mui/material';

function Loginform() {

    const [openPopup, setOpenPopup] = useState(false);
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        password: Yup.string()
          .required('Password is required!')
          .min(4, 'Password must be more than 4 characters')
      });

    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
        },
        validationSchema,
        onSubmit: (values) => {
          // Handle the login logic here
          // For demonstration purposes, we'll just log the values
          console.log('Login Successful:', values);
          alert('Login Successful'); // Display a success message
        },
      });

    return (

        <>
            <div className='login'>

                <Grid container spacing={2}>
                    <Grid xs={3}>
                        <img src={incan} alt='incan.png' className='incan-img' />
                    </Grid>
                    <Grid xs={9} className='setting'>
                        {/* <img src={settings} alt="settings.png" className='settings-img' />
                        <img src={add_alert} alt="add_alert.png" className='add_alert-img' />
                        <img
            src={account_circle}
            alt="account_circle.png" className='account-img' /> */}
                        <div className='plus'>

                            <Button variant="contained" href="#contained-buttons" className='plus-img' onClick={() => setOpenPopup(true)} style={{ backgroundColor: '#6425FE', color: 'white' }} >
                                Register
                            </Button>
                        </div>


                    </Grid>
                </Grid>

                <div className='form_container' style={{ display: 'flex', alignItems: 'center', width: '80%'}}>
          <form className='login-form' onSubmit={formik.handleSubmit}>
            <img
              src={logo}
              alt='logo.png'
              className='logo-img'
              style={{ height: '30px', width: '55px' }}
            />
            <h3 className='text-center'>Incandescent Login</h3>
            <div className='mb-2'>
              <label htmlFor='Text' className='email'>
                <strong>User Name</strong>
              </label>
              <br />
              <input
                type='text'
                className='form-control'
                name='username'
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <div className='error-message'>{formik.errors.username}</div>
              )}
            </div>
            <div className='mb-2'>
              <label htmlFor='Password' className='Password'>
                <strong>Password</strong>
              </label>
              <br />
              <input
                type='password'
                className='form-control'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className='error-message'>{formik.errors.password}</div>
              )}
            </div>
            <div className='forgot-password'>
              <a href='/'>Forgot Password?</a>
            </div>
            <div className='login-btn'>
              <button className='d-grid' type='submit'>
                <h6 className='log'>Login</h6>
              </button>
            </div>
          </form>
        </div>
        <Registerform />
      </div>
      <Registerform openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <Register />
      </Registerform>
    </>
  );
}

export default Loginform;

