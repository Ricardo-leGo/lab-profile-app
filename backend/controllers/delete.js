const Projects = require('../models/Projects')

exports.deleteELement = async (req,res,next)=>{
  const {id}= await req.body
  const proy = await Projects.findByIdAndDelete({ _id : id })
  const projects = await Projects.find()
  console.log(projects);
  return res.status(200).json(
    {msg:"updatedelete"
    projects})
}