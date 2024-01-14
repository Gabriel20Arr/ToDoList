import { useTasks } from "../../contexts/taskContext"
// import { useParams } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";

import StopWatch  from "../StopWatch/StopWatch"
import imgX from "../../../public/imgTests/boton-eliminar.png"

import style from "./TaskCard.module.css"

export const TaskCard = ({ task }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { deleteTask, taskById } = useTasks()

    const ShowCard = async ( id )  => {
       setIsClicked(!isClicked);
    }
  
    const handleStopWatchClick = (event) => {
    // Evitar que el clic en el cronómetro propague al contenedor TaskCard
    event.stopPropagation();
    };
    
  return (
    <div>
        <div className={`${style.task} ${isClicked ? style.clicked : ''}`} onClick={() => ShowCard(task._id)}>
            <div className={style.Cheader}>
              <div className={style.Ctitle}>
                  <h2 className={style.title}> {task.title} </h2>
              </div>
              <div className={style.Cbtns}>
                <img 
                    src={imgX}
                    className={style.btn} 
                    onClick={()=> { deleteTask(task._id) }}
                />
              </div>
            </div>
            <p className={`${style.description0} ${isClicked ? style.description : ''}`} > {task.description} </p>
            <div className={style.contentDataBtn}>
              
              <p className={style.date}> {new Date(task.date).toLocaleDateString()} </p>
              
              <div className={style.contentDelUpd}>
                {
                  isClicked ?
                  <Link 
                      to={`/task/${task._id}`}
                      className={style.bntDelUpd} 
                  >
                    Update
                  </Link>
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
