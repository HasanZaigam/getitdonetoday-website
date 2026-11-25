// All marketing copy and data for the landing page lives here.
// Placeholders in [BRACKETS] are intentional — see README "TODO before launch".

export const SITE_URL = "https://getitdonetoday.in";
export const APP_LOGIN_URL = "https://app.getitdonetoday.in/login";

export const site = {
  name: "GetItDoneToday",
  wordmark: "GetItDoneToday.in",
  title: "GetItDoneToday — The control plane for AI-powered engineering teams",
  description:
    "Plan, assign and ship engineering work with any AI model. Model-agnostic and bring-your-own-key, built for dev agencies and startups. Free during beta.",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Now live · Free during beta",
  title: "The control plane for AI-powered engineering teams.",
  subtitle:
    "Plan, assign and ship engineering work with any AI model. Your keys, your models, and one place to see what got done today.",
  primaryCta: { label: "Start free", href: APP_LOGIN_URL },
  secondaryCta: { label: "See how it works", href: "#how" },
  footnote: "Sign in with Google · Bring your own API keys · No credit card",
};

export type BoardCard = { title: string; model: string; who: string };
export type BoardColumn = { name: string; count: number; cards: BoardCard[] };

export const board = {
  workspace: "Workspace",
  project: "Client website rebuild",
  status: "Today · 4 of 6 done",
  columns: [
    {
      name: "To do",
      count: 2,
      cards: [
        { title: "Write tests for the auth flow", model: "Claude", who: "AK" },
        { title: "Draft release notes", model: "GPT", who: "RS" },
      ],
    },
    {
      name: "In progress",
      count: 2,
      cards: [
        { title: "Generate checkout API endpoints", model: "Gemini", who: "HZ" },
        { title: "Refactor dashboard components", model: "Claude", who: "NM" },
      ],
    },
    {
      name: "Done today",
      count: 4,
      cards: [
        { title: "Fix push notification bug", model: "GPT", who: "HZ" },
        { title: "Migrate users table to Postgres", model: "DeepSeek", who: "AK" },
      ],
    },
  ] satisfies BoardColumn[],
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
      title: "Plan and assign",
      body: "Break work into tasks, give them to people and AI, and track everything on one board.",
    },
    {
      title: "Ship today",
      body: "Review the output, mark it done, and see what the whole team finished by end of day.",
    },
  ] satisfies TextCard[],
};

export type FeatureIcon = "board" | "key" | "switch" | "eye" | "bell" | "login";
export type Feature = TextCard & { icon: FeatureIcon };

export const features = {
  eyebrow: "Features",
  title: "Everything your AI workflow was missing.",
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
      icon: "bell",
      title: "Instant notifications",
      body: "Get notified the moment a task moves, so nothing waits on a missed update.",
    },
    {
      icon: "login",
      title: "Sign in with Google",
      body: "One click to get your team in. No new passwords to manage.",
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
    },
    {
      name: "Team",
      price: "[YOUR PRICE]",
      period: "/ month",
      description: "For agencies and growing teams. Coming after beta.",
      cta: { label: "Join the beta", href: APP_LOGIN_URL },
      highlighted: false,
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
      a: "[YOUR ANSWER — explain how keys are stored and encrypted.]",
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
