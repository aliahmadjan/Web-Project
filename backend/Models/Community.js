const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
require("dotenv").config();

const communitySchema = new moongose.Schema({

    name: {
        type: String
    },

    email :{
        type: String
    },


    phoneno: {
        type: String
    },

    interests: {
        type: String
    },

    password:{
        type: String
    },

    cpassword :{
        type: String
    },

    tokens : [
{
    token: {
        type: String
    }
}

    ]

    
})

    communitySchema.methods.generateAuthToken = async function()
    {
        try {
                let tokenLogin = jwt.sign({_id:this._id}, process.env.SECRET_KEY_COMMUNITY);
                this.tokens = this.tokens.concat({token:tokenLogin});
                await this.save();
                return tokenLogin;
        }
        catch(err) {
                console.log(err);
        }
    }

const Community = mongoose.model('Community',communitySchema);
module.exports = Community;