import { Avatar, Grid,Paper, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from "@mui/material";
import React, {useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../style/loginform.css'
import axios from "axios";

import { useNavigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const FormHobby = ()=>
{
     // const [name, setName] = useState('');
         const [hobby, setHobby] = useState('');
         const [description, setDescription] = useState('');
         const [msg, setMsg] = useState('');
     
          const navigate = useNavigate();
         const handleSubmit = () =>
         {
                 navigate("/signup");
         }
     
     
         const AddHobby = async(e) =>
         {
             e.preventDefault();
             try {
                 await axios.post('http://localhost:5000/hobby/addhobby', {
                     hobby:hobby,
                     description: description,
                 });
                 navigate("/home");
             } catch (error) {
                 if (error.response) {
                     setMsg(error.response.data.msg);
                 }
             }
         }
     
     
         const paperStyle = {padding : 20, height: '40vh', width: 450,
                             margin: '180px 10px 200px 240px'}
         const avatarStyle = {backgroundColor: '#4169e1'}
         const btStyle = {margin: '30px 0px 12px'}
         const textStyle = {margin: '3px 0'}
    return (
        <div>
            <Grid>
            <Paper elevation={15} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Add Hobby</h2>
                    </Grid>     
                    <TextField  onChange={e => setHobby(e.target.value)}
                    id='hobby' name='hobby' label='Hobby Name'  placeholder="" style={textStyle} fullWidth  variant="standard" required> </TextField> 
                    <TextField onChange={e => setDescription(e.target.value)}
                     id='description' name='description' label='Description' placeholder="" style={textStyle} fullWidth required variant="standard"></TextField> 
                    
                  
                    <form></form>
                    <Button   type='submit'onClick={AddHobby} variant="contained" style={btStyle} color='primary' fullWidth>ADD HOBBY</Button>   
                   
                    
                </Paper>
            </Grid>
        </div>
    )
}

export default FormHobby;