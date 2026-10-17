const TONES = {
  default: "",
  accent: "badge-accent",
  blue: "badge-blue",
};

export default function Badge({ tone = "default", className = "", children, ...rest }) {
  return (
    <span
      className={["badge", TONES[tone] ?? "", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </span>
  );
}
