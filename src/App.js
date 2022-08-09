import { Routes, Route, useNavigate, } from 'react-router-dom'
import { useState, useEffect, Suspense } from 'react'


import * as projectService  from './services/projectService'
import { AuthContext } from './contexts/AuthContext'

import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'
import Home from './components/Home/Home'
import Login  from './components/Users/Login/Login'
import Register from './components/Users/Register/Register'
import Logout from './components/Users/Logout/Logout'
import CreateProject from './components/Projectss/CreateProject/CreateProject'
import Dashboard from './components/Home/Dashboard/Dashboard'
import CatalogList from './components/common/Catalog/CatalogList'


import './App.css';

function App() {
    const [projects, setProjects] = useState([])
    const [auth, setAuth] = useState({})
    const navigate = useNavigate()


    useEffect(() => {
        projectService.getAll()
        .then(result => {
            console.log(result)
            setProjects(result)
        })
    }, [])

    

    const userLoginHandler = (authData) => {
        setAuth(authData)
    }

    const userLogoutHandler = () => {
        setAuth({});
    }



    return (
        <AuthContext.Provider value={{ user: auth, userLoginHandler, userLogoutHandler }}>
            <div >
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={
                            <Suspense fallback={<span>Loading....</span>}>
                                <Register />
                            </Suspense>
                        } />
                        <Route path='/logout' element={<Logout />} />
                        <Route path="/projects" element={<CatalogList projects={projects}/>} />
                        <Route path="/create-project" element={<CreateProject />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>

                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
