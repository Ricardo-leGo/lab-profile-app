import React, {useContext} from 'react'
import{MyContext} from '../context'

 function Login({history}){
    const context = useContext(MyContext)

        const submitToContext = (e) =>{

              context.loginSubmit( e )
             .then(response => {
                console.log(response);
                 history.push('/profile')
                }).catch(err => {
                        console.log(err)
                        history.push('/login')
                  })
        }
    return (
        <MyContext.Consumer>
        {context=>
            {
                return(
                    <>
                    <h1>Hola</h1>
                    <form onSubmit={submitToContext}>
                    <input
                    type='email'    
                    name='email'
                    id='email'      
                    placeholder='Email'
                    onChange={context.loginDataInputs}
                    />
                    <input 
                    type='password' 
                    name='password'
                    id='password'
                    placeholder='Password'
                    onChange={context.loginDataInputs}
                    />
                    <input type='submit' value='Login'/>
                </form>
                    </>


                    )



        }
        }

        </MyContext.Consumer>

    )
}



export default Login
