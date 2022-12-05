const express = require('express');
const https = require('https');
const Hobby = require('../Models/Hobby')

const AddHobby = async(req,res,next)=>
{
    Hobby.create(req.body, (error,data)=> {
        if(error){
            return next(error);
        }
        else {
            console.log(data);
            res.json(data);
        }
    })
};

const GetHobbies = async(req,res,next)=>
{
    Hobby.find((error,data)=>
    {
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
};

const GetHobby = async(req,res,next)=>
{
    Hobby.findById(req.params.id , (error,data) =>
    {
        if(error)
        {
            return next(error);
        }
        else 
        {
            res.json(data);
        }
    })
};

const UpdateHobby = async(req,res,next)=>
{
    Hobby.findByIdAndUpdate(req.params.id, {
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

const DeleteHobby = async(req,res,next)=>
{
    Hobby.findByIdAndDelete(req.params.id,(error,data)=> {
        if(error){
            return next(error);
        }
        else {
            res.send("Hobby Deleted Successfully!")
            res.status(200).json({
                msg:data
            })
        }
    })
}


exports.AddHobby = AddHobby;
exports.GetHobbies = GetHobbies;
exports.GetHobby = GetHobby;
exports.UpdateHobby = UpdateHobby;
exports.DeleteHobby = DeleteHobby;