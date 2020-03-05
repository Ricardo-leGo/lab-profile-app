import React, { Component } from 'react'
import { getoneproy,  postoneproy} from '../services/getHomeService.js'

export default class projectDetail extends Component {
    constructor(props){
        super(props)
    }
    state={
        proy:[]
    }

         async componentDidMount(){

            let id =this.props.match.params.a
             await postoneproy(id)

            // this.setState({homedata:projects})


         }



    render() {

        
        return (
            <div>
                    <h1>Proyect Name</h1>
            </div>
        )
    }
}
