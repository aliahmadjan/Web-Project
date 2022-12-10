const express = require('express');
const https = require('https');
const SignUp = require('../Models/SignUp')

const AddUser = async(req,res,next) =>  
{
   try{
     const { name ,email,gender,phoneno,password,cpassword,followed} = req.body;
   
     //const oldUser = await SignUp.findOne({email});

     const user = await SignUp.create({
        name:name,
        email:email,
        gender:gender,
        phoneno:phoneno,
        password:password,
        cpassword:cpassword,
        followed:followed
     })

     res.status(201).json(user);

   }
   catch (err){
    console.log(err);
   }

}

const VerifyLogin = async(req,res,next) =>
{
   try{
    const email=req.body.email;
    const log= await SignUp.findOne({email:email});
    console.log(log)
      if(log)
      {
        res.status(201).json(log)

      }
      else
      {
        res.status(401).json("Username or Password not found!")
      }
   }
   catch (err){
    console.log(err);
   return res.status(400).send("Invalid Credentials");
}   
}

const GetUser = async(req,res,next) =>
{
     SignUp.find((error,data) => {
        if(error)
        {
            res.send("Could Not Get Vehicles")
        }
        else 
         {
            res.json(data)
         }
    })
}


const GetSingleUser = async(req,res,next) => 
{
    SignUp.findById(req.params.id , (error,data) =>
    {
        if(error){
            res.send("Not Found!");
        }
        else {
            res.json(data)
        }
    })
}

const UpdateUser = async(req,res,next) =>
{
    SignUp.findByIdAndUpdate(req.params.id, {
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
    
    const DeleteUser = async(req,res,next) =>
    {
        SignUp.findByIdAndDelete(req.params.id,(error,data)=> {
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

    const ViewVeteranNames = async(req,res,next) => 
    {
        let temp = []
        SignUp.find((error,data) => {
          if(error)
          {
              return next(error)
          }
          else 
          {   
              for (let i=0;i<Object.keys(data).length;i++){
                temp.push(data[i]['name'])
              }
              res.json(temp)
          }
      })
    }

    

exports.AddUser=AddUser;
exports.VerifyLogin=VerifyLogin;
exports.GetUser = GetUser;
exports.GetSingleUser = GetSingleUser;
exports.UpdateUser = UpdateUser;
exports.DeleteUser = DeleteUser;
exports.ViewVeteranNames = ViewVeteranNames;