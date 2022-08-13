import * as projectService from '../../../services/projectService'

import { IMAGE_URL_PATTERN } from '../../../constants/validatorConstants'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ProjectContext } from '../../../contexts/ProjectContext'

const CreateProject = () => {

    const { addProject } = useContext(ProjectContext)

    const [errors, setErrors] = useState({})

    const [values, setValues] = useState({
        name: '',
        category: '',
        imageUrl: '',
        description: '',
    });




    const onSubmit = (e) => {
        e.preventDefault();

        const projectData = Object.fromEntries(new FormData(e.target));


        if (values.name == '' || values.imageUrl == '' || values.description == '') {
            window.confirm("Please fill all fields")
            return
        }

        projectService.create(projectData)
            .then(result => {
                addProject(result)
            });




    }


    const changeFieldHandler = (e) => {

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const minLength = (e, minleng) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < minleng,
        }));
    }

    const imageUrlValidate = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: !IMAGE_URL_PATTERN.test(e.target.value)
        }))
    }


    const isFormValid = !Object.values(errors).some(x => x)


    return (

        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6"></div>
                <form id="create" className="form-floating" onSubmit={onSubmit}>

                    <div className="form-floating mb-3">
                        <input id="name" name="name" type="text" className="form-control" placeholder="Project Name" onChange={changeFieldHandler} onBlur={(e) => minLength(e, 3)} />
                        <label htmlFor="floatingInput">Project Name</label>
                    </div>
                    {errors.name &&
                        <p className="form-error">
                            Project name should be at least 3 characters long!
                        </p>
                    }
                    <div className="form-floating mb-3">
                        <select id="category" name="category" type="text" className="form-control" placeholder="Project Category" defaultValue="Cars, Motors, Tunning">
                            <option value="Cars, Motors, Tunning" >Cars, Motors, Tunning</option>
                            <option value="Fitness and Sport" >Fitness and Sport</option>
                            <option value="Home projects" >Home projects</option>
                            <option value="Art" >Art</option>
                            <option value="Photography" >Photography</option>
                            <option value="Music" >Music</option>
                            <option value="Everything else" >Everything else</option>
                        </select>
                    </div>
                    <div className="form-floating mb-3">
                        <input id="imageUrl" name="imageUrl" type="text" className="form-control" placeholder="Project Image" onChange={changeFieldHandler} onBlur={(e) => imageUrlValidate(e)} />
                        <label htmlFor="floatingInput">Project Image</label>
                    </div>
                    {errors.imageUrl &&
                        <p className="form-error">
                            Please enter valid URL.
                        </p>
                    }
                    <div className="form-floating mb-3">
                        <textarea id="description" name="description" defaultValue={""} className="form-control" placeholder="Description" onChange={changeFieldHandler} onBlur={(e) => minLength(e, 5)} />
                        <label htmlFor="floatingPassword">Description</label>
                    </div>
                    {errors.description &&
                        <p className="form-error">
                            Project description should be at least 5 characters long!
                        </p>
                    }

                    <input className="btn btn-primary mb-3" type="submit" value="Create Project" disabled={!isFormValid} />
                </form>
                <div className="d-flex justify-content-center">
                    <Link to={"/projects"} className="btn btn-primary ">
                        Go Back
                    </Link>
                </div>
            </div>
        </div>

    )


}

export default CreateProject