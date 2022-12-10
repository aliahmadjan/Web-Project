const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const HobbyController = require('../controllers/Hobby.controller')

router.post('/addhobby', HobbyController.AddHobby);

router.get('/gethobbies',HobbyController.GetHobbies);

//router.get('/:hobby',HobbyController.GetHobby);

router.get('/:hobby',HobbyController.GetHobbyName);



router.put('/updatehobby/hobby/description',HobbyController.UpdateHobby);

router.delete('/:hobby',HobbyController.DeleteHobby);

module.exports = router;