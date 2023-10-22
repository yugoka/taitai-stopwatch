"use client";
import Time from "./Time";
import StartStopButton from "./StartStopButton";
import { useStopWatch } from "@/hooks/useStopWatch";
import ResetButton from "./ResetButton";
import Checkbox from "./Checkbox";

export default function StopWatch() {
  const stopWatch = useStopWatch();

  const handleStartStop = () => {
    if (stopWatch.isRunning) {
      stopWatch.stop();
    } else {
      stopWatch.start();
    }
  };

  return (
    <div>
      <Time
        currentTime={stopWatch.formattedTime}
        isRunning={stopWatch.isRunning}
        onUpdate={stopWatch.update}
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
      <div
        className={`text-center text-sm mt-2 text-slate-dark transition-all ${
          stopWatch.isRunning ? "opacity-0" : "opacity-100"
        }`}
      >
        数字をクリックすると時間を編集できます
      </div>
    </div>
  );
}
