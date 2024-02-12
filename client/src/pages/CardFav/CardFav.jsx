import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFav } from "../../contexts/FavContext"

import imgX from "/imgTests/boton-eliminar-3.png"


import StopWatch  from "../../components/StopWatch/StopWatch"
import { Calendar } from "react-calendar"

import style from "./CardFav.module.css"
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import work from "/imgIconos/work-tools.png"
import study from "/imgIconos/study.png"
import leisure from "/imgIconos/masaje.png"
import temporary from "/imgIconos/reloj-de-arena.png"
import business from "/imgIconos/business-people.png"

export const CardFav = ({ fav }) => {
  const { deletFav} = useFav()
  const [isClicked, setIsClicked] = useState(false);
  const [isPulsado, setIsPulsado] = useState(false);

  const localStorageKey = `calendarValue_${fav._id}`;
    const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(localStorageKey);
    return storedValue ? new Date(storedValue) : null;
  });

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

  // Guarda el valor en el almacenamiento local cuando cambia
  useEffect(() => {
    if (value) {
      localStorage.setItem(localStorageKey, value.toISOString());
    }
  }, [value, localStorageKey]);

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
      }).then(() => {
        localStorage.removeItem(localStorageKey)

        setValue(null)
      })
    }
  };

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
        const res = await deletFav(id)
      }
      
      } catch (error) {
        console.error('Error:', error);
    }
  }

   const iconosImg = { 
    work: <img src={work} className={style.imgIconos}  alt=""/>,
    study: <img src={study} className={style.imgIconos1}  alt=""/>,
    leisure: <img src={leisure} className={style.imgIconos2}  alt=""/>,
    temporary: <img src={temporary} className={style.imgIconos3}  alt=""/>,
    business: <img src={business} className={style.imgIconos4}  alt=""/>,
  };

  const obtenerIcono = (categoria) => {
    // Acceder al valor correspondiente a la categoría proporcionada
    const icono = iconosImg[categoria];

    // Si la categoría existe en el objeto, devuelve el icono, de lo contrario, devuelve un valor por defecto o null
    return icono || <img src="" alt="Default Icon" />;
  };
 
  return (
    <div className={`${style.container0} ${isClicked ? style.clicked : ''}`} onClick={() => ShowCard(fav._id)}>

      <div className={style.Container_icono}>
        <div className={style.Icono}>
          {Object.keys(iconosImg).includes(fav.category) && obtenerIcono(fav.category)}
        </div>
      </div>
    
        <div className={style.Cheader}>
          <div className={style.Ctitle}>
              <h2 className={style.tittle}> {fav.title} </h2>
          </div>
          <div className={style.Cbtns}>
            <img 
                src={imgX}
                className={style.btnD} 
                onClick={()=> { handlerDelete(fav._id) }}
            />
          </div>
        </div>
        
        <p className={`${style.description} ${isClicked ? 
        style.description0 : ''}`}> 
          {fav.description} 
        </p>
        
        <div className={style.contentDataBtn}>
          <p className={style.date}> {new Date(fav.date).toLocaleDateString()} </p>
        </div>

        {
          isClicked ?
          <div className={style.sw}>
            <div className={style.sw2} onClick={handleStopWatchClick}>

              <StopWatch />

              <div className={style.Ccalendar}>
                  
                  <button onClick={pulsado} className={ isPulsado ? ` ${style.btnCalendarPulsado}` : `${style.btnCalendar}`} >🗓️ Calendar</button>
                { 
                  isPulsado ? 
                    <Calendar 
                      className={style.calendar} 
                      onChange={setValue} 
                      value={value} 
                      tileClassName={({ date, view }) => {
                        // Verifica si la fecha actual coincide con el valor y aplica la clase de estilo
                        return date.toDateString() === (value && value.toDateString()) ? style.selectedDate : '';
                      }}
                    /> 
                  : (value && (
                      <p className="bg-white font-bold rounded mt-5 p-1">Task completion: {value.toLocaleDateString()}</p>
                    ))  
                }
                        {showAlertIfCurrentDate()}

              </div>
              {console.log({value})}
                  
            </div>
          </div> : ''
        }
        
    </div>
  )
}
