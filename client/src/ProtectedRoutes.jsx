import { useAuth } from "./contexts/authContext" 
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
    const { loading, isAuthenticated } = useAuth()
    
    // console.log(loading, isAuthenticated);
    if(loading) return <div className="loading">
      <span className="loader"></span>
     </div>
     
    if(!loading && !isAuthenticated) return <Navigate to={'login'} replace />
    
  return (
    <Outlet />
  )
}
