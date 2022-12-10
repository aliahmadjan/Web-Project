const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const SignUp = require('../Models/SignUp')
const Community = require('../Models/Community');
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
    jwt.verify(token,process.env.SECRET_KEY_COMMUNITY, (err,payload)=>
    {
        if(err)
        {
           return res.status(401).json({error: "LPC" +token});
        }

        const { _id } = payload;

        Community.findById(_id).then(communitydata => {
            console.log(communitydata);
            req.community = communitydata;
            next();
        })
    })
    //next();
}