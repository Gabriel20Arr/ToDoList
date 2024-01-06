import style from "./TaskCard.module.css"
import { useTasks } from "../../contexts/taskContext"
import { Link } from "react-router-dom"

export const TaskCard = ({ task }) => {
    const { deleteTask } = useTasks()
    
  return (
    <div className={style.container}>
        <Link to={`/show-task/${task._id}`}>
            <div className={style.task}>
                <div>
                    <h2 className={style.title}> {task.title} </h2>
                    <button onClick={()=> {
                        deleteTask(task._id)
                    }}>Delete</button>
                </div>
                <p className={style.description}> {task.description} </p>
                <p className={style.date}> {new Date(task.date).toLocaleDateString()} </p>
            </div>
        </Link>
    </div>
  )
}
