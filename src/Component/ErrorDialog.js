import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import '../Loginform/Loginform.css';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

function ErrorDialog({ open, onClose, message }) {

  const dialogTitleStyle = {
    fontSize: "20px", // Adjust the font size as needed
    color: "green",    // Adjust the color as needed
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle  style={dialogTitleStyle} >
        <ReportProblemOutlinedIcon className="error-btn"/> 
        "Password does not match"
         </DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ErrorDialog;
