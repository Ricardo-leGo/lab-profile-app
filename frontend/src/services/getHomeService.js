import axios from 'axios'
const baseURL     = 'http://localhost:3000'
const GETHOME = axios.create({      baseURL,withCredentials:true    })



export const  getHome = async ()=>{
    return  await GETHOME.get('/')

}