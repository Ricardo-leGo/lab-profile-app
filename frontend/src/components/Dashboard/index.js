import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardProject from './CardProject'
import '../../styles/galleryUser.css'

export class UserDashboard extends Component {
    constructor(props){
        super(props)
        this.arrayProys =[]

        this.props.proysContext.forEach(el=>{
            if(el.owner===this.props.userContext._id){
                this.arrayProys.push(el)
            }
    
        })
    }
    state={
        projects:[]
    }

    componentDidMount(){
            this.setState(this.state.projects = this.arrayProys)
    }
    componentDidUpdate(){

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
