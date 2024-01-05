import { useAuth } from "./contexts/authContext" 
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {
    const { loading, isAuthenticated } = useAuth()
    
    // console.log(loading, isAuthenticated);
    if(loading) return <div className="loading">
      <h1 className="text-2xl text-blue-600 p-2 rounded-md font-bold"> Loading... </h1>
     </div>
     
    if(!loading && !isAuthenticated) return <Navigate to={'login'} replace />
    
  return (
    <Outlet />
  )
}
