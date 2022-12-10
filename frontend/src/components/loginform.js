import React, { useContext, useEffect, useState } from "react";
import { Avatar, Grid,Paper, TextField, FormControlLabel, Checkbox, Button, Typography, Link, Input } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import '../style/loginform.css'
import { useNavigate} from "react-router-dom";



const LoginForm = () => {
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

     const navigate = useNavigate();
    const handleSubmit1 = () =>
    {
            navigate("/vsignup");
    }


    const LoginUser = async(e) =>
    {
        e.preventDefault();
        try {
           const res=  await axios.post('http://localhost:5000/signup/verifylogin', {
                email: email,
                password: password,
            });

            localStorage.setItem("logintoken",res.data);
            console.log(res.data);
            navigate("/home");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }


    const paperStyle = {padding : 20, height: '50vh', width: 450,
                        margin: '150px auto'}
    const avatarStyle = {backgroundColor: '#4169e1'}
    const btStyle = {margin: '10px 0px 12px'}
    const textStyle = {margin: '3px 0'}

   

    
    return (
     
        <Grid>
           
            
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign in</h2>
                    </Grid>     
                    <TextField  onChange={e => setEmail(e.target.value)}
                    id='email' name='email' label='Email'  placeholder="you@example.com" style={textStyle} fullWidth  variant="standard" required> </TextField> 
                    <TextField onChange={e => setPassword(e.target.value)}
                     id='password' name='password' label='Password' placeholder="Enter 6 characters or more" type='password' style={textStyle} fullWidth required variant="standard"></TextField> 
                    <FormControlLabel color='secondary'
                        control={
                        <Checkbox
                            name = "checkedB"
                            color = "primary"
                        />
                        }
                        label = "Remember me"
                    />  
                    
                    <Button   type='submit'onClick={LoginUser} variant="contained" style={btStyle} color='primary' fullWidth>LOG IN</Button>   
                    <Typography> {"Already Have An Account? "}
                        <Button onClick={()=> handleSubmit1()} type='submit' variant="contained" style={{btStyle, maxWidth:'100px', maxHeight:'40px' }} color='primary'>Sign up</Button>
                    </Typography>
                    
                </Paper>
            </Grid>
    )
}

export default LoginForm;