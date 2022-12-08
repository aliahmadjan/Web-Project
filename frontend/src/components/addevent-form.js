import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { maxWidth } from "@mui/system";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const CreateEventForm = () => {
  const [date, setDate] = React.useState(dayjs("2014-08-18T21:11:54"));

  const [name, setName] = useState("");
  const [stars, setStars] = useState("");
  const [msg, setMsg] = useState("");

  // const navigate = useNavigate();

  // const handleSubmit = () =>
  // {
  //    // e.preventDefault();
  //    navigate('/login');

  // };

  const [value, setValue] = React.useState("fruit");
  const handleChange = (value) => {
    setValue(value);
  };

  const SignupUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/home/addevent", {
        name: name,
        stars: stars
      });
      // navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const paperStyle = {
    padding: 20,
    height: "88vh",
    width: 600,
    margin: "28px auto"
  };
  const avatarStyle = { backgroundColor: "#4169e1" };
  const btStyle = { margin: "10px 0px 12px" };
  const txtStyle = { margin: "4px 0px 4px" };
  const marginTop = { marginTop: 5 };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Add Event</h2>
          </Grid>
          <form>
            <TextField
              value={value}
              onChange={handleChange}
              id="name"
              name="name"
              fullWidth
              label="Event Name"
              placeholder="Enter your name"
              style={txtStyle}
              required
            />
            <TextField
              value={value}
              onChange={handleChange}
              id="venue"
              name="venue"
              fullWidth
              label="Venue"
              placeholder="Enter the venue"
              style={txtStyle}
              required
            />
            <Typography>
              <label style={txtStyle}>
                {" "}
                Event Stars: (1 star = 1000 stars){" "}
              </label>
              <Rating
                name="size-medium"
                defaultValue={2}
                align="center"
                starRatedColor="blue"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Typography>
            <Typography>
              <label style={txtStyle}> Event Type: </label>
              <select value={value} onChange={handleChange}>
                <option value="Public Talks">Public Talks</option>
                <option value="Motivational Talks">Motivational Talks</option>
                <option value="Professional Talk">Professional Talks</option>
                <option value="Professional Task">Professional Task</option>
                <option value="Plantation Drives">Plantation Drives</option>
                <option value="Orphanage Visit">Orphanage Visit</option>
                <option value="Visiting Patients">Visiting Patients</option>
                <option value="Recreational Visit">Recreational Visit</option>
                <option value="Old Home Visit">Old Home Visit</option>
                <option value="Book Reading/Discussion">
                  Book Reading/Discussion
                </option>
              </select>
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Date/Time"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button
              onClick={SignupUser}
              type="submit"
              variant="contained"
              style={btStyle}
              color="primary"
              fullWidth
            >
              Add Event
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default CreateEventForm;
