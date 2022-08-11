import { Link } from 'react-router-dom'

import {IMAGE_URL_PATTERN, EMAIL_PATTERN} from '../../../constants/validatorConstants'

import * as authService from "../../../services/authService"
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const { userLoginHandler } = useContext(AuthContext);

    const [errors, setErrors] = useState({})

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        imageUrl: '',
        password: '',
        confirmPassword: ''
    });


    const navigate = useNavigate();

    const changeFieldHandler = (e) => {

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)

        const email = formData.get('email')
        const password = formData.get('password')
        const confirmPassword = formData.get('confirmPassword')


        if (password !== confirmPassword) {
            console.log("Passwords must match")
            return
        }

        if (values.firstName == '' || values.lastName == '' || values.imageUrl == '' || values.email == '' || values.password == '') {
            window.confirm("Please fill all fields")
            return
        }


        authService.register(email, password)
            .then(authData => {
                userLoginHandler(authData);
                navigate('/')
            })

    }

    const checkFilledFields = (e) => {
        console.log(e)


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

    const emailValidate = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: !EMAIL_PATTERN.test(e.target.value)
        }))
    }

    const passwordMatchValidate = (e) => {
        console.log(values.password !== values.confirmPassword)
        setErrors(state => ({
            ...state,
            [e.target.name]: values.password !== values.confirmPassword
        }))
    }
    const isFormValid = !Object.values(errors).some(x => x)


return (
    <div className="position-absolute top-50 start-50 translate-middle">

        <div className="container mb-5">
            <h1 className="text-center">Create Your Profile</h1>

            <div className="row">
                <div className="col-lg-3"></div>
                <div className="input-group flex-wrap: wrap">


                    <form id="register" className="form-floating" onSubmit={onSubmit} >

                        <div className="form-floating mb-3">
                            <input id="firstName" name="firstName" type="text" className="form-control" placeholder="First Name" onChange={changeFieldHandler} onBlur={(e) => minLength(e, 3)} />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        {errors.firstName &&
                            <p className="form-error">
                                First name should be at least 3 characters long!
                            </p>
                        }
                        <div className="form-floating mb-3">
                            <input id="lastName" name="lastName" type="text" className="form-control" placeholder="Last Name" onChange={changeFieldHandler} onBlur={(e) => minLength(e, 3)} />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        {errors.lastName &&
                            <p className="form-error">
                                Last name should be at least 3 characters long!
                            </p>
                        }
                        <div className="form-floating mb-3">
                            <input id="email" name="email" type="text" className="form-control" placeholder="Email" onChange={changeFieldHandler} onBlur={(e) => emailValidate(e)} />
                            <label htmlFor="email">Email</label>
                        </div>
                        {errors.email &&
                            <p className="form-error">
                                Please enter valid email!
                            </p>
                        }
                        <div className="form-floating mb-3">
                            <input id="imageUrl" name="imageUrl" type="text" className="form-control" placeholder="imageUrl" onChange={changeFieldHandler} onBlur={(e) => imageUrlValidate(e)} />
                            <label htmlFor="imageUrl">Profile Picture</label>
                        </div>

                        {errors.imageUrl &&
                            <p className="form-error">
                                Please enter valid URL.
                            </p>
                        }

                        <div className="form-floating mb-3">
                            <input id="password" name="password" type="password" className="form-control" placeholder="Password" onChange={changeFieldHandler} onBlur={(e) => minLength(e, 3)} />
                            <label htmlFor="pass">Password</label>
                        </div>
                        {errors.password &&
                            <p className="form-error">
                                Password should be at least 3 characters long!
                            </p>
                        }
                        <div className="form-floating mb-3">
                            <input id="confirmPassword" name="confirmPassword" type="password" className="form-control" placeholder="Confirm Password" onChange={changeFieldHandler} onBlur={(e) => passwordMatchValidate(e)} />
                            <label htmlFor="con-pass">Confirm Password</label>
                        </div>
                        {errors.confirmPassword &&
                            <p className="form-error">
                                Passwords must match!
                            </p>
                        }

                        <input className="btn btn-primary mb-3" type="submit" value='Register' disabled={!isFormValid} />
                    
                    </form>
                </div>
                <p>
                    <span>If you already have user, click <Link to="/login">here</Link></span>
                </p>
            </div>

        </div>
    </div>
)
}


export default Register;