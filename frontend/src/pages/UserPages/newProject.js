import React, { Component } from 'react'
import { newprojectservicedata, newprojectservicephoto } from '../../services/newProject'
import style from '../../styles/newProject.css'
class NewProject extends Component {
constructor(props){
    super(props)
}
state= {
        files:[],
        title:'',
        description:'',
        web:'',
        github:'',
        behance:'',
        file:null
}
    uploadinputs = ({target}) =>{
      const{name,value} = target
        this.setState({[name]:value})        
        }

        handlefileinput =async (e)  =>{
            
          await   this.setState({file:e.target.files[0]})
            console.log(this.state);

            
        }
        newprojectsubmit = (e) =>{
                e.preventDefault();

                let newform = new FormData()
                console.log(this.state.file);
                
                newform.append('file', this.state.file)
                newform.append('_id', this.props.userContext._id)
                newform.append('title', this.state.title)
               newform.append('description', this.state.description)
               newform.append('web', this.state.web)
               newform.append('github', this.state.github)
               newform.append('behance', this.state.behance)

                console.log(newform)
                    
                newprojectservicedata(newform).then(res=>console.log(res, 'msg: si se hizo ?')).catch(err=>console.log(err))

        }

    render() {
        return (
            <div className="sectionnewproject">
                <h1>New Project</h1>
                <form id="newProject"   method="post" encType="multipart/form-data" onSubmit={this.newprojectsubmit} >
                    <div id="wiUpload">
                        <input
                        type="file"
                        name="file"
                        id="filesInput"
                        placeholder="Upload Files"
                        onChange={this.handlefileinput} />
                    </div>
                    <div id="wiText">
                        <input type="text" name="title" id="titleInput" placeholder="Title"                 onChange={this.uploadinputs} />
                        <input type="text" name="description" id="descriptionInput" placeholder="description" onChange={this.uploadinputs} />
                        <input type="text" name="web" id="webInput" placeholder="Web"                       onChange={this.uploadinputs} />
                        <input type="text" name="github" id="githubInput" placeholder="github"              onChange={this.uploadinputs} />
                        <input type="text" name="behance" id="behanceInput" placeholder="behance"           onChange={this.uploadinputs} />
                    </div>
                <input type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}
export default NewProject
