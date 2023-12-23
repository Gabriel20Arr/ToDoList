import { createContext, useState, useContext } from "react"
import { registerRequest, loginrequest } from "../api/auth.js"

export const Authcontext = createContext()

export const useAuth = () => {
    const context = useContext(Authcontext);
    if(!context) {
        throw new Error("UseAuth must be used within an AuthProvider")
    }

    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [errores, setErrores] = useState([])
    
    const signup = async (user) => {
        try {
            const res = await registerRequest(user) 
            setUser(res.data)
            setAuthenticated(true)
        } catch (error) {
            // console.log("error Auth:", error.response.data)
            setErrores(error.response.data)
        }
    }

    const singin = async (user) => {
        try {
            const res = await loginrequest(user)
            console.log(res);
        } catch (error) {
            // console.log(error);
            setErrores(error.response.data)
        }
    }
    
    
    return(
        <Authcontext.Provider value={{
            signup,
            singin,
            user,
            isAuthenticated,
            errores
        }}>
            {children}
        </Authcontext.Provider>
    )
}