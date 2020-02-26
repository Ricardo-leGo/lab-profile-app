import React from 'react'
import { createContext ,Component} from "react";
import { withRouter } from 'react-router-dom'
import {signupServ, loginserv} from './services/auth'
import axios from 'axios'
import Signup from './pages/Signup';

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
        isLog:false
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
            return  await loginserv(email,password)

    }
// End of handle inpunts of Login


    render(){
        const {
            state,
            signupDataInputs, 
            signupSubmit, 
            loginDataInputs,
            loginSubmit}= this
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