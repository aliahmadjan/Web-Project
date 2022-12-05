const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

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
    }

    
})

const SignUp = mongoose.model('SignUp',signupSchema);
module.exports = SignUp;