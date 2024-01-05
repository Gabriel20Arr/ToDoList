import { useEffect } from "react"
import { useTasks } from "../../contexts/taskContext"

import style from "./TaskPage.module.css"

export const TaskPage = () => {
  const { AllTask, task } = useTasks()

  useEffect(() => {
    AllTask()
  }, [])
  
  return (
    <div className={style.container0}>
      <h1 className={style.t}>🏛️ Tasks</h1>

      <div className={style.container}>         
        {
          task.map((task) => (
            <div key={task._id} className={style.task}>
              <h2 className={style.title}>{task.title}</h2>
              <p className={style.description}>
                {task.description}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
