const Projects = require('../models/Projects')
const uploadCloud = require('../config/cloudinary');


exports.newprojrct = async (req,res)=>{
  // const {secure_url} = req.files
  const {newform,_id,title,description,web,github,behance} = req.body
  // const imgPath = req.file.url
  // const imgName  = req.file.originalname
  console.log(req.file)
  console.log(req.body);
  
  const proy =  new Projects({owner:_id,title,description,web,github,behance,files:newform})
   await  proy.save().then(res=>{return res.status(200).json({msg:"holi project"})          })
                   .catch(err=>{return res.status(200).json({msg:"No se ha creado",err})  })

}