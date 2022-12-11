const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types
require("dotenv").config();

const signupSchema = new moongose.Schema({

    name: {
        type: String
    },

    email :{
        type: String
    },

    gender: {
        type: String
    },

    phoneno: {
        type: String
    },

    profession: {
        type: String
    },

    password:{
        type: String
    },

    cpassword :{
        type: String
    },
   followers:{                        // keh ali ke kitny followers hyn
              type: Array

    },
    following:{                     // keh ali kitnon ko follow ker rha
        type: Array
    },

    tokens : [
{
    token: {
        type: String
    }
}

    ],

})

    signupSchema.methods.generateAuthToken = async function()
    {
        try {
                let tokenLogin = jwt.sign({_id:this._id}, process.env.SECRET_KEY_USER);
                this.tokens = this.tokens.concat({token:tokenLogin});
                await this.save();
                return tokenLogin;
        }
        catch(err) {
                console.log(err);
        }
    }

const SignUp = mongoose.model('SignUp',signupSchema);
module.exports = SignUp;