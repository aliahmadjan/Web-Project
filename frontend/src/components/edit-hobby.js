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




const EditHobby = ()=>
{
    const [isLoading, setIsLoading] = useState(true);
    const prev_hobby = useParams().hobby;
    const [hobbies, setHobbies]= useState("");
    const navigate = useNavigate();


    // it runs when the page loads
    useEffect(()=>
    {
        getHobby(prev_hobby)
        .then((response)=> 
        {
                if(response.status === 201) 
                {
                    setHobbies(response.data);
                    console.log("Setting Hobbies"+response.data);
                }
                else
                {
    console.log("No hobby found");
                }
            })
            .catch ((err)=> 
            {
                console.log(err);
            })
        },[prev_hobby]);

        const [submitStatus , setSubmitStatus] = useState(0);
        const [formState , InputHandler, setFormData] = useForm(
            {
                hobby:{
                    value: " ",
                    isValid: false,
                },

                description :{
                    value: " ",
                    isValid: false,
                },
            },
            false
        );

        useEffect(()=>
        {
            
            console.log("Effect hit: ", hobbies);
            setFormData (
                {
                    hobby: {
                        value: hobbies.hobby,
                        isValid: true,
                    },

                    description: {
                        value: hobbies.description,
                        isValid: true,
                    },
                },
                true
            );

            setIsLoading(false);

        }, [setFormData, hobbies]);

        const onSubmitHandler = () =>
        {
            console.log(formState.inputs);
            hobbyUpdateHandler();
        };

        const [snackOpen, setSnackOpen]= useState(false);

        const hobbyUpdateHandler=()=>
        {
            updateHobby(
                prev_hobby,
                formState.inputs.hobby.value,
                formState.inputs.description.value
            )
            .then ((res)=>
            {
                if(res.status === 201)
                {
                    console.log(res);
                    console.log("HELLO");
                    setSubmitStatus(1);
                    setSnackOpen(true);
                }
                else
                {
                    setSubmitStatus(-1)
                    console.log("BYE");
                    setSnackOpen(true);
                }
            })
            .catch((err)=>
            {
                console.log(err);
                console.log("BYE 22");
                setSubmitStatus(-1);
                setSnackOpen(true);
            });
        };

        const StatusAlert = () =>
        {
            if(submitStatus === -1)
            return (
                <Alert 
                onClose={()=> setSnackOpen(false)}
                severity="error"
                sx={{width:"100%"}}
                >
                    Hobby Not Updated!
                </Alert>
            );

            if(submitStatus===1)
            return (
            <Alert 
                onClose={()=> setSnackOpen(false)}
                severity="success"
                sx={{width:"100%"}}
                >
                    Hobby  Updated!
                </Alert>
            );
        };

        const GoBack = (e)=>
        {
            e.preventDefault();
            navigate('/home/viewhobby');
        }

        if(isLoading)
        {
            return <Typography variant="h2">Loading...</Typography>
        }
        if(typeof hobbies === "object")
        return 
        (
            <Grid justifyContent="center" display="flex" flex-direction="row">
            <Card sx={{ width: "90%", maxWidth: "900px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                  m: 1,
                }}
              >
                <AssignmentIcon sx={{ mr: 2 }}>
                  
                </AssignmentIcon>
                <Typography variant="h5">Update Hobby</Typography>
              </Box>
              </Card>
              </Grid>
    
            /*  <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                  alignItems: "center",
    
                  p: 1,
                }}
              >
                <Input
                  sx={{ pr: 2, pb: 3, flex: "100%" }}
                  id="hobby"
                  label="Hobby"
                  variant="standard"
                  onInput={InputHandler}
                  errorText="Hobby is a required field"
                  initialValue={hobbies.hobby}
                  initialValid={formState.inputs.hobby.isValid}
                />
                <Input
                  sx={{ pr: 2, pb: 3, flex: "100%" }}
                  id="description"
                  label="Description"
                  variant="standard"
                  onInput={InputHandler}
                  
                  errorText="Description is a required field"
                  initialValue={hobbies.description}
                  initialValid={formState.inputs.description.isValid}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    alignItems: "center",
                    width: "100%",
                    p: 1,
                  }}
                >
                  
                  
                
                </Box>
                <Grid container display="flex" justifyContent="space-between">
                  <Button
                    variant="text"
                    startIcon={<ArrowBackIcon />}
                    onClick={GoBack}
                  >
                    Go Back
                  </Button>
    
                  <Button
                    onClick={onSubmitHandler}
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{ mt: 2 }}
                    disabled={!formState.isValid}
                  >
                    Submit
                  </Button>
                </Grid>
              </Box>
            </Card>
            <Snackbar
              open={snackOpen}
              autoHideDuration={6000}
              onClose={() => setSnackOpen(false)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
              <div>
                <StatusAlert />
              </div>
            </Snackbar>
          </Grid> */
        );
};

export default EditHobby;