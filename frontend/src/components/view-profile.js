import { Avatar, Grid,Paper,TextareaAutosize, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from "@mui/material";
import React, {useEffect, useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../style/loginform.css'
import axios from "axios";


const ViewProfile = ()=>
{
    const [name, setName] = useState("");
    const [email ,setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [phoneno, setPhoneNo]= useState("");
    const [profession, setProfession]= useState("");
    
    
    useEffect(()=>
    {
      let logintoken = localStorage.getItem("logintoken")
      console.log(logintoken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${logintoken}`;
      axios.get("http://localhost:5000/home/viewprofile")
        .then(res=> {
                console.log(res.data)
                setName(res.data.name);
                setEmail(res.data.email);
                setGender(res.data.gender);
                setPhoneNo(res.data.phoneno);
                setProfession(res.data.profession);
        }).catch (err=> {
            console.log(err) })
    });
   

    const paperStyle = {padding : 20, height: '50vh', width: 450,
    margin: '180px 10px 200px 240px'}
const avatarStyle = {backgroundColor: '#4169e1'}
const btStyle = {margin: '30px 0px 12px'}
const textStyle = {margin: '3px 0'}
    return (
        <Grid>
         <Paper elevation={15} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>View Profile</h2>
                    </Grid>  
               
                    <Typography sx={{ fontWeight: 400 }} variant="h6">
                      Name: {name}      
                    </Typography>
                    <Typography sx={{ fontWeight: 400 }} variant="h6">
                       Email: {email}
                    </Typography>
                    
                    <Typography sx={{ fontWeight: 400 }} variant="h6">
                       Gender: {gender}
                    </Typography>
                    <Typography sx={{ fontWeight: 400 }} variant="h6">
                      Phone No: {phoneno}
                    </Typography>
                    <Typography sx={{ fontWeight: 400 }} variant="h6">
                       Profession: {profession}
                    </Typography>
                    
                  
        </Paper>
       </Grid>
    )
}

export default ViewProfile