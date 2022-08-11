import { useAuthContext } from '../../../contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'


const PublicGuard = ( {children} ) => {
    const { isAuthenticated } = useAuthContext()

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />
    }
    return children ? children : <Outlet />
}


export default PublicGuard