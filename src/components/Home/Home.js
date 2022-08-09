import { Dashboard } from "./Dashboard/Dashboard"

import { Link } from 'react-router-dom'



const Home = () => {

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h1 class="display-4">Welcome to the Progress Center</h1>
            <p class="lead">Share the progress of your projects</p>

            <hr class="my-4" />
            <Link to="/login" class="btn btn-lg btn-primary">Login</Link>
            <Link to="/register" class="btn btn-lg btn-primary">Register</Link>
            <hr class="my-4" />

            <div class="flex-row" />
            <Link to="/dashboard" class="btn btn-lg btn-secondary">Enter Without Registration</Link>


        </div>

    )
}

export default Home