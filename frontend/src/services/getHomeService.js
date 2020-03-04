import axios from 'axios'
const baseURL     = 'http://localhost:3000'
const GETHOME = axios.create({      baseURL,withCredentials:true    })

export const  getHome =  ()=>{
    return   GETHOME.get('/').then(res=>res).catch(err=>err)

}