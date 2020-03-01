const { Schema, model } = require('mongoose')

const projectSchema = new Schema({

  name:String,
  owner:{
    type:Schema.Types.ObjectId,
    ref:User
  },
  typeofprojects:String,
  smlldescription:String,
  lrgdescription:String,
  techtags:[{type:String}],
  images:[{type:String}],
  linkproject:String
},{
  timestamps:true,
  versionKey:false
})

module.exports = model("Project", projectSchema)