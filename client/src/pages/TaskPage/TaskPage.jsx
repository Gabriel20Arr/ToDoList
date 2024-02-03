import { useEffect, useState } from "react"
import { useTasks } from "../../contexts/taskContext"
import { useAuth } from "../../contexts/authContext"
import { TaskCard }  from "../../components/TaskCard/TaskCard" 
import { TaskTest } from "../../components/TaskTest/TaskTest"

import style from "./TaskPage.module.css"

export const TaskPage = () => {
  const { AllTask, task } = useTasks()
  const {user} = useAuth()
  
  useEffect(() => {
    AllTask()
  }, [])
  
  return (
    <div className={style.container0}>
      {(task && task.length > 0) || TaskTest ? (
        ''
      ) : (
        <h1 className={style.noTask}>There are no tasks</h1>
      )}

      { !user ? 
        <TaskTest />
        : 
        <div className={style.container}>         
          { 
            task.map((task) => (
              <TaskCard task={task} key={task._id} className={style.Card}/>
            ))
          }
        </div>
      }
      
    </div>
  )
}
