import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'

const Hommie = () => <h1>Hommie man just Do it Pana</h1>
const EnterMan = () => <h1>Comme in Hommie</h1>
// const AccesHommie = () => <h1>Comm ´on  Nigga</h1>

 const Router = () =>{
    return (
        <BrowserRouter>
        <Navbar/>
            <Switch>
            <Route path='/' component={Hommie} exact/>
            <Route path='/login' component={EnterMan} exact/>
            <Route path='/signup' component={Signup} exact/>
            </Switch>
        </BrowserRouter>
    )
}



export default Router