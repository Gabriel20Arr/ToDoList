import './App.css'
import { Routes, Route } from "react-router-dom"
import RegisterPage from './pages/Register/RegisterPage'
import LoginPage from './pages/Login/LoginPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/tasks' element={<h1>tasks Page</h1>} />
        <Route path='/add-task' element={<h1>New Page</h1>} />
        <Route path='/task/:id' element={<h1>Update task</h1>} />
        <Route path='/profile' element={<h1>Profile</h1>} />
      </Routes>
    </>
  )
}

export default App
