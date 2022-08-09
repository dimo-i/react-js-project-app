import { Link } from 'react-router-dom'

import * as authService from "../../../services/authService"
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const { userLoginHandler } = useContext(AuthContext);

    const navigate = useNavigate();


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)

        const email = formData.get('email')
        const password = formData.get('password')
        const confirmPassowrd = formData.get('confirm-password')

        if (password !== confirmPassowrd) {
            console.log("Passwords should match")
            return
        }

        authService.register(email, password)
            .then(authData => {
                userLoginHandler(authData);
                navigate('/')
            })
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle">

            <div className="container mb-5">
                <h1 className="text-center">Create Your Profile</h1>

                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="input-group flex-wrap: wrap">
                        <form id="register" onSubmit={onSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <div className="input-wrapper">
                                        <input id="firstName" name="firstName" type="text" />
                                    </div>
                                </div>
                                <p className="form-error">
                                    First name should be at least 3 characters long!
                                </p>


                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="lastName">Last name</label>
                                    <div className="input-wrapper">
                                        <input id="lastName" name="lastName" type="text" />
                                    </div>
                                </div>
                                <p className="form-error">
                                    Last name should be at least 3 characters long!
                                </p>


                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <div className="input-wrapper">
                                        <input id="email" name="email" type="text" />
                                    </div>
                                </div>
                                <p className="form-error">
                                    Email should be at least 3 characters long!
                                </p>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="imageUrl">Image Url</label>
                                    <div className="input-wrapper">
                                        <input id="profilePicture" name="imageUrl" type="text" />
                                    </div>
                                </div>
                                <p className="form-error">
                                    Image Url should be at least 3 characters long!
                                </p>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="pass">Password: </label>
                                    <div className="input-wrapper">
                                        <input id="register-password" name="password" type="password" />
                                    </div>
                                </div>
                                <p className="form-error">
                                    Password should be at least 3 characters long!
                                </p>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="con-pass">Confirm Password: </label>
                                    <div className="input-wrapper">
                                        <input id="confirm-password" name="confirm-password" type="password" />
                                    </div>
                                </div>
                                <p className="form-error">
                                    Passwords should match
                                </p>
                            </div>


                            <input className="btn btn-primary mt-2" type="submit" value="Register"/>
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