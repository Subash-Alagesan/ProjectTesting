import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import contact_page from "../Assets/images/contact_page.png";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Avatar from "@mui/material/Avatar";

function NewBusiness() {
  const [isEditing, setIsEditing] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const imageBaseUrl = "http://localhost:4070/uploads/images/";
  const hiddenFileInput = useRef(null);

  const [formData, setFormData] = useState({
    customer_name: "",
    business_name: "",
    business_type: "",
    business_category: "",
    business_place: "",
    district: "",
    language: "",
    business_number: "",
    email: "",
    phone_number: "",
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    twitter: "",
    website_address: "",
    profile_pic: null,
    document: null,
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleClick = (event) => {
    if (isEditing) {
      hiddenFileInput.current.click();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected image:", file);
    // Update the new image
    setNewImage(file);
  };

  return (
    <form encType="multipart/form-data">

    <Grid container spacing={2}>

<Grid item xs={12} sm={12} md={12} lg={12}>
          <Item className="Business-grid1">
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <img
                  src={contact_page}
                  alt=""
                  className="Businessdb-profile-contact-img"
                />
                <h5 className="Businessdb-title">Business Profile</h5>
              </div>
              <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>

            
            </div>
          </Item>
        </Grid>


        <Grid item xs={12} md={12} lg={12}>
          


        <Grid container spacing={3}>

        <Grid item xs={12} md={4} lg={4}>
                <Item>
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
                              src={`${imageBaseUrl}${formData.profile_pic}`}
                              alt="Profile Picture"
                              style={{ width: "100%", height: "auto" }}
                            />
                          )}
                          <input
                            id="image-upload-input"
                            type="file"
                            onChange={handleImageChange}
                            ref={hiddenFileInput}
                            style={{ display: "none", width: 150, height: 150 }}
                          />
                        </>
                      ) : (
                        <Avatar
                          sx={{ width: 150, height: 150 }}
                          src={`${imageBaseUrl}${formData.profile_pic}`}
                        />
                      )}
                    </div>
                  </div>
                </Item>
              </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5}>
                <div className="Business-name-content">

                
                  <div className="Businessprofile-input">
                  <label>
                      <strong> Name :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="customer_name"
                        value={formData.customer_name}
                        placeholder="Name"
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.customer_name}</span>
                    )}
                  </div>

                  <br></br>

                  <div className="BusinessName">
                    <label>
                      <strong> Business Name :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="business_name"
                        value={formData.business_name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.business_name}</span>
                    )}
                  </div>

                  <br></br>
                </div>
                </Grid>

       <Grid xs={12} sm={12} md={5} lg={5}>
                <div className="Business-name-content1">
                  <div>
                    <label className="BusinessType">
                      <strong>Business Type :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="business_type"
                        value={formData.business_type}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.business_type}</span>
                    )}
                  </div>
                  <br></br>
                  <div>
                    <label className="profile-BusinessType">
                      <strong> Business Category:</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="business_category"
                        value={formData.business_category}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.business_category}</span>
                    )}
                  </div>
                </div>
              </Grid>


</Grid>







              <Grid container spacing={2} id="business-grid">
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <div className="Business_Information">
                  <h4 className="Businessinfo-field">Business Information</h4>
                  <div className="Businessprofile-Name">
                    <label>
                      <strong>Business Name :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="business_name"
                        value={formData.business_name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.business_name}</span>
                    )}
                  </div>
                  <br></br>
                  <div className="Businessprofile-Place">
                    <label>
                      <strong>Business Place : </strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="business_place"
                        value={formData.business_place}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.business_place}</span>
                    )}
                  </div>
                  <br></br>

                  <div className="Businessprofile-District">
                    <label>
                      <strong>District :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.district}</span>
                    )}
                  </div>
                  <br></br>
                  <div className="Businessprofile-Language">
                    <label>
                      <strong>Language :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.language}</span>
                    )}
                  </div>
                </div>
                
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <div className="Social Media">
                  <h4 className="SocialMedia-field">Social Media Links</h4>
                  <div className="Media1">
                    <label>
                      <strong>Facebook :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.facebook}</span>
                    )}
                    <label>
                      <strong>Instagram :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.instagram}</span>
                    )}
                    <label>
                      <strong>Youtube :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="youtube"
                        value={formData.youtube}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.youtube}</span>
                    )}
                    <label>
                      <strong>LinkedIn :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.linkedin}</span>
                    )}
                    <label>
                      <strong>Twitter :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.twitter}</span>
                    )}
                  </div>
                  <br></br>
                </div>
               
              </Grid>

             
              <div className="Upload2">
                {Array.isArray(formData.document) ? (
                  formData.document.map((document, index) => (
                    <div key={index} className="Uploaded-Document">
                      {/* <span>{getFileNameFromPath(document.path)}</span> */}
                      {isEditing && (
                        <Button
                          size="small"
                          color="primary"
                          className="Delete-Document-Button"
                          startIcon={<DeleteIcon className="icons" />}
                        //   onClick={() => handleDeleteDocument(index)}
                        >
                          Delete
                        </Button>
                      )}
                    </div>
                  ))
                ) : (
                  <span>No documents uploaded</span>
                )}
              </div>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <div className="Contact_Information">
                  <h4 className="BusinessContact-field">
                    <strong>Contact Details</strong>
                  </h4>
                  <div className="Business-Mobileno">
                    <label>
                      <strong>Business No :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="business_number"
                        value={formData.business_number}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.business_number}</span>
                    )}
                  </div>
                  <br></br>

                  <div className="Businessprofile-EmailId">
                    <label>
                      <strong>Email Id :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.email}</span>
                    )}
                  </div>
                </div>
               
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <div className="Website">
                  <h4 className="Website-field">Website</h4>
                  <div className="Website1">
                    <label>
                      <strong>Website :</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="website_address"
                        value={formData.website_address}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.website_address}</span>
                    )}
                  </div>
                </div>
                
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{ paddingTop: "30px" }}>
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <div className="Owner">
                  <h4 className="Owner-field">Owner Details</h4>
                  <div className="Owner1">
                    <label>
                      <strong>Phone no:</strong>
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{formData.phone_number}</span>
                    )}
                  </div>
                  <br></br>
                </div>
              </Grid>
            </Grid>

           
        </Grid>
               
              </Grid>

              </form>      
              
  );
}

export default NewBusiness;