const express = require('express');
const https = require('https');
const Event = require('../Models/Event')

const AddEvent = async(req,res,next)=>
{
    Event.create(req.body, (error,data)=> {
        if(error){
            return next(error);
        }
        else {
            console.log(data);
            res.json(data);
        }
    })
};
const GetEventName = async(req,res,next) => 
{
    let temp = []
    Event.find((error,data)=>
    {
        if(error)
        {
            return next(error)
        }
        else
        {
            for (let i=0;i<Object.keys(data).length;i++)
            {
                temp.push(data[i]['Event'])
            }
            console.log(temp)
            res.json(temp)
            console.log("Event Names Displayed!")
        }
    })
};
const GetEvents = async(req,res,next)=>
{
    Event.find((error,data)=>
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

const GetEvent = async(req,res,next)=>
{
  
            try{
                const Event1 = req.params.Event;
                Event.findOne({Event:Event1 }).populate()
                .then((hobbies) => res.status(201).json(hobbies))
                .catch((err)=> res.status(400).json(err));

            }
            catch(err)
            {
                return next(err);
            }
};

const UpdateEvent = async(req,res,next)=>
{
    try{
        const Event1 = req.params.Event;
        console.log(Event1)
        var temp_Event = await Event.find({Event1})
        console.log("Event"+ temp_Event)
    
        const update = {
            Event: req.body.Event,
            description: req.body.description
        };

        Event.findOneAndUpdate({Event1},update)
        .then (()=> res.status(201).json("Updated Successfully!"))
        .catch((err)=> res.status(400).json(err))
    }
    catch (err)
    {
        return next(err)
    }
}

const DeleteEvent = async(req,res,next)=>
{

    try{
        const Event1 = req.params.Event;
        console.log(Event1)
        var temp_Event = await Event.find({Event1})
        console.log("Event"+ temp_Event)
    
       if(temp_Event!==null)
       {
        Event.findOneAndRemove(temp_Event._id)
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
}


exports.AddEvent = AddEvent;
exports.GetEvents = GetEvents;
exports.GetEvent = GetEvent;
exports.UpdateEvent = UpdateEvent;
exports.GetEventName = GetEventName;
exports.DeleteEvent = DeleteEvent;