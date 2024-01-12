import style from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/authContext"

export const Navbar = () => {
    const { Logout, user,
            isAuthenticated } = useAuth();
  return (
    <div className={style.container0}>
        <ul className={style.container}>
        {   !(user  && isAuthenticated) ?
                <Link to={'/login'}>
                    <li className={style.lis0}>📍 Login</li>
                </Link> :
                <Link to={'/profile'}>
                    <li className={style.lis0}>🖼️ Profile</li>
                </Link>
        }
            
            <Link to={'/add-task'}>
                <li className={style.lis}>➕ Add task</li>
            </Link>
            <Link to={'/add-task'}>
                <li className={style.lis}>⭐ Favorites</li>
            </Link> 
             {/* <Link to={'/stop-watch'}>
                <li className={style.lis}>⌛ Stopwatch</li>
            </Link> */}
            <Link to={'/add-task'}>
                <li className={style.lis}>📬 contact</li>
            </Link>
            {
                (user  && isAuthenticated)
                    ?
                (<Link to={'/login'}>
                    <li className={style.lis} onClick={Logout}>🚫 Logout</li>
                </Link>) 
                    :
                ''
            }
        </ul>
    </div>
  )
}
