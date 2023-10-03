import React from "react";
import { MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import "./Registerform.css";
import { MDBFile } from "mdb-react-ui-kit";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Register() {
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

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted with values:", values);

    resetForm(initialValues);
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
      </Form>
    </Formik>
  );
}

export default Register;
