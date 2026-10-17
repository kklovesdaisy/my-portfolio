/**
 * ============================================================================
 *  PORTFOLIO CONFIGURATION
 *  Edit your personal information in THIS ONE FILE.
 * ============================================================================
 *
 *  Everything the website shows about you lives here, so you never have to
 *  touch a component file to personalise the portfolio.
 *
 *  HOW TO EDIT
 *  -----------
 *  1. Change any value below to your own details.
 *  2. Where noted, leave a value as "" (empty string) to hide that element.
 *     For example, `avatar`, `cv` and the project `image` / `repo` / `demo`.
 *     An empty `linkedin` hides every LinkedIn link on the site.
 *  3. Save — the site updates automatically (Vite hot-reloads while
 *     `npm run dev` is running).
 *
 *  WHAT LIVES WHERE
 *  ----------------
 *  profile     name, title, short intro, location, photo, CV, email + links
 *  navItems    the links in the top navigation bar
 *  hero        the greeting and headline at the top of the page
 *  about       the "About Me" text, quick facts and info cards
 *  skills      the "Technical Skills" categories
 *  education   the "Education" timeline entries
 *  projects    the "Featured Projects" cards
 *  contact     the "Contact" section copy
 *
 *  Brand colours for technology chips live in src/data/techColors.js.
 */

/* ============================================================================
   PROFILE  —  your identity and contact details
   ============================================================================ */

/** Your full name. Shown in the navbar, hero, footer and across the site. */
const fullName = "Htet Nandar Winn";

/** Builds "HN" from "Htet Nandar Winn" so the logo mark never goes stale. */
function deriveInitials(value) {
  const initials = String(value)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return initials || "HN";
}

export const profile = {
  /** Full name (see `fullName` above). */
  name: fullName,

  /** Logo mark, max 2–3 characters. Derived from your name automatically —
      replace with your own string (e.g. "HW") to override. */
  initials: deriveInitials(fullName),

  /** Professional title. Shown in the hero badge and the contact area. */
  title: "IT Student | Aspiring Web Developer",

  /** A short version of your title, shown under your name in the navbar. */
  shortTitle: "IT Student",

  /** Short introduction — the paragraph next to the headline in the hero.
      Keep it to 1–3 friendly sentences. */
  intro:
    "I'm an IT student developing my skills in web development and modern application technologies. I'm looking for an internship or junior developer opportunity to gain practical experience while working toward becoming a Full-Stack Developer.",

  /** Where you're based. Shown in the hero, the About section and the footer. */
  location: "Yangon, Myanmar",

  /** Profile photo. Place your image in public/images/ and reference it with a
      path that starts with "/", e.g. avatar: "/images/profile.jpg".
      If the file can't be loaded, the built-in initials placeholder is shown
      automatically, so there is never a broken image. */
  avatar: `${import.meta.env.BASE_URL}images/kk.jpg`,

  /** Your CV / résumé. Put the file in the /public folder and use a path that
      starts with "/", e.g. cv: "/cv.pdf".
      Left empty for now, so the "Download CV" button stays hidden. */
  cv: "", // e.g. "/cv.pdf"

  /** Email address. Powers every "email me" link. */
  email: "htetnandarwinn8@gmail.com",

  /** Phone number. Shown in the Contact section, above the email.
      Leave "" to hide it. */
  phone: "+959 752491443",

  /** Full GitHub profile URL. */
  github: "https://github.com/kklovesdaisy",

  /** Full LinkedIn profile URL.
      Not provided yet — leave "" and every LinkedIn link disappears
      automatically. Add the URL (e.g. "https://www.linkedin.com/in/you")
      once you have a profile. */
  linkedin: "",
};

/* ============================================================================
   NAVIGATION  —  the top navigation links
   `href` must match the `id` of a section (home, about, skills, education,
   projects, learning, contact). Reorder or remove items freely.
   The "Learning Journey" section sits between Projects and Contact but is
   intentionally kept out of the top navigation, so the menu stays to the six
   main links.
   ============================================================================ */
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ============================================================================
   HERO  —  the top of the page
   ============================================================================ */
export const hero = {
  /** Small line shown above the headline, e.g. "Hi, I'm <Your Name>". */
  greeting: "Hi, I'm",

  /** The big headline. */
  heading: "Building Digital Experiences Through Code",

  /** Words inside `heading` to paint with the gradient. Must match `heading`
      exactly. Set to "" for no gradient. */
  headingHighlight: "Digital Experiences",
};

/* ============================================================================
   ABOUT  —  the "About Me" section
   ============================================================================ */
export const about = {
  /** Lead sentence — the largest paragraph. */
  lead: "I'm an IT student learning web development and software engineering. I enjoy building useful, responsive, and user-friendly applications, and I'm developing my skills in both frontend and backend technologies. I'm looking for an internship or junior developer opportunity to gain practical experience, and I'm working toward becoming a full-stack developer.",

  /** Supporting paragraphs. Add or remove entries freely. */
  paragraphs: [
    "My main focus is front-end web development with HTML, CSS, JavaScript, React.js, and Tailwind CSS. I enjoy building interfaces and understanding how the different parts of a web application fit together.",
    "Alongside the front end, I'm learning backend development with PHP and Laravel and working with databases using MySQL, and I'm exploring Node.js, React Native, and C#. I'm also improving my programming, problem-solving, and software design skills, and I use Git and GitHub to manage my code.",
  ],

  /** Your goal — shown in a highlighted callout with a "Let's talk" button. */
  goal: "My goal is to begin my career as a Junior Web Developer and keep growing toward becoming a Full-Stack Developer.",

  /** Quick facts. `icon` is one of: "pin", "code", "book", "spark".
      Add or remove rows freely. */
  facts: [
    { icon: "pin", label: "Location", value: profile.location },
    { icon: "code", label: "Focus", value: "Web Development" },
    { icon: "book", label: "Currently", value: profile.shortTitle },
    { icon: "spark", label: "Availability", value: "Open to junior roles" },
  ],

  cards: {
    /* The Education card pulls its values straight from the first entry in
       `education.entries` below — edit your education in one place. */
    education: {
      title: "Education",
      subtitle: "My academic background.",
    },
    interests: {
      title: "Interests",
      subtitle: "What I enjoy exploring and building.",
      tags: [
        "Web Development",
        "React.js",
        "Tailwind CSS",
        "PHP & Laravel",
        "MySQL",
      ],
    },
    goals: {
      title: "Career Goals",
      subtitle: "Where I'm heading next.",
      points: [
        "Gain practical experience through an internship or junior developer role",
        "Grow into a Full-Stack Developer",
        "Keep learning modern web technologies",
      ],
      tags: ["Junior Web Developer", "Full-Stack Developer"],
    },
  },
};

/* ============================================================================
   SKILLS  —  the "Technical Skills" section
   No skill percentages and no expert-level claims. Each category is labelled
   honestly as "used in studies/projects", "learning", or "exploring".
   `color` is the brand colour of the little dot next to each technology.
   ============================================================================ */
export const skills = {
  intro:
    "The technologies I am learning and using in my studies and personal projects. This is a learning record rather than a rating — I am always growing in each of these.",

  /** Shown at the end of the section. */
  disclaimer:
    "Listed as learning and hands-on use — no skill percentages, no expert claims.",

  /* `icon` is one of: "code", "book", "database", "tool", "spark". */
  categories: [
    {
      key: "frontend",
      icon: "code",
      tone: "purple",
      title: "Frontend",
      status: "Using in my studies",
      note: "Front-end technologies I use to build interfaces.",
      items: [
        { name: "HTML & CSS", color: "#e34f26" },
        { name: "JavaScript", color: "#f7df1e" },
        { name: "React.js", color: "#61dafb" },
        { name: "Tailwind CSS", color: "#38bdf8" },
        { name: "React Native", color: "#61dafb" },
      ],
    },
    {
      key: "backend",
      icon: "book",
      tone: "blue",
      title: "Backend",
      status: "Learning",
      note: "Server-side development I am studying.",
      items: [
        { name: "PHP", color: "#777bb4" },
        { name: "Laravel", color: "#ff2d20" },
        { name: "Node.js", color: "#3c873a" },
      ],
    },
    {
      key: "database",
      icon: "database",
      tone: "purple",
      title: "Database",
      status: "Learning",
      note: "Storing and querying data.",
      items: [{ name: "MySQL", color: "#4479a1" }],
    },
    {
      key: "tools",
      icon: "tool",
      tone: "blue",
      title: "Tools & Other Technologies",
      status: "Everyday use",
      note: "Tracking changes, collaborating, and writing code.",
      items: [
        { name: "Git", color: "#f05032" },
        { name: "GitHub", color: "#ffffff" },
        { name: "C#", color: "#239120" },
      ],
    },
  ],
};

/* ============================================================================
   LEARNING JOURNEY  —  the "Learning Journey" section
   Technologies and software-development concepts you are currently learning.
   Each group has: key, icon ("spark" | "compass" | "code" | "book" | "target"),
   tone ("purple" accent | "blue"), title, note, and items.
   An item is `{ name, color }` (coloured chip) or `{ name }` (accent badge).
   ============================================================================ */
export const learning = {
  intro:
    "I'm continuously learning web development and software engineering, and I enjoy improving my programming, problem-solving, and software-design skills. Here is what I'm exploring right now.",

  groups: [
    {
      key: "technologies",
      icon: "spark",
      tone: "purple",
      title: "Technologies I'm exploring",
      note: "Languages and tools I'm learning outside my current coursework.",
      items: [
        { name: "Node.js", color: "#3c873a" },
        { name: "React Native", color: "#61dafb" },
        { name: "C#", color: "#239120" },
      ],
    },
    {
      key: "concepts",
      icon: "compass",
      tone: "blue",
      title: "Concepts I'm building",
      note: "Software-development ideas I'm practising as I learn.",
      items: [
        { name: "Domain-Driven Design (DDD)" },
        { name: "Software design" },
        { name: "Problem solving" },
      ],
    },
  ],

  footnote: "Learning step by step — no expert claims, just steady progress.",
};

/* ============================================================================
   EDUCATION  —  the "Education" timeline
   Replace or add entries as your studies progress.
   `coursework` and `certifications` only render when the arrays contain items,
   so clear them ([]) if you have none.
   ============================================================================ */
export const education = {
  intro: "My academic background.",

  entries: [
    {
      degree: "B.C.Sc (Computer Science)",
      institution: "University of Computer Studies, Meiktila, Myanmar",
      period: "2019 – 2026",
      graduation: "2026",
      location: "",
      description:
        "I studied Computer Science from 2019 to 2026, building foundations in programming, web development, and databases, with a growing interest in software development.",
      /* Optional campus photo shown across the top of the Education card. Drop
         a real photo at public/images/university.jpg and it appears
         automatically; if the file is missing, a neutral banner is used. */
      image: "/images/university.jpg",
      imageAlt: "University of Computer Studies, Meiktila campus",
      coursework: [],
      certifications: [],
    },
    // Add more entries like the one above for earlier study.
  ],

  footnote: "",
};

/* ============================================================================
   CONTACT  —  the "Contact" section
   The email / GitHub / LinkedIn links come from `profile` above. LinkedIn is
   hidden automatically while `profile.linkedin` is empty.
   There is no contact form and no backend on this site.
   ============================================================================ */
export const contact = {
  intro:
    "I am currently looking for a Junior Web Developer role. If you have an opportunity, a question, or just want to say hello, I would be glad to hear from you.",

  availability: "Open to Junior Web Developer roles",
};

/* ============================================================================
   PROJECTS  —  the "Featured Projects" cards
   Add, remove, or reorder the objects below and the section updates itself.
   No component changes are needed.
   ----------------------------------------------------------------------------
   Fields
     title        (string)  Project name.
     type         (string)  Short label shown under the title, e.g.
                            "Web application". "" hides it.
     description  (string)  One or two sentences about the project.
     tech         (array)   Technology names shown as chips ([] = none).
     architecture (string)  Architecture label, e.g.
                            "Domain-Driven Design (DDD)". "" hides it.
     image        (string)  Screenshot path in /public, e.g. "/projects/foo.png".
                            Leave "" to show the built-in placeholder.
     repo         (string)  GitHub URL. Leave "" to hide the Code button.
     demo         (string)  Live demo URL. Leave "" to hide the Live Demo button.
     isExample    (boolean) true shows an "Example" badge. Keep false for your
                            own projects.

   NOTE: Only the details you actually provide are shown — nothing here is
   invented. The Code / Live Demo buttons stay hidden until you paste a real
   URL into `repo` or `demo`.
   ============================================================================ */
export const projects = [
  {
    title: "MediaLibrary",
    type: "Web application",
    description:
      "A media library web application built with PHP and Laravel, using Domain-Driven Design (DDD) architecture to organize application logic into structured modules.",
    tech: ["PHP", "Laravel"],
    architecture: "Domain-Driven Design (DDD)",
    image: "",
    repo: "", // paste your GitHub URL here, e.g. "https://github.com/you/medialibrary"
    demo: "", // paste a live demo URL here, e.g. "https://medialibrary.example.com"
    isExample: false,
  },
  {
    title: "BloodConnect System",
    type: "Web application",
    description:
      "A blood donation system web application built with PHP and Laravel, using Domain-Driven Design (DDD) architecture to organize application logic into structured modules.",
    tech: ["PHP", "Laravel"],
    architecture: "Domain-Driven Design (DDD)",
    image: "",
    repo: "", // paste your GitHub URL here, e.g. "https://github.com/you/bloodconnect"
    demo: "", // paste a live demo URL here, e.g. "https://bloodconnect.example.com"
    isExample: false,
  },
];
