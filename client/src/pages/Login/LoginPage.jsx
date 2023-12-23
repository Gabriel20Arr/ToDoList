import { useForm } from "react-hook-form"
import { useAuth } from "../../contexts/authContext"

import styles from "./LoginPage.module.css"

function LoginPage() {
    const { register, handleSubmit, formState: { errors }  } = useForm()

    const { singin, errores } = useAuth()

    const handlerSubmit = handleSubmit( async (values) => {
      singin(values)
      // console.log(values);
    })
    
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

          <input type="email"  placeholder="Email" {...register("email", { required: true})} className={styles.inputs}/>
          {
            errors.email && <span className={styles.errores}>❌ Email is requiered</span>
          }


          <input type="password" placeholder="Password" {...register("password", {required: true})} className={styles.inputs}/>
          {
            errors.password && <span className={styles.errores}>❌ Password is requiered</span>
          }
          
          <button type="submit" className="font-bold border rounded-lg hover:bg-white hover:text-black p-1 pl-3 pr-3 max-w-fit">
            Login
          </button>        
        
        </form>
    </div>
  )
}

export default LoginPage