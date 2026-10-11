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

function Section({ title, children }) {
  return (
    <section>
      <hr />
      <h2>{title}</h2>
      {children}
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
 * Renders <img> when `V2.images[key]` is set; otherwise a dashed placeholder with specs + examples.
 */
function ImagePlaceholder({ imageKey }) {
  const guide = V2.imagePlaceholders[imageKey];
  const label = guide?.label ?? imageKey;
  const src = V2.images[imageKey];
  const alt = V2.imageAlt[imageKey] ?? label;
  const resolved = publicAsset(src);

  if (resolved) {
    return (
      <figure className="figure">
        <img src={resolved} alt={alt} loading="lazy" decoding="async" />
        <figcaption>{label}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="placeholder" aria-label={`Placeholder: ${label}`}>
      <strong>Image placeholder: {label}</strong>
      <br />
      Size: {guide.dimensions}. Set <code>V2.images.{imageKey}</code>, suggested{" "}
      <code>{guide.suggestedFile}</code>.
      <ul>
        {guide.examples.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
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
    <>
      <a href="#v2-main" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="wrap">
          <Link to="/" className="brand">
            <LogoMark />
            {SITE.name}
          </Link>
          <p className="small muted" style={{ margin: 0, flexBasis: "100%" }}>
            {V2.headerLine}
          </p>
        </div>
      </header>

      <main id="v2-main" className="wrap">
        <h1>
          {V2.heroLine1}
          <br />
          {V2.heroLine2}
        </h1>
        <p className="lead">{V2.heroSub}</p>
        <p className="small muted">{V2.browsers}</p>

        <ImagePlaceholder imageKey="heroDiagram" />

        <table className="compare">
          <tbody>
            <tr>
              <td>{V2.beforeMetric}</td>
              <td>{V2.afterMetric}</td>
            </tr>
          </tbody>
        </table>

        <ImagePlaceholder imageKey="tabComparison" />

        <p className="stat">
          <strong>{V2.statValue}</strong> {V2.statLabel}.
        </p>

        <div className="preview-head">
          <span id={toggleId} className="small muted">
            Preview — indicator style:
          </span>
          <StyleToggle id={toggleId} value={style} onChange={setStyle} />
        </div>
        <HeroBrowserMockup style={style} compact />

        <p>
          <a className="button" href={SITE.chromeStoreUrl}>
            Add OldTabber to Chrome
          </a>
        </p>
        <p className="small muted">{V2.noSignup}</p>
        <p>
          <Link to="/">{V2.classicLink}</Link>
        </p>

        <Section title={V2.howTitle}>
          <ImagePlaceholder imageKey="howItWorks" />
          <p>{V2.howP1}</p>
          <p>{V2.howP2}</p>
        </Section>

        <Section title={V2.privacyTitle}>
          <p>{V2.privacyP1}</p>
          <p>{V2.privacyP2}</p>
          <p>
            {V2.privacyP3} <Link to={SITE.privacyUrl}>Privacy policy</Link>.
          </p>
        </Section>

        <Section title={V2.benefitsTitle}>
          <p>{V2.benefitsP1}</p>
          <p>{V2.benefitsP2}</p>
        </Section>

        <Section title={V2.featuresTitle}>
          <p>
            {V2.featuresP1Intro}{" "}
            <strong style={{ whiteSpace: "nowrap" }}>
              {SITE.states.minimal.map((s) => s.symbol).join(" ")}
            </strong>{" "}
            and expressive indicators{" "}
            <span
              style={{ whiteSpace: "nowrap" }}
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
            <a href={SITE.chromeStoreUrl}>Open the store listing</a>.
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
            {V2.troubleshootP2} <a href={SITE.githubUrl}>GitHub</a>.
          </p>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <p>
            {V2.contactLabel}{" "}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
          </p>
          <p>
            {V2.helpLabel} <a href={SITE.githubUrl}>{SITE.githubUrl}</a>
          </p>
          <p>
            © {new Date().getFullYear()} {SITE.name} ·{" "}
            <Link to={SITE.privacyUrl}>Privacy</Link> · <Link to="/">Home</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
