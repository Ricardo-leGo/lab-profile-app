import React, {useContext} from 'react'
import{MyContext} from '../context'

 function Home({history}){

    const context = useContext(MyContext)
    return (
        <MyContext.Consumer>
        {context=>
            {
                return(
                    <>
                    <h1>Home</h1>

                    </>


                    )



        }
        }

        </MyContext.Consumer>

    )
}



export default Home
