import React, {useContext} from 'react'
import{MyContext} from '../../context'
import BarProfile from '../../components/userbarprofile/index'
// import CalendarIO from '../../components/Dashboard/Calendar'
import '../../styles/Profile.css'
import NewProject from './newProject'
import UserDashboard from '../../components/Dashboard'

 function Home({history}){
    const context = useContext(MyContext)
    const {userInHouse, proyectsUser,isLog} = context.state
    console.log(proyectsUser)
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
                        // <input id="createCv" type="submit" value="Create CV"/><br/>
                        <NewProject userID= {userInHouse._id} porysState={proyectsUser}/>
                        <UserDashboard userContext= {userInHouse} proysContext={proyectsUser}>
                        </UserDashboard>
                        </>
                        )
                }

            }
        }
        </MyContext.Consumer>
    )
}
export default Home