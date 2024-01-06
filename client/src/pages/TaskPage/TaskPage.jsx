import { useEffect } from "react"
import { useTasks } from "../../contexts/taskContext"

import style from "./TaskPage.module.css"

export const TaskPage = () => {
  const { AllTask, task } = useTasks()

  const viewTask = (_id) => {
    console.log("View task", _id);
  }

  useEffect(() => {
    AllTask()
  }, [])
  
  return (
    <div className={style.container0}>
      {task && task.length > 0 ? (
        <h1 className={style.t}>🏛️ Tasks</h1>
      ) : (
        <h1 className={style.noTask}>There are no tasks</h1>
      )}
      <div className={style.container} >         
        { 
          task.map((task) => (
            <div key={task._id} className={style.task} onClick={viewTask}>
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
