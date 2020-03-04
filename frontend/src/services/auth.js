import axios from 'axios'

const baseURL     = 'https://migatenogokui.herokuapp.com/'
const AUTHSERVICE = axios.create({      baseURL,withCredentials:true    })

export const signupServ =async  (name,email, password)=>{

    return await  AUTHSERVICE.post('/auth/signup',{name,email,password})
}

export const loginserv = async (email, password) => {

    return await AUTHSERVICE.post('/auth/login',{email, password})

}

export const logout = async () =>{
    return await AUTHSERVICE.get('/auth/logout')
}
