import React, from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Component/Axios Base URL/axios";
import { MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
  const navigate = useNavigate();
  

  const validationSchema = Yup.object({
    name: Yup.string().required("User Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    phone_number: Yup.string().required("Phone Number is required"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "You must agree to the Terms and Conditions"
    ),
    profile_pic: Yup.mixed().required("Profile Picture is required").nullable(),

  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone_number: "",
    profile_pic: null,
    termsAndConditions: false,
  };

  const onSubmit = async (values, { setSubmitting }) => {
    console.log("Input Values for Register");

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("phone_number", values.phone_number);
      formData.append("termsAndConditions", values.termsAndConditions);
      formData.append("profile_pic", values.profile_pic);
      console.log("Inside Api", formData);

      const response = await axios.post(
        "/api/auth/registerSuperAdmin",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response.data;
      console.log(data);     
      alert(data.message);
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      // Handle network errors or other exceptions
      alert("An error occurred while registering. Please try again later.");
    } finally {
      // Ensure that the form is not left in a submitting state
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="registration-form"
        encType="multipart/form-data"
      >
        <MDBInput
          className="input"
          type="text"
          name="name"
          placeholder="User Name"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error-message">{formik.errors.name}</div>
        )}
        <br />

        <MDBInput
          className="input"
          type="email"
          name="email"
          placeholder="Enter your Email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}
        <br />

        <MDBInput
          className="input"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="error-message">{formik.errors.password}</div>
        )}
        <br />

        <MDBInput
          className="input"
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          {...formik.getFieldProps("phone_number")}
        />
        {formik.touched.phone_number && formik.errors.phone_number && (
          <div className="error-message">{formik.errors.phone_number}</div>
        )}
        <br />

        {/* Profile Picture */}
        <input
          type="file"
          name="profile_pic"
          id="profile_pic"
          onChange={(event) => {
            // Make sure the input value is not null and has files
            if (
              event.currentTarget.files &&
              event.currentTarget.files.length > 0
            ) {
              // Append the first selected file to the formData object
              formik.setFieldValue("profile_pic", event.currentTarget.files[0]);
            }
          }}
        />

        {formik.touched.profile_pic && formik.errors.profile_pic && (
          <div className="error-message">{formik.errors.profile_pic}</div>
        )}

        {/* Terms and Conditions */}
        <div className="d-flex justify-content-left">
          <input
            type="checkbox"
            name="termsAndConditions"
            id="termsAndConditions"
            {...formik.getFieldProps("termsAndConditions")}
          />
          <label htmlFor="termsAndConditions">
            I agree to these Terms and Conditions.
          </label>
        </div>
        {formik.touched.termsAndConditions &&
          formik.errors.termsAndConditions && (
            <div className="error-message">
              {formik.errors.termsAndConditions}
            </div>
          )}

        <br />

        <MDBBtn
          className="register-btn"
          type="submit"
          style={{ backgroundColor: "#6425FE", color: "white" }}
        >
          Register
        </MDBBtn>
      </form>
    </div>
  );
}

export default Register;
