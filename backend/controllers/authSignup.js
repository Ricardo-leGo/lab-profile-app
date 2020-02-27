const mongoose = require('mongoose')
const express = require('express')
const User = require('../models/User')

exports.authSignup =   async (req,res) => {
  const {name,email,password} = req.body
  if(email===''|| password ===''){
    return res.status(500).json({msg:"EMail And Passwrod are required"})}
 const usher = await  User.findOne({ email })
     if(usher !== null){
      return res.status(500).json({msg:"Username Already exist"})
    }
  const user = new User({password,name,email})
  await user.save()
  return res.status(200).json({msg:"Done!"})
}
exports.authLogin = async (req,res)=>{
console.log("holaaaaa")}

exports.profile = (req,res) => {
  console.log("Hola profile")
}

exports.sendUsertoFront = (req,res)=>{
  async (req,res, netx)=> {
    console.log(user)
    const { _id } = req.user
    const user = await User.findById(_id)
    res.status(200).json({ user,msg:"holi consoli" })
  }
}