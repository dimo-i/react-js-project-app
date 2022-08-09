import { useContext, useEffect, useState } from "react"


import { useParams } from "react-router-dom"

import * as projectService from '../../../services/projectService'
import { ProjectContext } from "../../../contexts/ProjectContext"

const EditProject = () => {
    const [currentProject, setCurrentProject] = useState({})
    const { } = useContext(ProjectContext)
    const { projectId } = useParams()

    useEffect(() => {
        projectService.getOne(projectId)
        .then(projectData => {
            setCurrentProject(setCurrentProject)
        })
    })

    const onSubmit = (e) => {
        e.preventDefault();

        const projectData = Object.fromEntries(new FormData(e.target));
        
    }

    return (
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <form id="edit" onSubmit={onSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Project Name</label>
                            <div className="input-wrapper">
                                <input id="name" name="name" type="text" defaultValue={currentProject.name}/>
                            </div>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="category">Project Category</label>
                            <div className="input-wrapper">
                                <input id="category" name="category" type="text" defaultValue={currentProject.category}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="imageUrl">Project Image</label>
                            <div className="input-wrapper">
                                <input id="projectPicture" name="imageUrl" type="text" defaultValue={currentProject.imageUrl}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="pass">Description</label>
                            <div className="input-wrapper">
                                <textarea id="description" name="description" defaultValue={""} />
                            </div>
                        </div>

                    </div>



                    <input className="btn btn-primary mt-2" type="submit" value="Edit Project" />
                </form>
            </div>
            <div className="col-lg-3"></div>
        </div>
    )


}


export default EditProject