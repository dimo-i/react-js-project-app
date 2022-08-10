
import { Link } from 'react-router-dom';


const CatalogProjectItem = ({ project }) => {
    
    return (

                <div className="card " >
                    <img src={project.imageUrl} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.category}</p>
                        <Link style={{marginLeft: '150px'}} to={`/projects/${project._id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
    );
}

export default CatalogProjectItem;