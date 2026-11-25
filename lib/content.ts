// All marketing copy and data for the landing page lives here.
// Placeholders in [BRACKETS] are intentional — see README "TODO before launch".

export const SITE_URL = "https://getitdonetoday.in";
export const APP_LOGIN_URL = "https://app.getitdonetoday.in/login";

export const site = {
  name: "GetItDoneToday",
  wordmark: "GetItDoneToday",
  title: "GetItDoneToday — The AI task board for dev agencies and startups",
  description:
    "Give engineering tasks to any AI model with your own API keys, connect GitHub, and follow every task to a merged pull request. Built for dev agencies and startups. Free during beta.",
};

export type NavLink = { label: string; href: string };

// "/#…" so the links also work from /privacy and /terms.
export const navLinks: NavLink[] = [
  { label: "Product tour", href: "/#tour" },
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

// Confirmed wording for how API keys are stored. Used in the BYOK feature strip,
// the FAQ and the privacy policy, so they can never disagree.
export const KEY_STORAGE =
  "Your API keys are encrypted at rest with AES-256-GCM and only decrypted to call the provider you chose.";

export const GITHUB_SUMMARY =
  "Connect a repo once. Each task gets its own branch, opens a pull request, and shows as merged when you merge it.";

export const hero = {
  badge: "Now live · Free during beta",
  title: "Ship client work with AI. See exactly what got done.",
  subtitle:
    "GetItDoneToday is the AI task board for dev agencies and startups. Give tasks to any model with your own API keys, and follow each one from branch to merged pull request.",
  primaryCta: { label: "Start free", href: APP_LOGIN_URL },
  footnote: "Sign in with Google or email · Bring your own API keys · No credit card",
};

export type BoardCard = { title: string; model: string; who: string };
export type BoardColumn = { name: string; done?: boolean; cards: BoardCard[] };

// Column counts and the "X of Y done" chip are computed from these cards in Hero.tsx,
// so they always agree with what is shown.
export const board = {
  workspace: "Workspace",
  project: "Client website rebuild",
  columns: [
    {
      name: "To do",
      cards: [
        { title: "Write tests for the auth flow", model: "Claude", who: "AK" },
        { title: "Draft release notes", model: "GPT", who: "RS" },
      ],
    },
    {
      name: "In progress",
      cards: [
        { title: "Generate checkout API endpoints", model: "Gemini", who: "HZ" },
        { title: "Refactor dashboard components", model: "Claude", who: "NM" },
      ],
    },
    {
      name: "Done today",
      done: true,
      cards: [
        { title: "Fix push notification bug", model: "GPT", who: "HZ" },
        { title: "Migrate users table to Postgres", model: "DeepSeek", who: "AK" },
      ],
    },
  ] satisfies BoardColumn[],
};

const VIDEO_CDN =
  "https://cdn.jsdelivr.net/gh/HasanZaigam/getitdonetoday-website@8f8aaf8/public/video";

// Title and subtitle are taken from the video's own opening card.
export const videoTour = {
  eyebrow: "Product tour",
  title: "Your first 10 minutes, in 2:21.",
  subtitle:
    "A quick tour of every screen, for first-time users: sign up, connect GitHub, create a project and start your first task.",
  // Served from jsDelivr (mirrors the public GitHub repo), pinned to the commit that
  // added the file. The same file also lives in public/video/. To serve it from this
  // site instead, use "/video/GetItDoneToday-Walkthrough-Voiced.mp4".
  // The poster is drawn in HTML (VideoTour.tsx) so it uses the site's own logo mark.
  src: `${VIDEO_CDN}/GetItDoneToday-Walkthrough-Voiced.mp4`,
  duration: "2:21",
  durationLabel: "2 minutes 21 seconds",
  posterKicker: "Product tour",
  posterTitle: "Your first 10 minutes",
  heroCta: "Watch the tour · 2:21",
};

export const modelStrip = {
  label: "Model-agnostic. Works with your keys from",
  providers: ["OpenAI", "Anthropic", "Google Gemini", "Mistral", "DeepSeek"],
};

export type TextCard = { title: string; body: string };

export const problem = {
  title: "AI made your team faster. It also made the work harder to see.",
  cards: [
    {
      title: "Prompts everywhere",
      body: "Every developer has their own chats, prompts and keys. Nothing is shared or reused.",
    },
    {
      title: "No visibility",
      body: "Leads can't tell what the AI did, which model did it, or whether it actually shipped.",
    },
    {
      title: "Inconsistent output",
      body: "Same task, different person, different result. Quality depends on who asked.",
    },
  ] satisfies TextCard[],
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "From task to done, in one place.",
  steps: [
    {
      title: "Connect your models",
      body: "Add your own API keys for the providers you use. Nothing is locked to one vendor.",
    },
    {
      title: "Connect GitHub",
      body: "Link a repository once. Every task gets its own branch and pull request.",
    },
    {
      title: "Plan and assign",
      body: "Break work into tasks, give them to people and AI, and track everything on one board.",
    },
    {
      title: "Ship today",
      body: "Review what changed, merge the pull request, and see what the whole team finished by end of day.",
    },
  ] satisfies TextCard[],
};

export type FeatureIcon = "board" | "key" | "switch" | "eye" | "review" | "checks" | "github";
export type Feature = TextCard & { icon: FeatureIcon; note?: string };

export const features = {
  eyebrow: "Features",
  title: "Everything your AI workflow was missing.",
  highlight: {
    icon: "github" as FeatureIcon,
    title: "GitHub built in",
    body: GITHUB_SUMMARY,
    // Real product screenshot (cropped from the product tour). To swap it, replace
    // the file in public/images/ and update width, height and alt here.
    screenshot: {
      src: "/images/task-review-screenshot.jpg",
      width: 1600,
      height: 598,
      alt: "A finished task in GetItDoneToday: the files that changed, passing tests and build, an approved independent review, and a View Pull Request button.",
    },
  },
  items: [
    {
      icon: "board",
      title: "One board for people and AI",
      body: "Plan tasks, assign them to teammates or models, and follow every step to done.",
    },
    {
      icon: "key",
      title: "Bring your own key",
      body: "Use your own API keys. You stay in control of providers and costs.",
      note: KEY_STORAGE,
    },
    {
      icon: "switch",
      title: "Any model, no lock-in",
      body: "Switch models per task. Use the best one for the job, not the one you are stuck with.",
    },
    {
      icon: "eye",
      title: "Team visibility",
      body: "See who did what, with which model, and what shipped today, at a glance.",
    },
    {
      icon: "review",
      title: "Independent AI review",
      body: "A second AI reviews every change before the pull request is opened, so you start from a checked diff.",
    },
    {
      icon: "checks",
      title: "Runs your checks",
      body: "It runs your validation commands, like tests and builds, and fixes its own failures before you review.",
    },
  ] satisfies Feature[],
};

export const audience = {
  title: "Built for teams that ship for others.",
  cards: [
    {
      title: "Dev agencies",
      body: "Run AI-assisted work across many client projects and see exactly what shipped for each one.",
    },
    {
      title: "Startups",
      body: "Give a small team the output of a bigger one, without losing track of quality.",
    },
  ] satisfies TextCard[],
};

export const testimonial = {
  label: "Built on real client work",
  quote: "“[ADD A CUSTOMER QUOTE — one line on what changed after using GetItDoneToday.]”",
  attribution: "[NAME], [ROLE, COMPANY]",
};

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: { label: string; href: string };
  highlighted: boolean;
  badge: string;
};

export const pricing = {
  eyebrow: "Pricing",
  title: "Free while we're in beta.",
  plans: [
    {
      name: "Beta",
      price: "₹0",
      period: "/ during beta",
      description: "Full access to every feature. Bring your own API keys.",
      cta: { label: "Start free", href: APP_LOGIN_URL },
      highlighted: true,
      badge: "Live now",
    },
    {
      name: "Team",
      price: "[YOUR PRICE]",
      period: "/ month",
      description: "For agencies and growing teams. Coming after beta.",
      cta: { label: "Join the beta", href: APP_LOGIN_URL },
      highlighted: false,
      badge: "After beta",
    },
  ] satisfies Plan[],
};

export const faq = {
  title: "Questions",
  items: [
    {
      q: "Which AI models can I use?",
      a: "Any provider you have an API key for. You bring your own key, so you are never locked to one vendor.",
    },
    {
      q: "How are my API keys stored?",
      a: KEY_STORAGE,
    },
    {
      q: "Is it really free?",
      a: "Yes. Everything is free while GetItDoneToday is in beta.",
    },
    {
      q: "Who is it for?",
      a: "Dev agencies and startups whose engineers already use AI and want one place to plan, track and ship that work.",
    },
    {
      q: "How do I get started?",
      a: "Sign in with Google or email, add your first API key, and create a project. It takes a few minutes.",
    },
  ],
};

export const finalCta = {
  title: "Get it done. Today.",
  body: "Set up your workspace in minutes and bring your first project onto one board.",
  cta: { label: "Start free", href: APP_LOGIN_URL },
};

export const footer = {
  copyright: "© 2026 GetItDoneToday · getitdonetoday.in",
  links: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Sign in", href: APP_LOGIN_URL },
  ] satisfies NavLink[],
};
