import * as React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "../Component/Axios Base URL/axios";
import { useAuth } from "../Component/Helper/Context/AuthContext";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Employeeprofile.css";
import contact_page from "../Assets/images/contact_page.png";
import Button from "@mui/material/Button";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Avatar from "@mui/material/Avatar";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SaveAltIcon from "@mui/icons-material/SaveAlt";


function Employeeprofile() {
  const { employeeId } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const imageBaseUrl = "http://localhost:4070/uploads/images/";
  const [newImage, setNewImage] = useState(null);
  const [newSkill, setNewSkill] = useState([]);

  const [employeeProfile, setEmployeeProfile] = useState({
    profile_pic: "",
    name: "",
    experience: "",
    designation: "",
    education: "",
    isAdmin: "",
    dob: "",
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
    const fieldName = e.target.name;
    const value = e.target.value;

    setEmployeeProfile({
      ...employeeProfile,
      [fieldName]: value,
    });
  };

  const handleNewSkillChange = (e) => {
    setNewSkill(e.target.value);
  };

  // Define the function to add a new skill
  const handleAddNewSkill = () => {
    // Assuming employeeProfile.skills is an array
    setEmployeeProfile((prevProfile) => ({
      ...prevProfile,
      skills: [...prevProfile.skills, newSkill],
    }));
    // Clear the newSkill input field
    setNewSkill("");
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const hiddenFileInput = useRef(null);

  useEffect(() => {
    if (!isEditing) {
      console.log("Fetching customer data for customerId:", employeeId);
      axios
        .get(`/api/emp/getemployeebyid/${employeeId}`)
        .then((response) => {
          const employeeProfile = response.data.employee;
          setEmployeeProfile({
            ...employeeProfile,
            profile_pic: employeeProfile.profile_pic,
          });
          console.log("After Fetching from customer by id", employeeProfile);
        })
        .catch((error) => {
          console.error("Error fetching customer data:", error);
        });
    }
  }, [employeeId, isEditing]);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected image:", file);
    if (file) {
      setNewImage(file);
    }
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleUpdateClick = async () => {
    try {
      const formDataForEmployeeUpdate = new FormData();
      formDataForEmployeeUpdate.append("name", employeeProfile.name);
      formDataForEmployeeUpdate.append(
        "experience",
        employeeProfile.experience
      );
      formDataForEmployeeUpdate.append(
        "designation",
        employeeProfile.designation
      );
      formDataForEmployeeUpdate.append("education", employeeProfile.education);
      formDataForEmployeeUpdate.append("isAdmin", employeeProfile.isAdmin);
      formDataForEmployeeUpdate.append("dob", employeeProfile.dob);
      formDataForEmployeeUpdate.append(
        "marital_status",
        employeeProfile.marital_status
      );
      formDataForEmployeeUpdate.append("gender", employeeProfile.gender);
      formDataForEmployeeUpdate.append("place", employeeProfile.place);
      formDataForEmployeeUpdate.append(
        "mobile_number",
        employeeProfile.mobile_number
      );
      formDataForEmployeeUpdate.append("email", employeeProfile.email);
      formDataForEmployeeUpdate.append(
        "alternative_phone_number",
        employeeProfile.alternative_phone_number
      );
      formDataForEmployeeUpdate.append(
        "physically_challenged",
        employeeProfile.physically_challenged
      );
      if (employeeProfile.skills && Array.isArray(employeeProfile.skills)) {
        // Check if employeeProfile.skills is defined and an array
        employeeProfile.skills.forEach((skill, index) => {
          formDataForEmployeeUpdate.append(`skills[${index}]`, skill);
        });
      }

      formDataForEmployeeUpdate.append(
        "experience_description",
        employeeProfile.experience_description
      );
      formDataForEmployeeUpdate.append(
        "portfolio_url",
        employeeProfile.portfolio_url
      );
      formDataForEmployeeUpdate.append(
        "github_url",
        employeeProfile.github_url
      );
      formDataForEmployeeUpdate.append("password", employeeProfile.password);
      if (newImage) {
        formDataForEmployeeUpdate.append("profile_pic", newImage);
        console.log("New image selected", newImage);
      } else {
        // If no new image is selected, include the existing profile_pic value as a URL
        formDataForEmployeeUpdate.append("profile_pic", employeeProfile.profile_pic);
        console.log("Using existing image");
      }
      
      formDataForEmployeeUpdate.forEach((value, key) => {
        console.log(`Field: ${key}, Value: ${value}`);
      });

      const response = await axios.put(
        `/api/emp/updateEmployee/${employeeId}`,
        formDataForEmployeeUpdate,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Job updated successfully:", response.data);
      setEmployeeProfile({
        ...employeeProfile,
        profile_pic: response.data.profile_pic,
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating Employee:", error);
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={(e) => e.preventDefault()}>
      <Grid container spacing={2} className="EmpDetail">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Item className="emp-grid1">
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <img
                  src={contact_page}
                  alt=""
                  className="Employeedb-profile-contact-img"
                />
                <h5 className="Employeedb-title">Employee Profile</h5>
              </div>

              <div className="Edit-btn">
                {isEditing ? (
                  <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    onClick={handleUpdateClick}
                    endIcon={<CreateOutlinedIcon />}
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="contained"
                    size="small"
                    onClick={handleEditClick}
                    endIcon={<CreateOutlinedIcon />}
                  >
                    Edit
                  </Button>
                )}
              </div>
            </div>
          </Item>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <div className="box-decoration">
                <div onClick={handleClick} style={{ cursor: "pointer" }}>
                  {isEditing ? (
                    <>
                      {newImage ? ( // Check if a new image is selected
                        <img
                          src={URL.createObjectURL(newImage)}
                          alt="Profile Picture"
                          style={{ width: "100%", height: "auto" }}
                        />
                      ) : (
                        <img
                          src={`${imageBaseUrl}${employeeProfile.profile_pic}`}
                          alt="Profile Picture"
                          style={{ width: "100%", height: "auto" }}
                        />
                      )}
                      <input
                        id="image-upload-input"
                        type="file"
                        onChange={handleImageChange}
                        ref={hiddenFileInput}
                        style={{ display: "none" }}
                      />
                    </>
                  ) : (
                    <Avatar
                      sx={{ width: 150, height: 150 }}
                      src={`${imageBaseUrl}${employeeProfile.profile_pic}`}
                    />
                  )}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className="Emp-name-content">
                <div className="empprofile-input">
                  <label>Name :</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={employeeProfile.name}
                      placeholder="Name"
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span>{employeeProfile.name}</span>
                  )}
                </div>
                <br></br>

                <div className="Experience">
                  <label>Experience :</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="experience"
                      value={employeeProfile.experience}
                      className="empprofile-entername-input"
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span>{employeeProfile.experience}</span>
                  )}
                </div>
                <br></br>
                <div>
                  <label className="empprofile-entername">Designation :</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="designation"
                      value={employeeProfile.designation}
                      className="empprofile-entername-input"
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span>{employeeProfile.designation}</span>
                  )}
                </div>
                <br></br>
                <div>
                  <label className="empprofile-isadmin">Is Admin?</label>
                  {isEditing ? (
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
                  ) : (
                    <span>{employeeProfile.isAdmin}</span>
                  )}
                </div>
              </div>
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4}>
              <div className="Emp-name-content1">
                <div>
                  <label className="education">
                    Education :
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="education"
                      value={employeeProfile.education}
                      className="empprofile-entername-input"
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span>{employeeProfile.education}</span>
                  )}
                </div>
                <br></br>
              </div>
            </Grid>
          </Grid>
          <hr
            style={{
              background: "#84828A",
              height: "1px",
            }}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="Personal_Information">
              <h4 className="Info-field">Personal Information</h4>
              <div className="Empprofile-Dob">
                <label>Date Of Birth :</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="dob"
                    value={employeeProfile.dob}
                    className="empprofile-entername-input"
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{employeeProfile.dob}</span>
                )}
              </div>
              <br></br>
              <div className="empprofile-Marital">
                <label>Marital Status :</label>
                {isEditing ? (
                  <select
                    name="marital_status"
                    value={employeeProfile.marital_status}
                    onChange={handleInputChange}
                  >
                    <option value="Select">select</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                ) : (
                  <span>{employeeProfile.marital_status}</span>
                )}
              </div>
              <br></br>
              <div className="empprofile-Marital">
                <label>Gender :</label>
                {isEditing ? (
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
                ) : (
                  <span>{employeeProfile.gender}</span>
                )}
              </div>
              <br></br>
              <div className="empprofile-Marital">
                <label>Place :</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="place"
                    value={employeeProfile.place}
                    className="empprofile-entername-input"
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{employeeProfile.place}</span>
                )}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="Skills">
              <h4 className="Skill-field">Skills</h4>
              {employeeProfile.skills &&
                employeeProfile.skills.map((skill, index) => (
                  <div key={index} className={`Skill${index + 1}`}>
                    <label>Skill {index + 1} :</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name={`skills[${index}]`}
                        value={skill}
                        className="empprofile-entername-input"
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{skill}</span>
                    )}
                  </div>
                ))}
              {isEditing &&
              employeeProfile.skills &&
              employeeProfile.skills.length === 0 ? (
                <div>
                  <label>Add a new skill:</label>
                  <input
                    type="text"
                    name="newSkill" // Use a unique name for the new skill
                    className="empprofile-entername-input"
                    onChange={handleNewSkillChange} // Create a handler for new skill input
                  />
                </div>
              ) : null}

              {/* {isEditing && (
                <div className="AddBoxIcon2">
                  <AddBoxIcon onClick={handleAddNewSkill} />{" "}
                </div>
              )} */}
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="Contact_Information1">
              <h4 className="Contact-field">
                <strong>Contact Details</strong>
              </h4>
              <div className="Empprofile-Mobileno">
                <label>Mobile Number :</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="mobile_number"
                    value={employeeProfile.mobile_number}
                    className="empprofile-entername-input"
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{employeeProfile.mobile_number}</span>
                )}
              </div>
              <br></br>

              <div className="Emp-profile-EmailId">
                <label>Email Id :</label>
                {isEditing ? (
                  <input
                    type="Email"
                    name="email"
                    value={employeeProfile.email}
                    className="empprofile-entername-input"
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{employeeProfile.email}</span>
                )}
              </div>
            </div>

            <div className="Security1">
              <div className="Password1">
                <label>
                 Password :
                </label>
                {isEditing ? (
                  <input
                    type="password"
                    name="password"
                    value={employeeProfile.password}
                    className="empprofile-entername-input"
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{employeeProfile.password}</span>
                )}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="Experience1">
              <h4 className="Experience-field">Experience</h4>
              <div className="Experience4">
                <label>
                  Experience 1 :
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="experience_description"
                    value={employeeProfile.experience_description}
                    className="empprofile-entername-input"
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{employeeProfile.experience_description}</span>
                )}
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <div className="Extra-Information1">
            <h4 className="EmpExtra--field1">
              Extra
            </h4>
            <div className="Emp-Mob-no">
              <label>
                Alternative Phone No :
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="alternative_phone_number"
                  value={employeeProfile.alternative_phone_number}
                  className="empprofile-input"
                  onChange={handleInputChange}
                />
              ) : (
                <span>{employeeProfile.alternative_phone_number}</span>
              )}
            </div>
            <div className="empprofile-physically">
              <label>
                Physically Challenged:
              </label>
              {isEditing ? (
                <select
                  name="physically_challenged"
                  value={employeeProfile.physically_challenged}
                  onChange={handleInputChange}
                >
                  <option value="Select">select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              ) : (
                <span>{employeeProfile.physically_challenged}</span>
              )}
            </div>
          </div>
        </Grid>

       
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div className="emp-project">
              <h4 className="emp-project-field">
                Projects
              </h4>
              <div className="Portfolio-url">
                <label>
                Portfolio : 
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="portfolio_url"
                    value={employeeProfile.portfolio_url}
                    className="empprofile-entername-input1"
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{employeeProfile.portfolio_url}</span>
                )}
              </div>
              <br></br>

              <div className="GitHub-url">
                <label>
                 Github URL :
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="github_url"
                    value={employeeProfile.github_url}
                    className="empprofile-entername-input1"
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{employeeProfile.github_url}</span>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default Employeeprofile;
