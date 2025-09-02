export type ChipProps = {
  text: string;
  mode: "destructive" | "gradient";
  from?: string;
  to?: string;
};

export default function Chip({ text, mode, from, to }: ChipProps) {
  let modeProps = "bg-destructive";

  if (mode === "gradient") {
    modeProps = `bg-gradient-to-r from-accent1 to-accent1B`;
  }

  return (
    <div
      className={`text-sm ${modeProps} p-1 pl-5 pr-5 rounded-full font-bold text-background flex items-center justify-center`}
    >
      {text}
    </div>
  );
}
