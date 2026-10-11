/**
 * @param {{ style: "minimal" | "expressive"; compact?: boolean }} props
 */
export function HeroBrowserMockup({ style, compact = false }) {
  const minimal = style === "minimal";
  const tabs = [
    { title: "Inbox — Acme", ind: minimal ? "·" : "🥚", active: true, faded: false },
    { title: "Spec / Q2", ind: minimal ? "○" : "⏳", active: false, faded: false },
    { title: "Article — Long read…", ind: minimal ? "●" : "🔥", active: false, faded: false },
    { title: "localhost:3000", ind: minimal ? "✖" : "☠️", active: false, faded: true },
  ];
  return (
    <div
      className="mock"
      role="img"
      aria-label="Mock browser window showing tab titles with aging indicators"
    >
      <div className="mock-tabs">
        {tabs.map((t) => (
          <div
            key={t.title}
            className={`mock-tab${t.active ? " active" : ""}${t.faded ? " faded" : ""}`}
            title={t.title}
          >
            <span aria-hidden="true">{t.ind}</span>
            <span>{t.title}</span>
          </div>
        ))}
      </div>
      <div className="mock-url">oldtabber.local</div>
      <div className="mock-body">
        {compact ? (
          <p>Indicators in each tab title — no list, no cleanup.</p>
        ) : (
          <>
            <p>Page content</p>
            <p>
              Indicators prepend to the tab title—minimal symbols or expressive
              emoji—so aging is visible without opening anything.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export function StyleToggle({ value, onChange, id }) {
  return (
    <div className="toggle" role="group" aria-labelledby={id}>
      <button
        type="button"
        onClick={() => onChange("minimal")}
        aria-pressed={value === "minimal"}
      >
        Minimal
      </button>
      <button
        type="button"
        onClick={() => onChange("expressive")}
        aria-pressed={value === "expressive"}
      >
        Expressive
      </button>
    </div>
  );
}
