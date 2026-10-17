const TONES = {
  purple: "border-purple/30 bg-purple/10 text-purple-light",
  blue: "border-blue/30 bg-blue/10 text-blue-light",
};

/* Small rounded icon holder used by section cards and quick facts. */
export default function IconTile({
  tone = "purple",
  className = "",
  children,
}) {
  return (
    <span
      aria-hidden="true"
      className={[
        "grid size-11 shrink-0 place-items-center rounded-xl border",
        TONES[tone] ?? TONES.purple,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
