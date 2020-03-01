import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/UserPages/Profile'
import {logout} from './services/auth'

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
                <Route path='*' component={()=>{return <h1>404 Page Not Found</h1>}}/>
            </Switch>
        </>
    )
}
