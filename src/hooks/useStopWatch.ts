import { FormattedTime } from "@/app/types/time";
import React from "react";

const format = (time: number): FormattedTime => {
  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const ms = Math.floor(time % 1000);

  return {
    hours,
    minutes: minutes % 60,
    seconds: seconds % 60,
    ms,
  };
};

export const useStopWatch = () => {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [startTime, setStartTime] = React.useState<number>(0);
  const [stopTime, setStopTime] = React.useState<number>(0);

  const interval = React.useRef<ReturnType<typeof setInterval>>();

  React.useEffect(() => {
    if (startTime > 0) {
      interval.current = setInterval(() => {
        setTime(() => Date.now() - startTime + stopTime);
      }, 1);
    } else {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = undefined;
      }
    }
  }, [startTime]);

  const start = () => {
    setIsRunning(true);
    setStartTime(Date.now());
  };

  const stop = () => {
    setIsRunning(false);
    setStartTime(0);
    setStopTime(time);
  };

  const reset = () => {
    setStartTime(0);
    setStopTime(0);
    setTime(0);
    setIsRunning(false);
  };

  return {
    start,
    stop,
    reset,
    isRunning,
    time,
    formattedTime: format(time),
  };
};
