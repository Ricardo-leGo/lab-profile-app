import React, {useContext} from 'react'
import{MyContext} from '../../context'
import BarProfile from '../../components/userbarprofile/index'
import UserDashboard from '../../components/Dashboard'
import CalendarIO from '../../components/Dashboard/Calendar'
import { Link } from 'react-router-dom'
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
                <input id="createCv" type="submit" value="Create CV"/><br/>
                <Link className="newProjectbtn" id="newProject" to="#">Creacte New Project</Link>
                <UserDashboard userContext= {userInHouse} />
                </>
                )
            }
        }
        </MyContext.Consumer>
    )
}
export default Home