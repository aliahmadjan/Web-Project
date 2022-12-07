const express = require('express');
const https = require('https');
const Post = require('../Models/Posts')

const AddPost = async(req,res,next)=>
{

    const NewPost= req.body
    const npost = new Post(NewPost);
    await npost.save();

    res.json(NewPost);
    // const newPost = new Post({
    //         comment: req.body.comment,
    //         url: req.body.url,
    //         image: req.body.image,
    //   })
    
    //   newPost.save()
    //   .then(res => res.json("New Post Added"))
    //   .catch(err => res.status(400).json('Error: '+err))
};

const GetPosts = async(req,res,next)=>
{
    Post.find((error,data)=>
    {
        if(error)
        {
            return next(error);
        }
        else{
            res.json(data);
        }
    })
};

const GetPost = async(req,res,next)=>
{
    Post.findById(req.params.id , (error,data) =>
    {
        if(error)
        {
            return next(error);
        }
        else 
        {
            res.json(data);
        }
    })
};

const UpdatePost = async(req,res,next)=>
{
    Post.findByIdAndUpdate(req.params.id, {
        $set: req.body
          }, (error, data) => {
            if (error) {
              res.send("Error")
              console.log(error)
            } else {
              res.json(data)
              console.log('Post updated successfully !')
            }
          })
}

const DeletePost = async(req,res,next)=>
{
    Post.findByIdAndDelete(req.params.id,(error,data)=> {
        if(error){
            return next(error);
        }
        else {
            res.send("Post Deleted Successfully!")
            res.status(200).json({
                msg:data
            })
        }
    })
}


exports.AddPost = AddPost;
exports.GetPosts = GetPosts;
exports.GetPost = GetPost;
exports.UpdatePost = UpdatePost;
exports.DeletePost = DeletePost;