import React from 'react'
import { createContext ,Component} from "react";
import { withRouter } from 'react-router-dom'
import {signupServ, loginserv} from './services/auth'
import {getHome} from './services/getHomeService'
import {deleteproy}  from './services/deleteproy'

export const MyContext = createContext()
class MyProvider extends Component{
    state={
        SignupForm:{
            name:'',
            email:'',
            password:''
        },
        loginForm:{
            email:'',
            password:''
        },
        userInHouse:null,
        isLog:false,
        proyectsUser:null,
        homedata:null
    }

    // handle inpunts of Signup
    signupDataInputs = e => {
        const {SignupForm} = this.state
        const {name,value} = e.target
        
        SignupForm[name]=value
        this.setState({SignupForm})
    }
    
    signupSubmit = async (e) =>{
        e.preventDefault();
        const {name,email,password}=this.state.SignupForm
        return await signupServ(name,email,password)
    }
    // End of handle inpunts of Signup

    
    // handle inpunts of Login
    
    loginDataInputs = e => {
        const {loginForm} = this.state
        const {name,value} = e.target
        
        loginForm[name]=value
        this.setState({loginForm})
    }

    loginSubmit = async (e) =>{
        e.preventDefault();
        const {email,password}=this.state.loginForm
        const {data} = await loginserv(email,password)
        .then(response=>response)
        .catch(err=>err)
        const {usher,proys}= data
        if(data.usher){
            this.setState(prevState => ({
                ...prevState,
                userInHouse:usher,
                proyectsUser:proys,
                isLog:true
            }))
        }
        // End of handle inpunts of Login
        this.props.history.push('/profile')
    }



                render(){
                    const {
                        state,
                        signupDataInputs, 
                        signupSubmit, 
                        loginDataInputs,
                        loginSubmit,
                        deleteproy
                        

                    }= this
                        return(
                            <MyContext.Provider
                            value={{
                                state,
                                signupDataInputs,
                                signupSubmit,
                                loginDataInputs,
                                loginSubmit

            }}>
            {this.props.children}
            
            </MyContext.Provider>
            )
        }
    }
    export default withRouter(MyProvider)