import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from "../../../contexts/AuthContext"


const Dashboard = () => {
    const { user } = useContext(AuthContext)

    return (

        <div className="position-absolute top-50 start-50 translate-middle">
            {!user.accessToken &&
                <div className="container mb-5">
                    <div className="row mb-5">
                        <p>
                            <span>You must be registered, in order to create projects or to see the details of the projects. Click
                                <Link to="/register"> here</Link> to register</span>
                        </p>
                    </div>
                </div>
            }


            <div className="row mb-5">
                <Link className="btn btn-primary btn-lg" to="/projects" role="button">Show All Projects</Link>
            </div>

        </div >

    )
}

export default Dashboard