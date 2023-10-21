"use client";

import React from "react";
import Time from "./components/Time";
import StartStopButton from "./components/StartStopButton";
import { useStopWatch } from "@/hooks/useStopWatch";
import ResetButton from "./components/ResetButton";
import Checkbox from "./components/Checkbox";

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
        <Time
          currentTime={stopWatch.formattedTime}
          isRunning={stopWatch.isRunning}
        />
        <div className="flex justify-center mt-4">
          <StartStopButton
            isStarted={stopWatch.isRunning}
            onClick={handleStartStop}
          />
          <ResetButton onClick={stopWatch.reset} />
        </div>
        <div className="flex justify-center mt-3">
          <Checkbox
            onChange={(checked) => stopWatch.setShowHours(checked)}
            checked={stopWatch.showHours}
            label="1時間単位まで表示"
          />
          <Checkbox
            onChange={(checked) => stopWatch.setShowMilliseconds(checked)}
            checked={stopWatch.showMilliseconds}
            label="ミリ秒を表示"
          />
        </div>
      </div>
    </main>
  );
}
