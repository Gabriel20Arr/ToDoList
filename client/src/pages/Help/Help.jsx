import React from 'react'

import styles from "./Help.module.css"

export const Help = () => {
  return (
    <div className={styles.containerHelp}>
        <form className={styles.containerForm}>
         <span className={styles.title}>Form Help</span>
         <span className={styles.title2}>hear more about how we can help</span>
     
         <input type='text' name='name' placeholder='Name' className={styles.input} />
     
         <input type='text' name='Email' placeholder='Email' className={styles.input} />
     
         <textarea placeholder='Description' className={styles.inputT} />
 
         <button className={styles.btnS}>Send</button>
        </form>
    </div>
  )
}

/*
    <div className={styles.CInput}>
        <span className={styles.nameInput}>Name</span> 
        <input type='text' name='name' placeholder='Name' className={styles.input} />
    </div>
*/ 