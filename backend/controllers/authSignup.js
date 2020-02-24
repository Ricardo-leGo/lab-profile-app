const User = require('../models/User')
const mongoose = require('mongoose')



exports.authSignup = async (req,res) => {
  const {userName,email,password} = req.body


  const newUser =  new User({
    userName,
    email,
    password
  })

  await newUser.save()
  res.redirect ('/')
}