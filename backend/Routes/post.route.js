const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer')
const upload1 = multer({dest: './public/'})
const {v4: uuidv4} = require('uuid')
const Post = require('../Models/Posts')
const SignUp = require('../Models/SignUp')
const PostController = require('../controllers/Post.controller')
const AuthToken = require('../Middleware/UserToken');


const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req,file,cb) => 
    {
        cb(null,DIR);
    },

    filename: (req,file,cb)=>
    {
        const filename =file.originalname.toLowerCase().split('').join('-');
        cb(null,uuidv4()+'-'+filename)
    }
});

var upload =multer({
    storage: storage,
    fileFilter: (req,file,cb) => {
        if(file.mimetype = "image/png" || file.mimetype =="image/jpg" || file.mimetype == "image/jpeg")
        {
            cb(null,true);
        }
        else
        {
            cb(null,false);
            return cb(new Error('Only .png .jpg and .jpeg format allowed!'));
        }
    }
});



router.post('/addpost',  upload.single('image'),async (req,res,next) =>
{
    const url = req.protocol+ '://' +req.get('host')
    if(!req.file)
    {
        const post = new Post ({
            name: req.body.name,
            comment: req.body.comment,
        });
        try{
            await post.save();
            res.send(post);
        }
        catch(err)
        {
            console.log(err);
            return res.status(422).send({error: err.meessage});
        }
    }
    else{
        const post = new Post({
            name:req.body.name,
            image: url + "/public/" +req.file.filename,
            comment: req.body.comment,
        });
        try{
            await post.save();
            res.send(post);
        }
        catch(err)
        {
            console.log(err);
            return res.status(422).send({error: err.meessage});
        }
    }


    });   
    

    //const url = req.protocol+ '://' +req.get('host')
    //res.send(req.body._id);
   
    // var posts_array = {userid:req.body._id ,name: req.body.name , comment: req.body.comment, image: req.body.image}
    // SignUp.findById(req.body.userid).then(newp=>
    //     {
    //         newp.posts.push(posts_array)
    //         newp.save().then(res=>
    //             {
    //                 res.json(res)
    //             }).catch(err=>
    //                 {
    //                     res.status(400).send(err);
    //                 }
    //                     )
    //     }).catch(err=> {
    //         res.status(200).send(err);
    //     })
    
    
    //console.log(req.body._id);
    // const newPost = new Post({
    //     _id: new mongoose.Types.ObjectId(),
    //    // name: req.body.name,
    //     comment: req.body.comment,
    //     image: url + '/public/' + req.file.filename 
    // });

    // newPost.save().then(result => {
    //     res.status(201).json({
    //         message: "Post Registered Successfully!",
    //         postCreated: {
    //             _id: result._id,
    //             image: result.image

    //         }
    //     })
    // }).catch(err => {
    //     console.log(err),
    //     res.status(500).json ({
    //         error: err
    //     });
    // })



//router.post('/addpost',upload1.single('image'),(req,res)=>
//{
    
    //console.log(req.file)
    //if(!req.file)
    //{
       // res.send({code : 500,msg:'err'})
    //}
    //else
    //{
      //  res.send(req.body)
    //}
//})


router.get('/getposts',PostController.GetPosts);

router.get('/getpost/:id',PostController.GetPost);

router.put('/updatepost/:id',PostController.UpdatePost);

router.delete('/deletepost/:id',PostController.DeletePost);

module.exports = router;