import { Avatar, Grid,Paper,TextareaAutosize, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from "@mui/material";
import React, {useEffect, useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../style/loginform.css'
import axios from "axios";
import { getVeteranNames } from "../services/user-services";
import { getAllHobbies } from "../services/user-services";
import { getUsers } from "../services/user-services";

import { renderMatches, useNavigate, useParams} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ViewVeterans = ()=>
{

  const [state, setState] = useState(false);
  const toggle= ()=>{
    setState(!state);
  }
  const [ users, setUsers] = useState([]);
  useEffect(()=>
  {
  axios.get("http://localhost:5000/signup/getuser/")
      .then(res=> {
              console.log(res.data)
              setUsers(res.data)
      }).catch (err=> {
          console.log(err) })
  },[users]);

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
                        <h2>Veterans List</h2>
                    </Grid> 
                    {users.map((ele)=>
                        (
<>
                    <Typography sx={{ fontWeight: 400 }} variant="h6">
                      Veteran:  {ele.name}
                      <Button  type='submit' onClick={()=>toggle()} variant="contained" style={btStyle} color='primary' fullWidth>
                        {state ? 'Followed' : 'Follow'}
                      </Button> 
                    </Typography>
                          
                    
                    </>
                    ))}
                    
        </Paper>
       </Grid>
    )

}

export default ViewVeterans;