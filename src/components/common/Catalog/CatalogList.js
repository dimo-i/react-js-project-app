import CatalogProjectItem from "./CatalogProjectItem"


const CatalogList = ({ projects }) => {
    console.log(projects.length)
    return (
        <div>
            <h2>All Projects</h2>
            <div className="grid">
            {projects.length > 0
                ? projects.map(x => (

                        <CatalogProjectItem key={x._id} project={x} />
                    
                ))
                : <h3>No projects yet</h3>}
                </div>
        </div >
    )
}

export default CatalogList