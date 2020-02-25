import axios from 'axios'

const baseURL     = 'http://localhost:3000'
const AUTHSERVICE = axios.create({      baseURL,withCredentials:true    })
export const signup =async  (name,email, password)=>{
    return await  AUTHSERVICE.post('/auth/signup',{name,email,password})
}



// export const login = async (userName, password) =>{
//     const { data } = await  AUTHSERVICE.post('/login', {name, password})
//     console.log(data);


//     return data

// }
