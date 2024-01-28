import React, {useEffect, useState} from 'react'
import { useAuth } from "../../contexts/authContext"

import styles from "./ProfilePage.module.css"

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
        <h1 className={styles.t}>profile</h1>
        <div className={styles.container}>
          <div className={styles.container1}>
            <div className="flex flex-col" >
              {
                loading ? <h2>loading..</h2> :
                <img src={dataP.profile} alt='img' className={styles.image}/>
              }
            </div>
          </div>  

          <div className={styles.container2}>
            {/* <span className={styles.items}>id: {dataP.id}</span> */}
            <span className={styles.items}>Name: {dataP.username}</span>
            <span className={styles.items}>Email: {dataP.email}</span>
          </div>
        </div>
          
    </div>
  )
}
