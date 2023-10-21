type Props = {
  digit: number;
  pad?: number;
};

export default function TimeDigit({ digit, pad = 2 }: Props) {
  return <span>{String(digit).padStart(pad, "0")}</span>;
}
