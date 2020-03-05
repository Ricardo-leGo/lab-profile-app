const Projects = require('../models/Projects')
exports.postproyid = async (req, res)=>{
  const {id} = await req.body
  const proy = await Projects.findOne({_id:id})
  console.log(proy);
    return res.status(200).json({msg:"Hola", proy})
  }
  exports.getproyid = async (req, res)=>{
   return res.status(200).json({msg:"Hellowww"})
}