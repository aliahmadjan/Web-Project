const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const PostController = require('../controllers/Post.controller')

router.post('/addpost', PostController.AddPost);

router.get('/getposts',PostController.GetPosts);

router.get('/getpost/:id',PostController.GetPost);

router.put('/updatepost/:id',PostController.UpdatePost);

router.delete('/deletepost/:id',PostController.DeletePost);

module.exports = router;