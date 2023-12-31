import React, { useState ,useEffect} from "react";
import { useAuth } from "../Component/Helper/Context/AuthContext";
import "./Employee.css";
import axios from "../Component/Axios Base URL/axios";
import { Grid } from "@mui/material";
import assignment from "../Assets/images/assignment_ind.png";
import group from "../Assets/images/group.png";
import contact from "../Assets/images/contact_page.png";
import badge from "../Assets/images/badge.png";
import personaddd from "../Assets/images/person_add.png";
import { DataGrid } from "@mui/x-data-grid";
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

function Employee({ handleEmpClick }) {

  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { setEmployeeId } = useAuth();
  const [count, setCount] = useState();

  useEffect(() => {
    axios.get('/api/emp/getTotalEmployees')
      .then(response => {
        setCount(response.data.count);
      })
      .catch(error => {
        console.error('Error fetching employee count:', error);
      });
  }, []);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 180,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            src={`http://localhost:4070/uploads/images/${params.row.profile_pic}`}
            style={{ marginRight: "8px" }}
          />
          {params.value}
          {console.log(params.value)}
        </div>
      ),
    },
    {
      field: "mobile_number",
      headerName: "Contact Number",
      type: "contact number",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      sortable: true,
      width: 150,
    },
    { field: "experience", headerName: "Experience", width: 160 },
    {
      field: "View Details",
      headerName: "View Details",
      width: 100,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          style={{ background: "#6425FE" }}
          onClick={() => {
            const employeeIdForRow = params.row.employee_id;
            handleEmpClick(employeeIdForRow);
          setEmployeeId(employeeIdForRow);}}
        >
          view
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
  const filteredEmployees = employees.filter((employees) =>
  employees.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const SearchIconWrapper = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }));

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
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("/api/emp/getallemployees");
        console.log("Fetching All Employees", response.data);
        if (response.data.employees) {
          setEmployees(response.data.employees);
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    fetchEmployees();
  }, []);

  console.log("employees state:", employees);

  return (
    <Grid container spacing={2} className="Employeedb-container">
      <Grid item xs={12} md={12} lg={12}>
        <Item>
          <div className="Employeedb-title">
            <div>
              <img
                src={group}
                alt=""
                className="Employeedb-container-group-img"
              />
            </div>
            <div>
              {" "}
              <h5 className="Employeedb-heading">Employee Database</h5>
            </div>
          </div>
          <Grid container spacing={1} className="Employeedb-details">
            <Grid item xs={12} md={12} lg={3}>
              <div className="total-item1">
                <div>
                  <img
                    src={contact}
                    alt="contact-img"
                    className="Employeedb-container-contact-img"
                  />
                </div>
                <div>
                  {" "}
                  <h5 className="Employeedb-totalCustomer">Total Employees</h5>
                  <p className="Total-content">{count}</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={12} lg={3} s>
              <div className="total-item1">
                <div>
                  <img
                    src={assignment}
                    alt="assignment-img"
                    className="Employeedb-container-assignment-img"
                  />
                </div>
                <div>
                  {" "}
                  <h5 className="Employeedb-ourCustomer">Our Employees</h5>
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
                    className="Employeedb-container-badge-img"
                  />
                </div>
                <div>
                  {" "}
                  <h5 className="Employeedb-otherCustomer">Other Candidates</h5>
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
                    className="Employeedb-container-personadd-img"
                  />
                </div>
                <div>
                  {" "}
                  <h5 className="Employeedb-newlyadded">Newly Added</h5>
                  <p className="Total-content">2</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Item>
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <Item>
          <div className="allEmployee-header">
            <div>
              <h4 className="All-Employee">All Employees</h4>
            </div>
            <div className="Search-content">
              <Search className="Search-bar">
                <SearchIcon />

                <StyledInputBase
                placeholder="Search Employees"
                inputProps={{ "aria-label": "search" }}
                value={searchQuery} // Step 3: Bind the search query value
                onChange={handleSearch} // Step 3: Handle search input change
              />
              </Search>
            </div>

            <div className="Form-Control">
              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                size="small"
                style={{
                  background: "#F7F6F9",
                  borderRadius: "8px",
                }}
              >
                <InputLabel
                  id="demo-select-small-label"
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
          <div className="Datagrid-table" style={{height:"500px"}}>
            <DataGrid
              rows={filteredEmployees}
              columns={columns}
              pageSizeOptions={[5, 10]} // Number of records per page
              checkboxSelection
              getRowId={(row) => row.employee_id}
            />
            <Pagination
              className="pagination-content"
              count={Math.ceil(employees.length / 5)} // Calculate the number of pages
              color="secondary"
            />
          </div>
        </Item>
      </Grid>
    </Grid>
  );
}
export default Employee;
