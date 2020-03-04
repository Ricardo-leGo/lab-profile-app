import axios from 'axios'

const baseURL     = 'https://migatenogokui.herokuapp.com/'
const AUTHSERVICE = axios.create({      baseURL,withCredentials:true    })


// export const newprojectservicephoto = async (file)=>{
//     return await AUTHSERVICE.post('/new-project',file)
//     .then(res=>console.log(res)).catch(err=>err)
// }
export const newprojectservicedata =  (data )=>{
    return  AUTHSERVICE.post('/new-project',data ).then((res) =>res).catch(err=>err)
  
}


