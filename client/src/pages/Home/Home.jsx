import { useState, useEffect } from "react"
import { Navbar } from "../../components/Navbar/Navbar"
// import StopWatch from "../../components/StopWatch/StopWatch"
import { TaskPage } from "../TaskPage/TaskPage"

import style from "./Home.module.css"

const date = new Date()
export const Home = () => {
  const[date, setDate] = useState(new Date())
  
  useEffect(() => {
    // Actualiza la fecha cada segundo
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  // Obtén las partes específicas de la fecha y hora
  const dia = date.getDate();
  const mes = date.getMonth() + 1; // Los meses en JavaScript son de 0 a 11
  const ano = date.getFullYear();
  const hora = date.getHours();
  const minutos = date.getMinutes();
  const segundos = date.getSeconds();

  // Formatea la fecha y hora como una cadena
  const fechaHoraFormateada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
  
  return (
    <div className={style.container}>
    
      <div className={style.nav}>
        <Navbar />
      </div>

      <div className={style.task}>
        <TaskPage />
      </div>

      <div className={style.Stopwatch}>
        <span>{fechaHoraFormateada}</span>
      </div>

    </div>
  )
}
