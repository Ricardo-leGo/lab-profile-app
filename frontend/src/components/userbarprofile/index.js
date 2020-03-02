import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/wraperLinkSocial.css'

export class BarProfile extends Component {


    state={

    }
    constructor(props){
        super(props)
 
    }
    render() {

        return (
            <div className="cardContainer">
        <img className="imgProfile" src={this.props.userContext.img}/>

        <h1>{this.props.userContext.name}</h1>
            <div className="wraperLinksSocial">
                <Link to="#">Linkedin</Link>
                <Link to="#">Behance</Link>
                <Link to="#">Github</Link>
                <Link to="#">Youtube</Link>
                <Link to="#">Dribbble</Link>
            </div>
            </div>
        )
    }
}
export default BarProfile
