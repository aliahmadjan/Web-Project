import { Avatar, Grid,Paper,TextareaAutosize, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from "@mui/material";
import React, {useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../style/loginform.css'
import axios from "axios";

import { useNavigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const FormPost = ()=>
{
     // const [name, setName] = useState('');
         const [comment, setComment] = useState('');
     const[url,setUrl] = useState('');
            const [image, setImage] =useState('');
         const [msg, setMsg] = useState('');


     const [selectedFile, setSelectedFile] = useState("");
	const [isFilePicked, setIsFilePicked] = useState(false);


	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setSelectedFile(true);
	};
     
          const navigate = useNavigate();
         const handleSubmit = () =>
         {
                 navigate("/signup");
         }
     
     
         const AddPost = async(e) =>
         {
             const data = new FormData();
             data.append("file",selectedFile)
             data.append("upload_preset","WebProject")
             data.append("cloud_name","dv3v4zluy")
         
            fetch("hhtps://api.cloudinary.com/v1_1/dv3v4zluy/image/upload",
          {  
            method:"POST",
            body:data})
            .then((res)=> res.json())
            .then((data)=>
            {
                console.log(data)
            }).catch ((err)=>
            {
                console.log(err)
            })
            }
     
     
         const paperStyle = {padding : 20, height: '50vh', width: 450,
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
                        <h2>Add Post</h2>
                    </Grid>   

                    <TextareaAutosize 
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Minimum 5 rows"
                        style={{ width: 400 }}
                    />  
                   
                   <input type="file" name="file" onChange={changeHandler} />
                   
                   
                    <Button   type='submit'onClick={AddPost} variant="contained" style={btStyle} color='primary' fullWidth>ADD POST</Button>   
                   
                    
                </Paper>
            </Grid>
        </div>
    )
}

export default FormPost;