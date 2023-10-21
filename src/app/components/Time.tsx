import React from "react";
import { FormattedTime } from "../types/time";
import TimeDigit from "./TimeDigit";

type Props = {
  currentTime: FormattedTime;
  isRunning: boolean;
};

export default function Time({ currentTime }: Props) {
  return (
    <div className="text-primary text-center">
      <span className="text-time-lg-fixed md:text-time-lg transition-all duration-200 ease-in-out">
        {currentTime.hours != undefined && (
          <>
            <TimeDigit inputID="hour" digit={currentTime.hours} />:
          </>
        )}
        <TimeDigit inputID="minutes" digit={currentTime.minutes} />
        :
        <TimeDigit inputID="seconds" digit={currentTime.seconds} />
        {currentTime.ms != undefined && ":"}
      </span>

      {currentTime.ms != undefined && (
        <span className="text-time-sm-fixed md:text-time-sm transition-all duration-200 ease-in-out">
          <TimeDigit inputID="ms" digit={currentTime.ms} pad={3} />
        </span>
      )}
    </div>
  );
}
