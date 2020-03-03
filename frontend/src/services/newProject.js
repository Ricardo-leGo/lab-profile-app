import axios from 'axios'

const baseURL     = 'http://localhost:3000'
const AUTHSERVICE = axios.create({      baseURL,withCredentials:true    })


export const newprojectservicephoto = async (file)=>{
    return await AUTHSERVICE.post('/new-project',file)
    .then(res=>console.log(res)).catch(err=>err)
}
export const newprojectservicedata = async (data)=>{
    return await AUTHSERVICE.post('/new-project',data)
    .then(res=>console.log(res)).catch(err=>err)
}



// export const uploadphoto = async photo =>{
//     return await AUTHSERVICE.post('/    -project',photo)
// }