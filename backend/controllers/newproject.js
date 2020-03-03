const Projects = require('../models/Projects')


let body ={}

exports.newprojrct = async  (req,res)=>{
  // const file = await  req.file.secure_url
  let {body,file} = await req
  console.log(file);
  console.log(body);
//  const {title, description,  hamburguesas,web, github, behance} = req.body
  // const proy =  new Projects(body)
  //    proy.save().then(res=>{return res.status(200).json({msg:"holi project"}) })
  //                     .catch(err=>{return res.status(500).json({msg:"No se ha creado",err})  })



      // if(file){
      //   proy.findOneAndUpdate(files, file)
      // }

}