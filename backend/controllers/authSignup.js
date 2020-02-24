const mongoose = require('mongoose')
const express = require('express')

const User = require('../models/User')


exports.authSignup =  (req,res) => {

  const data =new User(req.body)
  console.log(data);
  

  data.save()
 .then(item => {
   console.log(item);
   
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
}





