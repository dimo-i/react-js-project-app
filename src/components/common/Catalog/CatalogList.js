import CatalogProjectItem from "./CatalogProjectItem"


const CatalogList = ({ projects }) => {
    console.log(projects.length)
    return (
        <div>
            <h2>All Projects</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            
                {projects.length > 0
                    ? projects.map(x => 
                        <div className="col" key={x._id}>
                            <CatalogProjectItem key={x._id} project={x} />
                            </div>
                    )
                    : <h3>No projects yet</h3>}
                    </div>
        </div >
    )
}

export default CatalogList