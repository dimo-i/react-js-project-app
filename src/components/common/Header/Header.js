import { useContext } from 'react'

import { Link } from 'react-router-dom'

import { AuthContext } from '../../../contexts/AuthContext'

const Header = () => {
    const { user } = useContext(AuthContext)



    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">

                <div className="navbar-collapse d-flex justify-content-start">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                    </div>
                    <div className='navbar-collapse d-flex justify-content-end'>
                    <ul className="navbar-nav p-2">
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">All Projects</Link>
                        </li>

                        {user.email
                            ? <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/create-project">New Project</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <strong>{user.email && <span>{user.email}</span>}</strong>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <Link className="dropdown-item" to="">My Projects</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="">Profile Details</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/logout">Logout</Link>
                                    </div>
                                </li>
                            </>
                            : <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default Header