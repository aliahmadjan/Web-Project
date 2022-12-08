const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
require("dotenv").config();

const eventSchema = new moongose.Schema({

    name: {
        type: String
    },

    date:{
        type: String
    },

    time: {
        type: String
    },

    interests: {
        type: String
    },
 
})

    eventSchema.methods.generateAuthToken = async function()
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

const Event = mongoose.model('Event',eventSchema);
module.exports = Event;