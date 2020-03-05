import React, { Component } from 'react'
import { getoneproy,  postoneproy} from '../services/getHomeService.js'

export default class projectDetail extends Component {
    constructor(props){
        super(props)
    }
    state={
        proy:{}
    }
          componentDidMount(){
                    postoneproy(this.props.match.params.id)
                    .then(res=> {
                        this.setState({proy:res.data.proy})
                    }).catch(err=>err)
    }

    render() {
        return (
            <div className="container details">
                    <h1     id="h1details">{this.state.proy.title}</h1>
                    <img    id="imgdetails"src={this.state.proy.files}/>
                    <p      id="pdetails">{this.state.proy.description}</p>
                    <div    id="socialcontainerdetails">
                    <a      id="linkportal" href={this.state.proy.web}><i>web</i> </a>
                    <a      id="ghdetails"href={this.state.proy.github}><i>github</i></a>
                    <a      id="bhdetails"href={this.state.proy.behance}><i>behance</i></a>
                    </div>
            </div>
        )
    }
}
