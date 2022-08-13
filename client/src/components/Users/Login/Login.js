import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'

import {EMAIL_PATTERN} from '../../../constants/validatorConstants'


import { Link } from 'react-router-dom'

import * as authService from "../../../services/authService"
import { AuthContext } from '../../../contexts/AuthContext';

const Login = () => {
    const { userLoginHandler } = useContext(AuthContext)
    const navigate = useNavigate()

    const [errors, setErrors] = useState({})

    const [values, setValues] = useState({
        email: '',
        password: '',
    });


    const emailValidate = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: !EMAIL_PATTERN.test(e.target.value)
        }))
    }

    const minLength = (e, minleng) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < minleng,
        }));
    }

    const changeFieldHandler = (e) => {

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    
    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        if (email == '' || password == ''){
            window.confirm("Please fill all fields!")
            return
        }


        authService.login(email, password)
            .then(authData => {
                userLoginHandler(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');

            })
    }

    const isFormValid = !Object.values(errors).some(x => x)

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="row">
                <h1 className="text-center">Login to Your Profile</h1>
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <form id="login" className="form-floating" onSubmit={onSubmit}>

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
                            <input id="register-password" name="password" type="password" className="form-control" placeholder="Password" onChange={changeFieldHandler} onBlur={(e) => minLength(e, 3)}/>
                            <label htmlFor="pass">Password</label>
                        </div>
                        {errors.password &&
                            <p className="form-error">
                                Password should be at least 3 characters long!
                            </p>
                        }


                        <input className="btn btn-primary mb-3" type="submit" value="Login" disabled={!isFormValid}/>
                    </form>
                    <p>
                        <span>If you don't have a user, click <Link to="/register">here</Link></span>
                    </p>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div >
    );
};

export default Login