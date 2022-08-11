import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from "../../../contexts/AuthContext"



import * as projectService from "../../../services/projectService"

const ProjectDetails = () => {
    const { user } = useContext(AuthContext)
    const { projectId } = useParams();
    const [currentProject, setCurrentProject] = useState({})

    useEffect(() => {
        projectService.getOne(projectId)
            .then(result => {
                // console.log(result)
                // console.log(projectId)
                setCurrentProject(result);
            });
    }, []);



    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="col mb-4">
                <div className="card">
                    <div className="view overlay">
                        <img className="project-img" src={currentProject.imageUrl} />
                    </div>
                    <div className="card-body">

                        <h2 className="card-title">  {currentProject.name}</h2>
                        <h3 className="card-text"> {currentProject.category}</h3>
                    </div>
                    <h2 className="card-text">
                        {currentProject.description}
                    </h2>


                   
                    {user._id === currentProject._ownerId ?
                        <div>
                            <Link to={`/projects/${projectId}/edit-project`} className="btn btn-primary">
                                Edit
                            </Link>
                            <Link to={`/projects/${projectId}/delete-project`} className="btn btn-danger">
                                Delete
                            </Link>
                        </div>
                        : <></>
                    }



                </div>
            </div>
        </div>

    )
}

export default ProjectDetails