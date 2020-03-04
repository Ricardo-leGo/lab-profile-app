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
        console.log(this.props);
        
        this.setState(this.state.projects=this.props.proysContext) 
        console.log(this.state.projects);
    }
    
    render() {
        return (
            <div className="galleryTwoParts">
                <div className="galleryContainer">

                    {
                this.state.projects.map((el,i)=>(
            <CardProject
            picture={el.files}
            title={el.title}
            gh={el.github}
            bh={el.behance}
            web={el.web}
            description={el.description}
            origindate={el.createdAt}
            key={i}
            />
                    )
                    )}

                </div>
            </div>
        )
    }

}
export default UserDashboard
