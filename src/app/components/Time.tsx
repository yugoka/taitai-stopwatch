export default function Time() {
  return (
    <div className="text-time-color">
      <span className="text-time-size-lg-fixed md:text-time-size-lg transition-all duration-200 ease-in-out">
        00:00:00.
      </span>
      <span className="text-time-size-sm-fixed md:text-time-size-sm transition-all duration-200 ease-in-out">
        000
      </span>
    </div>
  );
}
