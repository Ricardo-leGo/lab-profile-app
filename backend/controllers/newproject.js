





exports.newprojrct =(req,res)=>{
  const {title,files,description,web,github,behance} = req.body
  console.log({title,files,description,web,github,behance})
  res.status(200).json({title,files,description,web,github,behance})

}