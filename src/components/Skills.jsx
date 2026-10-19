import { skills } from "../data/portfolio";
import { getTechColor } from "../data/techColors";
import Card from "./Card";
import Container from "./Container";
import IconTile from "./IconTile";
import { CheckIcon, CodeIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";
import TechIcon from "./TechIcons";

/* One technology card: brand logo above the skill name. */
function SkillTile({ item }) {
  return (
    <Card
      hover
      className="group flex aspect-square flex-col items-center justify-center gap-3 p-3 text-center sm:p-4"
    >
      <TechIcon
        slug={item.icon}
        className="size-8 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:scale-110 sm:size-9"
        style={{ color: getTechColor(item.name) }}
      />
      <span className="text-xs font-semibold text-muted transition-colors duration-300 group-hover:text-foreground sm:text-sm">
        {item.name}
      </span>
    </Card>
  );
}

/* Skills & Abilities — one unified, responsive grid of skill cards. */
export default function Skills() {
  return (
    <Section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/3 size-72 rounded-full bg-blue/10 blur-[120px]"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{skills.eyebrow}</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <IconTile tone="purple">
              <CodeIcon className="size-5" />
            </IconTile>
            <h2
              id="skills-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {skills.heading}
            </h2>
          </div>

          <p className="mt-5 text-base leading-relaxed text-muted">
            {skills.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
          {skills.items.map((item, index) => (
            <Reveal key={item.name} delay={(index % 7) * 60}>
              <SkillTile item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 font-mono text-xs leading-relaxed text-subtle">
            <CheckIcon className="size-3.5 shrink-0 text-blue" aria-hidden="true" />
            {skills.footnote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
