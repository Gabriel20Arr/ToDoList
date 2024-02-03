import axios from "axios"
import { useForm } from "react-hook-form"
import { useAuth } from '../../contexts/authContext'
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import imageUser from "/imgTests/silueta-de-persona.jpg" 

import styles from "./RegisterPage.module.css"


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

    // console.log('res', res.data)
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
    
    // console.log("errores", errores);
    // console.log("errors", errors);
    
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
                  // {...register("profile", {required: true})}
              />
                
              <button className={styles.btndeleteimg} onClick={DeleteImage}>Delete</button>
            </div>
          
          </div>
            
          {console.log("img", image)}
          {     
            !image && <span className={styles.errores}>❌ Photo is requiered</span>
          }
          
          <input type= "username" placeholder="Username" {...register("username", {required: true})} className={styles.inputs}/>
          {
            errors.username && <span className={styles.errores}>❌ Username is requiered</span>
          }


          <input type="email"  placeholder="Email" {...register("email", { required: true})} className={styles.inputs}/>
          {
            errors.email && <span className={styles.errores}>❌ Email is requiered</span>
          }


          <input type="text" placeholder="Password" {...register("password", {required: true})} className={styles.inputs}/>
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