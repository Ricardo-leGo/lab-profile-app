import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class BarProfile extends Component {
    constructor(props){
        super(props)
 
    }   
    render() {

        return (
            <div>
        <img src={this.props.userContext.img}/>
        <h1>{this.props.userContext.name}</h1>
                <Link to="#">Linkedin</Link>
        <Link to="#">Behance</Link>
        <Link to="#">Github</Link>
        <Link to="#">Youtube</Link>
        <Link to="#">Dribbble</Link>
        
            </div>
        )
    }

}
export default BarProfile
