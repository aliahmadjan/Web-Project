const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const SignUp = require('../Models/SignUp')
require('dotenv').config();

module.exports = (req,res,next)=>
{
    const {authorization }= req.headers;
    //console.log(authorization);
     
    if(!authorization)
    {
        return res.status(401).send({
            error: "L"
        });
    }
    const token = authorization.replace("Bearer ","");
    //console.log(token);
    jwt.verify(token,process.env.SECRET_KEY_USER, (err,payload)=>
    {
        if(err)
        {
           return res.status(401).json({error: "LPC" +token});
        }

        const { _id } = payload;

        SignUp.findById(_id).then(userdata => {
            console.log(userdata);
            req.user = userdata;
            next();
        })
    })
    //next();
}