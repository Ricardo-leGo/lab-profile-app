import React, {useContext} from 'react'
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

    const {userInHouse, proyectsUser} = context.state



    return (
        <MyContext.Consumer>
        {context=>
            {
                if(!isLog){
                    history.push('/login')
                }else{
                    return(
                        <>
                        <BarProfile logeado={isLog} userContext= {userInHouse}/>
                        <input id="createCv" type="submit" value="Create CV"/><br/>

                            {/* <CalendarIO/> */}
                            <NewProject userID= {userInHouse._id} porysState={context.state.proyectsUser}/>
                        <UserDashboard userContext= {userInHouse} proysContext={proyectsUser} />
                        </>
                        )
                }

            }
        }
        </MyContext.Consumer>
    )
}
export default Home