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
const GetHobbyName = async(req,res,next) => 
{
    let temp = []
    Hobby.find((error,data)=>
    {
        if(error)
        {
            return next(error)
        }
        else
        {
            for (let i=0;i<Object.keys(data).length;i++)
            {
                temp.push(data[i]['hobby'])
            }
            console.log(temp)
            res.json(temp)
            console.log("Hobby Names Displayed!")
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
  
            try{
                const hobby1 = req.params.hobby;
                Hobby.findOne({hobby:hobby1 }).populate()
                .then((hobbies) => res.status(201).json(hobbies))
                .catch((err)=> res.status(400).json(err));

            }
            catch(err)
            {
                return next(err);
            }

    // Hobby.findById(req.params.id , (error,data) =>
    // {
    //     if(error)
    //     {
    //         return next(error);
    //     }
    //     else 
    //     {
    //         res.json(data);
    //     }
    // })
};

const UpdateHobby = async(req,res,next)=>
{
    try{
        const hobby1 = req.params.hobby;
        console.log(hobby1)
        var temp_hobby = await Hobby.find({hobby1})
        console.log("Hobby"+ temp_hobby)
    
        const update = {
            hobby: req.body.hobby
        };

        Hobby.findOneAndUpdate({hobby1},update)
        .then (()=> res.status(201).json("Updated Successfully!"))
        .catch((err)=> res.status(400).json(err))
    }
    catch (err)
    {
        return next(err)
    }


    // Hobby.findByIdAndUpdate(req.params.id, {
    //     $set: req.body
    //       }, (error, data) => {
    //         if (error) {
    //           res.send("Error")
    //           console.log(error)
    //         } else {
    //           res.json(data)
    //           console.log('User updated successfully !')
    //         }
    //       })
}

const DeleteHobby = async(req,res,next)=>
{

    try{
        const hobby1 = req.params.hobby;
        console.log(hobby1)
        var temp_hobby = await Hobby.find({hobby1})
        console.log("Hobby"+ temp_hobby)
    
       if(temp_hobby!==null)
       {
        Hobby.findOneAndRemove(temp_hobby._id)
        .then (()=> res.status(201).json("Deleted Successfully!"))
        .catch((err)=> res.status(400).json(err))
       }
       else
       {
        return res.status(err).json("Not deleted");
       }
    }
    catch (err)
    {
        return next(err)
    }
    // Hobby.findByIdAndDelete(req.params.id,(error,data)=> {
    //     if(error){
    //         return next(error);
    //     }
    //     else {
    //         res.send("Hobby Deleted Successfully!")
    //         res.status(200).json({
    //             msg:data
    //         })
    //     }
    //})
}


exports.AddHobby = AddHobby;
exports.GetHobbies = GetHobbies;
exports.GetHobby = GetHobby;
exports.UpdateHobby = UpdateHobby;
exports.GetHobbyName = GetHobbyName;
exports.DeleteHobby = DeleteHobby;