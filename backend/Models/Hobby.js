const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const hobbySchema = new moongose.Schema({

  name: {
    type: String
  },
  hobby:{
    type: String
  },

  category:{
    type: String
  }

    
})

const Hobby = mongoose.model('Hobby',hobbySchema);
module.exports = Hobby;