import React, {useContext} from 'react'
import{MyContext} from '../context'
import HomeCard from '../components/HomeCards'
import styles from '../styles/home.css'

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
                        <><div className="homeContainer">
                            <div className="slidercontainer">
                            {
                                    context.state.homedata.map((el,i)=>
                                        (
                                            <HomeCard
                                            picture={el.files}
                                            title={el.title}
                                            gh={el.github}
                                            bh={el.behance}
                                            web={el.web}
                                            idproyect={el._id}
                                            description={el.description}
                                            origindate={el.createdAt}
                                            key={i}
                                            />
                                        )
                                        )
                            }
                                </div>
                            </div>
                        </>
                    )
                }



            }
        }

        </MyContext.Consumer>

    )
}



export default Home
