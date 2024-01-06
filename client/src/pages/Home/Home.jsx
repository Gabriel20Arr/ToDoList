import { useState } from "react"
import { Navbar } from "../../components/Navbar/Navbar"
import { TaskPage } from "../TaskPage/TaskPage"

import style from "./Home.module.css"
import { ShowTask } from "../../components/ShowTask/ShowTask"

export const Home = () => {
  const [show, setShow] = useState()

  
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Navbar />
      </div>
      <div className={style.task}>
        <TaskPage />
      </div>
      {show && (
        <div className={style.cardTask}>
          <ShowTask />
        </div>
      )}
    </div>
  )
}
