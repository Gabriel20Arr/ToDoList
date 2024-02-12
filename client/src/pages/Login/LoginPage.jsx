import { useForm } from "react-hook-form"
import { useAuth } from "../../contexts/authContext"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from 'react'

import styles from "./LoginPage.module.css"

function LoginPage() {
    const { register, handleSubmit, formState: { errors }  } = useForm()

    const { singin, errores, isAuthenticated } = useAuth()

    const navigate = useNavigate()
    
    const handlerSubmit = handleSubmit( async (values) => {
      singin(values)
    })

    useEffect(() => {
      if(isAuthenticated) {
        navigate("/")
      }
    }, [isAuthenticated])
    
  return (
      <div className={styles.container}>
        <form onSubmit={handlerSubmit} className={styles.formm}>

          <h2 className={styles.title} >Login</h2>
          {
            errores.map( (error, index) =>( 
              <span key={index} className={styles.errores2}>
                🔒 {error}
              </span>
            ))
          }

          <div className={styles.containerInputs}>
            <span className={styles.names}>Email</span>
            <input type="email"   {...register("email", { required: true})} className={styles.inputs}/>
          </div>
          {
            errors.email && <span className={styles.errores}>❌ Email is requiered</span>
          }


          <div className={styles.containerInputs2}>
            <span className={styles.names}>Password</span>
            <input type="password"  {...register("password", {required: true})} className={styles.inputs}/>
          </div>
          {
            errors.password && <span className={styles.errores}>❌ Password is requiered</span>
          }
          
          {/* <div className={styles.textC}>
            <span className={styles.textC2}>
             <Link to={'/validation'} >
              Did you forget your password?
            </Link>
            </span>
          </div> */}

          <button type="submit" className={styles.btnL}>
            Login
          </button>        

        </form>
    </div>
  )
}

export default LoginPage