import styles from "./RegisterPage.module.css"

import { useForm } from "react-hook-form"
import { useAuth } from '../../contexts/authContext'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated, errores } = useAuth()

    const navigate = useNavigate()
    
    useEffect(() => {
      if(isAuthenticated) {
        navigate("/login")
      }
    }, [isAuthenticated])
    
    const handlerSubmit = handleSubmit( async (values) => {
      signup(values)
    })
    
    
    return (
      <div className={styles.container}>
        <form onSubmit={handlerSubmit} className={styles.formm}>

          <h2 className={styles.title} >Register</h2>
          {
            errores.map( (error, index) =>( 
              <span key={index} className={styles.errores2}>
                🔒 {error}
              </span>
            ))
          }
          <input type= "username" placeholder="Username" {...register("username", {required: true})} className={styles.inputs}/>
          {
            errors.username && <span className={styles.errores}>❌ Username is requiered</span>
          }


          <input type="email"  placeholder="Email" {...register("email", { required: true})} className={styles.inputs}/>
          {
            errors.email && <span className={styles.errores}>❌ Email is requiered</span>
          }


          <input type="password" placeholder="Password" {...register("password", {required: true})} className={styles.inputs}/>
          {
            errors.password && <span className={styles.errores}>❌ Password is requiered</span>
          }
          
          <button type="submit" className="font-bold border rounded-lg hover:bg-white hover:text-black p-1 pl-3 pr-3 max-w-fit">
            Registrarse
          </button>        
        
        </form>

    </div>
  )
}

export default RegisterPage