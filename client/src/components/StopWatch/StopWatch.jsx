import React, { useState, useEffect } from 'react';

import style from './StopWatch.module.css'

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    stopStopwatch();
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={style.container}>
      {/* <h1 className={style.title}>StopWatch</h1> */}
      <div className={style.time}>{formatTime()}</div>
      <div className={style.containerBtn}>
        <button className={style.btn} onClick={startStopwatch}>Start</button>
        <button className={style.btn} onClick={stopStopwatch}>Stop</button>
        <button className={style.btn} onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
