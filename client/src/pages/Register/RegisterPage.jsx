import styles from "./RegisterPage.module.css"

import { useForm } from "react-hook-form"
import { useAuth } from '../../contexts/authContext'
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated, errores } = useAuth()
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const uploadImage = async (e) => {
      const files = e.target.files;
      const data = new FormData()
      data.append("file", files[0])
      data.append("upload_preset", "todolist")
      setLoading(true)

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dmtzjtgy8/todolist/upload",
        {
          method: 'POST',
          body: data
        }
      )

      const file = await res.json();
      setImage(file.secure_url)
      console.log(file.secure_url)
      setLoading(false)
    }
    
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
          <div className="flex flex-col" >
            <span>photo</span>
            <input
              className=" w-[220px] mb-5" 
              type="file" 

              onChange={uploadImage}
            />
          </div>
          
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

          <div className={styles.textC}>
            <span className={styles.textC2}>
             <Link to={'/login'}>
              Do you already have an account?
            </Link>
            </span>
          </div>
          
          <button type="submit" className="font-bold border rounded-lg hover:bg-white hover:text-black p-1 pl-3 pr-3 max-w-fit">
            Registrarse
          </button>        
        
        </form>

    </div>
  )
}

export default RegisterPage