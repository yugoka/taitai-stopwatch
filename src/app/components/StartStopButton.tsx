type Props = {
  isStarted: boolean;
  onClick: () => void;
};

export default function StartStopButton({ isStarted, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`mx-2 md:mx-3 border ${
        isStarted
          ? "bg-secondary hover:bg-secondary-dark-1"
          : "bg-white hover:bg-slate"
      } 
      ${isStarted ? "text-white" : "text-secondary"} 
      font-bold py-1 px-1.5 md:py-2 md:px-4 text-sm md:text-base rounded transition-all ease-in-out  border-secondary
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="inline w-4 h-4 me-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {isStarted ? "ストップ" : "スタート"}
    </button>
  );
}
