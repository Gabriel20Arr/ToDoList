import { useTasks } from "../../contexts/taskContext"
import { useParams } from 'react-router-dom';
import { useState } from "react";

import style from "./TaskCard.module.css"

export const TaskCard = ({ task }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { deleteTask, taskById } = useTasks()
  const params = useParams();


   const ShowCard = async ( id )  => {
    // const res = await taskById(params.id)
    console.log(id);
    setIsClicked(!isClicked);
  }
  
    
  return (
    <div className={style.container}>
        <div className={`${style.task} ${isClicked ? style.clicked : ''}`} onClick={() => ShowCard(task._id)}>
            <div>
                <h2 className={style.title}> {task.title} </h2>
                <button onClick={()=> {
                    deleteTask(task._id)
                }}>Delete</button>
            </div>
            <p className={style.description}> {task.description} </p>
            <p className={style.date}> {new Date(task.date).toLocaleDateString()} </p>
        </div>
    </div>
  )
}
