import React, { Component } from 'react'
import CardProject from './CardProject'
import {deleteproy}  from '../../services/deleteproy'

import '../../styles/galleryUser.css'
export class UserDashboard extends Component {
    constructor(props){
        super(props)
        this.arrayProys =[]
        this.props.proysContext.map(el=>{
            if(el.owner===this.props.userContext._id){
                this.arrayProys.push(el)
            }
        })
    }
    state={
        projects:[]
    }

    componentDidMount(){
        this.setState(
            this.state.projects = this.props.proysContext
            )
    }
    deletELementCard = (e) =>{
        return deleteproy(e).then(res=>{
            this.setState(this.state.projects= res.data.projects)
        }).catch(err=>err)
    }
    render() {
               {
                if(this.state.projects.length>0){
                    return (
                        <>
                        <div className="galleryTwoParts">
                            <div className="galleryContainer">
                                { this.state.projects.map((el,i)=>(
                                        <CardProject
                                        picture={el.files}
                                        title={el.title}
                                        gh={el.github}
                                        bh={el.behance}
                                        web={el.web}
                                        description={el.description}
                                        origindate={el.createdAt}
                                        key={i}
                                        idproy={el._id}
                                        funcion={this.deletELementCard}
                                        />
                                        ))}
                            </div>
                        </div>
                        </>
                        )
                    }else{
                        return(
                            <>
                                <div className="galleryTwoParts">
                                    <div className="galleryContainer">
                                        <h1>Loading ...</h1>
                                    </div>
                                </div>
                            </>
                            )
                        }
    }
}
}
export default UserDashboard