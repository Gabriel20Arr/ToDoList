import { useTasks } from "../../contexts/taskContext"
// import { useParams } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";
import imgX from "/imgTests/boton-eliminar-3.png"

import StopWatch  from "../StopWatch/StopWatch"
import { Calendar } from "react-calendar"

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import 'react-calendar/dist/Calendar.css';
import style from "./TaskCard.module.css"

export const TaskCard = ({ task }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isPulsado, setIsPulsado] = useState(false);
  const { deleteTask, taskById } = useTasks()
  const [ value, setValue ] = useState(null)
  // const [alertShown, setAlertShown] = useState(false);

    const ShowCard = ()  => {
       setIsClicked(!isClicked);
    }

    const pulsado = ()  => {
      setIsPulsado(!isPulsado)
      // console.log(isPulsado);
    }
  
    const handleStopWatchClick = (event) => {
    // Evitar que el clic en el cronómetro propague al contenedor TaskCard
    event.stopPropagation();
    };

    // Agregar esta función para mostrar una alerta cuando el valor sea igual a la fecha actual
    const showAlertIfCurrentDate = () => {
      const currentDate = new Date();
      const taskCompletionDate = value;

      if (
        taskCompletionDate &&
        taskCompletionDate.getDate() === currentDate.getDate() &&
        taskCompletionDate.getMonth() === currentDate.getMonth() &&
        taskCompletionDate.getFullYear() === currentDate.getFullYear()
      ) {
        Swal.fire({
          title: '',
          text: '¡Time from task fished!',
          position: "top",
          icon: 'info',
          confirmButtonColor: '#3498db',
        })
        setValue(null)
      }
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
                  {/* <input type="date" className={style.calendar} /> */}
                    <div className={style.Ccalendar}>
                        
                        <button onClick={pulsado} className="bg-white font-bold rounded-xl p-1">Calendar</button>
                        { 
                          isPulsado ? 
                            <Calendar className={style.calendar} onChange={setValue} value={value}/> 
                          : (value && (
                             <p className="bg-white font-bold rounded mt-5 p-1">Task completion: {value.toLocaleDateString()}</p>
                            ))  
                        }
                             {showAlertIfCurrentDate()}

                    </div>
                      
                </div>
              </div> : ''
            }

        </div>
    </div>
  )
}
