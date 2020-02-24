
import React, { Component } from 'react'
import { login } from '../services/auth'

 class FormUser extends Component {
     state = {
          userName:'',
          mail:'',
          password:''
     }

    cambiosenelInput= ({target})=>{
         let {name,value}= target
   this.setState({[name]:value})

   console.log(this.state)
     }

     crearUsuario=async (e)=>{
        e.preventDefault();

         const user =await  login(this.state.userName,this.state.mail,this.state.password)

         console.log(user);


         
     }




    render() {
        return (
            <div>
                <form onSubmit={this.crearUsuario}>
                    <input type='text'     name='userName'     id='userName' onChange={this.cambiosenelInput} placeholder='Name'
                    value={this.state.userName}/>
                    <input type='email'    name='mail'         id='mail'     onChange={this.cambiosenelInput} placeholder='Email'
                    value={this.state.mail}/>
                    <input type='password' name='password'     id='password' onChange={this.cambiosenelInput} placeholder='Password'
                    value={this.state.password}/>
                    <input type='submit' value='Login'/>
                </form>
            </div>
        )
    }
}
export default FormUser