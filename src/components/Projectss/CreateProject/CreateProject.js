import * as projectService from '../../../services/projectService'

import { useContext } from 'react'
import { ProjectContext } from '../../../contexts/ProjectContext'

const CreateProject = () => {

    const { addProject } = useContext(ProjectContext)

    const onSubmit = (e) => {
        e.preventDefault();

        const projectData = Object.fromEntries(new FormData(e.target));

        projectService.create(projectData)
            .then(result => {
                addProject(result)
            });

    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <form id="create" className="form-floating" onSubmit={onSubmit}>

                <div className="form-floating mb-3">
                    <input id="name" name="name" type="text" className="form-control" placeholder="Project Name" />
                    <label htmlFor="floatingInput">Project Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input id="category" name="category" type="text" className="form-control" placeholder="Project Category" />
                    <label htmlFor="floatingCategory">Project Category</label>
                </div>
                <div className="form-floating mb-3">
                    <input id="projectPicture" name="imageUrl" type="text" className="form-control" placeholder="Project Image" />
                    <label htmlFor="floatingInput">Project Image</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea id="description" name="description" defaultValue={""} className="form-control" placeholder="Description" />
                    <label htmlFor="floatingPassword">Description</label>
                </div>

                <input className="btn btn-primary mb-3" type="submit" value="Create Project" />
            </form>
        </div>

    )


}

export default CreateProject