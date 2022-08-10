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


                        <form id="register" className="form-floating" onSubmit={onSubmit}>

                            <div className="form-floating mb-3">
                                <input id="firstName" name="firstName" type="text" className="form-control" placeholder="First Name" />
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <p className="form-error">
                                First name should be at least 3 characters long!
                            </p>
                            <div className="form-floating mb-3">
                                <input id="lastName" name="lastName" type="text" className="form-control" placeholder="Last Name" />
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                            <p className="form-error">
                                Last name should be at least 3 characters long!
                            </p>
                            <div className="form-floating mb-3">
                                <input id="email" name="email" type="text" className="form-control" placeholder="Email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <p className="form-error">
                                Email should be at least 3 characters long!
                            </p>
                            <div className="form-floating mb-3">
                                <input id="profilePicture" name="imageUrl" type="text" className="form-control" placeholder="Profile Picture" />
                                <label htmlFor="imageUrl">Profile Picture</label>
                            </div>
                            <p className="form-error">
                                Image Url should be at least 3 characters long!
                            </p>
                            <div className="form-floating mb-3">
                                <input id="register-password" name="password" type="password" className="form-control" placeholder="Password" />
                                <label htmlFor="pass">Password</label>
                            </div>
                            <p className="form-error">
                                Password should be at least 3 characters long!
                            </p>
                            <div className="form-floating mb-3">
                                <input id="confirm-password" name="confirm-password" type="password" className="form-control" placeholder="Confirm Password" />
                                <label htmlFor="con-pass">Confirm Password</label>
                            </div>
                            <p className="form-error">
                                Passwords should match
                            </p>

                            <input className="btn btn-primary mb-3" type="submit" value="Register" />
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