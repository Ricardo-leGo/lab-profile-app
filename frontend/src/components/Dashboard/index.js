import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardProject from './CardProject'

export class UserDashboard extends Component {
    state={
        user:{
            projects:[],

        }
    }
    componentDidMount(){
        
    }

    
    constructor(props){
        super(props)
 
    }   
    render() {

        return (
            <div>
            
                <div className="galleryContainer">
                    <CardProject />
                </div>
        
            </div>
        )
    }

}
export default UserDashboard
