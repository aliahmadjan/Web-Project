const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../Middleware/UserToken.js')

const SignUpController = require('../controllers/SignUp.controller')



router.post('/adduser',SignUpController.AddUser)

router.post('/verifylogin',SignUpController.VerifyLogin)

router.get('/getuser',SignUpController.GetUser)

router.get('/getuser/:id',SignUpController.GetSingleUser)

router.put('/updateuser/:id',SignUpController.UpdateUser)

router.delete('/deleteuser/:id',SignUpController.DeleteUser)

router.put('/follow',requireLogin,(req,res)=>{
    SignUp.findByIdAndUpdate(req.body.followId,{
        $push:{followers:req.SignUp._id}
    },{
        new:true
    },(err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
    SignUp.findByIdAndUpdate(req.SignUp._id,{
          $push:{following:req.body.followId}
          
      },{new:true}).select("-password").then(result=>{
          res.json(result)
      }).catch(err=>{
          return res.status(422).json({error:err})
      })
  
    }
    )
  })

  router.put('/unfollow',requireLogin,(req,res)=>{
    SignUp.findByIdAndUpdate(req.body.unfollowId,{
        $pull:{followers:req.SignUp._id}
    },{
        new:true
    },(err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        SignUp.findByIdAndUpdate(req.SignUp._id,{
          $pull:{following:req.body.unfollowId}
          
      },{new:true}).select("-password").then(result=>{
          res.json(result)
      }).catch(err=>{
          return res.status(422).json({error:err})
      })

    }
    )
})

module.exports = router;