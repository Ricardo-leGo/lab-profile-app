import React, {useContext, useEffect} from 'react'
import{MyContext} from '../../context'
import BarProfile from '../../components/userbarprofile/index'
import UserDashboard from '../../components/Dashboard'
import CalendarIO from '../../components/Dashboard/Calendar'
import { Link } from 'react-router-dom'
import '../../styles/Profile.css'
import NewProject from './newProject'

 function Home({history}){
    const context = useContext(MyContext)

    const {isLog} = context.state
    // useEffect(() => {
    //     if (isLog) return history.push('/login')
    //   })
    const {userInHouse} = context.state
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
                        <CalendarIO/>
                        <input id="createCv" type="submit" value="Create CV"/><br/>
                        <UserDashboard userContext= {userInHouse} />
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