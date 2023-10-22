import React from "react";
type Props = {
  digit: number;
  pad?: number;
  inputID: string;
  onChange: (inputDigit: number) => void;
  isRunning: boolean;
};

export default function TimeDigit({
  digit,
  inputID,
  pad = 2,
  onChange,
  isRunning,
}: Props) {
  const getDigitText = (digit: number): string => {
    return String(digit).padStart(pad, "0");
  };

  const input = React.useRef<HTMLInputElement>(null);
  const [inputDigit, setInputDigit] = React.useState<string>(
    getDigitText(digit)
  );
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  // あまりいい実装ではなさそう
  React.useEffect(() => {
    setInputDigit(getDigitText(digit));
  }, [digit]);

  const startEditMode = () => {
    if (!isRunning) {
      setIsEditMode(true);
      if (input.current) {
        input.current.focus();
      }
    }
  };

  const endEditMode = () => {
    setIsEditMode(false);

    const inputDigitInt = parseInt(inputDigit);
    if (inputDigit.match(/^\d*$/) && inputDigitInt >= 0) {
      onChange(inputDigitInt);
      setInputDigit(getDigitText(inputDigitInt));
    } else {
      setInputDigit(getDigitText(digit));
    }
  };

  return (
    <>
      <input
        id={inputID}
        ref={input}
        type="number"
        className={isEditMode ? `text-center` : `w-0 h-0 opacity-0`}
        style={{
          // マジックナンバー消したい。。
          width: `${isEditMode ? "max(17vw, 5.5rem)" : 0}`,
        }}
        value={inputDigit}
        onChange={(e) => setInputDigit(e.target.value)}
        onBlur={endEditMode}
        onKeyDown={(e) => e.key === "Enter" && endEditMode()}
      />

      {!isEditMode && (
        <a
          onClick={startEditMode}
          className={`${isRunning && "cursor-default"}`}
        >
          {inputDigit}
        </a>
      )}
    </>
  );
}
