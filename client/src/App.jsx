import './App.css'
import { Routes, Route } from "react-router-dom"
import RegisterPage from './pages/Register/RegisterPage'
import LoginPage from './pages/Login/LoginPage'
import { Home } from './pages/Home/Home'
import { TaskPage } from "./pages/TaskPage/TaskPage"
import { TaskFormPage } from "./pages/TaskForm/TaskFormPage"
import { ProfilePage } from "./pages/Profile/ProfilePage"
import { ProtectedRoutes } from './ProtectedRoutes'
import { ShowTask } from './components/ShowTask/ShowTask'


function App() {

  return (
    <>
      <Routes>
        {/* rutas publicas */}
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* rutas privadas */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/tasks' element={<TaskPage />} />
          <Route path='/add-task' element={<TaskFormPage />} />
          <Route path='/task/:id' element={<TaskFormPage />} />
          <Route path='/Show-task/:id' element={<ShowTask />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App
