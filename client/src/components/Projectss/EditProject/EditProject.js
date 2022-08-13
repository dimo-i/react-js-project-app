import { useContext, useEffect, useState } from "react"


import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import * as projectService from '../../../services/projectService'
import { ProjectContext } from "../../../contexts/ProjectContext"

const EditProject = () => {
    const [currentProject, setCurrentProject] = useState({});
    const { editProject } = useContext(ProjectContext);
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
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6"></div>
                <form id="edit" onSubmit={onSubmit}>
                    <div className="form-floating mb-3">
                        <input id="name" name="name" type="text" className="form-control" placeholder="Project Name" defaultValue={currentProject.name} />
                        <label htmlFor="floatingInput">Project Name</label>
                    </div>
                    <div className="form-floating mb-3">

                        <select id="category" name="category" type="text" className="form-control" placeholder="Project Category" defaultValue={currentProject.category}>
                            <option id="Cars, Motors, Tunning" name="Cars, Motors, Tunning" value="Cars, Motors, Tunning" >Cars, Motors, Tunning</option>
                            <option id="Fitness and Sport" name="Fitness and Sport" value="Fitness and Sport" >Fitness and Sport</option>
                            <option id="Home projects" name="Home projects" value="Home projects" >Home projects</option>
                            <option id="Art" name="Art" value="Art" >Art</option>
                            <option id="Photography" name="Photography" value="Photography" >Photography</option>
                            <option id="Music" name="Music" value="Music" >Music</option>
                            <option id="Everything else" name="Everything else" value="Everything else" >Everything else</option>
                        </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input id="projectPicture" name="imageUrl" type="text" className="form-control" placeholder="Project Image" defaultValue={currentProject.imageUrl} />
                        <label htmlFor="floatingInput">Project Image</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea id="description" name="description" defaultValue={""} className="form-control" placeholder="Description" defaultValue={currentProject.description} />
                        <label htmlFor="floatingPassword">Description</label>
                    </div>


                    <input className="btn btn-primary mt-2" type="submit" value="Edit Project" />

                </form>
                <div className="d-flex justify-content-center">

                    <Link to={"/projects"} className="btn btn-primary ">
                        Go Back
                    </Link>
                </div>
            </div>
            <div className="col-lg-3"></div>

        </div>
    
        
    )
}


export default EditProject