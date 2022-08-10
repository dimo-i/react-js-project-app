import { useContext, useEffect, useState } from "react"


import { useParams, useNavigate } from "react-router-dom"

import * as projectService from '../../../services/projectService'
import { ProjectContext } from "../../../contexts/ProjectContext"

const EditProject = () => {
    const [currentProject, setCurrentProject] = useState({});
    const { editProject} = useContext(ProjectContext);
    const { projectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        projectService.getOne(projectId)
        .then(projectData => {
            setCurrentProject(projectData)
        })
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const projectData = Object.fromEntries(new FormData(e.target));
        
        projectService.edit(projectId, projectData)
            .then(result => {
                console.log(result)
                editProject(projectId, result)
                navigate(`/projects/${projectId}`)
            });
    }

    return (
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <form id="edit" onSubmit={onSubmit}>
                <div className="form-floating mb-3">
                    <input id="name" name="name" type="text" className="form-control" placeholder="Project Name" defaultValue={currentProject.name}/>
                    <label htmlFor="floatingInput">Project Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input id="category" name="category" type="text" className="form-control" placeholder="Project Category" defaultValue={currentProject.category}/>
                    <label htmlFor="floatingCategory">Project Category</label>
                </div>
                <div className="form-floating mb-3">
                    <input id="projectPicture" name="imageUrl" type="text" className="form-control" placeholder="Project Image" defaultValue={currentProject.imageUrl}/>
                    <label htmlFor="floatingInput">Project Image</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea id="description" name="description" defaultValue={""} className="form-control" placeholder="Description" defaultValue={currentProject.description}/>
                    <label htmlFor="floatingPassword">Description</label>
                </div>


                    <input className="btn btn-primary mt-2" type="submit" value="Edit Project" />
                </form>
            </div>
            <div className="col-lg-3"></div>
        </div>
        
    )


}


export default EditProject