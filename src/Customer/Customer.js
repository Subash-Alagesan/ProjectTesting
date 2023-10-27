import React, { useState, useEffect } from "react";
import axios from "../Component/Axios Base URL/axios";
import { useAuth } from "../Component/Helper/Context/AuthContext";
import "../Customer/Customer.css";
import { Grid } from "@mui/material";
import assignment from "../Assets/images/assignment_ind.png";
import group from "../Assets/images/group.png";
import contact from "../Assets/images/contact_page.png";
import badge from "../Assets/images/badge.png";
import personaddd from "../Assets/images/person_add.png";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";


function Customer({ handleViewClick }) {
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { setCustomerId } = useAuth();
  const [count, setCount] = useState();

  useEffect(() => {
    axios.get('/api/customer/getTotalCustomers')
      .then(response => {
        setCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching customer count:', error);
      });
  }, []);

  const columns = [
    {
      field: "customer_name",
      headerName: "Name",
      width: 180,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={`http://localhost:4070/uploads/images/${params.row.profile_pic}`}
            style={{ marginRight: "8px" }}
          />
          {params.value}
        </div>
      ),
    },
    {
      field: "business_number",
      headerName: "Contact Number",
      type: "contact number",
      width: 150,
    },
    {
      field: "business_name",
      headerName: "Business",
      sortable: true,
      width: 150,
    },
    { field: "business_place", headerName: "Place", width: 160 },
    {
      field: "View Details",
      headerName: "View Details",
      width: 120,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          style={{ background: "#6425FE" }}
          onClick={() => {
            const customerIdFromRow = params.row.customer_id; // Get the customer's ID from the row
            setCustomerId(customerIdFromRow); // Set the customerId in your context
            handleViewClick(customerIdFromRow); // Also pass the customerId to the handler
            console.log("Id Value from customer", customerIdFromRow);
          }}
        >
          View
        </Button>
      ),
    },
  ];

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    setSearchQuery(searchQuery); // Step 2: Update the search query state
  };

  // Filter the customers based on the search query
  const filteredCustomers = customers.filter((customer) =>
    customer.customer_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

 
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      // width: '50%',
      [theme.breakpoints.up("md")]: {
        width: "20ch",
        height: "16px",
      },
    },
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    // Define a function to fetch customer data
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("/api/customer/getallcustomer");
        console.log(response.data);
        if (response.data.customers) {
          setCustomers(response.data.customers);
        }
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    // Call the fetchCustomers function
    fetchCustomers();
  }, []);

  return (
    <Grid container spacing={2} className="customerdb-container">
      <Grid item xs={12} md={12} lg={12}>
        <Item>
          <div className="customerdb-title">
            <div>
              <img
                src={group}
                alt=""
                className="customerdb-container-group-img"
              />
            </div>
            <div>
              {" "}
              <h5 className="Customerdb-heading">Customer Database</h5>
            </div>
          </div>
          <Grid container spacing={1} className="customerdb-details">
            <Grid item xs={12} md={12} lg={3}>
              <div className="total-item1">
                <div>
                  <img
                    src={contact}
                    alt="contact-img"
                    className="customerdb-container-contact-img"
                  />
                </div>
                <div>
                  {" "}
                  <h5 className="Customerdb-totalCustomer">Total Customers</h5>
                  <p className="Total-content">{count}</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={3} >
              <div className="total-item1">
                <div>
                  <img
                    src={assignment}
                    alt="assignment-img"
                    className="customerdb-container-assignment-img"
                  />
                </div>
                <div>
                  {" "}
                  <h5 className="Customerdb-ourCustomer">Our Customers</h5>
                  <p className="Total-content">8</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={3}>
              <div className="total-item1">
                <div>
                  <img
                    src={badge}
                    alt=""
                    className="customerdb-container-badge-img"
                  />
                </div>
                <div>
                  {" "}
                  <h5 className="Customerdb-otherCustomer">Other Customers</h5>
                  <p className="Total-content">14</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={3}>
              <div className="total-item1">
                <div>
                  <img
                    src={personaddd}
                    alt=""
                    className="customerdb-container-personadd-img"
                  />
                </div>
                <div>
                  {" "}
                  <h5 className="Customerdb-newlyadded">Newly Added</h5>
                  <p className="Total-content">2</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Item>
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
      <Item>
          <div className="allcustomer-header">
            <div>
              <h4 className="All-Customers">All Customers</h4>
            </div>
            <div className="Search-content">
              <Search className="Search-bar">
                <SearchIcon />

                <StyledInputBase
                placeholder="Search Customers"
                inputProps={{ "aria-label": "search" }}
                value={searchQuery} // Step 3: Bind the search query value
                onChange={handleSearch} // Step 3: Handle search input change
              />
              </Search>
            </div>

            <div className="Form-Control">
              <FormControl
                sx={{ m: 1.5, minWidth: 120 }}
                size="small"
                style={{
                  background: "#F7F6F9",
                  borderRadius: "8px",
                }}
              >
                <InputLabel
                  style={{
                    fontSize: "15px",
                  }}
                >
                  Short By:
                </InputLabel>

                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="Datagrid-table">
            <DataGrid
               rows={filteredCustomers}
              columns={columns}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              getRowId={(row) => row.customer_id}
            />

            <Pagination
              className="pagination-content"
              count={5}
              color="secondary"
            />
          </div>
          </Item>
      </Grid>
    </Grid>
  );
}
export default Customer;
