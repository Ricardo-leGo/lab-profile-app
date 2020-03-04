const Projects = require('../models/Projects')


let body ={}


exports.newprojrct = async  (req,res)=>{
  const {secure_url} = await req.file
  const {_id,title,description,web,github,behance} = await req.body 
  const proy =  new Projects(
    {owner:_id,
      title,
      description,
      web,
      github,
      behance,
      files:secure_url}
    )
      proy.save()
      .then(res=>{return res.status(200).json({msg:"holi project"}) })
      .catch(err=>{return res.status(500).json(proy)})
}