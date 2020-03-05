const Projects = require('../models/Projects')



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
      await proy.save()

      const proys = await  Projects.find()
 return await  res.status(200).json({msg:"New", proys})

}