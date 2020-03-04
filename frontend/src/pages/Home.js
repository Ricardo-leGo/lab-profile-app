import React, {useContext} from 'react'
import{MyContext} from '../context'
import HomeCard from '../components/HomeCards'

 function Home({history}){

    const context = useContext(MyContext)
        return (
        <MyContext.Consumer>
        {context=>
            {
                if(context.state.homedata===null){
                  return (<>'Loading....'</>) 
                }else{
                    return(
                        <>
                            {
                                    context.state.homedata.map((el,i)=>
                                        (
                                            <HomeCard
                                            picture={el.files}
                                            title={el.title}
                                            gh={el.github}
                                            bh={el.behance}
                                            web={el.web}
                                            description={el.description}
                                            origindate={el.createdAt}
                                            key={i}
                                            />
                                        )


                                        )
                            }
                        </>
    

                    )
                }



            }
        }

        </MyContext.Consumer>

    )
}



export default Home
