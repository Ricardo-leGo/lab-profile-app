import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardProject from './CardProject'
import '../../styles/galleryUser.css'

export class UserDashboard extends Component {
    constructor(props){
        super(props)
    }
    state={
            user:{},
            projects:[]
        }
    
    componentDidMount(){
        
        this.setState(this.state.projects=this.props.proysContext) 
        console.log(this.state.projects)
    }
    
    render() {
        return (
            <div className="galleryTwoParts">
                <div className="galleryContainer">

                    {
                    this.state.projects.map(el=>(
            <CardProject
            picture={this.state.projects.files}
            title={this.state.projects.title}
            gh={this.state.projects.github}
            bh={this.state.projects.behance}
            web={this.state.projects.web}
            description={this.state.projects.description}
            origindate={this.state.projects.createdAt}
            />
                    )
                    )}
  
                    
  
                </div>
            </div>
        )
    }

}
export default UserDashboard
