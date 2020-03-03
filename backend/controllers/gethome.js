const User = require('../models/User')
const Projects = require('../models/Projects')


exports.gethome =async (req,res,next)=>{
const projects = await Projects.find()
const user = await User.find()


return res.status(200).json({projects,user})

}