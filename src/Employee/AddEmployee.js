import * as React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PublishIcon from "@mui/icons-material/Publish";
import FolderIcon from "@mui/icons-material/Folder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import "./AddEmployee.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEmployee = () => {
  const [employeeProfile, setEmployeeProfile] = useState({
    profile_pic: null,
    name: "",
    experience: "",
    designation: "",
    education: "",
    isAdmin: "",
    dob: null,
    marital_status: "",
    gender: "",
    place: "",
    mobile_number: "",
    email: "",
    alternative_phone_number: "",
    physically_challenged: "",
    skills: "",
    experience_description: "",
    portfolio_url: "",
    github_url: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // If the input is a select element, access its selected value differently
    const selectedValue =
      type === "select-one" ? e.target.selectedOptions[0].value : value;

    setEmployeeProfile({
      ...employeeProfile,
      [name]: selectedValue,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    if (file) {
      setEmployeeProfile({
        ...employeeProfile,
        profile_pic: file,
      });
      console.log("Updated customerProfile:", employeeProfile);
    }
  };
  const handleDateChange = (date) => {
    setEmployeeProfile({
      ...employeeProfile,
      dob: date,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Values", employeeProfile);
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="Customer-profile-contact">
            {/* <img src={AddAPhotoIcon} alt="Profile" className="Customer-profile-contact-img" /> */}
            <h5 className="Customer-profile-title">Employee Profile</h5>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <label
            className="box-decoration"
            htmlFor="fileInput"
            style={{ cursor: "pointer" }}
          >
            {employeeProfile.profile_pic ? (
              // If an image is selected, display it
              <img
                src={URL.createObjectURL(employeeProfile.profile_pic)}
                alt="Selected Image"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
            ) : (
              // If no image is selected, display the avatar
              <Avatar sx={{ width: 150, height: 150 }}>
                <AddAPhotoIcon sx={{ width: 40, height: 40 }} />
              </Avatar>
            )}
          </label>
          <input
            type="file"
            name="profile_pic"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </Grid>

        {/* Employee Name */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Customer-name-content">
            <div className="Customer-profile-input">
              <input
                type="text"
                name="name"
                value={employeeProfile.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="CustomerName">
              <label>
                <strong> Experience :</strong>
              </label>
              <input
                type="text"
                name="experience"
                value={employeeProfile.experience}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="Businessprofile-entername">
                <strong>Enter Designation :</strong>
              </label>
              <input
                type="text"
                name="designation"
                value={employeeProfile.designation}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="isAdmin">Is Admin?</label>
              <select
                id="isAdmin"
                name="isAdmin"
                value={employeeProfile.isAdmin}
                onChange={handleInputChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </Grid>

        {/* Employee Type */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Customer-name-content1">
            <div>
              <label className="BusinessType">
                <strong>Education :</strong>
              </label>
              <input
                type="text"
                name="education"
                value={employeeProfile.education}
                onChange={handleInputChange}
              />
            </div>
            <div className="AddBoxIcon">
              <AddBoxIcon />
            </div>
          </div>
        </Grid>

        {/* Employee Information */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Business_Information">
            <h4 className="Businessinfo-field">Personal Information</h4>
            <div className="Businessprofile-Name">
              <label>
                <strong>Date of Birth:</strong>
              </label>
              <DatePicker
                selected={employeeProfile.dob}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy" // Customize date format as needed
                showYearDropdown
                scrollableYearDropdown
              />
            </div>
            <div className="Businessprofile-Place">
              <label>
                <strong>Marital Status:</strong>
              </label>
              <select
                name="marital_status"
                value={employeeProfile.marital_status}
                onChange={handleInputChange}
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
            </div>
            <div className="Businessprofile-District">
              <label>
                <strong>Gender: </strong>
              </label>
              <select
                name="gender"
                value={employeeProfile.gender}
                onChange={handleInputChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="Businessprofile-Language">
              <label>
                <strong>Place: </strong>
              </label>
              <input
                type="text"
                name="place"
                value={employeeProfile.place}
                onChange={handleInputChange}
              />
            </div>
            <div className="AddBox-Icon1">
              <AddBoxIcon />
            </div>
          </div>
        </Grid>

        {/* Skills*/}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Social Media">
            <h4 className="SocialMedia-field">Skills </h4>
            <div className="Media1">
              <label>
                <strong>Enter Skill 1 :</strong>
              </label>
              <input
                type="text"
                name="skills"
                value={employeeProfile.skills}
                onChange={handleInputChange}
              />
            </div>
            <div className="Media1">
              <label>
                <strong>Enter Skill 2 :</strong>
              </label>
              <input
                type="text"
                name="skills"
                value={employeeProfile.skills}
                onChange={handleInputChange}
              />
            </div>
            <div className="Media1">
              <label>
                <strong>Enter Skill 3 :</strong>
              </label>
              <input
                type="text"
                name="skills"
                value={employeeProfile.skills}
                onChange={handleInputChange}
              />
            </div>
            <div className="AddBox-Icon2">
              <AddBoxIcon />
            </div>
          </div>
        </Grid>
        {/* Contact Details */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Contact_Information">
            <h4 className="BusinessContact-field">
              <strong>Contact Details</strong>
            </h4>
            <div className="Business-Mobileno">
              <label>
                <strong>Mobile Number:</strong>
              </label>
              <input
                type="text"
                name="mobile_number"
                value={employeeProfile.mobile_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="Businessprofile-EmailId">
              <label>
                <strong>Email ID:</strong>
              </label>
              <input
                type="text"
                name="email"
                value={employeeProfile.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="AddBox-Icon4">
              <AddBoxIcon />
            </div>
          </div>
        </Grid>

        {/* Experience */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Website">
            <h4 className="Website-field">Experience</h4>
            <div className="Website1">
              <label>
                <strong>Enter Experience 1</strong>
              </label>
              <input
                type="text"
                name="experience_description"
                value={employeeProfile.experience_description}
                onChange={handleInputChange}
              />
            </div>
            <div className="AddBox-Icon5">
              <AddBoxIcon />
            </div>
          </div>
        </Grid>

        {/* Extra */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Contact_Information">
            <h4 className="BusinessContact-field">
              <strong>Extra</strong>
            </h4>
            <div className="Business-Mobileno">
              <label>
                <strong>Alternative Phone No:</strong>
              </label>
              <input
                type="text"
                name="alternative_phone_number"
                value={employeeProfile.alternative_phone_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="Businessprofile-EmailId">
              <label>
                <strong>Physically Challenged:</strong>
              </label>
              <select
                name="physically_challenged"
                value={employeeProfile.physically_challenged}
                onChange={handleInputChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="AddBox-Icon4">
              <AddBoxIcon />
            </div>
          </div>
        </Grid>

        {/* Projects */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Contact_Information">
            <h4 className="BusinessContact-field">
              <strong>Projects</strong>
            </h4>
            <div className="Business-Mobileno">
              <label>
                <strong>Portfolio :</strong>
              </label>
              <input
                type="text"
                name="portfolio_url"
                value={employeeProfile.portfolio_url}
                onChange={handleInputChange}
              />
            </div>
            <div className="Businessprofile-EmailId">
              <label>
                <strong>Github:</strong>
              </label>
              <input
                type="text"
                name="github_url"
                value={employeeProfile.github_url}
                onChange={handleInputChange}
              />
            </div>
            <div className="AddBox-Icon4">
              <AddBoxIcon />
            </div>
          </div>
        </Grid>

        <div className="submit-btn-emp">
          <button
            type="submit"
            style={{ backgroundColor: "#6425FE", color: "white" }}
          >
            Submit
          </button>
        </div>
      </Grid>
    </form>
  );
};

export default AddEmployee;
