import { useEffect } from "react";
import { Link } from "react-router-dom";
import LogoMark from "./LogoMark.jsx";
import { SITE } from "./siteConfig.js";

/** Edit contact and policy date here */
const POLICY = {
  lastUpdated: "March 25, 2026",
  contactEmail: "hello@oldtabber.com",
};

export default function PrivacyPage() {
  useEffect(() => {
    document.title = `Privacy Policy — ${SITE.name}`;
    return () => {
      document.title = SITE.defaultDocumentTitle;
    };
  }, []);

  const p = "text-sm leading-relaxed text-ink-muted sm:text-base";
  const h2 = "mt-10 text-lg font-semibold text-cream sm:text-xl";
  const ul = "mt-3 list-disc space-y-2 pl-5 text-sm text-ink-muted sm:text-base";

  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-surface-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="flex items-center gap-2.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LogoMark className="h-9 w-9" />
            <span className="text-sm font-semibold text-cream">{SITE.name}</span>
          </Link>
          <Link
            to="/"
            className="text-sm text-ink-muted transition hover:text-cream"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <article>
          <h1 className="text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
            Privacy Policy
          </h1>
          <p className={`mt-2 text-sm text-ink-faint`}>
            Last updated: {POLICY.lastUpdated}
          </p>

          <p className={`mt-8 ${p}`}>
            OldTabber is designed to help you see which browser tabs you have
            forgotten by showing simple aging indicators based on inactivity.
          </p>
          <p className={`mt-4 ${p}`}>
            Your privacy matters. This extension is built to work entirely
            within your browser and does not collect or transmit personal data.
          </p>

          <h2 className={h2}>Information we collect</h2>
          <p className={`mt-3 ${p}`}>
            OldTabber does not collect any personal information.
          </p>
          <p className={`mt-4 ${p}`}>
            The extension may store limited data locally on your device,
            including:
          </p>
          <ul className={ul}>
            <li>Tab activity timestamps (to determine inactivity)</li>
            <li>
              User preferences (such as timing mode and indicator style)
            </li>
          </ul>
          <p className={`mt-4 ${p}`}>
            This data is stored using Chrome’s local storage APIs and never
            leaves your device.
          </p>

          <h2 className={h2}>How we use information</h2>
          <p className={`mt-3 ${p}`}>
            Locally stored data is used only to:
          </p>
          <ul className={ul}>
            <li>Determine how long a tab has been inactive</li>
            <li>Display aging indicators in tab titles</li>
            <li>Save your settings and preferences</li>
          </ul>
          <p className={`mt-4 ${p}`}>
            This data is not used for analytics, tracking, or profiling.
          </p>

          <h2 className={h2}>Data sharing</h2>
          <p className={`mt-3 ${p}`}>
            OldTabber does not share, sell, or transfer any user data to third
            parties.
          </p>
          <p className={`mt-4 ${p}`}>
            No data is transmitted externally at any time.
          </p>

          <h2 className={h2}>Remote code and external services</h2>
          <p className={`mt-3 ${p}`}>
            OldTabber does not use remote code. All functionality is bundled
            within the extension and runs locally in your browser.
          </p>
          <p className={`mt-4 ${p}`}>The extension does not rely on:</p>
          <ul className={ul}>
            <li>External APIs</li>
            <li>Analytics services</li>
            <li>Tracking tools</li>
          </ul>

          <h2 className={h2}>Permissions</h2>
          <p className={`mt-3 ${p}`}>
            OldTabber requests certain Chrome permissions only to provide its
            core functionality:
          </p>
          <ul className={ul}>
            <li>
              <span className="text-cream">tabs:</span> to detect tab activity
              and apply aging indicators
            </li>
            <li>
              <span className="text-cream">storage:</span> to store settings and
              tab timestamps locally
            </li>
            <li>
              <span className="text-cream">alarms:</span> to update tab aging
              over time
            </li>
            <li>
              <span className="text-cream">scripting / host permissions:</span>{" "}
              to update tab titles across websites
            </li>
          </ul>
          <p className={`mt-4 ${p}`}>
            These permissions are used strictly for the extension’s
            functionality and not for data collection.
          </p>

          <h2 className={h2}>Your control</h2>
          <ul className={ul}>
            <li>You can disable or remove OldTabber at any time</li>
            <li>Removing the extension deletes all locally stored data</li>
            <li>No data persists outside your browser</li>
          </ul>

          <h2 className={h2}>Changes to this policy</h2>
          <p className={`mt-3 ${p}`}>
            This privacy policy may be updated in the future. Any changes will
            be reflected on this page.
          </p>

          <h2 className={h2}>Contact</h2>
          <p className={`mt-3 ${p}`}>
            If you have questions about this privacy policy, contact{" "}
            <a
              className="text-accent underline decoration-accent/40 underline-offset-2 transition hover:decoration-accent"
              href={`mailto:${POLICY.contactEmail}`}
            >
              {POLICY.contactEmail}
            </a>
            .
          </p>
        </article>
      </main>

      <footer className="border-t border-surface-border px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <Link
            to="/"
            className="text-sm text-ink-muted hover:text-cream"
          >
            Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
