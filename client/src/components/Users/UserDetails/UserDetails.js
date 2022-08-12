import { useContext } from 'react'

import { Link } from 'react-router-dom'

import { AuthContext } from '../../../contexts/AuthContext'

const UserDetails = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="row justify-content-center" >
            <div className="card mb-3"  >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={user.imageUrl}
                            className="img-fluid" alt="description" style={{ maxWidth: "540px" }} />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5><strong>First Name: {user.firstName} </strong> </h5>
                            <h5><strong>Last Name: {user.lastName} </strong> </h5>
                            <h5><strong>Email: {user.email} </strong> </h5>
                        </div>

                    </div>



                </div>
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-primary" to={"/"}>Go to Dashboard</Link>
                </div>
            </div>
        </div>
    )

}

export default UserDetails