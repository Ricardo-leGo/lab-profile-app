import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardProject from './CardProject'
import '../../styles/galleryUser.css'

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
            <div className="galleryTwoParts">
                <div className="galleryContainer">
                    <CardProject />
                    <CardProject />
                    <CardProject />
                    <CardProject />
                </div>
            </div>
        )
    }

}
export default UserDashboard
