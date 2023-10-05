import React, { useState } from "react";
import { MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import "./Registerform.css";
import { MDBFile } from "mdb-react-ui-kit";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Register() {
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const validationSchema = Yup.object({
    username: Yup.string().required("User Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "You must agree to the Terms and Conditions"
    ),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    termsAndConditions: false,
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Input Values for Register", values);
    try {
      const response = await fetch("/api/auth/registerSuperAdmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setRegistrationStatus("success");
        resetForm(initialValues);
      } else {
        const data = await response.json();
        setRegistrationStatus(data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setRegistrationStatus(
        "An error occurred while registering. Please try again later."
      );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field
          className="input"
          type="text"
          name="username"
          placeholder="User Name"
          component={MDBInput}
        />
        <ErrorMessage
          name="username"
          component="div"
          className="error-message"
        />
        <br></br>

        <Field
          className="input"
          type="email"
          name="email"
          placeholder="Enter your Email"
          component={MDBInput}
        />
        <ErrorMessage name="email" component="div" className="error-message" />
        <br></br>
        <Field
          className="input"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          component={MDBInput}
        />
        <ErrorMessage
          name="password"
          component="div"
          className="error-message"
        />
        <br></br>
        <Field
          className="input"
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          component={MDBInput}
        />
        <ErrorMessage
          name="phoneNumber"
          component="div"
          className="error-message"
        />
        <br></br>
        <div className="upload-file">
          <MDBFile id="formFileDisabled" />
        </div>
        <br></br>
        <div className="d-flex justify-content-left">
          <Field
            type="checkbox"
            name="termsAndConditions"
            id="flexCheckDefault"
            component={MDBCheckbox}
            label="I agree to these Terms and Conditions."
          />
        </div>
        <ErrorMessage
          name="termsAndConditions"
          component="div"
          className="error-message"
        />
        <br></br>
        <MDBBtn
          className="register-btn"
          type="submit"
          style={{ backgroundColor: "#6425FE", color: "white" }}
        >
          Register
        </MDBBtn>
        {registrationStatus && (
          <div
            className={`registration-status ${
              registrationStatus === "success" ? "success" : "error"
            }`}
          >
            {registrationStatus}
          </div>
        )}
      </Form>
    </Formik>
  );
}

export default Register;
