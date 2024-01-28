import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './contexts/authContext'
import { TaskProvider } from './contexts/taskContext.jsx'
import { FavProvider } from './contexts/FavContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <TaskProvider>
        <FavProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavProvider>
      </TaskProvider>
    </AuthProvider>
  </React.StrictMode>,
)
