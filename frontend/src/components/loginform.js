import React from "react";
import { Avatar, Grid,Paper, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './loginform.css'

const LoginForm = () => {
    const paperStyle = {padding : 20, height: '50vh', width: 450,
                        margin: '150px auto'}
    const avatarStyle = {backgroundColor: '#4169e1'}
    const btStyle = {margin: '10px 0px 12px'}
    const textStyle = {margin: '3px 0'}

    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign in</h2>
                    </Grid>     
                    <TextField label='Email' placeholder="you@example.com" style={textStyle} fullWidth required variant="standard"></TextField> 
                    <TextField label='Password' placeholder="Enter 6 characters or more" type='password' style={textStyle} fullWidth required variant="standard"></TextField> 
                    <FormControlLabel color='secondary'
                        control={
                        <Checkbox
                            name = "checkedB"
                            color = "primary"
                        />
                        }
                        label = "Remember me"
                    />  
                    <Button type='submit' variant="contained" style={btStyle} color='primary' fullWidth>LOG IN</Button>   
                    <Typography> {"Don't have an account? "}
                        <Link href="localhost:3000/signup" underline="hover">
                            Sign up
                        </Link>
                    </Typography>   
                    
                </Paper>
            </Grid>
        </div>
    )
}

export default LoginForm;