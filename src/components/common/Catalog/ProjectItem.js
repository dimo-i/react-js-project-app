
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProjectItem = ({ project }) => {

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.imageUrl} />
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.category}
                </Card.Text>
                <Link to={`/projects/${project._id}/details`}><Button variant="primary" >Go somewhere</Button></Link>
            </Card.Body>
        </Card>

    );
}

export default ProjectItem;