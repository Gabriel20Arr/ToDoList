import { useForm } from "react-hook-form"
import { useAuth } from "../../contexts/authContext"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'

import LoginPage from "../Login/LoginPage"
import RegisterPage from "../Register/RegisterPage"

import styles from "./Test.module.css"

function Test() {
    const { register, handleSubmit, formState: { errors }  } = useForm()
    const { singin, errores, isAuthenticated } = useAuth()
    const [hiden, setHiden] = useState(true)
    const navigate = useNavigate()
    
    const handlerSubmit = handleSubmit( async (values) => {
      singin(values)
    })

    useEffect(() => {
      if(isAuthenticated) {
        navigate("/")
      }
    }, [isAuthenticated])

    const handlerHiden = () => {
        setHiden(!hiden)
    }
    
  return (
      <div className={styles.container}>
        {   hiden ?
            <div className={styles.c1} >
              <div className={styles.containerBtnL}>
                <h1 className={styles.title}>Welcome!!</h1>
                <p className={styles.description}>If you do not have an account yet, please register here</p>
                <button onClick={handlerHiden} className={styles.btnL}>Sing Up</button>
              </div>
              <div className={styles.Login}>
                  <LoginPage />
              </div>
            </div>
                :
            <div className={styles.c2} >
              <div className={styles.containerBtnR}>
                <h1 className={styles.titleR}>Welcome again!!</h1>
                <p className={styles.description}>To join the app please log in with your details</p>
                <button onClick={handlerHiden} className={styles.btnR}>Login</button>
              </div>
              <div className={styles.register}>
                  <RegisterPage />
              </div>
            </div>
        }
        </div>
  )
}

export default Test