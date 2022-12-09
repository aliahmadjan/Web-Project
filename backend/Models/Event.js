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

    stars: {
        type: Number
    }
 
})
const Event = mongoose.model('Event',eventSchema);
module.exports = Event;