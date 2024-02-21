import axios from "axios"
import { useForm } from "react-hook-form"
import { useAuth } from '../../contexts/authContext'
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import imageUser from "/imgTests/silueta-de-persona.jpg" 
import btnDetele from "/imgTests/boton-eliminar-2.png"

import styles from "./RegisterPage.module.css"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated, errores } = useAuth()
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

  const uploadImage = async (e) => {
    const files = e.target.files[0];
    const data = new FormData()
    data.append("file", files)
    data.append("upload_preset", "todolist")
    setLoading(true)

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dmtzjtgy8/image/upload", data
    )

    setImage(res.data.secure_url)
    // console.log(res.data)
    
    setLoading(false)
    }

    // Delete image
    const DeleteImage = () => {
      setImage('')
    }
    
    useEffect(() => {
      if(isAuthenticated) {
        navigate("/login")
      }
    }, [isAuthenticated])
    
    const handlerSubmit = handleSubmit( async (values) => {
      values.profile = image;
      
      signup(values)
    })
    
    
    return (
      <div className={styles.container}>
        <form onSubmit={handlerSubmit} className={styles.formm}>

          <h2 className={styles.title} >Sing Up</h2>
          {
            errores.map( (error, index) =>( 
              <span key={index} className={styles.errores2}>
                🔒 {error}
              </span>
            ))
          }
          
          <div className={styles.cIMG} >
            {/* <span>photo</span> */}
                  
            {loading ? (
              <div className={styles.CloadIMg}>
                  <span className={styles.loaders}></span>
                  <img src={imageUser} alt="" className={styles.image0}/> 
              </div>
            ) : (
              <img src={image || imageUser} alt='' className={styles.image}/>
            )}


            <div className={styles.contenedorID}>
              <input
                  className={styles.inputimg} 
                  type="file" 
                  accept='image/*'
                  name='file'
                  onChange={uploadImage}
                  {...register("profile", {required: true})}
              />
                
              <button className={styles.btndeleteimg} onClick={DeleteImage}>
                <img src={btnDetele} alt="delete" className={styles.imgX} />
              </button>
            </div>
          
          </div>
          {     
            errors.profile && <span className={styles.errores}>❌ Photo is requiered</span>
          }
          
          <div className={styles.containerInputs}>
            <span className={styles.names}>Name</span>
            <input type= "username" {...register("username", {required: true})} className={styles.inputs}/>
          </div>
          {
            errors.username && <span className={styles.errores}>❌ Username is requiered</span>
          }

          <div className={styles.containerInputs}>
            <span className={styles.names}>Email</span>
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@gmail\.com$/,
                  message: "Please enter a valid email",
                },
              })}
              className={styles.inputs}
            />
          </div>
          {
            errors.email && <span className={styles.errores}>❌ {errors.email?.message}</span>
          }

          <div className={styles.containerInputs}>
            <span className={styles.names}>Password</span>
            <input type="text" {...register("password", {required: true})} className={styles.inputs}/>
          </div>
          {
            errors.password && <span className={styles.errores}>❌ Password is requiered</span>
          }
          
          <button type="submit" className={styles.btnL}>
            Sign Up
          </button>        
        
        </form>

    </div>
  )
}

export default RegisterPage