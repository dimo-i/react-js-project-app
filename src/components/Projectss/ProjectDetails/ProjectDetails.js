import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"


import * as projectService from "../../../services/projectService"

const ProjectDetails = () => {

    const { projectId } = useParams();
    const [currentProject, setCurrentProject] = useState({})

    useEffect(() => {
        projectService.getOne(projectId)
            .then(result => {
                console.log(result)
                console.log(projectId)
                setCurrentProject(result);
            });
    }, []);

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
        <div class="col mb-4">
            <div class="card">
                <div class="view overlay">
                    <img className="project-img" src={currentProject.imageUrl} />
                </div>


                <div class="card-body">

                    <h2 className="card-title">  {currentProject.name}</h2>
                    <h3 className="card-text"> {currentProject.category}</h3>
                </div>
                <h2 className="card-text">
                    {currentProject.description}
                </h2>
                {/* TODO if user is owner */}
                <div>
                    <Link to={`/projects/${projectId}/edit-project`} className="btn btn-primary">
                        Edit
                    </Link>
                    <Link to={`/projects/${projectId}/delete-project`} className="btn btn-danger">
                        Delete
                    </Link>
                </div>
            </div>
        </div>
        </div>

    )
}

export default ProjectDetails