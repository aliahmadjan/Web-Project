import { Avatar,Table, Grid,Paper,TextareaAutosize, TextField, FormControlLabel, Checkbox, Button, Typography, Link, TableContainer, TableHead, TableRow, TableCell, makeStyles } from "@mui/material";
import React, {useEffect, useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";



import { renderMatches, useNavigate, useParams} from "react-router-dom";

import { TabContext } from "@mui/lab";
import { ClassNames } from "@emotion/react";



const ViewHobby = ()=>
{
         const navigate = useNavigate();
    const handleSubmit = () =>
    {
            navigate("/home/edithobby");
    }
    //let hobby = useParams().hobby;
    const [ hobbies, setHobbies] = useState([]);
    
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
                    <TextField
                    type='text' 
                     defaultValue={hobby.hobby}
                     variant='outlined'
                     inputProps = {
                     { readOnly: true,}
                     }/>
                      <TextField
                    type='text' 
                     defaultValue={hobby.category}
                     variant='outlined'
                     inputProps = {
                     { readOnly: true,}
                     }/>
                     
    
                    <Button   type='submit' onClick={()=>handleSubmit()} variant="contained" style={btStyle} color='primary' fullWidth>EDIT HOBBY</Button> 
                    </>
                    ))}
                     
        </Paper>
       </Grid>
    )

}

export default ViewHobby;