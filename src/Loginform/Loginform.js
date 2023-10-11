import React from "react";
import { useAuth } from "../Component/Helper/Context/AuthContext";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  const { login } = useAuth();
  const [openPopup, setOpenPopup] = useState(false);
  const [error, setError] = useState(null);
  const handleClose = () => {
    setOpenPopup(false);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required!"),
    password: Yup.string()
      .required("Password is required!")
      .min(4, "Password must be more than 4 characters"),
  });
  const showErrorMessage = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 5000); // Adjust the time (in milliseconds) as needed
  };
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
      try {
        await login(values.email, values.password);
        alert("Login successfull!!!");
        navigate("/dashboard");
        setError(null);
      } catch (error) {
        console.error("Login failed:", error);
        if (error.response && error.response.status === 400) {
          showErrorMessage("Invalid login credentials. Please try again.");
        } else {
          showErrorMessage(
            "An error occurred while logging in. Please try again later."
          );
        }
        console.log("Error message:", error.message);
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
