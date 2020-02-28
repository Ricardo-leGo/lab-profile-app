const mongoose = require('mongoose')
const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport      = require("../config/passport");
exports.authSignup =   async (req,res) => {
  const {name,email,password} = req.body
  const salt =  bcrypt.genSaltSync(Number(process.env.SALT))
  const hashPassword =  bcrypt.hashSync(password, salt)
  if(email===''|| password ===''){
    return res.status(500).json({msg:"EMail And Passwrod are required"})}
 const usher = await  User.findOne({ email })
     if(usher !== null){
      return res.status(500).json({msg:"Username Already exist"})
    }
  const user = new User({password:hashPassword,name,email})
  await user.save()
  return res.status(200).json({msg:"Done!"})
}

exports.authLogin = async (req,res)=>{
  passport.authenticate('local')
  const {email, password} = req.body

  const usher = await User.findOne({ email })
  if(!usher){
    res.status(500).json({msg:"User or Password are invalid"})
  }
  const equalPass =  bcrypt.compareSync(password, usher.password)
  equalPass? res.status(200).json({msg:'All good', usher}):
             res.status(401).json({msg:"Something went wrong"})
}
exports.sendMsgSignup = (req, res)=>{
  return res.status(200).json({msg:"Working Done"})
}
exports.profile = (req,res) => {
  console.log("Hola profile")
}
