import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { HeroBrowserMockup, StyleToggle } from "./browserMockup.jsx";
import LogoMark from "./LogoMark.jsx";
import { SITE } from "./siteConfig.js";

function SettingsPanelMock({ activeModeId }) {
  const mode = SITE.modes.find((m) => m.id === activeModeId) ?? SITE.modes[0];
  return (
    <div className="popup" aria-label="Extension settings preview (illustrative)">
      <div className="popup-head">
        <span>
          <LogoMark />
          {SITE.name}
        </span>
        <label>
          <input type="checkbox" checked readOnly tabIndex={-1} /> On
        </label>
      </div>
      <p>Choose how quickly tabs start to feel forgotten.</p>
      <div>
        {SITE.modes.map((m) => (
          <span key={m.id} className={m.id === activeModeId ? "opt on" : "opt"}>
            {m.label}
          </span>
        ))}
      </div>
      <p>Indicator style</p>
      <div>
        <span className="opt on">Minimal</span>
        <span className="opt">Expressive</span>
      </div>
      <p>Thresholds — {mode.label}</p>
      <table>
        <tbody>
          {mode.thresholds.map((t, i) => (
            <tr key={t}>
              <td>Level {i + 1}</td>
              <td>{t}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="wrap">
          <Link to="/" className="brand">
            <LogoMark />
            {SITE.name}
          </Link>
          <nav className="site-nav" aria-label="Page">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" className="wrap">
        <p className="muted">
          <em>{SITE.headlines.kicker}</em>
        </p>
        <div className="hero">
          <LogoMark />
          <div>
            <h1>{SITE.headlines.hero}</h1>
            <p className="lead">{SITE.headlines.subhead}</p>
          </div>
        </div>
        <p>
          <a className="button" href={SITE.chromeStoreUrl}>
            Add to Chrome
          </a>{" "}
          &nbsp;or <a href="#demo">see how it works</a>.
        </p>
        <p className="muted">Reduce tab clutter without forcing cleanup.</p>

        {SITE.screenshots.hero ? (
          <figure className="figure">
            <img src={SITE.screenshots.hero} alt="OldTabber in the browser tab bar" />
          </figure>
        ) : (
          <>
            <HeroBrowserMockup style="minimal" />
            <p className="small faint">
              Illustrative mockup — replace with <code>SITE.screenshots.hero</code>{" "}
              when ready
            </p>
          </>
        )}

        <hr />

        <section id="demo">
          <h2>Aging in the tab title</h2>
          <p>
            Pick minimal geometry or expressive emoji. Same idea: time since you
            last used a tab, visible where you already look.
          </p>
          <p>
            <span id={styleGroupId}>Indicator style: </span>
            <StyleToggle id={styleGroupId} value={demoStyle} onChange={setDemoStyle} />
          </p>
          <table className="states" aria-label="Tabs aging from fresh to dead">
            <tbody>
              {states.map((s) => (
                <tr key={s.label}>
                  <th className="symbol" aria-hidden="true">
                    {s.symbol}
                  </th>
                  <td>
                    <strong>{s.label}</strong> — {s.hint.toLowerCase()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {SITE.screenshots.demo ? (
            <figure className="figure">
              <img src={SITE.screenshots.demo} alt="OldTabber indicator styles compared" />
            </figure>
          ) : (
            <HeroBrowserMockup style={demoStyle} />
          )}
        </section>

        <hr />

        <section id="why">
          <h2>Clarity without nagging</h2>
          <p>
            You keep your habits. OldTabber adds a thin layer of honesty about
            what you’ve actually touched.
          </p>
          <ul className="plain-list">
            {SITE.benefits.map((b) => (
              <li key={b.title}>
                <strong>{b.title}.</strong> {b.body}
              </li>
            ))}
          </ul>
        </section>

        <hr />

        <section id="how">
          <h2>How it works</h2>
          <p>Three steps. No workflow rewrite.</p>
          <ol className="plain-list">
            {SITE.steps.map((s) => (
              <li key={s.title}>
                <strong>{s.title}.</strong> {s.body}
              </li>
            ))}
          </ol>
        </section>

        <hr />

        <section id="modes">
          <h2>Timing and style, your call</h2>
          <p>
            Presets for how fast tabs age, plus the look of the
            indicator—geometric or expressive.
          </p>
          <ul className="modes">
            {SITE.modes.map((m) => (
              <li key={m.id}>
                <button
                  type="button"
                  onClick={() => setPanelMode(m.id)}
                  aria-pressed={panelMode === m.id}
                >
                  <strong>{m.label}</strong> — {m.description}
                  <br />
                  <span className="thresholds">{m.thresholds.join(" · ")}</span>
                </button>
              </li>
            ))}
          </ul>
          <SettingsPanelMock activeModeId={panelMode} />
        </section>

        <hr />

        <section id="privacy">
          <h2>{SITE.privacy.title}</h2>
          <p>{SITE.privacy.body}</p>
          <p>
            <Link to={SITE.privacyUrl}>Full privacy policy</Link>
          </p>
        </section>

        <hr />

        <section>
          <h2>{SITE.headlines.finalCta}</h2>
          <p>{SITE.headlines.finalSub}</p>
          <p>
            <a className="button" href={SITE.chromeStoreUrl}>
              Add to Chrome
            </a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <p>
            <a href={SITE.chromeStoreUrl}>Chrome Web Store</a> ·{" "}
            <a href={SITE.githubUrl}>GitHub</a> ·{" "}
            <Link to={SITE.privacyUrl}>Privacy</Link>
          </p>
          <p>
            © {new Date().getFullYear()} {SITE.name} · {SITE.tagline}
          </p>
        </div>
      </footer>
    </>
  );
}
