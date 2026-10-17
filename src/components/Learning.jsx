import { learning } from "../data/portfolio";
import Badge from "./Badge";
import Card from "./Card";
import Container from "./Container";
import IconTile from "./IconTile";
import Reveal from "./Reveal";
import Section from "./Section";
import {
  BookOpenIcon,
  CodeIcon,
  CompassIcon,
  SparklesIcon,
  TargetIcon,
} from "./Icons";

/* Maps the `icon` key in src/data/portfolio.js to a component. */
const GROUP_ICONS = {
  spark: SparklesIcon,
  compass: CompassIcon,
  code: CodeIcon,
  book: BookOpenIcon,
  target: TargetIcon,
};

/* One item — a brand-tinted chip when it has a `color`, otherwise a
   plain accent badge (used for concepts, which have no brand colour). */
function LearningItem({ item }) {
  if (item.color) {
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

  return <Badge tone="accent">{item.name}</Badge>;
}

function LearningCard({ group }) {
  const GroupIcon = GROUP_ICONS[group.icon] ?? SparklesIcon;

  return (
    <Card hover className="flex h-full flex-col p-7">
      <IconTile tone={group.tone}>
        <GroupIcon className="size-5" />
      </IconTile>

      <h3 className="mt-5 text-lg font-semibold">{group.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{group.note}</p>

      <ul className="mt-5 flex flex-wrap gap-2.5">
        {group.items.map((item) => (
          <li key={item.name}>
            <LearningItem item={item} />
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function Learning() {
  return (
    <Section
      id="learning"
      aria-labelledby="learning-heading"
      className="border-t border-border"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 size-72 rounded-full bg-blue/10 blur-[120px]"
      />

      <Container className="relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">05 — Learning Journey</p>
          <h2
            id="learning-heading"
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Learning Journey
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {learning.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {learning.groups.map((group, index) => (
            <Reveal key={group.key} delay={index * 90}>
              <LearningCard group={group} />
            </Reveal>
          ))}
        </div>

        {learning.footnote ? (
          <Reveal delay={80}>
            <p className="mt-8 font-mono text-xs leading-relaxed text-subtle">
              {learning.footnote}
            </p>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
