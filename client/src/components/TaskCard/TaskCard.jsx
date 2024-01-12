import { useTasks } from "../../contexts/taskContext"
import { useParams } from 'react-router-dom';
import { useState } from "react";

import StopWatch  from "../StopWatch/StopWatch"
import style from "./TaskCard.module.css"

export const TaskCard = ({ task }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { deleteTask, taskById } = useTasks()
  const params = useParams();


   const ShowCard = async ( id )  => {
    // const res = await taskById(params.id)
    // console.log(id);
    setIsClicked(!isClicked);
  }
  
    const handleStopWatchClick = (event) => {
    // Evitar que el clic en el cronómetro propague al contenedor TaskCard
    event.stopPropagation();
  };
    
  return (
    <div>
        <div className={`${style.task} ${isClicked ? style.clicked : ''}`} onClick={() => ShowCard(task._id)}>
            <div>
                <h2 className={style.title}> {task.title} </h2>
            </div>
            <p className={`${style.description0} ${isClicked ? style.description : ''}`} > {task.description} </p>
            <div className={style.contentDataBtn}>
              
              <p className={style.date}> {new Date(task.date).toLocaleDateString()} </p>
              
              <div className={style.contentDelUpd}>
                {
                  isClicked ?
                  <button className={style.bntDelUpd} onClick={()=> {
                      deleteTask(task._id)
                  }}>
                    Delete
                  </button>
                    : ''
                }

                {
                  isClicked ?
                  <button className={style.bntDelUpd} onClick={()=> {
                      deleteTask(task._id)
                  }}>
                    Update
                  </button>
                    : ''
                }

              </div>
            
            </div>

            {
              isClicked ?
              <div className={style.sw}>
                <div className={style.sw2} onClick={handleStopWatchClick}>
                  <StopWatch />
                </div>
              </div> : ''
            }

        </div>
    </div>
  )
}
