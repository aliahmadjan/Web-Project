import { Avatar, Grid,Paper,Card, Box,TextField, FormControlLabel,Snackbar, InputLabel, Checkbox, Button, Typography, Link, Alert } from "@mui/material";
import React, {useEffect, useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";

import { useNavigate, useParams} from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assessment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";




const EditHobby = () =>
{
   const [hobby, setHobby] = useState('');
      const [description, setDescription] = useState('');
      const [msg, setMsg] = useState('');
  const EditHobbies = async(e) =>
  {
    e.preventDefault();
             try {
                 await axios.patch('http://localhost:5000/hobby/updatehobby', {
                     hobby:hobby,
                     description: description,
                 });

             } catch (error) {
                 if (error.response) {
                     setMsg(error.response.data.msg);
                 }
             }
  }
  const paperStyle = {padding : 20, height: '40vh', width: 450, margin: '180px 10px 200px 240px'}
         const avatarStyle = {backgroundColor: '#4169e1'}
         const btStyle = {margin: '30px 0px 12px'}
         const textStyle = {margin: '3px 0'}
         return (
          <div>
            <Grid>
            <Paper elevation={15} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Edit Hobby</h2>
                    </Grid>     
                    <TextField               
                         id='hobby' name='hobby' label='Hobby Name'  placeholder="" style={textStyle} fullWidth  variant="standard" required> </TextField> 
                    <TextField 
                     id='description' name='description' label='Description' placeholder="" style={textStyle} fullWidth required variant="standard"></TextField> 
                    
                  
                    
                    <Button   type='submit' onClick={EditHobbies}variant="contained" style={btStyle} color='primary' fullWidth>ADD HOBBY</Button>   
                   
                    
                </Paper>
            </Grid>
        </div>

          
         )
   };

export default EditHobby;