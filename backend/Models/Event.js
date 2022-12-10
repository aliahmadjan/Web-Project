const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');
require("dotenv").config();

const eventSchema = new moongose.Schema({

   orgname: {
        type : String
    },

    name: {
        type: String
    },

    venue :{
        type: String
    },
    interests: {
        type: String
    },

    date:{
        type: Date
    },
    stars: {
        type: Number
    }
 
})
const Event = mongoose.model('Event',eventSchema);
module.exports = Event;