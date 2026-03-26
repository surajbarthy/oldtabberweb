import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { HeroBrowserMockup } from "./browserMockup.jsx";
import LogoMark from "./LogoMark.jsx";
import { SITE } from "./siteConfig.js";

function SkipLink() {
  return (
    <a href="#main" className="skip-link">
      Skip to content
    </a>
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
      className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-brand-void transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
            <span className="ml-4 block h-4 w-4 rounded-full bg-brand-void" />
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
              className="flex items-center justify-between rounded-md border border-surface-border bg-surface-deep/50 px-2 py-1.5"
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
          <Link
            to="/"
            className="flex items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LogoMark className="h-9 w-9" />
            <div className="leading-tight">
              <span className="block text-sm font-semibold text-cream">
                {SITE.name}
              </span>
              <span className="block text-xs text-ink-faint">{SITE.tagline}</span>
            </div>
          </Link>
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
                          className="rounded-md border border-surface-border bg-surface-deep/50 px-2 py-0.5 text-xs text-ink-muted"
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
            <p className="mt-6">
              <Link
                to={SITE.privacyUrl}
                className="text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 transition hover:decoration-accent"
              >
                Full privacy policy
              </Link>
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
            <Link className="hover:text-cream" to={SITE.privacyUrl}>
              Privacy
            </Link>
          </nav>
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </footer>
    </div>
  );
}
