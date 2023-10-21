import { FormattedTime } from "../types/time";
import TimeDigit from "./TimeDigit";

type Props = {
  currentTime: FormattedTime;
};

export default function Time({ currentTime }: Props) {
  return (
    <div className="text-primary">
      <span className="text-time-lg-fixed md:text-time-lg transition-all duration-200 ease-in-out">
        <TimeDigit digit={currentTime.hours} />:
        <TimeDigit digit={currentTime.minutes} />:
        <TimeDigit digit={currentTime.seconds} />:
      </span>
      <span className="text-time-sm-fixed md:text-time-sm transition-all duration-200 ease-in-out">
        <TimeDigit digit={currentTime.ms} pad={3} />
      </span>
    </div>
  );
}
