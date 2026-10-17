import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

/* Floating button that scrolls back to the top. Appears after the
   user scrolls down, and respects prefers-reduced-motion. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });

    // Keep keyboard focus valid once the button hides itself.
    const main = document.getElementById("main");
    if (main) main.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      aria-hidden={visible ? undefined : true}
      tabIndex={visible ? 0 : -1}
      className={[
        "fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full border border-border-strong bg-surface-2/90 text-foreground shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-purple/60 hover:text-purple-light",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      ].join(" ")}
    >
      <ArrowUpIcon className="size-5" />
    </button>
  );
}
