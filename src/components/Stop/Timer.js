import React, { useState, useRef, useEffect } from "react";
import "./Timer.css";

export default function Timer(props) {
  const { start, end } = props;
  const [timer, setTimer] = useState(end);
  let timerRef = useRef(null);

  // Handle timer start
  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setTimer((old) => {
        if (old <= 0) {
          setTimer(end);
        }
        return old - 1;
      });
    }, 1000);
    console.log(timerRef.current);
  };

  // Handle Timer stop
  const handleStop = () => {
    clearInterval(timerRef.current);
  };

  // Handle Reset
  const handleReset = () => {
    handleStop();
    setTimer(end);
  };

  useEffect(() => {
    if (timer <= start) {
      handleStop();
    }
  }, [timer, start]);

  return (
    <div className="timer">
      <p>{timer}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
