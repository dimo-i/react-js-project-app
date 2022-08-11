import { Routes, Route, useNavigate, } from 'react-router-dom'
import { useState, useEffect, Suspense } from 'react'

import PrivateRoute from './components/common/PrivateRoute/PrivateRoute'
import PublicGuard from './components/common/PrivateRoute/PublicGuard'

import * as projectService from './services/projectService'
import { AuthProvider } from './contexts/AuthContext'
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
import UserDetails from './components/Users/UserDetails/UserDetails'

function App() {
    const [projects, setProjects] = useState([])

    const navigate = useNavigate()


    const addProject = (projectData) => {
        setProjects(state => [
            ...state,
            projectData,
        ]);
        navigate('/projects')
    };

    const editProject = (projectId, projectData) => {
        setProjects(state => state.map(x => x._id === projectId ? projectData : x))
    }

    const deleteProject = (projectId) => {
        setProjects(state => state.filter(x => x._id !== projectId))
    }


    useEffect(() => {
        projectService.getAll()
            .then(result => {
                // console.log(result)
                setProjects(result)
            })
    }, [])

    return (
        <AuthProvider>
            <div>
                <Header />
                <ProjectContext.Provider value={{ projects, addProject, editProject, deleteProject }}>
                    <main className="main">
                        <Routes>

                            <Route element={<PublicGuard />}>
                                <Route path="/" element={<Home projects={projects} />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={
                                    <Suspense fallback={<span>Loading....</span>}>
                                        <Register />
                                    </Suspense>
                                } />
                            </Route>
                            <Route path='/logout' element={<Logout />} />
                            <Route path="/dashboard" element={<Dashboard />} />

                            <Route path="/projects" element={<CatalogList projects={projects} />} />

                            <Route path="/create-project" element={
                                <PrivateRoute>
                                    <CreateProject createProjectHandler={addProject}
                                    />
                                </PrivateRoute>}
                            />
                            <Route path="/projects/:projectId" element={
                                <PrivateRoute>
                                    <ProjectDetails projects={projects} />
                                </PrivateRoute>}
                            />

                            <Route path="/users/me" element={
                                <PrivateRoute>
                                    <UserDetails />
                                </PrivateRoute>}
                            />

                            <Route path="/projects/:projectId/edit-project" element={
                                <PrivateRoute>
                                    <EditProject />
                                </PrivateRoute>}
                            />
                        </Routes>

                    </main>
                </ProjectContext.Provider>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
