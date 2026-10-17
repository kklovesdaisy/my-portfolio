import { skills } from "../data/portfolio";
import Badge from "./Badge";
import Card from "./Card";
import Container from "./Container";
import IconTile from "./IconTile";
import Reveal from "./Reveal";
import Section from "./Section";
import {
  BookOpenIcon,
  CheckIcon,
  CodeIcon,
  DatabaseIcon,
  SparklesIcon,
  ToolIcon,
} from "./Icons";

/* Maps the `icon` key in src/data/portfolio.js to a component. */
const CATEGORY_ICONS = {
  code: CodeIcon,
  book: BookOpenIcon,
  database: DatabaseIcon,
  tool: ToolIcon,
  spark: SparklesIcon,
};

const STATUS_TONES = { purple: "accent", blue: "blue" };

/* One technology chip with its brand-coloured dot. */
function TechChip({ item }) {
  return (
    <span className="badge chip" style={{ "--chip": item.color }}>
      <span
        aria-hidden="true"
        className="size-2 shrink-0 rounded-full"
        style={{ backgroundColor: item.color }}
      />
      {item.name}
    </span>
  );
}

function SkillCard({ category }) {
  const CategoryIcon = CATEGORY_ICONS[category.icon] ?? CodeIcon;

  return (
    <Card hover className="flex h-full flex-col p-7">
      <div className="flex items-start justify-between gap-3">
        <IconTile tone={category.tone}>
          <CategoryIcon className="size-5" />
        </IconTile>
        <Badge tone={STATUS_TONES[category.tone] ?? "accent"} className="shrink-0">
          {category.status}
        </Badge>
      </div>

      <h3 className="mt-5 text-lg font-semibold">{category.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{category.note}</p>

      <ul className="mt-5 flex flex-wrap gap-2.5">
        {category.items.map((item) => (
          <li key={item.name}>
            <TechChip item={item} />
          </li>
        ))}
      </ul>
    </Card>
  );
}

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
        <Reveal className="max-w-2xl">
          <p className="eyebrow">02 — Skills</p>
          <h2
            id="skills-heading"
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Technical Skills
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {skills.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skills.categories.map((category, index) => (
            <Reveal key={category.key} delay={index * 90}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-8 flex items-start gap-2 font-mono text-xs leading-relaxed text-subtle">
            <CheckIcon
              className="mt-px size-3.5 shrink-0 text-blue"
              aria-hidden="true"
            />
            {skills.disclaimer}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
