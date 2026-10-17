import { about, education } from "../data/portfolio";
import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";
import Container from "./Container";
import Reveal from "./Reveal";
import Section from "./Section";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckIcon,
  CodeIcon,
  CompassIcon,
  GraduationCapIcon,
  MapPinIcon,
  SparklesIcon,
  TargetIcon,
} from "./Icons";
import IconTile from "./IconTile";

/* Icon used for each quick-fact row (keyed in src/data/portfolio.js). */
const FACT_ICONS = {
  pin: MapPinIcon,
  code: CodeIcon,
  book: BookOpenIcon,
  spark: SparklesIcon,
};

/* Reusable information card: icon, title, subtitle, free-form content. */
function InfoCard({ tone = "purple", icon, title, subtitle, children }) {
  return (
    <Card hover className="flex h-full flex-col p-7">
      <IconTile tone={tone}>{icon}</IconTile>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{subtitle}</p>
      <div className="mt-5 flex-1">{children}</div>
    </Card>
  );
}

export default function About() {
  const { education: educationCard, interests, goals } = about.cards;

  /* The card mirrors the first entry in `education.entries` so your academic
     details only need updating in one place. */
  const primaryEducation = education.entries?.[0];
  const educationRows = [
    { label: "Degree / programme", value: primaryEducation?.degree },
    { label: "Institution", value: primaryEducation?.institution },
    { label: "Graduation", value: primaryEducation?.graduation },
  ].filter((row) => Boolean(row.value));

  return (
    <Section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/4 size-72 rounded-full bg-purple/10 blur-[120px]"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          {/* ---------------- Narrative ---------------- */}
          <div>
            <Reveal>
              <p className="eyebrow">01 — About</p>
              <h2
                id="about-heading"
                className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                About Me
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-6 text-lg leading-relaxed text-foreground/90">
                {about.lead}
              </p>
            </Reveal>

            <div className="mt-5 space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal key={index} delay={140 + index * 60}>
                  <p className="text-base leading-relaxed text-muted">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Goal callout */}
            <Reveal delay={280}>
              <div className="mt-8 rounded-xl border border-purple/25 bg-purple/5 p-5 sm:p-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-purple-light">
                  <TargetIcon className="size-4" aria-hidden="true" />
                  My goal
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {about.goal}
                </p>
                <Button as="a" href="#contact" size="sm" className="group mt-5">
                  Let&apos;s talk
                  <ArrowRightIcon
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ---------------- Quick facts ---------------- */}
          <Reveal delay={160} className="lg:sticky lg:top-28 lg:self-start">
            <Card className="p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
                Quick facts
              </p>
              <dl className="mt-6 space-y-5">
                {about.facts.map((fact) => {
                  const FactIcon = FACT_ICONS[fact.icon] ?? SparklesIcon;
                  return (
                    <div
                      key={fact.label}
                      className="grid grid-cols-[auto_1fr] gap-x-4"
                    >
                      <div className="row-span-2">
                        <IconTile tone="blue">
                          <FactIcon className="size-5" />
                        </IconTile>
                      </div>
                      <dt className="min-w-0 text-xs uppercase tracking-wide text-muted">
                        {fact.label}
                      </dt>
                      <dd className="mt-0.5 min-w-0 text-sm font-medium text-foreground">
                        {fact.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </Card>
          </Reveal>
        </div>

        {/* ---------------- Information cards ---------------- */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Education */}
          <Reveal>
            <InfoCard
              tone="purple"
              icon={<GraduationCapIcon className="size-5" />}
              title={educationCard.title}
              subtitle={educationCard.subtitle}
            >
              <dl className="divide-y divide-border/60">
                {educationRows.map((item) => (
                  <div key={item.label} className="py-3 first:pt-0 last:pb-0">
                    <dt className="text-xs uppercase tracking-wide text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </InfoCard>
          </Reveal>

          {/* Interests */}
          <Reveal delay={90}>
            <InfoCard
              tone="blue"
              icon={<CompassIcon className="size-5" />}
              title={interests.title}
              subtitle={interests.subtitle}
            >
              <ul className="flex flex-wrap gap-2">
                {interests.tags.map((tag) => (
                  <li key={tag}>
                    <Badge tone="accent">{tag}</Badge>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </Reveal>

          {/* Career goals */}
          <Reveal delay={180}>
            <InfoCard
              tone="purple"
              icon={<TargetIcon className="size-5" />}
              title={goals.title}
              subtitle={goals.subtitle}
            >
              <ul className="space-y-3">
                {goals.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                  >
                    <CheckIcon
                      className="mt-0.5 size-4 shrink-0 text-blue"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {goals.tags.map((tag) => (
                  <Badge key={tag} tone="blue">
                    {tag}
                  </Badge>
                ))}
              </div>
            </InfoCard>
          </Reveal>
        </div>

      </Container>
    </Section>
  );
}
