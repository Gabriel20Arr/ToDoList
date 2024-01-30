import { useTasks } from "../../contexts/taskContext"
import { useFav } from "../../contexts/FavContext"
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

import work from "/imgIconos/work-tools.png"
import study from "/imgIconos/study.png"
import leisure from "/imgIconos/masaje.png"
import temporary from "/imgIconos/reloj-de-arena.png"
import business from "/imgIconos/business-people.png"

export const TaskCard = ({ task}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isPulsado, setIsPulsado] = useState(false);
  const { deleteTask, taskById } = useTasks()
  const { createFav } = useFav()
  const [ value, setValue ] = useState(null)
  // const [alertShown, setAlertShown] = useState(false);

  // console.log("1",selectedCategory);
  // console.log("2",categoryNumber);

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

  const HandlerFav = async (favorite) => {
    try {
      const res = await createFav(favorite);
    } catch (error) {
      console.error("Error al enviar la solicitud de favorito:", error);
    }
  }

  const handlerDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: '',
        text: 'Sure to delete the task?',
        position: "top",
        icon: 'warning',
        confirmButtonColor: '#3498db',
        showCancelButton: true
      })

      if(result.isConfirmed) {
        const res = await deleteTask(id)
      }
      
      } catch (error) {
        console.error('Error:', error);
    }
  }



const iconosImg = { 
  work: <img src={work} style={{height:"13px", width:"30px"}}/>,
  study: <img src={study} style={{height:"30px", width:"30px"}}/>,
  leisure: <img src={leisure} style={{height:"30px", width:"30px"}}/>,
  temporary: <img src={temporary} style={{height:"30px", width:"30px"}}/>,
  business: <img src={business} style={{height:"30px", width:"30px"}}/>,
};

const obtenerIcono = (categoria) => {
  // Acceder al valor correspondiente a la categoría proporcionada
  const icono = iconosImg[categoria];

  // Si la categoría existe en el objeto, devuelve el icono, de lo contrario, devuelve un valor por defecto o null
  return icono || <img src="/imgIconos/valor-por-defecto.png" alt="Default Icon" />;
};

// Ejemplo de uso
const categoriaSeleccionada = 'study';
const iconoObtenido = obtenerIcono(categoriaSeleccionada);

// console.log("Icono obtenido:", iconoObtenido);

  return (
    <div>
        <div className={`${style.task} ${isClicked ? style.clicked : ''}`} onClick={() => ShowCard(task._id)}>
        <div>
          {/* <span>{task.category}</span> */}
          {Object.keys(iconosImg).includes(task.category) && obtenerIcono(task.category)}
        </div>
            <div className={style.Cheader}>
              <div className={style.Ctitle}>
                  <h2 className={style.title}> {task.title} </h2>
              </div>
              <div className={style.Cbtns}>
                <img 
                    src={imgX}
                    className={style.btn} 
                    onClick={() => { handlerDelete(task._id) }}
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
                {
                  isClicked ?
                    <span className={style.bntDelUpd} onClick={() => {HandlerFav(task)}}>
                      Favorite
                    </span>
                    : ''
                }

              </div>
            
            </div>

            {
              isClicked ?
              <div className={style.sw}>
                <div className={style.sw2} onClick={handleStopWatchClick}>

                  <StopWatch />

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
