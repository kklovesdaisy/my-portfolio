import { useEffect, useState } from "react";
import { navItems, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import Button from "./Button";
import Container from "./Container";
import {
  ArrowRightIcon,
  CloseIcon,
  GithubIcon,
  LinkedinIcon,
  MenuIcon,
} from "./Icons";

const SECTION_IDS = navItems.map((item) => item.href.replace("#", ""));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  /* Solidify the bar once the page scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the mobile menu with Escape */
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Auto-close the mobile menu when resizing up to desktop */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-border/80 bg-surface/85 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.75rem]">
        {/* Logo / name */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-purple to-blue-deep text-sm font-bold text-white shadow-glow-purple transition-transform duration-300 group-hover:scale-105"
          >
            {profile.initials}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[1.0625rem] font-semibold">{profile.name}</span>
          </span>
          <span className="sr-only">— back to top</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={[
                  "relative rounded-lg px-4 py-2 text-[1rem] font-medium transition-colors duration-200",
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                ].join(" ")}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={[
                    "absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-purple to-blue transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="GitHub profile"
          >
            <GithubIcon className="size-[1.05rem]" />
          </a>
          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="size-[1.05rem]" />
            </a>
          ) : null}
          <Button as="a" href="#contact" size="sm">
            Contact Me
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-xl border border-border bg-surface-2/60 text-foreground transition-colors hover:border-border-strong hover:bg-surface-3 lg:hidden"
        >
          {open ? (
            <CloseIcon className="size-5" />
          ) : (
            <MenuIcon className="size-5" />
          )}
        </button>
      </Container>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        inert={open ? undefined : true}
        className={[
          "overflow-hidden border-t bg-surface/95 backdrop-blur-xl transition-all duration-300 ease-out-expo lg:hidden",
          open
            ? "max-h-[36rem] border-border/80 opacity-100"
            : "max-h-0 border-transparent opacity-0",
        ].join(" ")}
      >
        <Container className="space-y-1.5 py-4">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive ? "location" : undefined}
                className={[
                  "flex items-center justify-between rounded-xl px-4 py-3 text-[1.0625rem] font-medium transition-colors duration-200",
                  isActive
                    ? "bg-surface-2 text-foreground"
                    : "text-muted hover:bg-surface-2/70 hover:text-foreground",
                ].join(" ")}
              >
                {item.label}
                <ArrowRightIcon
                  className={[
                    "size-4 transition-all duration-200",
                    isActive
                      ? "text-purple-light"
                      : "text-subtle group-hover:translate-x-0.5",
                  ].join(" ")}
                />
              </a>
            );
          })}

          <div className="flex items-center gap-2.5 pt-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label="GitHub profile"
            >
              <GithubIcon className="size-[1.05rem]" />
            </a>
            {profile.linkedin ? (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="size-[1.05rem]" />
              </a>
            ) : null}
            <Button
              as="a"
              href="#contact"
              onClick={closeMenu}
              size="sm"
              className="ml-auto"
            >
              Contact Me
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
