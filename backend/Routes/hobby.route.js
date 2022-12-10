const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const HobbyController = require('../controllers/Hobby.controller')

router.post('/addhobby', HobbyController.AddHobby);

router.get('/gethobbies',HobbyController.GetHobbies);

router.get('/gethobby',HobbyController.GetHobby);

router.get('/:hobby',HobbyController.GetHobbyName);



router.put('/updatehobby/:id',HobbyController.UpdateHobby);

router.delete('/:hobby',HobbyController.DeleteHobby);

module.exports = router;