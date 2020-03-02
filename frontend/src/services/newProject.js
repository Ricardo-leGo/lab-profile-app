import axios from 'axios'

const baseURL     = 'http://localhost:3000'
const AUTHSERVICE = axios.create({      baseURL,withCredentials:true    })


export const newprojectservice = async (title,files,description,web,github,behance)=>{
    return await AUTHSERVICE.post('/new-project',{title,files,description,web,github,behance})
}