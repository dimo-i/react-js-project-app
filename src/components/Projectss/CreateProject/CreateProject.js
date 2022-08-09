import * as projectService from '../../../services/projectService'

import { useContext } from 'react'
import { ProjectContext } from '../../../contexts/ProjectContext'

const CreateProject = () => {

    const {addProject} = useContext(ProjectContext)

    const onSubmit = (e) => {
        e.preventDefault();

        const projectData = Object.fromEntries(new FormData(e.target));

        projectService.create(projectData)
            .then(result => {
                addProject(result)
            });

    }

    return (

        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <form id="create" onSubmit={onSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Project Name</label>
                            <div className="input-wrapper">
                                <input id="name" name="name" type="text" />
                            </div>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="category">Project Category</label>
                            <div className="input-wrapper">
                                <input id="category" name="category" type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="imageUrl">Project Image</label>
                            <div className="input-wrapper">
                                <input id="projectPicture" name="imageUrl" type="text" />
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



                    <input className="btn btn-primary mt-2" type="submit" value="Create Project" />
                </form>
            </div>
            <div className="col-lg-3"></div>
        </div>

    )


}

export default CreateProject