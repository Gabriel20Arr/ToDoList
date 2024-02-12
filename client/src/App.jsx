import './App.css'
import { Routes, Route, useLocation } from "react-router-dom"
import RegisterPage from './pages/Register/RegisterPage'
import LoginPage from './pages/Login/LoginPage'
import { Home } from './pages/Home/Home'
import { TaskPage } from "./pages/TaskPage/TaskPage"
import { TaskFormPage } from "./pages/TaskForm/TaskFormPage"
import { ProfilePage } from "./pages/Profile/ProfilePage"
import { ProtectedRoutes } from './ProtectedRoutes'
import { ShowTask } from './components/ShowTask/ShowTask'
import StopWatch from './components/StopWatch/StopWatch'
import { Favorite } from './pages/Favorite/Favorite'
import { Navbar } from './components/Navbar/Navbar'
import { PageError } from './pages/PageError/PageError'
import { Help } from './pages/Help/Help'
import Test from "./pages/session/Test"
import { Validation } from './pages/validation/validation'
import { ForgetPass } from './pages/forgetPass/ForgetPass'


function App() { 
  const Location = useLocation()
  return (
    <div className="container">
      { Location.pathname !== "/register" && Location.pathname !== "/login" && Location.pathname !== "/error-page" && Location.pathname !== "/auth" && Location.pathname !== "/validation" ?  
        <div className="nav">
          <Navbar />
        </div>
        : ''
      }
      <div className="task">
        <Routes>
          {/* rutas publicas */}
          <Route path='/' element={<Home className="home"/>} />
          <Route path='/forget-password' element={<ForgetPass />} /> 
          <Route path='/auth' element={<Test />} />
          <Route path='/validation' element={<Validation />} />

          {/* rutas privadas */}
          <Route element={<ProtectedRoutes />}>
            <Route path='/tasks' element={<TaskPage />} />
            <Route path='/add-task' element={<TaskFormPage />} />
            <Route path='/task/:id' element={<TaskFormPage />} />
            <Route path='/Show-task/:id' element={<ShowTask />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/stop-watch' element={<StopWatch />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/help' element={<Help />} />
            <Route path='/error-page' element={<PageError />} />
          </Route>
        </Routes>
      </div>

    </div>
  )
}

export default App
