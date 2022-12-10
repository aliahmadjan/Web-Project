const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const SignUpController = require('../controllers/SignUp.controller')



router.post('/adduser',SignUpController.AddUser)

router.post('/verifylogin',SignUpController.VerifyLogin)

router.get('/getuser',SignUpController.GetUser)

router.get('/getuser/:id',SignUpController.GetSingleUser)

router.put('/updateuser/:id',SignUpController.UpdateUser)

router.delete('/deleteuser/:id',SignUpController.DeleteUser)

router.get('/viewveterannames',SignUpController.ViewVeteranNames)

module.exports = router;