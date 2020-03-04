import axios from 'axios'
const baseURL     = 'https://migatenogokui.herokuapp.com/'
const GETPROFILE = axios.create({      baseURL,withCredentials:true    })

export const  getProfile =  ()=>{
    return   GETPROFILE.get('/').then(res=>res).catch(err=>err)
}