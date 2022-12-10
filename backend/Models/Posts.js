const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const postsSchema = new moongose.Schema({


  name: {
     type: String,
   },
   comment:{
    type: String
   },
  image:{
    type: String
  }


    
})

const Post = mongoose.model('Post',postsSchema);
module.exports = Post;