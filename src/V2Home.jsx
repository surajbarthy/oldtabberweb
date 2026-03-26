import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import { HeroBrowserMockup, StyleToggle } from "./browserMockup.jsx";
import LogoMark from "./LogoMark.jsx";
import { SITE } from "./siteConfig.js";

/**
 * OneTab-inspired structure + OldTabber-accurate copy. Edit here.
 *
 * Images: add files under public/images/ and set paths below (e.g. "/images/v2-hero.webp").
 */
const V2 = {
  /** Page <title> suffix (full title: "OldTabber — …") */
  documentTitle:
    "See which tabs you’ve forgotten and reduce tab clutter",
  /** Header under logo */
  headerLine:
    "OldTabber adds quiet aging cues to tab titles so you can spot what you’ve left behind.",
  /** Main H1 — two lines */
  heroLine1: "See which tabs you’ve forgotten",
  heroLine2: "and reduce tab clutter",
  heroSub:
    "Indicators build in each title as a tab sits unused. You choose what to revisit or close.",
  /** Browser availability */
  browsers:
    "OldTabber is built for Google Chrome (Manifest V3). Many Chromium-based browsers (Edge, Brave, Arc, Opera, Vivaldi, and others) can run Chrome extensions—compatibility may vary.",
  /** Before / after — parallel to memory stats, product-true for OldTabber */
  beforeMetric: "Before: every tab title looks equally “active.”",
  afterMetric: "After: idle tabs show a small aging indicator in the title.",
  statValue: "100%",
  statLabel: "local — nothing sent to us",
  noSignup: "No signup or registration required.",
  howTitle: "How it works",
  howP1:
    "Whenever tabs pile up, you keep browsing as usual. OldTabber tracks last activity in your browser only, and updates each tab’s title with a minimal symbol or emoji so you can tell what’s fresh, waiting, urgent, or likely forgotten.",
  howP2:
    "Nothing is collapsed into a list for you. Tabs stay open; you get a lightweight signal in the one place you already glance at—the title—so you can restore attention or close with confidence.",
  privacyTitle: "Privacy assurance",
  privacyP1:
    "OldTabber is designed for privacy. Tab activity timestamps and your settings are stored locally with Chrome’s extension storage APIs. That data is not transmitted to us, sold, or used for analytics.",
  privacyP2:
    "The extension updates tab titles on pages you visit so indicators stay visible; that work happens in your browser. We do not run remote code or load tracking scripts.",
  privacyP3:
    "For full detail, read our privacy policy—linked at the end of this page.",
  benefitsTitle: "Additional benefits",
  benefitsP1:
    "Fewer mystery tabs can mean less context switching and less time hunting for “what was I doing here?” Even a fast machine feels noisy when dozens of tabs all look the same.",
  benefitsP2:
    "OldTabber doesn’t force a cleanup. It makes staleness visible so you can prioritize, batch-close, or leave things alone—on purpose.",
  featuresTitle: "More features",
  featuresP1Intro:
    "Choose timing presets (Balanced, Focus, Chill) or set your own thresholds. Switch between minimal symbols",
  featuresP2:
    "Toggle the extension off anytime from the popup. Your preferences stay on this device unless you remove the extension.",
  installTitle: "How to install OldTabber",
  installP1: "To install in a few seconds, use the button below (Chrome Web Store).",
  installP2:
    "Pin the OldTabber icon to your toolbar so it isn’t hidden under the puzzle-piece Extensions menu.",
  uninstallTitle: "How to uninstall OldTabber",
  uninstallP1:
    "Right-click the OldTabber icon in Chrome and choose Remove from Chrome (or manage the extension from chrome://extensions).",
  troubleshootTitle: "Troubleshooting",
  troubleshootP1:
    "If something looks wrong, try fully quitting and restarting the browser before uninstalling. Removing the extension deletes locally stored timing and settings.",
  troubleshootP2:
    "For bugs or questions, open an issue or discussion on the project’s GitHub page if you have one linked from the store listing.",
  classicLink: "Longer marketing page →",
  contactLabel: "Contact:",
  helpLabel: "Help / source:",
  /**
   * Set to a path under public/ (e.g. "/images/v2-hero.webp") to show the image.
   * See `imagePlaceholders` for sizes and example ideas.
   */
  images: {
    heroDiagram: null,
    tabComparison: null,
    howItWorks: null,
    installPin: "/images/v2-install-pin.png",
  },
  imageAlt: {
    heroDiagram: "OldTabber tab bar or product screenshot",
    tabComparison: "Before and after tab titles with OldTabber",
    howItWorks: "How OldTabber shows aging in tab titles",
    installPin:
      "Chrome Extensions menu: open the puzzle icon, then pin OldTabber with the pin button",
  },
  /** Specs + concrete examples for designers / exports */
  imagePlaceholders: {
    heroDiagram: {
      label: "Hero — tab bar or product screenshot",
      dimensions: "~1200 × 640px (or 1400 × 560 for Chrome Web Store marquee)",
      suggestedFile: "/images/v2-hero.webp",
      examples: [
        "Wide Chrome window with 4–6 tabs; · ○ ● ✖ or emoji visible in titles",
        "Tight crop on tab strip + address bar; dark theme to match the site",
        "Optional callout arrow on one “stale” tab title",
      ],
    },
    tabComparison: {
      label: "Before / after",
      dimensions: "~1200 × 600px",
      suggestedFile: "/images/v2-before-after.webp",
      examples: [
        "Split frame: left plain titles, right same tabs with OldTabber indicators",
        "Two stacked screenshots with small Before / After captions",
        "One wide screenshot with subtle labels or numbered steps",
      ],
    },
    howItWorks: {
      label: "How it works — UI or diagram",
      dimensions: "~1000 × 560px",
      suggestedFile: "/images/v2-how-it-works.webp",
      examples: [
        "Popup open beside the tab bar (Balanced / Minimal or Expressive visible)",
        "Same tab row twice: minimal symbols vs expressive emoji",
        "Simple 3-step graphic: browse → idle → title updates (export from Figma)",
      ],
    },
    installPin: {
      label: "Install — pin to toolbar",
      dimensions: "~880 × 400px",
      suggestedFile: "/images/v2-install-pin.png",
      examples: [
        "Puzzle menu + OldTabber row + pin icon highlighted (your current asset style)",
        "Follow-up shot: egg icon visible on the toolbar after pinning",
      ],
    },
  },
};

function PrimaryCta({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-cta px-7 py-3 text-base font-semibold text-brand-void shadow-[0_0_0_1px_rgba(45,212,191,0.35)] transition hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
    >
      {children}
    </a>
  );
}

function Section({ title, children, className = "" }) {
  return (
    <section
      className={`mt-10 border-t border-surface-border pt-10 sm:mt-12 sm:pt-12 ${className}`}
    >
      <h2 className="text-lg font-semibold tracking-tight text-cream">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-[15px] sm:leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function publicAsset(path) {
  if (!path) return null;
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\//, "");
  return base.endsWith("/") ? `${base}${normalized}` : `${base}/${normalized}`;
}

/**
 * Renders <img> when `V2.images[key]` is set; otherwise dashed placeholder with specs + examples.
 */
function ImagePlaceholder({ imageKey }) {
  const guide = V2.imagePlaceholders[imageKey];
  const label = guide?.label ?? imageKey;
  const src = V2.images[imageKey];
  const alt = V2.imageAlt[imageKey] ?? label;
  const resolved = publicAsset(src);

  if (resolved) {
    return (
      <figure className="overflow-hidden rounded-xl border border-surface-border bg-surface-raised shadow-soft">
        <img
          src={resolved}
          alt={alt}
          className="w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="border-t border-surface-border px-3 py-2 text-center text-xs text-ink-faint">
          {label}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      className="overflow-hidden rounded-xl border border-dashed border-surface-border bg-surface-deep/25"
      aria-label={`Placeholder: ${label}`}
    >
      <div className="flex flex-col gap-3 px-5 py-8 sm:px-6 sm:py-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
            Image placeholder
          </p>
          <p className="mt-1 text-sm font-medium text-ink-muted">{label}</p>
          <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-ink-faint">
            <span className="text-ink-muted">Size:</span> {guide.dimensions}
          </p>
          <p className="mt-2 font-mono text-[10px] text-ink-faint">
            Set{" "}
            <code className="rounded bg-surface-raised px-1.5 py-0.5 text-ink-muted">
              V2.images.{imageKey}
            </code>{" "}
            → suggested{" "}
            <code className="rounded bg-surface-raised px-1.5 py-0.5 text-ink-muted">
              {guide.suggestedFile}
            </code>
          </p>
        </div>
        <div className="border-t border-surface-border pt-4">
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-ink-faint">
            Example ideas
          </p>
          <ul className="mx-auto mt-3 max-w-lg list-disc space-y-2 pl-5 text-left text-xs leading-relaxed text-ink-muted">
            {guide.examples.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </figure>
  );
}

export default function V2Home() {
  const [style, setStyle] = useState("minimal");
  const toggleId = useId();

  useEffect(() => {
    document.title = `${SITE.name} — ${V2.documentTitle}`;
    return () => {
      document.title = SITE.defaultDocumentTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface text-ink">
      <a href="#v2-main" className="skip-link">
        Skip to content
      </a>

      <header className="border-b border-surface-border/80 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto max-w-3xl px-4 py-5 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
          >
            <LogoMark className="h-9 w-9" />
            <span className="text-base font-semibold text-cream">{SITE.name}</span>
          </Link>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-[15px]">
            {V2.headerLine}
          </p>
        </div>
      </header>

      <main
        id="v2-main"
        className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10"
      >
        {/* Hero — OneTab-style two-line headline */}
        <h1 className="text-[1.5rem] font-semibold leading-snug tracking-tight text-cream sm:text-4xl sm:leading-tight">
          <span className="block">{V2.heroLine1}</span>
          <span className="block">{V2.heroLine2}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {V2.heroSub}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-faint">{V2.browsers}</p>

        <div className="mt-8">
          <ImagePlaceholder imageKey="heroDiagram" />
        </div>

        {/* Before / after — like OneTab’s MB comparison */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="rounded-xl border border-surface-border bg-surface-raised p-4 sm:p-5">
            <p className="text-sm font-medium leading-snug text-ink-muted sm:text-base">
              {V2.beforeMetric}
            </p>
          </div>
          <div className="rounded-xl border border-cta/35 bg-cta/10 p-4 sm:p-5">
            <p className="text-sm font-medium leading-snug text-ink sm:text-base">
              {V2.afterMetric}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <ImagePlaceholder imageKey="tabComparison" />
        </div>

        {/* Stat — parallel to “95% memory reduction” */}
        <div className="mt-10 flex flex-col items-center text-center">
          <p className="text-5xl font-semibold tabular-nums text-cta sm:text-6xl">
            {V2.statValue}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-snug text-ink-muted sm:text-base">
            {V2.statLabel}
          </p>
        </div>

        {/* Preview mock */}
        <div className="mt-10">
          <p id={toggleId} className="sr-only">
            Indicator style
          </p>
          <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">
              Preview
            </span>
            <StyleToggle id={toggleId} value={style} onChange={setStyle} />
          </div>
          <HeroBrowserMockup
            style={style === "minimal" ? "minimal" : "expressive"}
            compact
          />
        </div>

        {/* Primary CTA */}
        <div className="mt-12 flex flex-col items-center text-center">
          <PrimaryCta href={SITE.chromeStoreUrl}>Add OldTabber to Chrome</PrimaryCta>
          <p className="mt-3 text-sm text-ink-faint">{V2.noSignup}</p>
          <Link
            to="/"
            className="mt-6 text-sm font-medium text-cta underline decoration-cta/35 underline-offset-4 transition hover:decoration-cta"
          >
            {V2.classicLink}
          </Link>
        </div>

        <Section title={V2.howTitle}>
          <ImagePlaceholder imageKey="howItWorks" />
          <p>{V2.howP1}</p>
          <p>{V2.howP2}</p>
        </Section>

        <Section title={V2.privacyTitle}>
          <p>{V2.privacyP1}</p>
          <p>{V2.privacyP2}</p>
          <p>
            {V2.privacyP3}{" "}
            <Link
              to={SITE.privacyUrl}
              className="font-medium text-cta underline decoration-cta/35 underline-offset-4 hover:decoration-cta"
            >
              Privacy policy
            </Link>
            .
          </p>
        </Section>

        <Section title={V2.benefitsTitle}>
          <p>{V2.benefitsP1}</p>
          <p>{V2.benefitsP2}</p>
        </Section>

        <Section title={V2.featuresTitle}>
          <p>
            {V2.featuresP1Intro}{" "}
            <span className="whitespace-nowrap font-semibold text-white">
              {SITE.states.minimal.map((s) => s.symbol).join(" ")}
            </span>{" "}
            and expressive indicators{" "}
            <span
              className="whitespace-nowrap text-base"
              title="Expressive: fresh, waiting, urgent, forgotten"
            >
              {SITE.states.expressive.map((s) => s.symbol).join(" ")}
            </span>
            .
          </p>
          <p>{V2.featuresP2}</p>
        </Section>

        <Section title={V2.installTitle}>
          <p>
            {V2.installP1}{" "}
            <a
              href={SITE.chromeStoreUrl}
              className="font-medium text-cta underline decoration-cta/35 underline-offset-4 hover:decoration-cta"
            >
              Open the store listing
            </a>
            .
          </p>
          <ImagePlaceholder imageKey="installPin" />
          <p>{V2.installP2}</p>
        </Section>

        <Section title={V2.uninstallTitle}>
          <p>{V2.uninstallP1}</p>
        </Section>

        <Section title={V2.troubleshootTitle}>
          <p>{V2.troubleshootP1}</p>
          <p>
            {V2.troubleshootP2}{" "}
            <a
              href={SITE.githubUrl}
              className="font-medium text-cta underline decoration-cta/35 underline-offset-4 hover:decoration-cta"
            >
              GitHub
            </a>
            .
          </p>
        </Section>
      </main>

      <footer className="border-t border-surface-border py-8">
        <div className="mx-auto max-w-3xl space-y-4 px-4 text-sm text-ink-muted sm:px-6">
          <p>
            <span className="text-ink-faint">{V2.contactLabel}</span>{" "}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="text-cta underline decoration-cta/35 underline-offset-4 hover:decoration-cta"
            >
              {SITE.contactEmail}
            </a>
          </p>
          <p>
            <span className="text-ink-faint">{V2.helpLabel}</span>{" "}
            <a
              href={SITE.githubUrl}
              className="text-cta underline decoration-cta/35 underline-offset-4 hover:decoration-cta"
            >
              {SITE.githubUrl}
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-surface-border pt-4 text-xs text-ink-faint">
            <span>© {new Date().getFullYear()} {SITE.name}</span>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <Link className="text-cta hover:text-cta-hover" to={SITE.privacyUrl}>
                Privacy
              </Link>
              <Link className="hover:text-cream" to="/">
                Home
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
