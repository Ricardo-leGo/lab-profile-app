import React, {useContext} from 'react'
import{MyContext} from '../context'

 function Signup({history}){
    const context = useContext(MyContext)
        const submitToContext = (e) =>{
              context.signupSubmit( e )
             .then(response => {
                console.log(response);
                 history.push('/login')
                }).catch(err => {
                        console.log(err)
                        history.push('/signup')
                  })
        }
    return (
        <MyContext.Consumer>
        {context=>
            {
                return(
                    <>
                    <h1 className="newuserh1">Contacto</h1>
                    <form className="formcontacto" onSubmit={submitToContext}>
                    <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
                    onChange={context.signupDataInputs}
                    />
                    <input
                    type='email'    
                    name='email'
                    id='emailcontacto'
                    placeholder='Email'
                    onChange={context.signupDataInputs}

                    />
                    <input 
                    type='texto'
                    name='msgcontacto'
                    id='msgtext'
                    placeholder='Message'
                    onChange={context.signupDataInputs}

                    />
                    <input type='submit' value='Send'/>
                </form>
                    </>


                    )



        }
        }

        </MyContext.Consumer>

    )
}



export default Signup
