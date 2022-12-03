import React from "react";
import { Radio, Avatar, Grid,Paper, TextField, FormControlLabel, Button, FormControl, RadioGroup } from "@mui/material";
import FormLabel from '@mui/material/FormLabel';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const SignUpForm = () => {
    const paperStyle = {padding : 20, height: '88vh', width: 600,
                        margin: '28px auto'}
    const avatarStyle = {backgroundColor: '#4169e1'}
    const btStyle = {margin: '10px 0px 12px'}
    const txtStyle = {margin: '4px 0px 4px'}
    const marginTop = { marginTop: 5 }

    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOpenOutlinedIcon/></Avatar>
                        <h2>Sign up</h2>
                    </Grid>     
                    <form>
                        <TextField fullWidth label='Name' placeholder="Enter your name" style={txtStyle}/>
                        <TextField fullWidth label='Email' placeholder="you@example.com" style={txtStyle}/>
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" style={txtStyle}/>
                        <TextField fullWidth label='Profession' placeholder="e.g. Doctor, Engineer" style={txtStyle}/>
                        <TextField fullWidth label='Password' placeholder="Enter 6 characters or more"style={txtStyle}/>
                        <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"style={txtStyle}/>
                        <Button type='submit' variant="contained" style={btStyle} color='primary' fullWidth>SIGN UP</Button>   
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default SignUpForm