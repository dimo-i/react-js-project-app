import { useContext } from 'react'

import { Link } from 'react-router-dom'

import { AuthContext } from '../../../contexts/AuthContext'

const UserDetails = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="row justify-content-center">
            <div className="d-flex">
                <div className="d-inline p-2 w-50">
                    <img src={user.imageUrl}
                        className="w-50 rounded mx-auto d-block" alt="description" />
                </div>

                <div className="d-flex flex-column">
                    <h5><strong>Name: {user.firstName} {user.lastName} </strong> </h5>

                    <h5><strong>Email: {user.email} </strong> </h5>

                </div>


            </div>
            <div>
                <Link className="btn btn-primary" to={"/"}>Go to Dashboard</Link>
            </div>
        </div>
    )

}

export default UserDetails