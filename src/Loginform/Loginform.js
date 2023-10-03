import React from "react";
import { useState,useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../Component/Axios Base URL/axios";
import SetAuthToken from "../Component/Helper/SetAuthToken";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import logo from "../Assets/images/logo.png";
import "./Loginform.css";
import incan from "../Assets/images/incan.png";
import Grid from "@mui/material/Grid";
import Registerform from "../Registrationform/Registerform";
import Register from "../Registrationform/Register";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Loginform() {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const handleClose = () => {
    setOpenPopup(false);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required!"),
    password: Yup.string()
      .required("Password is required!")
      .min(4, "Password must be more than 4 characters"),
  });
  useEffect(() => {
    let currentTime;
    let decoded;
  if (localStorage.ibms) {
    const token = localStorage.getItem("ibms");
    decoded = jwt_decode(token);
    currentTime = Date.now() / 1000;
    if (!localStorage.ibms || decoded?.exp < currentTime) {
    } else {
      navigate("/dashboard");
    }
  }
}, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Submitting form with values:", values);
      try {
        const response = await axios.post("/api/auth/loginSuperAdmin", {
          email: values.email,
          password: values.password,
        });
        if (response.status === 200) {
          // Login Successful
          alert("Login Successful!!!!");          
          const token = response?.data?.token;          
          SetAuthToken(token);
          localStorage.setItem("ibms", token);
          navigate("/dashboard");
        } else {
          // Login Failed
          alert("Login Failed!!!");
        }
      } catch (error) {
        // Handle errors (e.g., network issues, server errors)
        console.error("Login error:", error);
        alert("Login Failed!!!");
      }
    },
  });

  return (
    <>
      <div className="login">
        <Grid container spacing={2}>
          <Grid xs={3}>
            <img src={incan} alt="incan.png" className="incan-img" />
          </Grid>
          <Grid xs={9} className="setting">
            <div className="plus">
              <Button
                variant="contained"
                href="#contained-buttons"
                className="plus-img"
                onClick={() => setOpenPopup(true)}
                style={{ backgroundColor: "#6425FE", color: "white" }}
              >
                Register
              </Button>
            </div>
          </Grid>
        </Grid>

        <div className="form_container">
          <form className="login-form" onSubmit={formik.handleSubmit}>
            <img
              src={logo}
              alt="logo.png"
              className="logo-img"
              style={{ height: "30px", width: "55px" }}
            />
            {/* <h3 className='text-center'>Incandescent Login</h3> */}
            <div className="mb-2">
              <label htmlFor="email" className="email">
                <strong>User Name</strong>
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.email && formik.errors.email && (
                <div className="error-message">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="Password" className="Password">
                <strong>Password</strong>
              </label>
              <br />
              <input
                type="password"
                className="form-control"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="error-message">{formik.errors.password}</div>
              )}
            </div>
            <div className="forgot-password">
              <a href="/">Forgot Password?</a>
            </div>
            <div className="login-btn">
              <button className="d-grid" type="submit">
                <h6 className="log">Login</h6>
              </button>
            </div>
          </form>
        </div>
        <Registerform />
      </div>
      <Registerform openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <Register />
        <HighlightOffIcon className="close-icon" onClick={handleClose} />
      </Registerform>
    </>
  );
}

export default Loginform;
