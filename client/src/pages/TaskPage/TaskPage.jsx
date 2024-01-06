import { useEffect } from "react"
import { useTasks } from "../../contexts/taskContext"
import { TaskCard } from "../../components/TaskCard/TaskCard"

import style from "./TaskPage.module.css"

export const TaskPage = () => {
  const { AllTask, task } = useTasks()

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
      <div className={style.container}>         
        { 
          task.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))
        }
      </div>
    </div>
  )
}
