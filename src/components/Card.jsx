export default function Card({
  as: Tag = "div",
  hover = false,
  shade = false,
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      className={["card", hover ? "card-hover" : "", shade ? "card-shade" : "", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
