import ControlButtons from "../ControlButtons/ControlButtons";
import Timer from "../Timer/Timer";
import "./StopWatch.css";
import { useState, useEffect } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setIsPaused(true);
  };

  return (
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        isActive={isActive}
        isPaused={isPaused}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
      />
    </div>
  );
}
