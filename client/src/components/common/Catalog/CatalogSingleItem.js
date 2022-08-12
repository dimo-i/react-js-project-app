
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext';


const CatalogSingleItem = ({ project }) => {
    const { user } = useContext(AuthContext)

    
    return (
        <>
                <div className="card" >
                    <img src={project.imageUrl} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Project name: {project.name}</h5>
                        <p className="card-text">Project Category: {project.category}</p>
                        {user.accessToken ? 
                        <Link style={{marginLeft: '150px'}} to={`/projects/${project._id}`} className="btn btn-primary">Details</Link>
                        : <></>
                    }
                    </div>
                </div>
                </>
    );
}

export default CatalogSingleItem;