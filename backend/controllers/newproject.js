const Projects = require('../models/Projects')
 const uploadCloud = require('../config/cloudinary');


exports.newprojrct = async (req,res)=>{
  const file = await req.file
  console.log(file);
  if(file!= undefined||file!=null){
    const {secure_url} = req.file
    const {_id,title,description,web,github,behance} = req.body
    const proy = new Projects({owner:_id,title,description,web,github,behance,secure_url})
    console.log(proy);
   await proy.save().then(res=>{return res.status(200).json({msg:"holi project"})          })
                     .catch(err=>{return res.status(500).json({msg:"No se ha creado",err})  })
}else{
  res.status(500).json({msg:"nose hizo nada"})
}
}




// const {secure_url}= req.file
// const proy = await new Projects({owner:_id,title,description,web,github,behance,files:secure_url})
// await  proy.save().then(res=>{return res.status(200).json({msg:"holi project"})          })
//                    .catch(err=>{return res.status(500).json({msg:"No se ha creado",err})  })