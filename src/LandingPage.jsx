import { useId, useState } from "react";

/**
 * Edit marketing copy and URLs here.
 * Logo: place PNG at public/oldtabber-logo.png (see index.html favicon).
 * Optional real screenshots: swap paths in OPTIONAL_SCREENSHOTS (used as commented examples).
 */
export const SITE = {
  name: "OldTabber",
  tagline: "Chrome extension",
  chromeStoreUrl: "https://chrome.google.com/webstore/detail/oldtabber",
  githubUrl: "https://github.com/yourusername/oldtabber",
  privacyUrl: "/privacy",
  /** Optional: drop hero or feature PNGs into public/ and set paths, e.g. "/screenshots/hero-tabs.png" */
  screenshots: {
    hero: null, // e.g. "/screenshots/hero-tabs.png"
    demo: null, // e.g. "/screenshots/styles-demo.png"
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

function LogoMark({ className = "h-10 w-10" }) {
  return (
    <img
      src="/oldtabber-logo.png"
      alt=""
      width={160}
      height={160}
      className={`shrink-0 rounded-lg object-contain ${className}`}
      decoding="async"
    />
  );
}

function SkipLink() {
  return (
    <a href="#main" className="skip-link">
      Skip to content
    </a>
  );
}

function TrafficLights() {
  return (
    <div className="flex gap-1.5 pl-1" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

function TabChip({ active, faded, children, title }) {
  return (
    <div
      className={[
        "flex min-w-0 max-w-[140px] items-center gap-1.5 rounded-t-md border border-b-0 px-2 py-1.5 text-[11px] sm:max-w-[180px] sm:text-xs",
        active
          ? "border-surface-border bg-surface-raised text-ink"
          : "border-transparent bg-black/25 text-ink-muted",
        faded ? "opacity-60" : "",
      ].join(" ")}
      title={title}
    >
      {children}
    </div>
  );
}

function HeroBrowserMockup({ style }) {
  const minimal = style === "minimal";
  const tabs = [
    { title: "Inbox — Acme", ind: minimal ? "·" : "🥚", active: true, faded: false },
    { title: "Spec / Q2", ind: minimal ? "○" : "⏳", active: false, faded: false },
    { title: "Article — Long read…", ind: minimal ? "●" : "🔥", active: false, faded: false },
    { title: "localhost:3000", ind: minimal ? "✖" : "☠️", active: false, faded: true },
  ];
  return (
    <div
      className="overflow-hidden rounded-xl border border-surface-border bg-mock-outer shadow-card"
      role="img"
      aria-label="Mock browser window showing tab titles with aging indicators"
    >
      <div className="flex items-center gap-3 border-b border-surface-border bg-mock-bar px-3 py-2">
        <TrafficLights />
        <div className="flex-1 rounded-md border border-surface-border bg-mock-url px-3 py-1 text-center text-[11px] text-ink-faint">
          oldtabber.local
        </div>
      </div>
      <div className="flex items-end gap-0.5 border-b border-surface-border bg-mock-well px-2 pt-2">
        {tabs.map((t) => (
          <TabChip key={t.title} active={t.active} faded={t.faded} title={t.title}>
            <span
              className="shrink-0 font-medium tabular-nums text-accent"
              aria-hidden="true"
            >
              {t.ind}
            </span>
            <span className="truncate text-ink-muted">{t.title}</span>
          </TabChip>
        ))}
      </div>
      <div className="h-32 bg-gradient-to-b from-mock-content to-surface sm:h-40">
        <div className="p-4 text-[11px] leading-relaxed text-ink-faint sm:text-xs">
          <p className="text-ink-muted">Page content</p>
          <p className="mt-2 max-w-md">
            Indicators prepend to the tab title—minimal symbols or expressive
            emoji—so aging is visible without opening anything.
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-warmth">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}

function PrimaryCta({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {children}
    </a>
  );
}

function SecondaryCta({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-lg border border-surface-border bg-surface-raised px-5 py-2.5 text-sm font-medium text-cream transition hover:border-ink-faint hover:bg-surface"
    >
      {children}
    </a>
  );
}

function SettingsPanelMock({ activeModeId }) {
  const mode = SITE.modes.find((m) => m.id === activeModeId) ?? SITE.modes[0];
  return (
    <div
      className="rounded-xl border border-surface-border bg-mock-bar p-4 shadow-soft sm:p-5"
      aria-label="Extension settings preview (illustrative)"
    >
      <div className="flex items-center justify-between gap-3 border-b border-surface-border pb-4">
        <div className="flex items-center gap-2">
          <LogoMark className="h-8 w-8" />
          <span className="font-semibold text-cream">{SITE.name}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span>On</span>
          <span
            className="relative inline-flex h-5 w-9 items-center rounded-full bg-accent"
            aria-hidden="true"
          >
            <span className="ml-4 block h-4 w-4 rounded-full bg-brand-black" />
          </span>
        </div>
      </div>
      <p className="mt-4 text-xs text-ink-muted">
        Choose how quickly tabs start to feel forgotten.
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {SITE.modes.map((m) => (
          <span
            key={m.id}
            className={[
              "rounded-md border px-2.5 py-1 text-xs font-medium",
              m.id === activeModeId
                ? "border-accent text-accent"
                : "border-surface-border text-ink-muted",
            ].join(" ")}
          >
            {m.label}
          </span>
        ))}
      </div>
      <p className="mt-5 text-xs text-ink-muted">Indicator style</p>
      <div className="mt-2 flex gap-2">
        <span className="rounded-md border border-accent px-2.5 py-1 text-xs font-medium text-accent">
          Minimal
        </span>
        <span className="rounded-md border border-surface-border px-2.5 py-1 text-xs text-ink-muted">
          Expressive
        </span>
      </div>
      <div className="mt-5 space-y-2 border-t border-surface-border pt-4">
        <p className="text-xs font-medium text-ink-muted">
          Thresholds — {mode.label}
        </p>
        <ul className="grid gap-2 text-xs text-ink-muted sm:grid-cols-2">
          {mode.thresholds.map((t, i) => (
            <li
              key={t}
              className="flex items-center justify-between rounded-md border border-surface-border bg-black/20 px-2 py-1.5"
            >
              <span className="text-ink-faint">Level {i + 1}</span>
              <span className="text-cream">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [demoStyle, setDemoStyle] = useState("minimal");
  const [panelMode, setPanelMode] = useState("balanced");
  const styleGroupId = useId();

  const nav = [
    { href: "#demo", label: "Demo" },
    { href: "#why", label: "Why" },
    { href: "#how", label: "How it works" },
    { href: "#modes", label: "Modes" },
    { href: "#privacy", label: "Privacy" },
  ];

  const states =
    demoStyle === "minimal" ? SITE.states.minimal : SITE.states.expressive;

  return (
    <div className="min-h-screen bg-surface">
      <SkipLink />

      <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            <LogoMark className="h-9 w-9" />
            <div className="leading-tight">
              <span className="block text-sm font-semibold text-cream">
                {SITE.name}
              </span>
              <span className="block text-xs text-ink-faint">{SITE.tagline}</span>
            </div>
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Page">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-muted transition hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <PrimaryCta href={SITE.chromeStoreUrl}>Add to Chrome</PrimaryCta>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="border-b border-surface-border px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-sm font-medium text-warmth">{SITE.headlines.kicker}</p>
              <div className="mt-6 flex items-start gap-4">
                <LogoMark className="hidden h-14 w-14 sm:block" />
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight text-cream sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                    {SITE.headlines.hero}
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                    {SITE.headlines.subhead}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PrimaryCta href={SITE.chromeStoreUrl}>Add to Chrome</PrimaryCta>
                <SecondaryCta href="#demo">See how it works</SecondaryCta>
              </div>
              <p className="mt-6 text-sm text-ink-faint">
                Reduce tab clutter without forcing cleanup.
              </p>
            </div>
            <div className="relative overflow-x-auto">
              {SITE.screenshots.hero ? (
                <img
                  src={SITE.screenshots.hero}
                  alt="OldTabber in the browser tab bar"
                  className="w-full rounded-xl border border-surface-border shadow-card"
                />
              ) : (
                <HeroBrowserMockup style="minimal" />
              )}
              <p className="mt-3 text-center text-xs text-ink-faint">
                Illustrative mockup — replace with{" "}
                <code className="rounded bg-surface-raised px-1 py-0.5 text-[10px] text-ink-muted">
                  SITE.screenshots.hero
                </code>{" "}
                when ready
              </p>
            </div>
          </div>
        </section>

        {/* Demo */}
        <section
          id="demo"
          className="scroll-mt-24 border-b border-surface-border px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Product"
              title="Aging in the tab title"
              description="Pick minimal geometry or expressive emoji. Same idea: time since you last used a tab, visible where you already look."
            />
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <span id={styleGroupId} className="sr-only">
                Indicator style
              </span>
              <div
                className="inline-flex rounded-lg border border-surface-border bg-surface-raised p-1"
                role="group"
                aria-labelledby={styleGroupId}
              >
                <button
                  type="button"
                  onClick={() => setDemoStyle("minimal")}
                  aria-pressed={demoStyle === "minimal"}
                  className={[
                    "rounded-md px-4 py-2 text-sm font-medium transition",
                    demoStyle === "minimal"
                      ? "bg-surface text-cream shadow-soft"
                      : "text-ink-muted hover:text-cream",
                  ].join(" ")}
                >
                  Minimal
                </button>
                <button
                  type="button"
                  onClick={() => setDemoStyle("expressive")}
                  aria-pressed={demoStyle === "expressive"}
                  className={[
                    "rounded-md px-4 py-2 text-sm font-medium transition",
                    demoStyle === "expressive"
                      ? "bg-surface text-cream shadow-soft"
                      : "text-ink-muted hover:text-cream",
                  ].join(" ")}
                >
                  Expressive
                </button>
              </div>
            </div>

            <div className="mt-10 overflow-x-auto pb-2">
              <div
                className="mx-auto flex min-w-[min(100%,720px)] items-stretch justify-center gap-1 sm:gap-2"
                aria-label="Tabs aging from fresh to dead"
              >
                {states.map((s, i) => (
                  <div key={s.label} className="flex items-stretch">
                    <article className="flex min-w-[100px] max-w-[140px] flex-1 flex-col rounded-xl border border-surface-border bg-surface-raised p-3 text-center shadow-soft sm:min-w-[120px] sm:max-w-none sm:p-4">
                      <span
                        className="text-2xl sm:text-3xl"
                        aria-hidden="true"
                      >
                        {s.symbol}
                      </span>
                      <h3 className="mt-2 text-xs font-semibold text-cream sm:text-sm">
                        {s.label}
                      </h3>
                      <p className="mt-1 text-[10px] text-ink-faint sm:text-xs">
                        {s.hint}
                      </p>
                    </article>
                    {i < states.length - 1 ? (
                      <span
                        className="hidden self-center px-1 text-ink-faint sm:inline sm:px-2"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              {SITE.screenshots.demo ? (
                <img
                  src={SITE.screenshots.demo}
                  alt="OldTabber indicator styles compared"
                  className="mx-auto w-full max-w-3xl rounded-xl border border-surface-border shadow-card"
                />
              ) : (
                <div className="mx-auto max-w-3xl">
                  <HeroBrowserMockup style={demoStyle === "minimal" ? "minimal" : "expressive"} />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why */}
        <section
          id="why"
          className="scroll-mt-24 border-b border-surface-border px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Why it helps"
              title="Clarity without nagging"
              description="You keep your habits. OldTabber adds a thin layer of honesty about what you’ve actually touched."
            />
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SITE.benefits.map((b) => (
                <li
                  key={b.title}
                  className="rounded-xl border border-surface-border bg-surface-raised p-5 shadow-soft"
                >
                  <h3 className="text-sm font-semibold text-cream">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {b.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How */}
        <section
          id="how"
          className="scroll-mt-24 border-b border-surface-border px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="How it works"
              title="Three steps. No workflow rewrite."
            />
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {SITE.steps.map((s, index) => (
                <li
                  key={s.title}
                  className="relative rounded-xl border border-surface-border bg-surface-raised p-6 pt-8 shadow-soft"
                >
                  <span className="absolute left-6 top-0 -translate-y-1/2 rounded-full border border-surface-border bg-surface px-2 py-0.5 text-xs font-semibold text-accent">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Modes */}
        <section
          id="modes"
          className="scroll-mt-24 border-b border-surface-border px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Modes"
              title="Timing and style, your call"
              description="Presets for how fast tabs age, plus the look of the indicator—geometric or expressive."
            />
            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="space-y-3">
                {SITE.modes.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPanelMode(m.id)}
                    className={[
                      "w-full rounded-xl border p-4 text-left transition",
                      panelMode === m.id
                        ? "border-accent bg-accent-soft shadow-soft"
                        : "border-surface-border bg-surface-raised hover:border-ink-faint",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-cream">{m.label}</h3>
                      {panelMode === m.id ? (
                        <span className="text-xs font-medium text-accent">Selected</span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-ink-muted">{m.description}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {m.thresholds.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-surface-border bg-black/20 px-2 py-0.5 text-xs text-ink-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
              <SettingsPanelMock activeModeId={panelMode} />
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section
          id="privacy"
          className="scroll-mt-24 border-b border-surface-border px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
              {SITE.privacy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              {SITE.privacy.body}
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-surface-border bg-surface-raised px-6 py-12 text-center shadow-card sm:px-10">
            <h2 className="text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
              {SITE.headlines.finalCta}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-ink-muted sm:text-base">
              {SITE.headlines.finalSub}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <PrimaryCta href={SITE.chromeStoreUrl}>Add to Chrome</PrimaryCta>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-surface-border px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-8" />
            <div>
              <p className="text-sm font-semibold text-cream">{SITE.name}</p>
              <p className="text-xs text-ink-faint">{SITE.tagline}</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted" aria-label="Footer">
            <a className="hover:text-cream" href={SITE.chromeStoreUrl}>
              Chrome Web Store
            </a>
            <a className="hover:text-cream" href={SITE.githubUrl}>
              GitHub
            </a>
            <a className="hover:text-cream" href={SITE.privacyUrl}>
              Privacy
            </a>
          </nav>
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </footer>
    </div>
  );
}
