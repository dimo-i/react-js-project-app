import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="site-footer sticky-footer">
            <div className="d-flex justify-content-start">SoftUni - React JS Final Project - August 2022</div>
            <div className="d-flex justify-content-end"><Link to="#">Dimo Ivanov</Link></div>
        </footer>
    )
}

export default Footer