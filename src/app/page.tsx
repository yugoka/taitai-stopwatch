"use client";

import React from "react";
import Time from "./components/Time";
import StartStopButton from "./components/StartStopButton";
import { useStopWatch } from "@/hooks/useStopWatch";
import ResetButton from "./components/ResetButton";

export default function Home() {
  const stopWatch = useStopWatch();

  const handleStartStop = () => {
    if (stopWatch.isRunning) {
      stopWatch.stop();
    } else {
      stopWatch.start();
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <Time currentTime={stopWatch.formattedTime} />
        <div className="flex justify-center mt-5">
          <StartStopButton
            isStarted={stopWatch.isRunning}
            onClick={handleStartStop}
          />
          <ResetButton onClick={stopWatch.reset} />
        </div>
      </div>
    </main>
  );
}
