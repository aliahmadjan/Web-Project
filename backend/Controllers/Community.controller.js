const express = require('express');
const https = require('https');
const Community = require('../Models/Community')
const jwt = require('jsonwebtoken');

const AddCommunity = (req,res,next) =>  
{
     const { name ,email,phoneno,interests,password,cpassword} = req.body;
     console.log(name);
     if(!name || !email || !phoneno || !interests || !password || !cpassword)
     {
        return res.status(422).send("Please Fill All the fields");
     }

     Community.findOne({email:email})
     .then(
      async(savedUser) => {
        if(savedUser)
        {
          return res.status(422).send({error: "Invalid Credentials"});
        }
        const community = new Community({
          name,
          email,
          phoneno,
          interests,
          password,
          cpassword,
        })
        try{
          await community.save();
          //res.send({message: "User Saved Successfully"})
          const token = jwt.sign({_id: community.id}, process.env.SECRET_KEY_COMMUNITY);
        console.log(token);
        res.send({token});
        }
        catch (err)
        {
          return res.status(422).send({error: "Cannot login"});
        }
    
      }   
     )
    }
    


const VerifyLogin = async(req,res,next) =>
{
   try{
    let token;
    const email=req.body.email;
    const log= await Community.findOne({email:email})
   
      if(log)
      {
        // const token = jwt.sign({_id: user.id}, process.env.SECRET_KEY);
        // console.log(token);
        // res.send({token});

         token = await  log.generateAuthToken();
          console.log(token);
          res.send(token);
      }
      else
      {
        res.status(401).json("Email or Password not found!")
      }
   }
   catch (err){
    console.log(err);
}   
}

const GetCommunity = async(req,res,next) =>
{
     Community.find((error,data) => {
        if(error)
        {
            res.send("Could Not Get Community")
        }
        else 
         {
            console.log(data)
            res.json(data)
            console.log("Community Displayed Successfully!")
         }
    })
}


const GetSingleCommunity = async(req,res,next) => 
{
    Community.findById(req.params.id , (error,data) =>
    {
        if(error){
            res.send("Not Found!");
        }
        else {
            res.json(data)
        }
    })
}

const UpdateCommunity = async(req,res,next) =>
{
    Community.findByIdAndUpdate(req.params.id, {
        $set: req.body
          }, (error, data) => {
            if (error) {
              res.send("Error")
              console.log(error)
            } else {
              res.json(data)
              console.log('User updated successfully !')
            }
          })
    }
    
    const DeleteCommunity = async(req,res,next) =>
    {
        Community.findByIdAndDelete(req.params.id,(error,data)=> {
            if(error){
                return next(error);
            }
            else {
                res.send("User Deleted Successfully!")
                res.status(200).json({
                    msg:data
                })
            }
        })
    }

    

exports.AddCommunity=AddCommunity;
exports.VerifyLogin=VerifyLogin;
exports.GetCommunity = GetCommunity;
exports.GetSingleCommunity = GetSingleCommunity;
exports.UpdateCommunity = UpdateCommunity;
exports.DeleteCommunity = DeleteCommunity;