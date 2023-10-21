import * as React from "react";
import axios from "../Component/Axios Base URL/axios";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PublishIcon from "@mui/icons-material/Publish";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import "./AddCustomer.css";
import { TextField } from "@mui/material";

const AddCustomer = () => {
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [customerProfile, setCustomerProfile] = useState({
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
    facebook:"",
    instagram:"",
    youtube:"",
    linkedin:"",
    twitter:"",
    website_address: "",
    profile_pic: null,
    document: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerProfile({
      ...customerProfile,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    if (file) {
      setCustomerProfile({
        ...customerProfile,
        profile_pic: file,
      });
      console.log("Updated customerProfile:", customerProfile);
    }
  };

  const handleDocumentUpload = (e) => {
    const file = e.target.files[0];
    console.log("Selected File", file);
    if (file) {
      setCustomerProfile({
        ...customerProfile,
        document: file,
      });
      setUploadedFileName(file.name);
      console.log("Fetching File", file);
    }
  };
  const handleSubmit = async () => {
    const formData = new FormData();

    for (const key in customerProfile) {
      formData.append(key, customerProfile[key]);
    }
    
    try {
      const response = await axios.post(
        "/api/customer/createcustomer",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Added Successfully");
      }
    } catch (error) {
      console.error("Error while sending data: ", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>    
      <Grid container spacing={2} className="overall-gird">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className="Customer-profile-name">
            <h5 className="Customer-profile-title">Business Profile</h5>
          </div>
        </Grid>       
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <label
            className="cus-image"
            htmlFor="fileInput"
            style={{ cursor: "pointer" }}
          >
            {customerProfile.profile_pic ? (
              // If an image is selected, display it
              <img
                src={URL.createObjectURL(customerProfile.profile_pic)}
                alt="Selected Image"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
            ) : (
              // If no image is selected, display the avatar
              <Avatar sx={{ width: 150, height: 150 }} >
                <AddAPhotoIcon sx={{ width: 40, height: 40 }} />
              </Avatar>
            )}
          </label>
          <input
          className="cus-image"
            type="file"
            name="profile_pic"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </Grid>

        {/* Customer Name */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="Cus-name-content">
            <div className="Cus-profile-input">
       
            <TextField
          label="Enter  Name"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
                type="text"
                name="customer_name"
                value={customerProfile.customer_name}
                onChange={handleInputChange}
        />

             
</div>
            
            <div className="CusName">
             
<TextField
          label="Business Name"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
          name="business_name"
          value={customerProfile.business_name}
          onChange={handleInputChange}
        />
            </div>
            <div className="Cus-name-content1">
            <div className="Cus-name-content2">
             
<TextField
          label="Business Type"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
                name="business_type"
                value={customerProfile.business_type}
                onChange={handleInputChange}
        />
            </div>
            {/* <div className="AddBoxIcon">
              <AddBoxIcon />
            </div> */}
          </div>
          </div>
        </Grid>

        {/* Business Information */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="Business-Information">
            <h4 className="Business-field">Business Information</h4>
            <div className="Business-Name">
              

<TextField
          label="Business Name"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
          name="business_name"
          value={customerProfile.business_name}
          onChange={handleInputChange}
        />
            </div>
            <div className="Business-Place">
             
<TextField
          label="Business Place"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
                name="business_place"
                value={customerProfile.business_place}
                onChange={handleInputChange}
        />
            </div>
            <div className="Business-District">
             
<TextField
          label="District"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
                name="district"
                value={customerProfile.district}
                onChange={handleInputChange}
        />
            </div>
            <div className="Business-Language">
             
<TextField
          label="Language"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
                name="language"
                value={customerProfile.language}
                onChange={handleInputChange}
        />
            </div>
            {/* <div className="AddBox-Icon1">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="Social-media">
            <h4 className="Socialmedia-field">Social Media Links</h4>
            <div className="Media-1">
              

<TextField
          label="Facebook"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
          name="facebook"
          value={customerProfile.facebook}
          onChange={handleInputChange}
        />
            </div>
            <div className="Media-2">
              
<TextField
          label="Instagram"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
                name="instagram"
                value={customerProfile.instagram}
                onChange={handleInputChange}
        />
            </div>
            <div className="Media-3">
             
<TextField
          label="Youtube"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
          name="youtube"
          value={customerProfile.youtube}
          onChange={handleInputChange}
        />
            </div>
            <div className="Media-4">
             
              <TextField
          label="LinkedIn"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
                name="linkedin"
                value={customerProfile.linkedin}
                onChange={handleInputChange}
        />
            </div>
            <div className="Media-5">
              
<TextField
          label="Twitter"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
                name="twitter"
                value={customerProfile.twitter}
                onChange={handleInputChange}
        />
            </div>

            {/* <div className="AddBox-Icon2">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>


        {/* Contact Details */}
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className="Contact_Information">
            <h4 className="BusinessContact-field">
              <strong>Contact Details</strong>
            </h4>
            <div className="Business-Mobileno">
           
<TextField
          label="Business No"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
                name="business_number"
                value={customerProfile.business_number}
                onChange={handleInputChange}
        />
            </div>
            <div className="Businessprofile-EmailId">
              

<TextField
          label="Email Id"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
          name="email"
          value={customerProfile.email}
          onChange={handleInputChange}
        />
            </div>
            {/* <div className="AddBox-Icon4">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>

        {/* Website */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Website">
            <h4 className="Website-field">Website</h4>
            <div className="Website1">
              
<TextField
          label="Website 1"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
                name="website_address"
                value={customerProfile.website_address}
                onChange={handleInputChange}
        />
            </div>
            <div>{/* <button>Add Customer</button> */}</div>
            {/* <div className="AddBox-Icon5">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>

          {/* Upload Files */}
          <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="Upload">
            <h4 className="Upload-field">Upload Files</h4>
            <div className="Upload1">
              <Button
                size="small"
                startIcon={<PublishIcon className="icons" />}
                onClick={() => {
                  const documentInput =
                    document.getElementById("documentInput");
                  if (documentInput) {
                    documentInput.click();
                  }
                }}
              >
                <h6>Upload</h6>
              </Button>
            </div>
            <input
              type="file"
              id="documentInput"
              name="document"
              accept=".pdf, .doc, .docx" 
              style={{ display: "none" }}
              onChange={handleDocumentUpload}
            />
            {uploadedFileName && <p>Uploaded File: {uploadedFileName}</p>}
            {/* <div className="AddBox-Icon3">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>

   {/* Owner Details */}

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className="Contact_Information">
            <h4 className="BusinessContact-field">
              <strong>Owner Details</strong>
            </h4>
            <div className="Business-Mobileno">
              
<TextField
          label="Phone No"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
                name="business_number"
                value={customerProfile.phone_number}
                onChange={handleInputChange}
        />
            </div>
            <div className="Businessprofile-EmailId">
             
<TextField
          label="Other Business"
           id="outlined-size-small"
          defaultValue="Small"
          size="small"
          className="txt-field"
          type="text"
                name="business_category"
                value={customerProfile.business_category}
                onChange={handleInputChange}
        />
            </div>
            {/* <div className="AddBox-Icon4">
              <AddBoxIcon />
            </div> */}
          </div>
        </Grid>

        <div className="submit-btn">
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

export default AddCustomer;
