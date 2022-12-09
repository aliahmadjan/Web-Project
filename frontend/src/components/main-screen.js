import { Avatar, Grid,Paper,Card, Box,TextField, FormControlLabel,Snackbar, InputLabel, Checkbox, Button, Typography, Link, Alert } from "@mui/material";
import React, {useEffect, useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../style/loginform.css'
import axios from "axios";
import { useForm } from "../hooks/form-hooks";
import { getHobby, updateHobby } from "../services/user-services";
import { useNavigate, useParams} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Input from "../components/Input"
import AssignmentIcon from "@mui/icons-material/Assessment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";




const MainScreen = () =>
{
  const navigate = useNavigate();
const ToVeteranSignUp = () =>
{
    navigate("/vsignup");
}
const ToVeteranLogin = () =>
{
    navigate("/vlogin");
}
const ToCommunitySignUp = () =>
{
    navigate("/csignup");
}
const ToCommunityLogin = () =>
{
    navigate("/clogin");
}
  const paperStyle = {padding : 20, height: '40vh', width: 450, margin: '100px 80px 80px 80px'}
  const paperStyle1= {padding : 20, height: '40vh', width: 450, margin: '-420px 90px 80px 800px'}
         const avatarStyle = {backgroundColor: '#4169e1'}
         const btStyle = {margin: '30px 0px 12px'}
         const textStyle = {margin: '3px 0'}
         return (
          <div>
            <Grid>
            <Paper elevation={15} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>VETERAN</h2>
                    </Grid>     
    
                    
                    <Button   type='submit' onClick ={ToVeteranSignUp}variant="contained" style={btStyle} color='primary' fullWidth>SIGNUP AS VETERAN</Button>   
                    <Button   type='submit' onClick= {ToVeteranLogin} variant="contained" style={btStyle} color='primary' fullWidth>LOGIN AS VETERAN</Button> 
                    
                </Paper>
                <Paper elevation={15} style={paperStyle1}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>COMMUNITY</h2>
                    </Grid>     
    
                    
                    <Button   type='submit' onClick={ToCommunitySignUp}variant="contained" style={btStyle} color='primary' fullWidth>SIGNUP AS COMMUNITY</Button>   
                    <Button   type='submit' onClick={ToCommunityLogin}variant="contained" style={btStyle} color='primary' fullWidth>LOGIN AS COMMUNITY</Button>
                    
                </Paper>
            
            </Grid>
        </div>

          
         )
   };

export default MainScreen;