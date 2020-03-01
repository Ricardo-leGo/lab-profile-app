import React, {useContext} from 'react'
import{MyContext} from '../../context'
import BarProfile from '../../components/userbarprofile/index'
import UserDashboard from '../../components/Dashboard'
import CalendarIO from '../../components/Dashboard/Calendar'
import '../../styles/Profile.css'
 function Home({history}){
    const context = useContext(MyContext)
    const {isLog} = context.state
    const {userInHouse} = context.state
    return (
        <MyContext.Consumer>
        {context=>
            {
            return(
                <>
                <BarProfile logeado={isLog} userContext= {userInHouse}/>
                <CalendarIO/>
                <input id="createCv" type="submit" value="Create CV"/>
                <UserDashboard userContext= {userInHouse} />
                </>
                )
            }
        }
        </MyContext.Consumer>
    )
}
export default Home