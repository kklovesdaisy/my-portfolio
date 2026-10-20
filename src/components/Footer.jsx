import { navItems, profile } from "../data/portfolio";
import Container from "./Container";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const TAGLINE =
  "Thank you for visiting my portfolio website. Let's connect on socials — or message me anytime.";

/* Site footer: brand, quick links, contact details, and a design credit. */
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
                <span className="text-[1.0625rem] font-semibold">{profile.name}</span>
              </span>
            </a>

            <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-muted">
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
                    className="text-[1rem] text-muted transition-colors duration-200 hover:text-foreground"
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
            <ul className="mt-4 space-y-2.5 text-[1rem]">
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
          <p className="text-[0.875rem] text-subtle">
            Designed with 🤍 by {profile.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
