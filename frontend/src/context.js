import React from 'react'
import { createContext ,Component} from "react";
import { withRouter } from 'react-router-dom'
import {signupServ, loginserv} from './services/auth'
// import axios from 'axios'

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
            console.log(this.state.isLog);
            
            const {email,password}=this.state.loginForm
            const {data} = await loginserv(email,password)
            .then(response=>response)
            .catch(err=>err)
                const {usher}= data

            if(data.usher){
                this.setState(prevState => ({
                    ...prevState,
                    userInHouse:usher,
                    isLog:true
                  }))                  
                }
                // isLog?
                 this.props.history.push('/profile')
                //  :false

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