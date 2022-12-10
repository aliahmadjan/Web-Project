const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
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

    interested :
    {
        type: Boolean,
        default: false
    },

    followers: {
        type : Array
    },

    following: {
        type : Array
    },

    tokens : [
{
    token: {
        type: String
    }
}

    ],

    // hobbies: [
        
    //     hobby: {
    //         type: String
    //     },


    // ]


    
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