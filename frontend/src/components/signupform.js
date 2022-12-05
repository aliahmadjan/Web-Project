import React, { useState } from "react";
import { Radio, Avatar, Grid,Paper, TextField, FormControlLabel, Button, FormControl, RadioGroup,Typography,Link } from "@mui/material";
import FormLabel from '@mui/material/FormLabel';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { maxWidth } from "@mui/system";
import { useNavigate} from "react-router-dom";
import axios from "axios";



const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email,setEmail]=useState('');
    const [gender,setGender]=useState('');
    const [phoneno,setPhoneNo] = useState('');
    const [profession,setProfession] = useState('');
    const [password,setPassword ]= useState('');
    const [ cpassword,setConfPassword]= useState('');
    const [msg,setMsg]=useState('');
        const navigate = useNavigate();

    const handleSubmit = () =>
    {
       // e.preventDefault();
       navigate('/login');

    };

    const SignupUser = async(e) =>
    {
       
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/signup/adduser', {
                name:name,
                email: email,
                gender:gender,
                phoneno:phoneno,
                profession:profession,
                password: password,
               cpassword:cpassword,
            });
            navigate("/login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    

    }


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
                    <form onSubmit={handleSubmit}>
                        <TextField  onChange={e => setName(e.target.value)}
                        id='name' name='name' fullWidth label='Name' placeholder="Enter your name" style={txtStyle} required/>
                        <TextField onChange={e => setEmail(e.target.value)}
                          id='email' name='email'fullWidth label='Email' placeholder="you@example.com" style={txtStyle} required/>
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup onChange={e => setGender(e.target.value)}
                             id='gender' aria-label="gender" name="gender" style={{ display: 'initial' }} >
                                <FormControlLabel id='male' value="male" control={<Radio />} label="Male" />
                                <FormControlLabel id='male' value="female" control={<Radio />} label="Female" />
                                <FormControlLabel id='other' value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <TextField onChange={e => setPhoneNo(e.target.value)}
                         id='phoneno' name='phoneno' fullWidth label='Phone Number' placeholder="Enter your phone number" style={txtStyle} required/>
                        <TextField onChange={e => setProfession(e.target.value)}
                         id='profession' name='profession'fullWidth label='Profession' placeholder="e.g. Doctor, Engineer" style={txtStyle } required/>
                        <TextField onChange={e => setPassword(e.target.value)}
                         id='password' type='password' name='password'fullWidth label='Password' placeholder="Enter 6 characters or more"style={txtStyle} required/>
                        <TextField onChange={e => setConfPassword(e.target.value)}
                         id='cpassword' type='password' name='cpassword'fullWidth label='Confirm Password' placeholder="Confirm your password"style={txtStyle} required/>
                        <Button onClick={SignupUser} type='submit' variant="contained" style={btStyle} color='primary' fullWidth>SIGN UP</Button>   
                        <Typography> {"Already Have An Account? "}
                        <Button type='submit' variant="contained" onClick={()=>handleSubmit()} style={{btStyle, maxWidth:'60px', maxHeight:'40px' }} color='primary'>Login</Button>
                    </Typography>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default SignUpForm