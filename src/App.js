import { Routes, Route, useNavigate, } from 'react-router-dom'
import { useState, useEffect, Suspense } from 'react'

import { useLocalStorage } from "./hooks/useLocalStorage"

import * as projectService from './services/projectService'
import { AuthContext } from './contexts/AuthContext'
import { ProjectContext } from './contexts/ProjectContext'

import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Users/Login/Login'
import Register from './components/Users/Register/Register'
import Logout from './components/Users/Logout/Logout'
import CreateProject from './components/Projectss/CreateProject/CreateProject'
import EditProject from './components/Projectss/EditProject/EditProject'
import Dashboard from './components/Home/Dashboard/Dashboard'
import CatalogList from './components/common/Catalog/CatalogList'


import './App.css';
import ProjectDetails from './components/Projectss/ProjectDetails/ProjectDetails'

function App() {
    const [projects, setProjects] = useState([])
    const [auth, setAuth] = useLocalStorage('auth', {})
    const navigate = useNavigate()





    const userLoginHandler = (authData) => {
        setAuth(authData)
    }

    const userLogoutHandler = () => {
        setAuth({});
    }

    const addProject = (projectData) => {
        setProjects(state => [
            ...state,
            projectData,
        ]);
        navigate('/catalog')
    };




    useEffect(() => {
        projectService.getAll()
            .then(result => {
                // console.log(result)
                setProjects(result)
            })
    }, [])

    return (
        <AuthContext.Provider value={{ user: auth, userLoginHandler, userLogoutHandler }}>
            <div>
                <Header />
                <ProjectContext.Provider value={{}}>
                <main className="main">
                        <Routes>
                            <Route path="/" element={<Home projects={projects, addProject} />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={
                                <Suspense fallback={<span>Loading....</span>}>
                                    <Register />
                                </Suspense>
                            } />
                            <Route path='/logout' element={<Logout />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/projects" element={<CatalogList projects={projects} />} />
                            <Route path="/create-project" element={<CreateProject createProjectHandler={addProject} />} />
                            <Route path="/projects/:projectId" element={<ProjectDetails projects={projects}/>} />
                            <Route path="/projects/:projectId/edit-project" element={<EditProject />} />
                        </Routes>

                    </main>
                </ProjectContext.Provider>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
