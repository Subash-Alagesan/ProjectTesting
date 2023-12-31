import * as React from "react";
import { useNavigate } from "react-router";
import axios from "../Component/Axios Base URL/axios";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Avatar from "@mui/material/Avatar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import "./AddEmployee.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { async } from "q";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const AddEmployee = () => {
  const [emailSent, setEmailSent] = useState(false);

  const navigate = useNavigate();
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
    skills: [],
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
      // Use the callback form of setState to ensure asynchronous updates
      setEmployeeProfile((prevProfile) => ({
        ...prevProfile,
        profile_pic: file,
      }));
      console.log("Updated customerProfile:", employeeProfile);
    }
  };

  const handleDateChange = (date) => {
    setEmployeeProfile({
      ...employeeProfile,
      dob: date,
    });
  };

  const handleSkillChange = (e, index) => {
    const updatedSkills = [...employeeProfile.skills];
    updatedSkills[index] = e.target.value;
    setEmployeeProfile((prevProfile) => ({
      ...prevProfile,
      skills: updatedSkills,
    }));
  };

  const handleAddSkill = () => {
    setEmployeeProfile((prevProfile) => {
      const updatedSkills = [...prevProfile.skills];
      updatedSkills.push(""); // Add an empty skill field
      return { ...prevProfile, skills: updatedSkills };
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Values", employeeProfile);
    const formData = new FormData();

    for (const key in employeeProfile) {
      formData.append(key, employeeProfile[key]);
    }

    try {
      const response = await axios.post("/api/emp/createemployee", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Added Successfully");
        if (employeeProfile.isAdmin === "Yes") {
          alert("Mail Send Successfully!!! and Get the username and Password"); // Alert the user that the email was sent
        }
        navigate("/");
      }
    } catch (error) {
      console.error("Error while sending data: ", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <Grid container spacing={2} className="overall-grid-emp">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="Emp-profile-contact">
            {/* <img src={AddAPhotoIcon} alt="Profile" className="Customer-profile-contact-img" /> */}
            <h4 className="Emp-profile-title">Employee Profile</h4>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <label
            className="emp-image"
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
          <div className="Emp-name-content">
            <div className="Emp-profile-input">
              <TextField
                label="Name"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="txt-field"
                type="text"
                name="name"
                value={employeeProfile.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="Emp-Name">
              <TextField
                label="Experience"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="txt-field"
                type="text"
                name="experience"
                value={employeeProfile.experience}
                onChange={handleInputChange}
              />
            </div>
            <div className="Emp-Designation">
              <TextField
                label="Enter Designation"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="txt-field"
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
                <option value="Select">select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </Grid>

        {/* Employee Type */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Emp-name-content1">
            <div>
              <TextField
                label="Education"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="emp-txt-field"
                type="text"
                name="education"
                value={employeeProfile.education}
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="AddBoxIcon">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>

        {/* Employee Information */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Emp-Info">
            <h4 className="Emp-field">Personal Information</h4>
            <div className="Empprofile-DOB">
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
            <div className="Empprofile-Status">
              <label>
                <strong>Marital Status:</strong>
              </label>
              <select
                name="marital_status"
                value={employeeProfile.marital_status}
                onChange={handleInputChange}
              >
                <option value="Select">select</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
            </div>
            <div className="Empprofile-gender">
              <label>
                <strong>Gender: </strong>
              </label>
              <select
                name="gender"
                value={employeeProfile.gender}
                onChange={handleInputChange}
              >
                <option value="Select">select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="Empprofile-Place">
              <TextField
                label="Place"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="emp-txt-field"
                type="text"
                name="place"
                value={employeeProfile.place}
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="AddBox-Icon1">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>

        {/* Skills*/}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Skill">
            <h4 className="Skill-field-emp">
              Skills
              <AddBoxIcon fontSize="small" onClick={handleAddSkill} />
            </h4>
            {employeeProfile.skills.map((skill, index) => (
              <div className="Enter-Skill" key={skill.employee_skill_id}>
                <TextField
                  label={`Enter Skill ${index + 1}`}
                  id="outlined-size-small"
                 
                  size="small"
                  className="emp-txt-field"
                  type="text"
                  name={`skills[${index}]`}
                  value={skill.skill_name}
                  onChange={(e) => handleSkillChange(e, index)}
                />
              </div>
            ))}
          </div>
        </Grid>

        
        {/* Contact Details */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Emp-Contact_Information">
            <h4 className="EmpContact-field">Contact Details</h4>
            <div className="Emp-Mobileno">
              <TextField
                label="Mobile Number"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="emp-txt-field"
                type="text"
                name="mobile_number"
                value={employeeProfile.mobile_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="Emp-profile-password">
              <TextField
                label="Email ID"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="emp-txt-field"
                type="text"
                name="email"
                value={employeeProfile.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="Emp-profile-password">
              <TextField
                label="Password"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="emp-txt-field"
                type="text"
                name="password"
                value={employeeProfile.password}
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="AddBox-Icon4">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>

        {/* Experience */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Experience-emp">
            <h4 className="Experience-field-emp">Experience</h4>
            <div className="Experience1-emp">
              <TextField
                label="Enter Experience 1"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="emp-txt-field"
                type="text"
                name="experience_description"
                value={employeeProfile.experience_description}
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="AddBox-Icon5">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>

        {/* Extra */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Extra_Information">
            <h4 className="EmpExtra-field">
              <strong>Extra</strong>
            </h4>
            <div className="Emp-Mobileno">
              <TextField
                label="Alternative Phone No"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="emp-txt-field"
                type="text"
                name="alternative_phone_number"
                value={employeeProfile.alternative_phone_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="empprofile-physicall">
              <label>
                <strong>Physically Challenged:</strong>
              </label>
              <select
                name="physically_challenged"
                value={employeeProfile.physically_challenged}
                onChange={handleInputChange}
              >
                <option value="Select">select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* <div className="AddBox-Icon4">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>

        {/* Projects */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Project_Information">
            <h4 className="Project-field">Projects</h4>
            <div className="Portfolio">
              <TextField
                label="Portfolio"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="emp-txt-field"
                type="text"
                name="portfolio_url"
                value={employeeProfile.portfolio_url}
                onChange={handleInputChange}
              />
            </div>
            <div className="Empprofile-Github">
              <TextField
                label="Github"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                className="emp-txt-field"
                type="text"
                name="github_url"
                value={employeeProfile.github_url}
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="AddBox-Icon4">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>

        <div className="submit-btn1">
          <Button
            type="submit"
            size="small"
            style={{ backgroundColor: "#9400D3", color: "white" }}
          >
            Submit
          </Button>
        </div>
      </Grid>
    </form>
  );
};

export default AddEmployee;
