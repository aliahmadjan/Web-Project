import { Avatar, Grid,Paper,TextareaAutosize, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from "@mui/material";
import React, {useEffect, useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../style/loginform.css'
import axios from "axios";
import {getAllHobbies} from '../services/user-services'


import { renderMatches, useNavigate, useParams} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const ViewHobby = ()=>
{
         const navigate = useNavigate();
    const handleSubmit = () =>
    {
            navigate("/home/edithobby");
    }
    //let hobby = useParams().hobby
    const [ hobbies, setHobbies] = useState([{}]);
    useEffect(()=>
    {
    axios.get("http://localhost:5000/hobby/gethobbies")
        .then(res=> {
                console.log(res.data)
                setHobbies(res.data)
        }).catch (err=> {
            console.log(err) })
    },[hobbies]);
   
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
                        <h2>View Hobbies</h2>
                    </Grid>  
                    
                    {hobbies.map((hobby)=>
                        (
<>
                    <Typography sx={{ fontWeight: 400 }} variant="h6">
                      Hobby:  {hobby.hobby}
                    </Typography>
                    <Typography sx={{ fontWeight: 400 }} variant="h6">
                      Description: {hobby.description}
                    </Typography>
                          
                    <Button   type='submit' onClick={()=>handleSubmit()} variant="contained" style={btStyle} color='primary' fullWidth>EDIT HOBBY</Button> 
                    </>
                    ))}
                     
        </Paper>
       </Grid>
    )

}

export default ViewHobby;