export default function Card({
  as: Tag = "div",
  hover = false,
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      className={["card", hover ? "card-hover" : "", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
