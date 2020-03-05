import axios from 'axios'
const baseURL     = 'http://localhost:3000'
const GETPROFILE = axios.create({      baseURL,withCredentials:true    })

export const  getProfile =  ()=>{
    return   GETPROFILE.get('/').then(res=>res).catch(err=>err)
}