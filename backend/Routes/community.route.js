const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const CommunityController = require('../Controllers/Community.controller')



router.post('/addcommunity',CommunityController.AddCommunity)

router.post('/verifylogin',CommunityController.VerifyLogin)

router.get('/getcommunity',CommunityController.GetCommunity)

router.get('/getcommunity/:id',CommunityController.GetSingleCommunity)

router.put('/updatecommunity/:id',CommunityController.UpdateCommunity)

router.delete('/deletecommunity/:id',CommunityController.DeleteCommunity)

module.exports = router;