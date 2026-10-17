import { useState } from "react";

import { hero, profile } from "../data/portfolio";
import Badge from "./Badge";
import Button from "./Button";
import Container from "./Container";
import Reveal from "./Reveal";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";

const TECH_CHIPS = [
  { label: "React", dot: "bg-blue", position: "left-[-1.1rem] top-16", delay: "0s" },
  { label: "Vite", dot: "bg-purple", position: "right-[-1.4rem] top-1/3", delay: "1.2s" },
  { label: "Tailwind", dot: "bg-blue-light", position: "left-[-1.4rem] bottom-28", delay: "2.1s" },
];

/* Split the headline so the highlighted words get the gradient. */
const HAS_HIGHLIGHT =
  Boolean(hero.headingHighlight) && hero.heading.includes(hero.headingHighlight);
const HEADING_HIGHLIGHT = HAS_HIGHLIGHT ? hero.headingHighlight : "";
const [HEADING_BEFORE, HEADING_AFTER] = HAS_HIGHLIGHT
  ? hero.heading.split(HEADING_HIGHLIGHT)
  : [hero.heading, ""];

function FloatingChip({ label, dot, position, delay }) {
  return (
    <span
      style={{ animationDelay: delay }}
      className={`absolute hidden items-center gap-2 rounded-xl border border-border bg-surface-2/90 px-3 py-2 text-xs font-medium text-foreground shadow-card backdrop-blur animate-float sm:inline-flex ${position}`}
    >
      <span className={`size-2 rounded-full ${dot}`} />
      {label}
    </span>
  );
}

function AvatarPlaceholder({ initials }) {
  return (
    <div className="grid aspect-[4/5] w-full place-items-center bg-grid">
      <div className="relative grid size-40 place-items-center rounded-full border border-border-strong bg-surface-2/50 backdrop-blur-sm sm:size-44">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple/25 to-blue/25 blur-lg" />
        <span className="relative text-gradient text-5xl font-extrabold tracking-tight">
          {initials}
        </span>
        <span className="absolute -bottom-3 rounded-full border border-border bg-background/85 px-3 py-1 font-mono text-[10px] text-subtle backdrop-blur">
          add your photo
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  /* If the profile photo is missing, fall back to the initials placeholder. */
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden lg:flex lg:min-h-[calc(100svh-4.5rem)] lg:items-center"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(75%_65%_at_50%_0%,#000_35%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-32 size-80 rounded-full bg-purple/20 blur-[120px] animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 size-96 rounded-full bg-blue/15 blur-[130px] animate-pulse-glow"
      />

      <Container className="relative py-20 sm:py-24 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* ---------------- Left: copy ---------------- */}
          <div>
            <Reveal>
              <Badge
                tone="accent"
                className="gap-2 py-1.5 pl-2.5 pr-3.5 text-[13px]"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-purple opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-purple" />
                </span>
                {profile.title}
              </Badge>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-6 text-xl font-semibold tracking-tight sm:text-2xl">
                {hero.greeting ? `${hero.greeting} ` : ""}
                <span className="text-gradient">{profile.name}</span>
              </p>
              <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                {HEADING_BEFORE}
                {HEADING_HIGHLIGHT ? (
                  <span className="text-gradient">{HEADING_HIGHLIGHT}</span>
                ) : null}
                {HEADING_AFTER}
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button as="a" href="#projects" size="lg" className="group">
                  View My Projects
                  <ArrowRightIcon className="size-[1.15rem] transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button as="a" href="#contact" variant="secondary" size="lg">
                  Contact Me
                </Button>
                {profile.cv ? (
                  <Button
                    as="a"
                    href={profile.cv}
                    download
                    variant="secondary"
                    size="lg"
                  >
                    <DownloadIcon className="size-[1.15rem]" />
                    Download CV
                  </Button>
                ) : null}
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
                <div className="flex items-center gap-2.5">
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
                </div>

                <span aria-hidden="true" className="hidden h-6 w-px bg-border sm:block" />

                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <MailIcon className="size-4 text-purple-light" />
                  {profile.email}
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <MapPinIcon className="size-4 text-blue" />
                  {profile.location}
                </a>
              </div>
            </Reveal>
          </div>

          {/* ---------------- Right: profile ---------------- */}
          <Reveal
            delay={180}
            className="relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:justify-self-end"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-purple/25 via-transparent to-blue/25 blur-2xl"
              />

              <div className="relative rounded-[1.75rem] border border-border-strong bg-surface/80 p-3 shadow-card backdrop-blur">
                <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-surface-2 to-surface">
                  {profile.avatar && !photoFailed ? (
                    <img
                      src={profile.avatar}
                      alt={`Portrait of ${profile.name}`}
                      className="block h-auto w-full object-cover"
                      onError={() => setPhotoFailed(true)}
                    />
                  ) : (
                    <AvatarPlaceholder initials={profile.initials} />
                  )}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent"
                  />

                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">
                        {profile.name}
                      </p>
                      <p className="font-mono text-[11px] text-subtle">
                        {profile.shortTitle}
                      </p>
                    </div>
                    <span className="badge badge-blue shrink-0">
                      Open to junior roles
                    </span>
                  </div>
                </div>
              </div>

              {TECH_CHIPS.map((chip) => (
                <FloatingChip key={chip.label} {...chip} />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:inline-flex"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle transition-colors group-hover:text-muted">
          Scroll
        </span>
        <span className="grid size-8 place-items-center rounded-full border border-border text-subtle transition-colors group-hover:border-purple/60 group-hover:text-foreground">
          <ArrowDownIcon className="size-4 animate-float" />
        </span>
      </a>
    </section>
  );
}
