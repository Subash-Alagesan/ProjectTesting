import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import logo from '../Assets/images/logo.png';



export default function Registerform(props) {
    const { title, children, openPopup, setopenPopup } = props;
    return (
        <Dialog open={openPopup} >
            <DialogTitle>


                <div className='Registration-Form'>
                    <div className='bms-img'>
                        <img src={logo} alt='logo.png' style={{ height: "30px", width: "55px" }} />
                    </div>
                    <div className='Registration' >
                   <strong>Registration Form</strong>
                   </div>

                </div>

            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>

        </Dialog>

    )
}