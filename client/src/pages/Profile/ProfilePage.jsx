import React, {useEffect, useState} from 'react'
import { useAuth } from "../../contexts/authContext"

import imgEditUser from "/imgIconos/edit-user.png"

import styles from "./ProfilePage.module.css"
import { Link } from 'react-router-dom'

export const ProfilePage = () => {
  const { profile } = useAuth()
  const [dataP, setDataP] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      const res = async (id) => {
      const ress = await profile(id)
      setDataP(ress)
      // console.log("datass", dataP);
      }

      res()
  }, [profile])

  return (
    <div className={styles.container0}>
        <h1 className={styles.t}>Profile</h1>
        
        <div className={styles.container}>

          <div className={styles.containerImg}>
            {
              loading ? <h2>loading..</h2> :
              <img src={dataP.profile} alt='img' className={styles.image}/>
            }
          </div>  

          <div className={styles.container2}>
            <div className={styles.edit}>
            <Link to={"/error-page"}>
              <img src={imgEditUser} alt='' className={styles.imgEdit} />
            </Link>
            </div>
            
            <div className={styles.CInput}>
              <span className={styles.nameInput}>Name</span> 
              <span className={styles.items}>{dataP.username}</span>
            </div>

            <div className={styles.CInput}>
              <span className={styles.nameInput}>Email</span> 
              <span className={styles.items}>{dataP.email}</span>
            </div>
            
            <div className={styles.CInput}>
              <span className={styles.nameInput}>Account created</span> 
              <span className={styles.items}>{new Date(dataP.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

        </div>
          
    </div>
  )
}
