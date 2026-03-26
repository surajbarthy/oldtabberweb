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
          : "border-transparent bg-surface-deep/60 text-ink-muted",
        faded ? "opacity-60" : "",
      ].join(" ")}
      title={title}
    >
      {children}
    </div>
  );
}

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
      <div
        className={
          compact
            ? "h-16 bg-gradient-to-b from-mock-content to-surface sm:h-20"
            : "h-32 bg-gradient-to-b from-mock-content to-surface sm:h-40"
        }
      >
        <div
          className={`p-3 text-[11px] leading-relaxed text-ink-faint sm:text-xs ${compact ? "pt-2" : "p-4"}`}
        >
          {compact ? (
            <p className="text-ink-muted">
              Indicators in each tab title — no list, no cleanup.
            </p>
          ) : (
            <>
              <p className="text-ink-muted">Page content</p>
              <p className="mt-2 max-w-md">
                Indicators prepend to the tab title—minimal symbols or expressive
                emoji—so aging is visible without opening anything.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function StyleToggle({ value, onChange, id }) {
  return (
    <div
      className="inline-flex rounded-lg border border-surface-border bg-surface-raised p-1"
      role="group"
      aria-labelledby={id}
    >
      <button
        type="button"
        onClick={() => onChange("minimal")}
        aria-pressed={value === "minimal"}
        className={[
          "rounded-md px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm",
          value === "minimal"
            ? "bg-surface text-cream shadow-soft"
            : "text-ink-muted hover:text-cream",
        ].join(" ")}
      >
        Minimal
      </button>
      <button
        type="button"
        onClick={() => onChange("expressive")}
        aria-pressed={value === "expressive"}
        className={[
          "rounded-md px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm",
          value === "expressive"
            ? "bg-surface text-cream shadow-soft"
            : "text-ink-muted hover:text-cream",
        ].join(" ")}
      >
        Expressive
      </button>
    </div>
  );
}
