/**
 * Site-wide copy and URLs. Edit here (used by landing + privacy pages).
 * Logo file: public/oldtabber-logo.png
 */
export const SITE = {
  name: "OldTabber",
  tagline: "Chrome extension",
  chromeStoreUrl: "https://chrome.google.com/webstore/detail/oldtabber",
  githubUrl: "https://github.com/yourusername/oldtabber",
  privacyUrl: "/privacy",
  defaultDocumentTitle: "OldTabber — See which tabs you’ve forgotten",
  screenshots: {
    hero: null,
    demo: null,
  },
  headlines: {
    hero: "See which tabs you’ve forgotten.",
    kicker: "Most tabs don’t get closed. They get forgotten.",
    subhead:
      "OldTabber quietly shows which tabs you left behind, so you can revisit what matters and close what doesn’t.",
    finalCta: "Ready to see what you’ve been ignoring?",
    finalSub:
      "Install once. Everything stays on your device—no account, no server.",
  },
  benefits: [
    {
      title: "Less clutter, no forced cleanup",
      body: "Nothing closes for you. You decide—just with better information.",
    },
    {
      title: "See what matters at a glance",
      body: "Aging lives in the tab title, where you already look.",
    },
    {
      title: "Make “later” visible",
      body: "Turn vague intentions into something you can actually see.",
    },
    {
      title: "Stay focused, keep context",
      body: "Leave tabs open without pretending you’ll remember all of them.",
    },
  ],
  steps: [
    {
      title: "Open tabs like normal",
      body: "Browse the way you already do.",
    },
    {
      title: "Quiet local tracking",
      body: "OldTabber notes inactivity in your browser—nothing leaves your machine.",
    },
    {
      title: "Aging you can act on",
      body: "Indicators help you revisit, act, or close with confidence.",
    },
  ],
  modes: [
    {
      id: "balanced",
      label: "Balanced",
      description: "Default pacing for everyday browsing.",
      thresholds: ["30 minutes", "2 hours", "1 day", "3 days"],
    },
    {
      id: "focus",
      label: "Focus",
      description: "Tabs age faster when you want a tighter loop.",
      thresholds: ["10 minutes", "30 minutes", "2 hours", "8 hours"],
    },
    {
      id: "chill",
      label: "Chill",
      description: "Slower decay when you keep long-lived reference tabs.",
      thresholds: ["1 hour", "6 hours", "2 days", "7 days"],
    },
  ],
  states: {
    minimal: [
      { symbol: "·", label: "Fresh", hint: "Recently active" },
      { symbol: "○", label: "Waiting", hint: "Left behind" },
      { symbol: "●", label: "Urgent", hint: "Needs attention" },
      { symbol: "✖", label: "Dead", hint: "Likely forgotten" },
    ],
    expressive: [
      { symbol: "🥚", label: "Fresh", hint: "Recently active" },
      { symbol: "⏳", label: "Waiting", hint: "Left behind" },
      { symbol: "🔥", label: "Urgent", hint: "Needs attention" },
      { symbol: "☠️", label: "Dead", hint: "Likely forgotten" },
    ],
  },
  privacy: {
    title: "Designed for privacy",
    body: "OldTabber is local-first. No server. No account. No syncing required. Tab activity stays in your browser and is used only to show aging indicators.",
  },
};
