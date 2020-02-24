import axios from 'axios'


const BASEURL     = 'http://localhost:3000/auth'

const AUTHSERVICE = axios.create({
    BASEURL,
    withCredentials:true
})



export const login = async (userName, password) =>{
    const { data } = await  AUTHSERVICE.post('/login', {userName, password})
    console.log(data);
    

    return data

}

export const signup =async  (userName,email, password)=>{
    const {data} =await  AUTHSERVICE.post('/signup',{userName,email,password})
    console.log(data);
    
return data
}