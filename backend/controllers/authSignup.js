const mongoose = require('mongoose')
const express = require('express')

const User = require('../models/User')


exports.authSignup =   async (req,res) => {
  const {name,password,email} =new User(req.body)
    const user = new User({name,password,email})
    await user.save()
    res.send(200).json()
 }






