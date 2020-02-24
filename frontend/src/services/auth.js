import axios from 'axios'


const BASEURL     = 'http://localhost:3001/auth'

const AUTHSERVICE = axios.create({
    BASEURL,
    withCredentials:true
})


export const signup =async  (name,email, password)=>{

    return await  AUTHSERVICE.post("/signup",{name,email,password})
}



// export const login = async (userName, password) =>{
//     const { data } = await  AUTHSERVICE.post('/login', {name, password})
//     console.log(data);


//     return data

// }
