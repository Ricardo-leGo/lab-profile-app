import React, {useContext} from 'react'
import{MyContext} from '../context'

 function Gallarey({history}){
    const context = useContext(MyContext)

        }
    return (
        <MyContext.Consumer>
        {context=>
            {
                return(
                    <>
                        <H1>
                            Hoooola
                        </H1>
                    </>


                    )



        }
        }

        </MyContext.Consumer>

    )
}



export default Gallarey
