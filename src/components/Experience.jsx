import { experience } from "../data/portfolio";
import { getTechColor } from "../data/techColors";
import Card from "./Card";
import Container from "./Container";
import IconTile from "./IconTile";
import { BriefcaseIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

/* One role: badge + company + date, then title, summary, tech and bullets. */
function ExperienceCard({ entry }) {
  return (
    <Card hover className="p-6 lg:p-8">
      {/* Header: company on the left, dates on the right */}
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <div className="min-w-0">
          <span className="badge badge-accent">
            {entry.current ? "Current Role" : "Previous Role"}
          </span>
          <h3 className="mt-3 text-[1.375rem] font-semibold">{entry.company}</h3>
        </div>

        {entry.period ? (
          <time
            dateTime={entry.datetime || undefined}
            className="ml-auto shrink-0 rounded-lg border border-border bg-surface-2/60 px-3 py-1.5 font-mono text-[0.875rem] text-muted"
          >
            {entry.period}
          </time>
        ) : null}
      </div>

      {/* Body: job title, summary, tech, highlights */}
      <div className="mt-5 border-t border-border/60 pt-5">
        <h4 className="text-[1.125rem] font-semibold text-purple-light">
          {entry.role}
        </h4>

        {entry.summary ? (
          <p className="mt-3 text-[1rem] leading-relaxed text-muted">
            {entry.summary}
          </p>
        ) : null}

        {entry.tech?.length ? (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {entry.tech.map((tech) => (
              <li key={tech}>
                <span className="badge chip" style={{ "--chip": getTechColor(tech) }}>
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full"
                    style={{ backgroundColor: getTechColor(tech) }}
                  />
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        ) : null}

        {entry.highlights?.length ? (
          <ul className="mt-5 space-y-3">
            {entry.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-[1rem] leading-relaxed text-muted"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-purple"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Card>
  );
}

/* My Experience — one card per role, newest first. */
export default function Experience() {
  return (
    <Section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-border"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/3 size-72 rounded-full bg-purple/10 blur-[120px]"
      />

      <Container className="relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{experience.eyebrow}</p>

          <div className="mt-6 flex items-center gap-3">
            <IconTile tone="purple">
              <BriefcaseIcon className="size-5" />
            </IconTile>
            <h2 id="experience-heading" className="section-heading">
              My Experience
            </h2>
          </div>

          {experience.intro ? (
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted lg:text-[1.125rem]">
              {experience.intro}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-12 space-y-6">
          {experience.entries.map((entry, index) => (
            <Reveal key={`${entry.company}-${index}`} delay={index * 90}>
              <ExperienceCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
