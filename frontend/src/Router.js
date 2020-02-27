import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'

const Hommie = () => <h1>Hommie man just Do it Pana</h1>
const EnterMan = () => <h1>Comme in Hommie</h1>
// const AccesHommie = () => <h1>Comm ´on  Nigga</h1>
const fuckoffniga = () => <h1>logout Nigga</h1>
const Comminman = () => <h1>Hommie Ouse, nigga</h1>


export default function Router(){
    return (
        <>
        <Navbar/>
            <Switch>
                <Route path='/' component={Hommie} exact/>
                <Route path='/login' component={Login} exact/>
                <Route path='/signup' component={Signup} exact/>
                <Route path='/logout' component={fuckoffniga} exact/>
                <Route path='/Profile' component={Comminman} exact/>
            </Switch>
        </>
    )
}
