import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/UserPages/Profile'
import newProject from './pages/UserPages/newProject'
import {logout} from './services/auth'
import projectDetail from './pages/projectDetail'

export default function Router(){
    return (
        <>
        <Navbar/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/login' component={Login} exact/>
                <Route path='/signup' component={Signup} exact/>
                <Route path='/logout' component={async ()=>{await logout().then(res=>console.log(res)).catch(err=>err)}} exact/>
                <Route path='/Profile' component={Profile} exact/>
                <Route path='/new-project' component={newProject} exact/>
                <Route path='/:id' component={projectDetail} exact/>
                <Route path='*' component={()=>{return <h1>404 Page Not Found</h1>}}/>
            </Switch>
        </>
    )
}
