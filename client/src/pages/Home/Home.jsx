import { Navbar } from "../../components/Navbar/Navbar"
import { TaskPage } from "../TaskPage/TaskPage"

import style from "./Home.module.css"

export const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Navbar />
      </div>
      <div className={style.task}>
        <TaskPage />
      </div>
    </div>
  )
}
