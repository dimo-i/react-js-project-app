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

        <div className="col mb-4">
            <div className="card">
                <div className="view overlay">
                    <img className="img" src={currentProject.imageUrl} alt="Card image cap" />
                </div>
                <div>
                    {/*TODO if album and if authenticated */}
                    <Link to="" className="btn btn-primary">See More</Link>
                    {/* TODO if owner  */}
                    <Link to="" className="btn btn-primary">Add images to album</Link>
                </div>
            </div>

            <div className="card-body">
                <h2 className="card-title">Project name: {currentProject.name}</h2>
                {/*TODO if user is authenticated  */}
                {/* TODO filter by categories page */}
                <h2 className="card-text">Category: {currentProject.category}</h2>

                {/* TODO if description  */}
                <h2 className="card-text">Description: {currentProject.description}</h2>

                <h2>Posted: {currentProject._createdOn}</h2>
                {/*TODO projects by user  */}
                {/* <p>
                    <span>If you want to see more of the project, click <Link to="/register">here</Link> to register</span>
                </p> */}

                {/* if user is owner  */}
                <Link to={`/projects/${projectId}/edit-project`} className="btn btn-primary">Edit</Link>
                <Link to="" className="btn btn-danger">Delete</Link>

            </div>
            <div>
                <Link to="/projects" className="btn btn-primary">Go To All Projects</Link>
            </div>
        </div>

    )
}

export default ProjectDetails