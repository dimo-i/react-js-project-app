import ProjectItem from "./ProjectItem"



const CatalogList = ({projects}) => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            
            <h2>All Projects</h2>
            {projects.length > 0
                ? projects.map(x=> 
                    <div id="card-div" className="row">
                        <ProjectItem key={x._id} project={x} />
                        
                    </div>)
                : <h3>No projects yet</h3>
            }

        </div>
    )
}

export default CatalogList