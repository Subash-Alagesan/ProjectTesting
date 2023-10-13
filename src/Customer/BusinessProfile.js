import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import './Businessprofile.css'
import contact_page from '../Assets/images/contact_page.png';
import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Avatar from '@mui/material/Avatar';
import { useState, useRef } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PublishIcon from '@mui/icons-material/Publish';
import FolderIcon from '@mui/icons-material/Folder';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Businessprofile() {

    const [name, setName] = useState('');
    const [BusinessName, setBusinessName] = useState('');
    const [EnterDetails, setEnterDetails] = useState('');
    const [BusinessType, setBusinessType] = useState('');
    const [BusinessType1, setBusinessType1] = useState('');
    const [Businessinfo, setBusinessinfo] = useState('');
    const [Place, setPlace] = useState('');
    const [District, setDistrict] = useState('');
    const [Language, setLanguage] = useState('');
    const [Facebook, setFacebook] = useState('');
    const [Instagram, setInstagram] = useState('');
    const [Twitter, setTwitter] = useState('');
    const [Youtube, setYoutube] = useState('');
    const [Website1, setWebsite1] = useState('');
    const [Contact, setContact] = useState('');
    const [Emailid, setEmailid] = useState('');
    const [Phonenumber, setPhonenumber] = useState('');
    const [OtherBusiness, setOtherBusiness] = useState('');
 

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {

        setIsEditing(true);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
    }));


    const [image, setImage] = useState(null);
    const hiddenFileInput = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const imgname = event.target.files[0].name;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const maxSize = Math.max(img.width, img.height);
                canvas.width = maxSize;
                canvas.height = maxSize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(
                    img,
                    (maxSize - img.width) / 2,
                    (maxSize - img.height) / 2
                );
                canvas.toBlob(
                    (blob) => {
                        const file = new File([blob], imgname, {
                            type: "image/png",
                            lastModified: Date.now(),
                        });

                        console.log(file);
                        setImage(file);
                    },
                    "image/jpeg",
                    0.8
                );
            };
        };
    };

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


        <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <Item className="Business-grid1">
                    <div style={{ display: "flex" }}>

                        <div style={{ display: "flex" }}>
                            <img src={contact_page} alt='' className='Businessdb-profile-contact-img' />
                            <h5 className='Businessdb-title'>Business Profile</h5>
                        </div>


                        {/* <div >
            <label className="Employeedb-profilename" ><strong>Profile Name :</strong></label>
            {isEditing ? (
              <input
                type="text"
                value={Profile}
                className="empprofile-entername-input"
                onChange={(e) => setProfile(e.target.value)}
              />
            ) : (
              <span>{Profile}</span>
            )}
            </div> */}

                        <div className="Edit-btn">
                            {isEditing ? (
                                <Button variant="contained" size="small" onClick={handleUpdateClick} endIcon={<CreateOutlinedIcon />}>
                                    Update
                                </Button>
                            ) : (
                                <Button variant="contained" size="small" onClick={handleEditClick} endIcon={<CreateOutlinedIcon />}>
                                    Edit
                                </Button>
                            )}
                        </div>
                    </div>
                </Item>
            </Grid>


            <Grid item xs={12} md={12} lg={12}>
                <Item className="Business-grid2">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={2} lg={2}>
                            <div className="box-decoration">

                                <div onClick={handleClick} style={{ cursor: "pointer" }}>

                                    {image ? (
                                        <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
                                    ) : (
                                        <Avatar sx={{ width: 150, height: 150 }}>
                                            <AddAPhotoIcon sx={{ width: 40, height: 40 }} />

                                        </Avatar>

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
                                    onClick={handleUploadButtonClick}
                                >
                                    Upload
                                </button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <div className="Business-name-content">
                                <div className="Businessprofile-input">

                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={name}
                                            placeholder="Name"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    ) : (

                                        <span>{name}</span>

                                    )}

                                </div>

                                <br></br>

                                <div className="BusinessName">
                                    <label ><strong> Business Name :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={BusinessName}                                   
                                            onChange={(e) => setBusinessName(e.target.value)}
                                        />
                                    ) : (
                                        <span>{BusinessName}</span>
                                    )}
                                </div>
                                <br></br>
                                <div>
                                    <label className="Businessprofile-entername"><strong>Enter Details :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={EnterDetails}                                          
                                            onChange={(e) => setEnterDetails(e.target.value)}
                                        />
                                    ) : (
                                        <span>{EnterDetails}</span>
                                    )}
                                </div>

                            </div>


                        </Grid>


                        <Grid xs={12} sm={12} md={5} lg={5}>
                            <div className="Business-name-content1">
                                <div>
                                    <label className="BusinessType" ><strong>Business Type :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={BusinessType}                                           
                                            onChange={(e) => setBusinessType(e.target.value)}
                                        />
                                    ) : (
                                        <span>{BusinessType}</span>
                                    )}
                                </div>
                                <br></br>
                                <div>
                                    <label className="profile-BusinessType"><strong> Type 1:</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={BusinessType1}                                  
                                            onChange={(e) => setBusinessType1(e.target.value)}
                                        />
                                    ) : (
                                        <span>{BusinessType1}</span>
                                    )}
                                </div>


                            </div>
                            {isEditing ? (
                                <div className="AddBoxIcon">
                                    <AddBoxIcon />
                                </div>

                            ) : (
                                <span></span>
                            )}

                        </Grid>
                    </Grid>
                    <hr
                        style={{
                            background: "#84828A",
                            height: "1px",

                        }}
                    />


                    <Grid container spacing={2} id="business-grid">
                        <Grid item xs={12} sm={12} md={4.5} lg={4.5} >
                            <div className="Business_Information">
                                <h4 className="Businessinfo-field">Business Information</h4>
                                <div className="Businessprofile-Name">
                                    <label ><strong>Business Name :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Businessinfo}                                  
                                            onChange={(e) => setBusinessinfo(e.target.value)}
                                        />

                                    ) : (
                                        <span>{Businessinfo}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="Businessprofile-Place">
                                    <label><strong>Business Place : </strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Place}                                   
                                            onChange={(e) => setPlace(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Place}</span>
                                    )}
                                </div>
                                <br></br>

                                <div className="Businessprofile-District">
                                    <label><strong>District :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={District}                                           
                                            onChange={(e) => setDistrict(e.target.value)}
                                        />
                                    ) : (
                                        <span>{District}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="Businessprofile-Language">
                                    <label><strong>Language :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Language}                                  
                                            onChange={(e) => setLanguage(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Language}</span>
                                    )}
                                </div>
                            </div>
                            {isEditing ? (
                                <div className="AddBox-Icon1">
                                    <AddBoxIcon />
                                </div>

                            ) : (
                                <span></span>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
                            <div className="Social Media">
                                <h4 className="SocialMedia-field">Social Media Links</h4>
                                <div className="Media1">
                                    <label  ><strong>Facebook :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Facebook}
                                            onChange={(e) => setFacebook(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Facebook}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="Media2" >
                                    <label><strong>Instagram :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Instagram}
                                            onChange={(e) => setInstagram(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Instagram}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="Media3">
                                    <label  ><strong>Twitter :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Twitter}
                                            onChange={(e) => setTwitter(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Twitter}</span>
                                    )}
                                </div>
                                <br></br>

                                <div className="Media4">
                                    <label  ><strong>You tube :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Youtube}
                                            onChange={(e) => setYoutube(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Youtube}</span>
                                    )}
                                </div>

                            </div>
                            {isEditing ? (
                                <div className="AddBox-Icon2">
                                    <AddBoxIcon />
                                </div>

                            ) : (
                                <span></span>
                            )}
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <div className="Upload">
                                <h4 className="Upload-field">Upload Files </h4>
                                <div className="Upload1">
                                    <Button size="small" startIcon={< PublishIcon className="icons"/>} className="Publish-Icon">
                                        <h6>Upload</h6>
                                    </Button>
                                </div>


                                <br></br>
                                <h4 className="Upload-field1">Uploaded Files </h4>
                                <div className="Upload2">

                                    <div className="Folder-Icon">
                                        <Button size="small" startIcon={< FolderIcon   className="icons"/>} className="FolderIcon-logo" endIcon={< MoreVertIcon  className="icons"/>}>
                                            <h6>Logo</h6>
                                        </Button>
                                    </div>

                                    <div className="Folder-Icon1"> <Button size="small" color="primary" className="FolderIcon-analy" startIcon={< FolderIcon  className="icons" />} endIcon={< MoreVertIcon  className="icons" />} >
                                        <h6>Analysis</h6>
                                    </Button></div>

                                </div>

                            </div>
                            {isEditing ? (
                                <div className="AddBox-Icon3">
                                    <AddBoxIcon />
                                </div>

                            ) : (
                                <span></span>
                            )}
                        </Grid>

                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <div className="Contact_Information">
                                <h4 className="BusinessContact-field"><strong>Contact Details</strong></h4>
                                <div className="Business-Mobileno">
                                    <label><strong>Business No :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Contact}
                                            onChange={(e) => setContact(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Contact}</span>
                                    )}
                                </div>
                                <br></br>

                                <div className="Businessprofile-EmailId">
                                    <label ><strong>Email Id :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="Email"
                                            value={Emailid}
                                            onChange={(e) => setEmailid(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Emailid}</span>
                                    )}
                                </div>
                            </div>
                            {isEditing ? (
                                <div className="AddBox-Icon4">
                                    <AddBoxIcon />
                                </div>

                            ) : (
                                <span></span>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <div className="Website">
                                <h4 className="Website-field">Website</h4>
                                <div className="Website1">
                                    <label><strong>Website 1:</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Website1}
                                            onChange={(e) => setWebsite1(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Website1}</span>
                                    )}
                                </div>

                            </div>
                            {isEditing ? (
                                <div className="AddBox-Icon5">
                                    <AddBoxIcon />
                                </div>

                            ) : (
                                <span></span>
                            )}
                        </Grid>

                    </Grid>


                    <Grid container spacing={2} style={{ paddingTop: "30px" }}>
                        <Grid item xs={12} sm={12} md={5} lg={5}>
                            <div className="Owner">
                                <h4 className="Owner-field">Owner Details</h4>
                                <div className="Owner1">
                                    <label><strong>Phone no:</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Phonenumber}
                                            onChange={(e) => setPhonenumber(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Phonenumber}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="Owner2"  >
                                    <label ><strong>Other Business :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={OtherBusiness}
                                            onChange={(e) => setOtherBusiness(e.target.value)}
                                        />
                                    ) : (
                                        <span>{OtherBusiness}</span>
                                    )}
                                </div>

                            </div>

                        </Grid>

                    </Grid>
                    <div className="SaveAltIcon1">
                        <SaveAltIcon />
                    </div>
                </Item>

            </Grid>


        </Grid>
    );
}

export default Businessprofile;