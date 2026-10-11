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


  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Link to="/" className="brand">
            <LogoMark />
            {SITE.name}
          </Link>
          <nav className="site-nav">
            <Link to="/">Back to home</Link>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <article>
          <h1>Privacy Policy</h1>
          <p className="muted">
            Last updated: {POLICY.lastUpdated}
          </p>

          <p>
            OldTabber is designed to help you see which browser tabs you have
            forgotten by showing simple aging indicators based on inactivity.
          </p>
          <p>
            Your privacy matters. This extension is built to work entirely
            within your browser and does not collect or transmit personal data.
          </p>

          <h2>Information we collect</h2>
          <p>
            OldTabber does not collect any personal information.
          </p>
          <p>
            The extension may store limited data locally on your device,
            including:
          </p>
          <ul>
            <li>Tab activity timestamps (to determine inactivity)</li>
            <li>
              User preferences (such as timing mode and indicator style)
            </li>
          </ul>
          <p>
            This data is stored using Chrome’s local storage APIs and never
            leaves your device.
          </p>

          <h2>How we use information</h2>
          <p>
            Locally stored data is used only to:
          </p>
          <ul>
            <li>Determine how long a tab has been inactive</li>
            <li>Display aging indicators in tab titles</li>
            <li>Save your settings and preferences</li>
          </ul>
          <p>
            This data is not used for analytics, tracking, or profiling.
          </p>

          <h2>Data sharing</h2>
          <p>
            OldTabber does not share, sell, or transfer any user data to third
            parties.
          </p>
          <p>
            No data is transmitted externally at any time.
          </p>

          <h2>Remote code and external services</h2>
          <p>
            OldTabber does not use remote code. All functionality is bundled
            within the extension and runs locally in your browser.
          </p>
          <p>The extension does not rely on:</p>
          <ul>
            <li>External APIs</li>
            <li>Analytics services</li>
            <li>Tracking tools</li>
          </ul>

          <h2>Permissions</h2>
          <p>
            OldTabber requests certain Chrome permissions only to provide its
            core functionality:
          </p>
          <ul>
            <li>
              <strong>tabs:</strong> to detect tab activity
              and apply aging indicators
            </li>
            <li>
              <strong>storage:</strong> to store settings and
              tab timestamps locally
            </li>
            <li>
              <strong>alarms:</strong> to update tab aging
              over time
            </li>
            <li>
              <strong>scripting / host permissions:</strong>{" "}
              to update tab titles across websites
            </li>
          </ul>
          <p>
            These permissions are used strictly for the extension’s
            functionality and not for data collection.
          </p>

          <h2>Your control</h2>
          <ul>
            <li>You can disable or remove OldTabber at any time</li>
            <li>Removing the extension deletes all locally stored data</li>
            <li>No data persists outside your browser</li>
          </ul>

          <h2>Changes to this policy</h2>
          <p>
            This privacy policy may be updated in the future. Any changes will
            be reflected on this page.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, contact{" "}
            <a href={`mailto:${POLICY.contactEmail}`}>{POLICY.contactEmail}</a>
            .
          </p>
        </article>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <p>
            © {new Date().getFullYear()} {SITE.name} · <Link to="/">Home</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
