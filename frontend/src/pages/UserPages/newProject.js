import React, { Component } from 'react'
import { newprojectservice } from '../../services/newProject'

class NewProject extends Component {

state= {
        files:[],
        title:'',
        description:'',
        web:'',
        github:'',
        behance:''
}
    uploadinputs = ({target}) =>{
      const{name,value} = target
        this.state[name]= value
            console.log(this.state)
        }

        newprojectsubmit =(e) =>{
                e.preventDefault();
                const {title,files,description,web,github,behance} = this.state
                 newprojectservice(title,files,description,web,github,behance)
        }

    render() {

        return (
            <div className="sectionnewproject">
                <h1>New Project</h1>
                <form id="newProject" onSubmit={this.newprojectsubmit}>
                <input type="file" name="files" id="filesInput" placeholder="Upload Files"          onChange={this.uploadinputs} />
                <input type="text" name="title" id="titleInput" placeholder="Title"                 onChange={this.uploadinputs} />
                <input type="text" name="description" id="descriptionInput" placeholder="description" onChange={this.uploadinputs} />
                <input type="text" name="web" id="webInput" placeholder="Web"                       onChange={this.uploadinputs} />
                <input type="text" name="github" id="githubInput" placeholder="github"              onChange={this.uploadinputs} />
                <input type="text" name="behance" id="behanceInput" placeholder="behance"           onChange={this.uploadinputs} />
                <input type="submit" value="Create"/>
                </form>


            </div>
        )
    }
}

export default NewProject
