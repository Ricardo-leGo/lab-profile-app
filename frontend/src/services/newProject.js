import axios from 'axios'

const baseURL     = 'http://localhost:3000'
const AUTHSERVICE = axios.create({      baseURL,withCredentials:true    })


export const newprojectservicedata =  async (data )=>{
    return await AUTHSERVICE.post('/new-project',data )

}


