import axios from 'axios'

const baseURL     = 'http://localhost:3000'
const AUTHSERVICE = axios.create({      baseURL,withCredentials:true    })


export const newprojectservice = async (newform,data,h)=>{
    return await AUTHSERVICE.post('/new-project',{newform, data,headers:h})
    .then(res=>console.log(res)).catch(err=>err)
}



// export const uploadphoto = async photo =>{
//     return await AUTHSERVICE.post('/    -project',photo)
// }