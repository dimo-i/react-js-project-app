import { Link } from 'react-router-dom'

const Dashboard = () => {


    return (

        <div className="position-absolute top-50 start-50 translate-middle">

            <div className="container mb-5">
                <div className="row mb-5">
                    <p>
                        <span>You must be registered, in order to see the projects. Click
                            <Link to="/register"> here</Link> to register</span>
                    </p>
                </div>
            </div>


            <div className="row mb-5">
                <Link className="btn btn-primary btn-lg" to="#" role="button">Show Categories</Link>
            </div>

            <div className="row mb-5">
                <Link className="btn btn-primary btn-lg" to="/projects" role="button">Show All Projects</Link>
            </div>

        </div >

    )
}

export default Dashboard