import axios from 'axios'
const baseURL     = 'https://migatenogokui.herokuapp.com/'
const DELETE = axios.create({      baseURL,withCredentials:true    })

export const  deleteproy =  async ({target})=>{
    const {id} =target
    console.log(id);
    return  await  DELETE.post('/delete',{id})
}