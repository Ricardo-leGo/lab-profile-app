const { Schema, model } = require('mongoose')
const User = require('../models/User')

const projectSchema = new Schema({
  owner:String,
  title:String,
  description:String,
  web:String,
  github:String,
  behance:String,
  files:String
},{
  timestamps:true,
  versionKey:false
})

module.exports = model("Project", projectSchema)