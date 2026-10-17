import { navItems, profile } from "../data/portfolio";
import Container from "./Container";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const TAGLINE =
  "IT student and aspiring web developer, focused on building modern, accessible interfaces.";

const CURRENT_YEAR = new Date().getFullYear();

/* Site footer: brand, quick links, contact details, and a
   dynamic copyright year. */
export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand + socials */}
          <div>
            <a href="#home" className="group inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-purple to-blue-deep text-sm font-bold text-white shadow-glow-purple transition-transform duration-300 group-hover:scale-105"
              >
                {profile.initials}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">{profile.name}</span>
                <span className="font-mono text-[11px] text-subtle">
                  {profile.title}
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {TAGLINE}
            </p>

            <ul className="mt-5 flex items-center gap-2.5">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                  aria-label="GitHub profile"
                >
                  <GithubIcon className="size-[1.05rem]" />
                </a>
              </li>
              {profile.linkedin ? (
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedinIcon className="size-[1.05rem]" />
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="icon-btn"
                  aria-label="Email me"
                >
                  <MailIcon className="size-[1.05rem]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="lg:justify-self-center">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:justify-self-end">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {profile.phone ? (
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                    className="text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {profile.phone}
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {profile.email}
                </a>
              </li>
              <li className="text-muted">{profile.location}</li>
              <li>
                <a
                  href="#contact"
                  className="text-muted transition-colors duration-200 hover:text-foreground"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">
            © {CURRENT_YEAR} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-subtle">
            Built with React · Vite · Tailwind CSS v4
          </p>
        </div>
      </Container>
    </footer>
  );
}
