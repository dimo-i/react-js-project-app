import { Dashboard } from "./Dashboard/Dashboard"

import { Link } from 'react-router-dom'



const Home = () => {

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="display-4">Welcome to the Progress Center</h1>
            <p className="lead">Share the progress of your projects</p>

            <hr className="my-4" />
            <Link to="/login" className="btn btn-lg btn-primary">Login</Link>
            <Link to="/register" className="btn btn-lg btn-primary">Register</Link>
            <hr className="my-4" />

            <div className="flex-row" />
            <Link to="/dashboard" className="btn btn-lg btn-secondary">Enter Without Registration</Link>


        </div>

    )
}

export default Home