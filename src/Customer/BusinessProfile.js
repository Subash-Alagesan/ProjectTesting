import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Component/Axios Base URL/axios";
import { useAuth } from "../Component/Helper/Context/AuthContext";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Businessprofile.css";
import contact_page from "../Assets/images/contact_page.png";
import Button from "@mui/material/Button";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Avatar from "@mui/material/Avatar";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import PublishIcon from "@mui/icons-material/Publish";
import FolderIcon from "@mui/icons-material/Folder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";

function Businessprofile() {
  const { customerId } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [newDocument, setNewDocument] = useState(null);
  const imageBaseUrl = "http://localhost:4070/uploads/images/";
  const DocumentBaseUrl = "http://localhost:4070/uploads/documents/";
  const hiddenDocumentInput = useRef(null);
  const hiddenFileInput = useRef(null);
  const navigate = useNavigate();

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
    profile_pic: "",
    document: "",
  });

  useEffect(() => {
    if (!isEditing) {
      console.log("Fetching customer data for customerId:", customerId);
      axios
        .get(`/api/customer/getcustomerbyid/${customerId}`)
        .then((response) => {
          const customerData = response.data.customer;
          setFormData({
            ...customerData,
            profile_pic: customerData.profile_pic,
            document: customerData.file_name,
          });
          console.log("After Fetching from customer by id", customerData);
        })
        .catch((error) => {
          console.error("Error fetching customer data:", error);
        });
    }
  }, [customerId, isEditing]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected image:", file);
    // Update the new image
    setFormData({
      ...formData,
      profile_pic: file,
    });
    setNewImage(file);
  };

  const handleDocumentChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFormData({
      ...formData,
      document: file,
    });
    setNewDocument(file);
  };

  const handleClick = (event) => {
    if (isEditing) {
      hiddenFileInput.current.click();
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Value: ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("after input change", formData);
  };

  const handleDeleteDocument = (documentIndexToDelete) => {
    const updatedDocuments = formData.document.filter(
      (_, index) => index !== documentIndexToDelete
    );
    setFormData({
      ...formData,
      document: updatedDocuments,
    });
  };

  function getFileNameFromPath(path) {
    if (path) {
      const parts = path.split("/");
      if (parts.length > 0) {
        return parts[parts.length - 1];
      }
    }
    return "";
  }

  const handleUpdateClick = () => {
    console.log("isEditing:", isEditing);
    const formDataForUpdate = new FormData();
    // Append profile_pic (if new image is selected)
    if (newImage) {
      formDataForUpdate.append("profile_pic", newImage);
    }else{
      formDataForUpdate.append("profile_pic", formData.profile_pic);
    }

    // Append document (if new document is selected)
    if (newDocument) {
      formDataForUpdate.append("document", newDocument);
    }

    // Iterate over all other fields and append them to formDataForUpdate
    for (const key in formData) {
      if (key !== "document" && key !== "profile_pic") {
        formDataForUpdate.append(key, formData[key]);
      }
    }

    console.log("Document is", formData.document);
    axios
      .put(`/api/customer/updatecustomer/${customerId}`, formDataForUpdate, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const customerData = response.data;
        console.log("Update Successful", customerData);
        alert("Update Successfull!!!");
        setFormData({
          ...formData,
          profile_pic: customerData.profile_pic,
          document: customerData.file_name,
        });
        navigate("/");

        setIsEditing(false);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Update Failed", error);
      });
  };
  console.log("formdata profile_pic", formData.profile_pic);
  return (
    <form encType="multipart/form-data" onSubmit={(e) => e.preventDefault()}>
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

              <div className="Edit-btn">
                {isEditing ? (
                  <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    onClick={() => handleUpdateClick()}
                    endIcon={<CreateOutlinedIcon />}
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    type="button"
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
                        style={{ display: "none" }}
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
            </Grid>

            <Grid item xs={12} sm={12} md={5} lg={5}>
              <div className="Business-name-content">
                <div className="Businessprofile-input">
                  {isEditing ? (
                    <input
                      type="text"
                      name="customer_name"
                      value={formData.customer_name}
                      placeholder="Name"
                      onChange={(e) => handleInputChange(e)}
                    />
                  ) : (
                    <span>{formData.customer_name}</span>
                  )}
                </div>

                <br></br>

                <div className="BusinessName">
                  <label>Business Name :</label>
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
                <div className="profile-BusinessCategory">
                  <label>Business Category:</label>
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

                <br></br>
              </div>
            </Grid>

            <Grid xs={12} sm={12} md={5} lg={5}>
              <div className="Business-type-content1">
                <div className="BusinessType">
                  <label>Business Type :</label>
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
              </div>
            </Grid>
          </Grid>
          <hr
            style={{
              background: "#84828A",
              height: "1px",
            }}
          />
          <Grid container spacing={2} id="business-grid">
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className="Business_Information">
                <h4 className="Businessinfo-field">Business Information</h4>
                <div className="Businessprofile-Name">
                  <label>Business Name :</label>
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
                  <label>Business Place :</label>
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
                  <label>District :</label>
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
                  <label>Language :</label>
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
              <div className="Social-Media">
                <h4 className="SocialMedia-field">Social Media Links</h4>
                <div className="Media">
                  <div className="Media1">
                    <label>Facebook :</label>
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
                  </div>
                  <div className="Media2">
                    <label>Instagram :</label>
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
                  </div>
                  <div className="Media3">
                    <label>Youtube :</label>
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
                  </div>

                  <div className="Media4">
                    <label>LinkedIn :</label>
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
                  </div>
                  <div className="Media5">
                    <label>Twitter :</label>
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
                </div>
                <br></br>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className="Uploads">
                <h4 className="Upload-field">Upload Files</h4>
                {/* {Array.isArray(formData.document) ? (
                  formData.document.file_name (
                    <div key={index} className="Uploaded-Document">
                      <span>{getFileNameFromPath(document.path)}</span>
                      {isEditing && (
                        <Button
                          size="small"
                          color="primary"
                          className="Delete-Document-Button"
                          startIcon={<DeleteIcon className="icons" />}
                          onClick={() => handleDeleteDocument(index)}
                        >
                          Delete
                        </Button>
                      )}
                    </div>
                  )
                  ) : (
                  <span>No documents uploaded</span>
                )} */}
                {/* {isEditing && (
                  <>
                 
                    <button
                      type="button"
                      onClick={() => hiddenDocumentInput.current.click()}
                    >
                      Upload New Document
                    </button>
                    <input
                      type="file"
                      accept=".pdf, .doc, .docx" // Add the accepted file types
                      onChange={handleDocumentChange}
                      ref={hiddenDocumentInput}
                      style={{ display: "none" }}
                    />
                    {formData.document && (
                      <p>Selected Document: {formData.document}</p>
                    )}
                  </>
                )} */}
                <span>{formData?.document}</span>

                {isEditing && (
                  <>
                    {newDocument ? (
                      <p>Selected Document: {newDocument.name}</p>
                    ) : (
                      <button
                        type="button"
                        onClick={() => hiddenDocumentInput.current.click()}
                      >
                        Upload New Document
                      </button>
                    )}

                    <input
                      type="file"
                      accept=".pdf, .doc, .docx"
                      onChange={handleDocumentChange}
                      ref={hiddenDocumentInput}
                      style={{ display: "none" }}
                    />
                  </>
                )}
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <div className="Contact-Information">
                <h4 className="BusinessContact-field">Contact Details</h4>
                <div className="Business-Mobileno">
                  <label>Business No :</label>
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
                  <label>Email Id :</label>
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
              {/* {isEditing ? (
                <div className="AddBox-Icon4">
                  <AddBoxIcon />
                </div>
              ) : (
                <span></span>
              )} */}
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <div className="Website">
                <h4 className="Website-field">Website</h4>
                <div className="Website1">
                  <label>Website :</label>
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
              {/* {isEditing ? (
                <div className="AddBox-Icon5">
                  <AddBoxIcon />
                </div>
              ) : (
                <span></span>
              )} */}
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ paddingTop: "30px" }}>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <div className="Owner">
                <h4 className="Owner-field">Owner Details</h4>
                <div className="Owner1">
                  <label>Phone no:</label>
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
          <div className="SaveAltIcon1">
            <SaveAltIcon />
          </div>
        </Grid>
      </Grid>
    </form>
  );
}

export default Businessprofile;
