import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import { useContext } from 'react';

import * as authService from "../../../services/authService"
import { AuthContext } from '../../../contexts/AuthContext';

const Login = () => {
    const {userLoginHandler} = useContext(AuthContext)
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
                    <form id="login" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input id="email" type="text" name="email" />
                        </div>
                        <div>
                            <label htmlFor="login-pass">Password:</label>
                            <input id="login-password" type="password" name="password" />
                        </div>
                        <div>
                            {/* <button className="btn btn-primary mt-3" type="submit">Login</button> */}
                            <input type="submit" value="Login" />
                        </div>
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