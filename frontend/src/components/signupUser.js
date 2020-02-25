
import React, { Component } from 'react'
import { signup } from '../services/auth'

 class FormUser extends Component {
     state = {
          name:"",
          email:"",
          password:""
     }

    cambiosenelInput= ({target})=>{
         let {name,value}= target
   this.setState({[name]:value})
     }

     crearUsuario=async (e)=>{
        e.preventDefault();
         const user =await  signup(
             this.state.name,
             this.state.email,
             this.state.password)
     }




    render() {
        return (
            <div>
                <form onSubmit={this.crearUsuario} method="POST">
                    <input type='text'     name='name'     id='name' onChange={this.cambiosenelInput} placeholder='Name'
                    value={this.state.name}/>
                    <input type='email'    name='email'         id='email'     onChange={this.cambiosenelInput} placeholder='Email'
                    value={this.state.email}/>
                    <input type='password' name='password'     id='password' onChange={this.cambiosenelInput} placeholder='Password'
                    value={this.state.password}/>
                    <input type='submit' value='signup'/>
                </form>
            </div>
        )
    }
}
export default FormUser