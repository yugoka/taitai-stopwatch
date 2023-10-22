import React from "react";
import { FormattedTime } from "../types/time";
import TimeDigit from "./TimeDigit";

type Props = {
  currentTime: FormattedTime;
  isRunning: boolean;
  onUpdate: (time: FormattedTime) => void;
};

export default function Time({ currentTime, isRunning, onUpdate }: Props) {
  const handleChange = (
    digit: number,
    type: "hours" | "minutes" | "seconds" | "ms"
  ) => {
    const editedTime = { ...currentTime };
    editedTime[type] = digit;
    onUpdate(editedTime);
  };

  return (
    <div className="text-primary text-center">
      <span
        className={` ${
          currentTime.ms === undefined
            ? "text-time-fixed"
            : "text-time-fixed-sm"
        } md:text-time-lg transition-all duration-200 ease-in-out`}
      >
        {currentTime.hours != undefined && (
          <>
            <TimeDigit
              isRunning={isRunning}
              onChange={(digit) => handleChange(digit, "hours")}
              inputID="hour"
              digit={currentTime.hours}
            />
            :
          </>
        )}
        <TimeDigit
          isRunning={isRunning}
          onChange={(digit) => handleChange(digit, "minutes")}
          inputID="minutes"
          digit={currentTime.minutes}
        />
        :
        <TimeDigit
          isRunning={isRunning}
          onChange={(digit) => handleChange(digit, "seconds")}
          inputID="seconds"
          digit={currentTime.seconds}
        />
        {currentTime.ms != undefined && ":"}
      </span>

      {currentTime.ms != undefined && (
        <span className="text-time-fixed-ms md:text-time-sm transition-all duration-200 ease-in-out">
          <TimeDigit
            isRunning={isRunning}
            onChange={(digit) => handleChange(digit, "ms")}
            inputID="ms"
            digit={currentTime.ms}
            pad={3}
          />
        </span>
      )}
    </div>
  );
}
