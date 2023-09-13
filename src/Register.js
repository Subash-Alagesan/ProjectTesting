import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import './Registerform.css'
import { MDBFile } from 'mdb-react-ui-kit';


function Register() {

    return (

        <MDBContainer className='register'>

            <MDBCard className='m-4 ' style={{position:"sticky"}}>
                <MDBCardBody className='px-4 form-input'>

                    <MDBInput className='input' placeholder='User Name' size='md' id='form1' type='text' />
                    <br></br>
                    <MDBInput wrapperClass='mb-1' className='input' placeholder='Enter your Email' size='md' id='form2' type='email' />
                    <br></br>
                    <MDBInput wrapperClass='mb-1' className='input' placeholder='Enter Your Password' size='md' id='form3' type='password' />
                    <br></br>
                    <MDBInput wrapperClass='mb-1' className='input' placeholder='Phone Number' size='md' id='form4' type='password' />
                    <br></br>
                   <div className='upload-file ' size='md'>
                   <MDBFile  id='formFileDisabled'  />
                   </div>
                    <br></br>
                    <div className='d-flex  justify-content-left '>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' size='md' label='I agree to these Terms and Conditions.' />
                    </div>
                    <br></br>
                    <MDBBtn className='register-btn' >Register</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>

    );
}

export default Register;