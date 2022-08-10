import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import { useContext } from 'react';

import * as authService from "../../../services/authService"
import { AuthContext } from '../../../contexts/AuthContext';

const Login = () => {
    const { userLoginHandler } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));


        authService.login(email, password)
            .then(authData => {
                userLoginHandler(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');

            })
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="row">
                <h1 className="text-center">Login to Your Profile</h1>
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <form id="login" className="form-floating" onSubmit={onSubmit}>

                        <div className="form-floating mb-3">
                            <input id="email" name="email" type="text" className="form-control" placeholder="Email" />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input id="register-password" name="password" type="password" className="form-control" placeholder="Password" />
                            <label htmlFor="pass">Password</label>
                        </div>


                        <input className="btn btn-primary mb-3" type="submit" value="Login" />
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