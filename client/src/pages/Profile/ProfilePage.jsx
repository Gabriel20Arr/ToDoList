import React from 'react'
import { useAuth } from "../../contexts/authContext"

import styles from "./ProfilePage.module.css"

export const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth()
  const dataUser = Object.values(user)

  // console.log(dataUser);
  
  return (
    <div className={styles.container}>
      <h1>Profile</h1>
      {
        dataUser && (
          <div className={styles.container1}>
            <span className={styles.items}>id: {dataUser[0]}</span>
            <span className={styles.items}>Name: {dataUser[1]}</span>
            <span className={styles.items}>Email: {dataUser[2]}</span>
          </div>
        )
      }
    </div>
  )
}
