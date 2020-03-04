import axios from 'axios'
const baseURL     = 'https://migatenogokui.herokuapp.com/'
const GETHOME = axios.create({      baseURL,withCredentials:true    })

export const  getHome =  ()=>{
    return   GETHOME.get('/').then(res=>res).catch(err=>err)

}