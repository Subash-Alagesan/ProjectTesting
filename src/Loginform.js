import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; 
import logo from './images/logo.png';
import './Loginform.css';
import incan from './images/incan.png';
import Grid from '@mui/material/Grid';
import Registerform from './Registerform';
import Register from './Register';
import { Button } from '@mui/material';
import axios from 'axios'; // Import axios

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
        validationSchema,onSubmit: async (values) => {
          try {
            const response = await axios.post('http://localhost:3000/login', values);
            const token = response.data.token;
            localStorage.setItem('authToken', token);
            console.log('Login Successful:', token);
            alert('Login Successful');
          } catch (error) {
            console.error('Login failed:', error);
            alert('Login Failed'); 
          }
        },
      });
      const getToken = () => {
        return localStorage.getItem('authToken');
      };

      const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000', 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`, 
        },
      });

      axiosInstance.get('/authenticated-endpoint')
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle errors
  });
    return (

        <>
            <div className='login'>

                <Grid container spacing={2}>
                    <Grid xs={3}>
                        <img src={incan} alt='incan.png' className='incan-img' />
                    </Grid>
                    <Grid xs={9} className='setting'>
                       
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

