import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; 
import logo from '../Assets/images/logo.png';
<<<<<<< HEAD
import '../Loginform/Loginform.css';
=======
import './Loginform.css';
>>>>>>> 54398f7fb536a699e3b6d5ac51b076f77d658250
import incan from '../Assets/images/incan.png';
import Grid from '@mui/material/Grid';
import Registerform from '../Registrationform/Registerform';
import Register from '../Registrationform/Register';
import { Button } from '@mui/material';
<<<<<<< HEAD
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom';



function Loginform() {

  const navigate   = useNavigate();


=======
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';

function Loginform() {
  const navigate = useNavigate();
>>>>>>> 54398f7fb536a699e3b6d5ac51b076f77d658250
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
<<<<<<< HEAD
          try {
            const response = await axios.post('http://localhost:3000/login', values);
            const token = response.data.token;
            localStorage.setItem('authToken', token);
            console.log('Login Successful:', token);
            alert('Login Successful');
            
          } catch (error) {
            console.error('Login failed:', error);
            alert('Login Failed'); 
            
=======
          // try {
          //   const response = await axios.post('http://localhost:3000/login', values);
          //   const token = response.data.token;
          //   localStorage.setItem('authToken', token);
          //   console.log('Login Successful:', token);
          //   alert('Login Successful');
          // } catch (error) {
          //   console.error('Login failed:', error);
          //   alert('Login Failed'); 
          // }
          if (formik.values.username === "ibms@gmail.com" && formik.values.password === "ibms@1234") {
            alert("Login Successful!!!!");
            navigate("/dashboard")
          } else {
            alert("Login Failed!!!");
>>>>>>> 54398f7fb536a699e3b6d5ac51b076f77d658250
          }
          
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
              <button className='d-grid' type='submit' onclick={()=>{
                navigate.push("/dashboard");
              }}>
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

