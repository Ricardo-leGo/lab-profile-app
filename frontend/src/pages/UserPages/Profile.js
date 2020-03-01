import React, {useContext} from 'react'
import{MyContext} from '../../context'
import BarProfile from '../../components/userbarprofile/index'
import UserDashboard from '../../components/Dashboard/index.js'
import CalendarIO from '../../components/Dashboard/Calendar'

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
                        <UserDashboard userContext= {userInHouse} />
                        <CalendarIO/>

                        <input type="submit" value="Create CV"/>
                        </>

                        )
            }
        }

        </MyContext.Consumer>

    )
}



export default Home
