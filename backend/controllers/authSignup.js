const mongoose = require('mongoose')
const express = require('express')
const User = require('../models/User')
const passport =require ('../config/passport')

exports.authSignup =   async (req,res) => {
  const {name,password,email} =new User(req.body)
  const user = new User({name,password,email})
    await user.save()
    res.send(200).json()
 }
exports.authLogin = async ()=>{
  if(passport.authenticate('locals')){

    console.log(passport.transformAuthInfo()).then((response) => {console.log(response)})
    console.log(passport.deserializeUser()).then((response) => {console.log(response)})

  }else{
    console.log('no');
    
  }





}







