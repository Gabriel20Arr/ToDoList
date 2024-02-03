import style from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/authContext"
import React, {useEffect, useState} from 'react'

export const Navbar = () => {
    const { Logout, user, isAuthenticated, profile } = useAuth();
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
    <div className={style.container0}>
        <ul className={style.container}>
            <div className={style.profile}>
                {   
                !(user  && isAuthenticated) ?
                    <Link to={'/login'} className={style.lis0Login}>
                        <li className={style.liLogin}>🔗 Login</li>
                    </Link> :
                    <div className={style.ContentProfile}>
                        <img src={dataP.profile} alt=""  className={style.image}/>
                        <Link to={'/profile'} className={style.lis0}>
                            <li className={style.lis00}>{dataP.username} 🔗</li>
                        </Link>
                    </div>
                }
            </div>
            
            <div className={style.Clis}>
                <Link to={'/'}>
                    <li className={style.lis}>🏠 Home</li>
                </Link>

                <Link to={'/add-task'}>
                    <li className={style.lis}>➕ Add task</li>
                </Link>

                <Link to={'/favorite'}>
                    <li className={style.lis}>⭐ Favorites</li>
                </Link> 

                <Link to={'/help'}>
                    <li className={style.lis}>🗨️ Help</li>
                </Link>
            </div>

            <div className={style.loguot}>
                {
                    (user  && isAuthenticated)
                        ?
                    (<Link to={'/login'} >
                        <li className={style.lis} onClick={Logout}>🚫 Logout</li>
                    </Link>) 
                        :
                    ''
                }
            </div>
        </ul>
    </div>
  )
}
