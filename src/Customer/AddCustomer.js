import * as React from "react";
import "./Businessprofile.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PublishIcon from "@mui/icons-material/Publish";
import FolderIcon from "@mui/icons-material/Folder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import {  Modal } from '@material-ui/core';
import './AddCustomer.css';

const  AddCustomer = () => {

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
    social_media_link: "",
    website_address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerProfile({
      ...customerProfile,
      [name]: value,
    });
  };

  return (  
    <Grid container spacing={2} >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className="Customer-profile-contact">
          {/* <img src={AddAPhotoIcon} alt="Profile" className="Customer-profile-contact-img" /> */}
          <h5 className="Customer-profile-title">Customer Profile</h5>
          <button>Add Customer</button>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className="box-decoration">
          <div style={{ cursor: "pointer" }}>
            <Avatar sx={{ width: 150, height: 150 }}>
              <AddAPhotoIcon sx={{ width: 40, height: 40 }} />
            </Avatar>
          </div>
          <button className="image-upload-button">Upload</button>
        </div>
      </Grid>

      {/* Customer Name */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className="Customer-name-content">
          <div className="Customer-profile-input">
            <input
              type="text"
              name="customer_name"
              value={customerProfile.customer_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="CustomerName">
            <label>
              <strong> Business Name :</strong>
            </label>
            <input
              type="text"
              name="business_name"
              value={customerProfile.business_name}
              onChange={handleInputChange}
            />
          </div>
          
        </div>
      </Grid>

      {/* Business Type */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className="Customer-name-content1">
          <div>
            <label className="BusinessType">
              <strong>Business Type :</strong>
            </label>
            <input
              type="text"
              name="business_type"
              value={customerProfile.business_type}
              onChange={handleInputChange}
            />
          </div>
          <div className="AddBoxIcon">
            <AddBoxIcon />
          </div>
        </div>
      </Grid>

      {/* Business Information */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className="Business_Information">
          <h4 className="Businessinfo-field">Business Information</h4>
          <div className="Businessprofile-Name">
            <label>
              <strong>Business Name :</strong>
            </label>
            <input
              type="text"
              name="business_name"
              value={customerProfile.business_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="Businessprofile-Place">
            <label>
              <strong>Business Place :</strong>
            </label>
            <input
              type="text"
              name="business_place"
              value={customerProfile.business_place}
              onChange={handleInputChange}
            />
          </div>
          <div className="Businessprofile-District">
            <label>
              <strong>District :</strong>
            </label>
            <input
              type="text"
              name="district"
              value={customerProfile.district}
              onChange={handleInputChange}
            />
          </div>
          <div className="Businessprofile-Language">
            <label>
              <strong>Language :</strong>
            </label>
            <input
              type="text"
              name="language"
              value={customerProfile.language}
              onChange={handleInputChange}
            />
          </div>
          <div className="AddBox-Icon1">
            <AddBoxIcon />
          </div>
        </div>
      </Grid>

      {/* Social Media Links */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className="Social Media">
          <h4 className="SocialMedia-field">Social Media Links</h4>
          <div className="Media1">
            <label>
              <strong>Facebook :</strong>
            </label>
            <input
              type="text"
              name="social_media_link"
              value={customerProfile.social_media_link}
              onChange={handleInputChange}
            />
          </div>
          <div className="Media2">
            <label>
              <strong>Instagram :</strong>
            </label>
            <input
              type="text"
              name="social_media_link"
              value={customerProfile.social_media_link}
              onChange={handleInputChange}
            />
          </div>
          <div className="Media3">
            <label>
              <strong>Twitter :</strong>
            </label>
            <input
              type="text"
              name="social_media_link"
              value={customerProfile.social_media_link}
              onChange={handleInputChange}
            />
          </div>
          <div className="Media4">
            <label>
              <strong>You tube :</strong>
            </label>
            <input
              type="text"
              name="social_media_link"
              value={customerProfile.social_media_link}
              onChange={handleInputChange}
            />
          </div>
          <div className="AddBox-Icon2">
            <AddBoxIcon />
          </div>
        </div>
      </Grid>

      {/* Upload Files */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className="Upload">
          <h4 className="Upload-field">Upload Files</h4>
          <div className="Upload1">
            <Button size="small" startIcon={<PublishIcon className="icons"/>}>
              <h6>Upload</h6>
            </Button>
          </div>
          <h4 className="Upload-field1">Uploaded Files</h4>
          <div className="Upload2">
            <div className="Folder-Icon">
              <Button size="small" startIcon={<FolderIcon className="icons" />} endIcon={<MoreVertIcon className="icons"/>}>
                <h6>Logo</h6>
              </Button>
            </div>
            <div className="Folder-Icon1">
              <Button size="small" color="primary" startIcon={<FolderIcon className="icons" />} endIcon={<MoreVertIcon className="icons"/>}>
                <h6>Analysis</h6>
              </Button>
            </div>
          </div>
          <div className="AddBox-Icon3">
            <AddBoxIcon />
          </div>
        </div>
      </Grid>

      {/* Contact Details */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className="Contact_Information">
          <h4 className="BusinessContact-field">
            <strong>Contact Details</strong>
          </h4>
          <div className="Business-Mobileno">
            <label>
              <strong>Business No :</strong>
            </label>
            <input
              type="text"
              name="business_number"
              value={customerProfile.business_number}
              onChange={handleInputChange}
            />
          </div>
          <div className="Businessprofile-EmailId">
            <label>
              <strong>Email Id :</strong>
            </label>
            <input
              type="text"
              name="email"
              value={customerProfile.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="AddBox-Icon4">
            <AddBoxIcon />
          </div>
        </div>
      </Grid>

      {/* Website */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className="Website">
          <h4 className="Website-field">Website</h4>
          <div className="Website1">
            <label>
              <strong>Website 1:</strong>
            </label>
            <input
              type="text"
              name="website_address"
              value={customerProfile.website_address}
              onChange={handleInputChange}
            />
          </div>
          <div>
          <button>Add Customer</button>
          </div>
          <div className="AddBox-Icon5">
            <AddBoxIcon />
           
          </div>
        </div>
      </Grid>
    </Grid>


  );
}

export default AddCustomer;
