const VARIANTS = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

const SIZES = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const classes = [
    "btn",
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const typeProps = Tag === "button" ? { type: rest.type ?? "button" } : {};

  return (
    <Tag className={classes} {...typeProps} {...rest}>
      {children}
    </Tag>
  );
}
