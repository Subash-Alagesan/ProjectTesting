import * as React from "react";
import { useEffect } from "react";
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
import { useState, useRef } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Input from "@mui/material/Input";

function Employeeprofile() {
  const { employeeId } = useAuth();
  const imageBaseUrl = "http://localhost:4070/uploads/images/";
  const [employeeProfile, setEmployeeProfile] = useState({
    profile_pic: null,
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

  const [isEditing, setIsEditing] = useState(false);

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

  const [image, setImage] = useState(null);
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
  const handleImageChange = (event) => {};

  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleUpdateClick = () => {
    // Perform your update logic here
    // Disable edit mode
    setIsEditing(false);
  };

  return (
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
                  size="small"
                  onClick={handleUpdateClick}
                  endIcon={<CreateOutlinedIcon />}
                >
                  Update
                </Button>
              ) : (
                <Button
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
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <div className="box-decoration">
              <div onClick={handleClick} style={{ cursor: "pointer" }}>
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="upload image"
                    className="img-display-after"
                  />
                ) : (
                  <Avatar
                    sx={{ width: 150, height: 150 }}
                    src={`${imageBaseUrl}${employeeProfile.profile_pic}`}
                  />
                )}

                <input
                  id="image-upload-input"
                  type="file"
                  onChange={handleImageChange}
                  ref={hiddenFileInput}
                  style={{ display: "none" }}
                />
              </div>
              <button
                className="image-upload-button"
                onClick={() => handleUploadButtonClick(image)}
              >
                Upload
              </button>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div className="Emp-name-content">
              <div className="empprofile-input">
              <label>
                  Name :
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={employeeProfile.name}
                    placeholder="Name"
                    onChange={(e) =>
                      setEmployeeProfile({
                        ...employeeProfile,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  <span>{employeeProfile.name}</span>
                )}
              </div>

              <br></br>

              <div className="Experience">
                <label>
                  Experience :
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={employeeProfile.experience}
                    className="empprofile-entername-input"
                    onChange={(e) =>
                      setEmployeeProfile({
                        ...employeeProfile,
                        experience: e.target.value,
                      })
                    }
                  />
                ) : (
                  <span>{employeeProfile.experience}</span>
                )}
              </div>
              <br></br>
              <div>
                <label className="empprofile-entername">
                  Designation :
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={employeeProfile.designation}
                    className="empprofile-entername-input"
                    onChange={(e) =>
                      setEmployeeProfile({
                        ...employeeProfile,
                        designation: e.target.value,
                      })
                    }
                  />
                ) : (
                  <span>{employeeProfile.designation}</span>
                )}
              </div>
            </div>
          </Grid>

          <Grid xs={12} sm={12} md={5} lg={5}>
            <div className="Emp-name-content1">
              <div>
                <label className="education">
                  <strong>Education :</strong>
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={employeeProfile.education}
                    className="empprofile-entername-input"
                    onChange={(e) =>
                      setEmployeeProfile({
                        ...employeeProfile,
                        education: e.target.value,
                      })
                    }
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
              <label>
                Date Of Birth :
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={employeeProfile.dob}
                  className="empprofile-entername-input"
                  onChange={(e) =>
                    setEmployeeProfile({
                      ...employeeProfile,
                      dob: e.target.value,
                    })
                  }
                />
              ) : (
                <span>{employeeProfile.dob}</span>
              )}
            </div>
            <br></br>
            <div className="empprofile-Marital">
              <label>
                Marital Status :
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={employeeProfile.marital_status}
                  className="empprofile-entername-input"
                  onChange={(e) =>
                    setEmployeeProfile({
                      ...employeeProfile,
                      marital_status: e.target.value,
                    })
                  }
                />
              ) : (
                <span>{employeeProfile.marital_status}</span>
              )}
            </div>
            <br></br>

            <div className="empprofile-Marital">
              <label>
      Gender :
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={employeeProfile.gender}
                  className="empprofile-entername-input"
                  onChange={(e) =>
                    setEmployeeProfile({
                      ...employeeProfile,
                      gender: e.target.value,
                    })
                  }
                />
              ) : (
                <span>{employeeProfile.gender}</span>
              )}
            </div>
            <br></br>
            <div className="empprofile-Marital">
              <label>
                Place :
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={employeeProfile.place}
                  className="empprofile-entername-input"
                  onChange={(e) =>
                    setEmployeeProfile({
                      ...employeeProfile,
                      place: e.target.value,
                    })
                  }
                />
              ) : (
                <span>{employeeProfile.place}</span>
              )}
            </div>
          </div>
          {/* {isEditing ? (
            <div className="AddBoxIcon1">
              <AddBoxIcon />
            </div>
          ) : (
            <span></span>
          )} */}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="Skills">
            <h4 className="Skill-field">Skills</h4>
            {employeeProfile.skills &&
              employeeProfile.skills.map((skill, index) => (
                <div key={index} className={`Skill${index + 1}`}>
                  <label>
                    Skill {index + 1} :
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={skill}
                      className="empprofile-entername-input"
                      onChange={(e) => {
                        const newSkills = [...employeeProfile.skills];
                        newSkills[index] = e.target.value;
                        setEmployeeProfile({
                          ...employeeProfile,
                          skills: newSkills,
                        });
                      }}
                    />
                  ) : (
                    <span>{skill}</span>
                  )}
                </div>
              ))}
            {/* {isEditing && (
              <div className="AddBoxIcon2">
                <AddBoxIcon />
              </div>
            )} */}
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="Contact_Information">
            <h4 className="Contact-field">
              <strong>Contact Details</strong>
            </h4>
            <div className="Empprofile-Mobileno">
              <label>
                Mobile Number :
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={employeeProfile.mobile_number}
                  className="empprofile-entername-input"
                  onChange={(e) =>
                    setEmployeeProfile({
                      ...employeeProfile,
                      mobile_number: e.target.value,
                    })
                  }
                />
              ) : (
                <span>{employeeProfile.mobile_number}</span>
              )}
            </div>
            <br></br>

            <div className="Emp-profile-EmailId">
              <label>
                Email Id :
              </label>
              {isEditing ? (
                <input
                  type="Email"
                  value={employeeProfile.email}
                  className="empprofile-entername-input"
                  onChange={(e) =>
                    setEmployeeProfile({
                      ...employeeProfile,
                      email: e.target.value,
                    })
                  }
                />
              ) : (
                <span>{employeeProfile.email}</span>
              )}
            </div>
          </div>
          {/* {isEditing ? (
            <div className="AddBoxIcon3">
              <AddBoxIcon />
            </div>
          ) : (
            <span></span>
          )} */}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="Experience">
            <h4 className="Experience-field">Experience</h4>
            <div className="Experience1">
              <label>
                <strong>Experience 1 :</strong>
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={employeeProfile.experience_description}
                  className="empprofile-entername-input"
                  onChange={(e) =>
                    setEmployeeProfile({
                      ...employeeProfile,
                      experience_description: e.target.value,
                    })
                  }
                />
              ) : (
                <span>{employeeProfile.experience_description}</span>
              )}
            </div>
            <br></br>
            <div className="Experience2">
              <label>
                <strong>Experience 2 :</strong>
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={employeeProfile.experience_description2}
                  className="empprofile-entername-input"
                  onChange={(e) =>
                    setEmployeeProfile({
                      ...employeeProfile,
                      experience_description2: e.target.value,
                    })
                  }
                />
              ) : (
                <span>{employeeProfile.experience_description2}</span>
              )}
            </div>
          </div>
          {/* {isEditing ? (
            <div className="AddBoxIcon4">
              <AddBoxIcon />
            </div>
          ) : (
            <span></span>
          )} */}
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="PortFolio">
            <h4 className="Portfolio-field">
              <strong>Portfolio</strong>
            </h4>
            <div className="Portfolio-url">
              <label>
                <strong>Portfolio URL :</strong>
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={employeeProfile.portfolio_url}
                  className="empprofile-entername-input"
                  onChange={(e) =>
                    setEmployeeProfile({
                      ...employeeProfile,
                      portfolio_url: e.target.value,
                    })
                  }
                />
              ) : (
                <span>{employeeProfile.portfolio_url}</span>
              )}
            </div>
            <br></br>
            <div className="GitHub-url">
              <label>
                <strong>Github URL :</strong>
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={employeeProfile.github_url}
                  className="empprofile-entername-input"
                  onChange={(e) =>
                    setEmployeeProfile({
                      ...employeeProfile,
                      github_url: e.target.value,
                    })
                  }
                />
              ) : (
                <span>{employeeProfile.github_url}</span>
              )}
            </div>
          </div>
          {/* {isEditing ? (
            <div className="AddBoxIcon5">
              <AddBoxIcon />
            </div>
          ) : (
            <span></span>
          )} */}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="Security">
            <h4 className="security-field">
              <strong>Security</strong>
            </h4>
            <div className="Password">
              <label>
                <strong>Password :</strong>
              </label>
              {isEditing ? (
                <input
                  type="password"
                  value={employeeProfile.password}
                  className="empprofile-entername-input"
                  onChange={(e) =>
                    setEmployeeProfile({
                      ...employeeProfile,
                      password: e.target.value,
                    })
                  }
                />
              ) : (
                <span>{employeeProfile.password}</span>
              )}
            </div>
          </div>
          {/* {isEditing ? (
            <div className="AddBoxIcon6">
              <AddBoxIcon />
            </div>
          ) : (
            <span></span>
          )} */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Employeeprofile;
