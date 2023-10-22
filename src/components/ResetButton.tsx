type Props = {
  onClick: () => void;
};

export default function ResetButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`mx-2 md:mx-3 border bg-secondary border-secondary hover:bg-secondary-dark-1 active:bg-secondary-dark-2 text-white font-bold py-1 px-1.5 md:py-2 md:px-4 text-sm md:text-base rounded transition-all ease-in-out`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="inline w-4 h-4 me-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
      リセット
    </button>
  );
}
