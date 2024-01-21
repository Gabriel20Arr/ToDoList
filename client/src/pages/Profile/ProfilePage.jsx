import React, {useState} from 'react'
import { useAuth } from "../../contexts/authContext"

import styles from "./ProfilePage.module.css"
import axios from 'axios'

export const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth()
  const dataUser = Object.values(user)
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async (e) => {
    const files = e.target.files[0];
    const data = new FormData()
    data.append("file", files)
    data.append("upload_preset", "todolist")
    setLoading(true)

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dmtzjtgy8/image/upload", data
    )

    console.log('res', res.data)
    setImage(res.data.secure_url)

    setLoading(false)
  }

  // Delete image
  const DeleteImage = () => {
    setImage('')
  }
  
  return (
    <div className={styles.container}>
      <h1>Profile</h1>
      {
        dataUser && (
          <div className={styles.container1}>
            <span className={styles.items}>id: {dataUser[0]}</span>
            <span className={styles.items}>Name: {dataUser[1]}</span>
            <span className={styles.items}>Email: {dataUser[2]}</span>

            <div className="flex flex-col" >
              <span>photo</span>
              <input
                className=" w-[220px] mb-5" 
                type="file" 
                accept='image/*'
                name='file'
                onChange={uploadImage}
              />
              {
                loading ? <h2>loading..</h2> :
                <img src={image} alt='img' style={{width: 250, height: 200}}/>
              }
              <button className='bg-blue-800 text-white rounded-xl border hover:border-black' onClick={DeleteImage}>Delete</button>
            </div>
          </div>
        )
      }
    </div>
  )
}
