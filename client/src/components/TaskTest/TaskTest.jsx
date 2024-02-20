import { useState } from "react"

import iconoTest  from "/imgIconos/reloj-de-arena.png"
import iconoTest2 from "/imgIconos/business-people.png"
import iconoTest3 from "/imgIconos/masaje.png"
import iconoTest4 from "/imgIconos/work-tools.png"
import imgX from "/imgTests/boton-eliminar-3.png"

import StopWatch  from "../../components/StopWatch/StopWatch"
import { Calendar } from "react-calendar"

import style from "./TaskTast.module.css"


export const TaskTest = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isPulsado, setIsPulsado] = useState(false);
  const [value, setValue] = useState('')

  const handleStopWatchClick = (event) => {
    event.stopPropagation();
  };

  const pulsado = ()  => {
    setIsPulsado(!isPulsado)
    // console.log(isPulsado);
  }

    const ShowCard = (id)  => {
      setIsClicked(!isClicked);
    }


  return (
    <div className={style.container}>
      <div id={1} className={`${style.task} ${isClicked ? style.clicked : ''}`} onClick={() => ShowCard(1)}>
  
          <div className={style.Container_icono}>
          <div className={style.Icono}>
              <img src={iconoTest} alt="iconoTest" className={style.imgIconos}/>
          </div>
          </div>
  
          <div className={style.Cheader}>
          <div className={style.Ctitle}>
              <h2 className={style.title}> Test 1 </h2>
          </div>
          <div className={style.Cbtns}>
              <img 
                  src={imgX}
                  className={style.btnD} 
              />
          </div>
          </div>
          <p className={`${style.description0} ${isClicked ? style.description : ''}`} > La lluvia cae suavemente sobre la ciudad, creando un ambiente tranquilo y acogedor que invita a la reflexión y al recogimiento. Las luces de la calle destellan entre las gotas, pintando un paisaje efímero pero hermoso. En este momento, el tiempo parece detenerse, permitiéndonos apreciar la belleza de la lluvia y sumergirnos en la serenidad del instante </p>
          <div className={style.contentDataBtn}>
          
          <p className={style.date}> 1/02/2024 </p>
          
          { isClicked ?
              <div className={style.contentDelUpd}>
                  <span className={style.bntDelUpd}>
                      Update
                  </span> 
  
                  <span className={style.bntDelUpd}>
                      Favorite
                  </span>
              </div>
          : ''
          }
          
          </div>
  
          {
          isClicked ?
          <div className={style.sw}>
              <div className={style.sw2} onClick={handleStopWatchClick}>
                <div className={style.Ccalendar}>
                    
                    <button onClick={pulsado} className={ isPulsado ? ` ${style.btnCalendarPulsado}` : `${style.btnCalendar}`} >🗓️ Calendar</button>
                    { 
                    isPulsado ? 
                        <Calendar 
                        className={style.calendar} 
                        onChange={setValue} 
                        value={value} 
                        /> 
                    : (value && (
                        <p className="bg-white font-bold rounded mt-5 p-1">Task completion: {value.toLocaleDateString()}</p>
                        ))  
                    }
                </div>
                
                <StopWatch />

              </div>
          </div> : ''
          }
  
      </div>
  
      <div id={2} className={`${style.task} ${isClicked ? style.clicked : ''}`} onClick={() => ShowCard(2)}>
  
          <div className={style.Container_icono}>
          <div className={style.Icono}>
              <img src={iconoTest2} alt="iconoTest" className={style.imgIconos2}/>
          </div>
          </div>
  
          <div className={style.Cheader}>
          <div className={style.Ctitle}>
              <h2 className={style.title}> Test 2 </h2>
          </div>
          <div className={style.Cbtns}>
              <img 
                  src={imgX}
                  className={style.btnD} 
              />
          </div>
          </div>
          <p className={`${style.description0} ${isClicked ? style.description : ''}`} >En el vasto lienzo del universo, la sinfonía del medio ambiente resuena en cada rincón. Los océanos susurran secretos antiguos, mientras los bosques dan cobijo a la diversidad. Cada especie, un eslabón en la cadena de la vida, teje la trama de la existencia.</p>
          <div className={style.contentDataBtn}>
          
          <p className={style.date}> 2/02/2024 </p>
          
          { isClicked ?
              <div className={style.contentDelUpd}>
                  <span className={style.bntDelUpd}>
                      Update
                  </span> 
  
                  <span className={style.bntDelUpd}>
                      Favorite
                  </span>
              </div>
          : ''
          }
          
          </div>
  
          {
          isClicked ?
          <div className={style.sw}>
              <div className={style.sw2} onClick={handleStopWatchClick}>
                <div className={style.Ccalendar}>
                    
                    <button onClick={pulsado} className={ isPulsado ? ` ${style.btnCalendarPulsado}` : `${style.btnCalendar}`} >🗓️ Calendar</button>
                    { 
                    isPulsado ? 
                        <Calendar 
                        className={style.calendar} 
                        onChange={setValue} 
                        value={value} 
                        // tileClassName={({ date, view }) => {
                        //   return date.toDateString() === (value && value.toDateString()) ? style.selectedDate : '';
                        // }}
                        /> 
                    : (value && (
                        <p className="bg-white font-bold rounded mt-5 p-1">Task completion: {value.toLocaleDateString()}</p>
                        ))  
                    }
                            {/* {showAlertIfCurrentDate()} */}
    
                </div>

                <StopWatch />

              </div>
          </div> : ''
          }
  
      </div>
      <div id={3} className={`${style.task} ${isClicked ? style.clicked : ''}`} onClick={() => ShowCard(3)}>
  
          <div className={style.Container_icono}>
          <div className={style.Icono}>
              <img src={iconoTest3} alt="iconoTest" className={style.imgIconos3}/>
          </div>
          </div>
  
          <div className={style.Cheader}>
          <div className={style.Ctitle}>
              <h2 className={style.title}>Test 3</h2>
          </div>
          <div className={style.Cbtns}>
              <img 
                  src={imgX}
                  className={style.btnD} 
              />
          </div>
          </div>
          <p className={`${style.description0} ${isClicked ? style.description : ''}`} >La lluvia cae suavemente sobre la ciudad, creando un ambiente tranquilo y acogedor que invita a la reflexión y al recogimiento. Las luces de la calle destellan entre las gotas, pintando un paisaje efímero pero hermoso. En este momento, el tiempo parece detenerse, permitiéndonos apreciar la belleza de la lluvia y sumergirnos en la serenidad del instante</p>
          <div className={style.contentDataBtn}>
          
          <p className={style.date}> 3/02/2024 </p>
          
          { isClicked ?
              <div className={style.contentDelUpd}>
                  <span className={style.bntDelUpd}>
                      Update
                  </span> 
  
                  <span className={style.bntDelUpd}>
                      Favorite
                  </span>
              </div>
          : ''
          }
          
          </div>
  
          {
          isClicked ?
          <div className={style.sw}>
              <div className={style.sw2} onClick={handleStopWatchClick}>
    
                <div className={style.Ccalendar}>
                    <button onClick={pulsado} className={ isPulsado ? ` ${style.btnCalendarPulsado}` : `${style.btnCalendar}`} >🗓️ Calendar</button>
                    { 
                    isPulsado ? 
                        <Calendar 
                        className={style.calendar} 
                        onChange={setValue} 
                        value={value} 
                        // tileClassName={({ date, view }) => {
                        //   return date.toDateString() === (value && value.toDateString()) ? style.selectedDate : '';
                        // }}
                        /> 
                    : (value && (
                        <p className="bg-white font-bold rounded mt-5 p-1">Task completion: {value.toLocaleDateString()}</p>
                        ))  
                    }
                            {/* {showAlertIfCurrentDate()} */}
    
                </div>
                  
                <StopWatch />

              </div>
          </div> : ''
          }
  
      </div>
      <div id={4} className={`${style.task} ${isClicked ? style.clicked : ''}`} onClick={() => ShowCard(4)}>
  
          <div className={style.Container_icono}>
          <div className={style.Icono}>
              <img src={iconoTest4} alt="iconoTest" className={style.imgIconos4}/>
          </div>
          </div>
  
          <div className={style.Cheader}>
          <div className={style.Ctitle}>
              <h2 className={style.title}> Test 4 </h2>
          </div>
          <div className={style.Cbtns}>
              <img 
                  src={imgX}
                  className={style.btnD} 
              />
          </div>
          </div>
          <p className={`${style.description0} ${isClicked ? style.description : ''}`} >En el vasto lienzo del universo, la sinfonía del medio ambiente resuena en cada rincón. Los océanos susurran secretos antiguos, mientras los bosques dan cobijo a la diversidad. Cada especie, un eslabón en la cadena de la vida, teje la trama de la existencia.</p>
          <div className={style.contentDataBtn}>
          
          <p className={style.date}> 4/02/2024 </p>
          
          { isClicked ?
              <div className={style.contentDelUpd}>
                  <span className={style.bntDelUpd}>
                      Update
                  </span> 
  
                  <span className={style.bntDelUpd}>
                      Favorite
                  </span>
              </div>
          : ''
          }
          
          </div>
  
          {
          isClicked ?
          <div className={style.sw}>
              <div className={style.sw2} onClick={handleStopWatchClick}>
  
                <div className={style.Ccalendar}>
                    
                    <button onClick={pulsado} className={ isPulsado ? ` ${style.btnCalendarPulsado}` : `${style.btnCalendar}`} >🗓️ Calendar</button>
                    { 
                    isPulsado ? 
                        <Calendar 
                        className={style.calendar} 
                        onChange={setValue} 
                        value={value} 
                        // tileClassName={({ date, view }) => {
                        //   return date.toDateString() === (value && value.toDateString()) ? style.selectedDate : '';
                        // }}
                        /> 
                    : (value && (
                        <p className="bg-white font-bold rounded mt-5 p-1">Task completion: {value.toLocaleDateString()}</p>
                        ))  
                    }
                            {/* {showAlertIfCurrentDate()} */}
    
                </div>
                
                <StopWatch />

              </div>
          </div> : ''
          }
  
      </div>

    </div>
  )
}
