import { contact, profile } from "../data/portfolio";
import Badge from "./Badge";
import Button from "./Button";
import Container from "./Container";
import IconTile from "./IconTile";
import Reveal from "./Reveal";
import Section from "./Section";
import {
  ArrowRightIcon,
  GithubIcon,
  InfoIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "./Icons";

/* The contact links are built from `profile`, so they stay in sync with the
   rest of the site. LinkedIn is only included once you add a URL. */
const displayUrl = (url) =>
  typeof url === "string"
    ? url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "";

const CONTACT_LINKS = [
  ...(profile.phone
    ? [
        {
          key: "phone",
          label: "Phone",
          href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
          value: profile.phone,
          Icon: PhoneIcon,
          tone: "blue",
          external: false,
        },
      ]
    : []),
  {
    
    key: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    value: profile.email,
    Icon: MailIcon,
    tone: "purple",
    external: false,
  },
  {
    key: "github",
    label: "GitHub",
    href: profile.github,
    value: displayUrl(profile.github),
    Icon: GithubIcon,
    tone: "blue",
    external: true,
  },
  ...(profile.linkedin
    ? [
        {
          key: "linkedin",
          label: "LinkedIn",
          href: profile.linkedin,
          value: displayUrl(profile.linkedin),
          Icon: LinkedinIcon,
          tone: "purple",
          external: true,
        },
      ]
    : []),
];

export default function Contact() {
  return (
    <Section
      id="contact"
      aria-labelledby="contact-heading"
      className="overflow-hidden border-t border-border"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-purple/10 blur-[130px]"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---------------- Invitation ---------------- */}
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow">07 — Contact</p>
              <h2
                id="contact-heading"
                className="section-heading mt-6"
              >
                Let&apos;s Work Together
              </h2>
              <div className="mt-5">
                <Badge tone="blue">{contact.availability}</Badge>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  as="a"
                  href={`mailto:${profile.email}`}
                  size="lg"
                  className="group"
                >
                  <MailIcon className="size-[1.15rem]" />
                  Email me
                </Button>
                <Button
                  as="a"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  size="lg"
                >
                  <GithubIcon className="size-[1.15rem]" />
                  View GitHub
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ---------------- Contact details ---------------- */}
          <Reveal delay={120} className="min-w-0">
            <ul className="space-y-3">
              {CONTACT_LINKS.map(
                ({ key, label, href, value, Icon, tone, external }) => (
                  <li key={key}>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="group flex items-center gap-4 rounded-xl border border-border bg-surface/50 p-4 transition-colors duration-300 hover:border-purple/40 hover:bg-surface-2"
                    >
                      <IconTile tone={tone}>
                        <Icon className="size-5" />
                      </IconTile>
                      <span className="min-w-0">
                        <span className="block text-[0.875rem] uppercase tracking-wide text-muted">
                          {label}
                        </span>
                        <span className="block truncate text-[1rem] font-medium text-foreground">
                          {value}
                        </span>
                      </span>
                      <ArrowRightIcon className="ml-auto size-4 shrink-0 text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-light" />
                    </a>
                  </li>
                ),
              )}
            </ul>

            <p className="mt-4 flex items-start gap-2 rounded-lg border border-dashed border-border-strong bg-surface/50 p-3.5 text-[0.875rem] leading-relaxed text-subtle">
              <InfoIcon className="mt-0.5 size-4 shrink-0 text-blue" />
              This site has no contact form or backend — the email link above is
              the best way to reach me.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
