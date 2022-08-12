import { useEffect, useState } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from "../../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { ProjectContext } from "../../../contexts/ProjectContext"


import * as projectService from "../../../services/projectService"

const ProjectDetails = () => {
    const { user } = useContext(AuthContext)
    const { projectId } = useParams();
    const { deleteProject } = useContext(ProjectContext);
    const [currentProject, setCurrentProject] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        projectService.getOne(projectId)
            .then(result => {
                // console.log(result)
                // console.log(projectId)
                setCurrentProject(result);
            });
    }, []);


    const deleteProjectHandler = () => {
        const confirmDelete = window.confirm("You are about to delete your project. Are you sure?")

        if (confirmDelete) {
            projectService.remove(projectId)
            .then(() => {
                deleteProject(projectId)
                navigate('/')
            })
        }

    }


    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="col mb-4">
                <div className="card">
                    <div className="view overlay">
                        <img className="project-img" src={currentProject.imageUrl} />
                    </div>
                    <div className="card-body">

                        <h2 className="card-title">Project Name: {currentProject.name}</h2>
                        <h3 className="card-text">Project Category: {currentProject.category}</h3>
                    </div>
                    <h2 className="card-text">
                        {currentProject.description}
                    </h2>


                   
                    {user._id === currentProject._ownerId ?
                        <div>
                            <Link to={`/projects/${projectId}/edit-project`} className="btn btn-primary">
                                Edit
                            </Link>
                            <button onClick={deleteProjectHandler} className="btn btn-danger">
                                Delete
                            </button>
                        </div>
                        : <>
                        </>
                    }



                </div>
            </div>
        </div>

    )
}

export default ProjectDetails