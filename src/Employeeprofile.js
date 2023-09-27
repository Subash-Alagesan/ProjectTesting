import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import './Employeeprofile.css'
import contact_page from './images/contact_page.png';
import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Avatar from '@mui/material/Avatar';
import { useState, useRef } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Input from '@mui/material/Input';


function Employeeprofile() {

    const [name, setName] = useState('');
    const [experience, setExperience] = useState('');
    const [designation, setDesignation] = useState('');
    const [Education, setEducation] = useState('');
    const [education1, seteducation1] = useState('');
    const [education2, seteducation2] = useState('');
    // const [Profile, setProfile] = useState('');
    const [dob, setDOB] = useState('');
    const [MaritalStatus, setMaritalStatus] = useState('');
    const [Gender, setGender] = useState('');
    const [Place, setPlace] = useState('');
    const [Skill1, setSkill1] = useState('');
    const [Skill2, setSkill2] = useState('');
    const [Skill3, setSkill3] = useState('');
    const [Skill4, setSkill4] = useState('');
    const [Experience1, setExperience1] = useState('');
    const [Experience2, setExperience2] = useState('');

    const [Mobile, setMobile] = useState('');
    const [Email, setEmail] = useState('');

    const [Alternative, setAlternative] = useState('');
    const [physicalchallenge, setphysicalchallenge] = useState('');
    const [portfolio, setportfolio] = useState('');
    const [github, setgithub] = useState('');



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


        <Grid container spacing={2} className="EmpDetail">
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <Item className="emp-grid1">
                    <div style={{ display: "flex" }}>

                        <div style={{ display: "flex" }}>
                            <img src={contact_page} alt='' className='Employeedb-profile-contact-img' />
                            <h5 className='Employeedb-title'>Employee Profile</h5>
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
                <Item className="emp-grid2">
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
                            <div className="Emp-name-content">
                                <div className="empprofile-input">

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

                                <div className="Experience">
                                    <label ><strong> Experience :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={experience}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setExperience(e.target.value)}
                                        />
                                    ) : (
                                        <span>{experience}</span>
                                    )}
                                </div>
                                <br></br>
                                <div>
                                    <label className="empprofile-entername"><strong>Designation :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={designation}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setDesignation(e.target.value)}
                                        />
                                    ) : (
                                        <span>{designation}</span>
                                    )}
                                </div>

                            </div>


                        </Grid>


                        <Grid xs={12} sm={12} md={5} lg={5}>
                            <div className="Emp-name-content1">
                                <div>
                                    <label className="education" ><strong>Education :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Education}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setEducation(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Education}</span>
                                    )}
                                </div>
                                <br></br>
                                <div>
                                    <label className="empprofile-education"><strong> Education 1:</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={education1}
                                            className="empprofile-entername-input"
                                            onChange={(e) => seteducation1(e.target.value)}
                                        />
                                    ) : (
                                        <span>{education1}</span>
                                    )}
                                </div>
                                <br></br>
                                <div>
                                    <label className="empprofile-education"><strong>Education 2:</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={education2}
                                            className="empprofile-entername-input"
                                            onChange={(e) => seteducation2(e.target.value)}
                                        />
                                    ) : (
                                        <span>{education2}</span>
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


                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="Personal_Information">
                                <h4 className="Info-field">Personal Information</h4>
                                <div className="Empprofile-Dob">
                                    <label ><strong>Date Of Birth :</strong></label>
                                    {isEditing ? (
                                        <input
                                        type="text"
                                        value={dob}
                                        className="empprofile-entername-input"
                                        onChange={(e) => setDOB(e.target.value)}
                                    />
                                        
                                    ) : (
                                        <span>{dob}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="empprofile-Marital">
                                    <label><strong>Marital Status : </strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={MaritalStatus}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setMaritalStatus(e.target.value)}
                                        />
                                    ) : (
                                        <span>{MaritalStatus}</span>
                                    )}
                                </div>
                                <br></br>

                                <div className="empprofile-Marital">
                                    <label><strong>Gender :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Gender}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Gender}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="empprofile-Marital">
                                    <label><strong>Place :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Place}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setPlace(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Place}</span>
                                    )}
                                </div>
                            </div>
                            {isEditing ? (
                                        <div className="AddBoxIcon1">
                                        <AddBoxIcon />
                                    </div>
        
                                    ) : (
                                        <span></span>
                                    )}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="Skills">
                                <h4 className="Skill-field">Skills</h4>
                                <div className="Skill1">
                                    <label  ><strong>Skill 1 :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Skill1}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setSkill1(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Skill1}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="Skill2" >
                                    <label><strong>Skill 2 :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Skill2}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setSkill2(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Skill2}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="Skill3">
                                    <label  ><strong>Skill 3 :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Skill3}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setSkill3(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Skill3}</span>
                                    )}
                                </div>
                                <br></br>

                                <div className="Skill4">
                                    <label  ><strong>Skill 4 :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Skill4}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setSkill4(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Skill4}</span>
                                    )}
                                </div>



                            </div>
                            {isEditing ? (
                                        <div className="AddBoxIcon2">
                                        <AddBoxIcon />
                                    </div>
        
                                    ) : (
                                        <span></span>
                                    )}
                        </Grid>

                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="Contact_Information">
                                <h4 className="Contact-field"><strong>Contact Details</strong></h4>
                                <div className="Empprofile-Mobileno">
                                    <label><strong>Mobile Number :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Mobile}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setMobile(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Mobile}</span>
                                    )}
                                </div>
                                <br></br>

                                <div className="Empprofile-EmailId">
                                    <label ><strong>Email Id :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="Email"
                                            value={Email}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Email}</span>
                                    )}
                                </div>
                            </div>
                            {isEditing ? (
                                        <div className="AddBoxIcon3">
                                        <AddBoxIcon />
                                    </div>
        
                                    ) : (
                                        <span></span>
                                    )}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="Experience">
                                <h4 className="Experience-field">Experience</h4>
                                <div className="Experience1">
                                    <label><strong>Experience 1 :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Experience1}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setExperience1(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Experience1}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="Experience2"  >
                                    <label ><strong>Experience 2 :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Experience2}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setExperience2(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Experience2}</span>
                                    )}
                                </div>

                            </div>
                            {isEditing ? (
                                        <div className="AddBoxIcon4">
                                        <AddBoxIcon />
                                    </div>
        
                                    ) : (
                                        <span></span>
                                    )}
                        </Grid>

                    </Grid>


                    <Grid container spacing={2} style={{ paddingTop: "30px" }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="Extra">
                                <h4 className="Extra-field">Extra</h4>
                                <div className="Extra1">
                                    <label><strong>Alternative Phone no:</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={Alternative}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setAlternative(e.target.value)}
                                        />
                                    ) : (
                                        <span>{Alternative}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="Extra2"  >
                                    <label ><strong>Physically Challenged :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={physicalchallenge}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setphysicalchallenge(e.target.value)}
                                        />
                                    ) : (
                                        <span>{physicalchallenge}</span>
                                    )}
                                </div>

                            </div>
                            {isEditing ? (
                                        <div className="AddBoxIcon5">
                                        <AddBoxIcon />
                                    </div>
        
                                    ) : (
                                        <span></span>
                                    )}

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>

                            <div className="Projects">
                                <h4 className="Projects-field">Projects</h4>
                                <div className="Projects1">
                                    <label><strong>Portfolio :</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={portfolio}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setportfolio(e.target.value)}
                                        />
                                    ) : (
                                        <span>{portfolio}</span>
                                    )}
                                </div>
                                <br></br>
                                <div className="Projects2"  >
                                    <label ><strong>Github:</strong></label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={github}
                                            className="empprofile-entername-input"
                                            onChange={(e) => setgithub(e.target.value)}
                                        />
                                    ) : (
                                        <span>{github}</span>
                                    )}
                                </div>

                            </div>
                            
                            {isEditing ? (
                                        <div className="AddBoxIcon6">
                                        <AddBoxIcon />
                                    </div>
        
                                    ) : (
                                        <span></span>
                                    )}

                        </Grid>

                    </Grid>
                    <div className="SaveAltIcon">
                    <SaveAltIcon />
                </div>
                </Item>
                
            </Grid>


        </Grid>
    );
}

export default Employeeprofile;