export default function Section({
  id,
  className = "",
  children,
  ...rest
}) {
  return (
    <section
      id={id}
      className={["relative py-20 sm:py-24 lg:py-28 xl:py-32", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </section>
  );
}
