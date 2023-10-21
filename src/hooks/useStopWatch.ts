import { FormattedTime } from "@/app/types/time";
import React from "react";

const format = (
  time: number,
  options: { showHours: boolean; showMilliseconds: boolean }
): FormattedTime => {
  const { showHours, showMilliseconds } = options;

  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const ms = Math.floor(time % 1000);

  return {
    hours: showHours ? hours : undefined,
    minutes: showHours ? minutes % 60 : minutes,
    seconds: seconds % 60,
    ms: showMilliseconds ? ms : undefined,
  };
};

export const useStopWatch = () => {
  const [time, setTime] = React.useState<number>(0);
  const [startTime, setStartTime] = React.useState<number>(0);
  const [stopTime, setStopTime] = React.useState<number>(0);
  const [isRunning, setIsRunning] = React.useState<boolean>(false);
  const [showHours, setShowHours] = React.useState<boolean>(false);
  const [showMilliseconds, setShowMilliseconds] =
    React.useState<boolean>(false);

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
    formattedTime: format(time, { showHours, showMilliseconds }),
    showHours,
    setShowHours,
    showMilliseconds,
    setShowMilliseconds,
  };
};
