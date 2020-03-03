import React, {useContext, useEffect} from 'react'
import{MyContext} from '../../context'
import BarProfile from '../../components/userbarprofile/index'
import UserDashboard from '../../components/Dashboard'
import CalendarIO from '../../components/Dashboard/Calendar'
import { Link } from 'react-router-dom'
import '../../styles/Profile.css'
import NewProject from './newProject'
import {getProfile} from '../../services/getProfile'

 function Home({history}){
    const context = useContext(MyContext)
    
    const {isLog} = context.state
    // useEffect(() => {
    //     if (isLog) return history.push('/login')
    //   })
    const {userInHouse, proyectsUser} = context.state
    // console.log(userInHouse._id);
    // console.log(proyectsUser[0].owner)


    return (
        <MyContext.Consumer>
        {context=>
            {
                if(!isLog){
                    history.push('/login')
                }else{
    // const info= getProfile().then(res=>res).catch(err=>err)
    // console.log(info);
    // if(proyectsUser.owner===userInHouse._id){
    //     console.log(proyectsUser)
    // }

    
    
                    return(
                        <>
                        <BarProfile logeado={isLog} userContext= {userInHouse}/>
                        <CalendarIO/>
                        <input id="createCv" type="submit" value="Create CV"/><br/>
             
                        <UserDashboard userContext= {userInHouse} proysContext={proyectsUser} />
                        <NewProject userContext= {userInHouse} />
                        </>
                        )
                }

            }
        }
        </MyContext.Consumer>
    )
}
export default Home