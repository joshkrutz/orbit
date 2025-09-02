export type SeparatorProps = {
  orientation: "vertical" | "horizontal";
};
export default function Separator() {
  return (
    <div className="w-[2px] max-h-full bg-background-accent rounded-full h-5"></div>
  );
}
