import axios from 'axios'
const baseURL     = 'http://localhost:3000'
const DELETE = axios.create({      baseURL,withCredentials:true    })

export const  deleteproy =  async ({target})=>{
    const {id} =target
    console.log(id);
    return  await  DELETE.post('/delete',{id})
}