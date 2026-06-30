import "./cookieBanner.css";

export default function CookieBannerHTML() {
  return (
    <div className="container-section">
      <div className="cookie-consent-section">
  
        <dialog open className="cookie-consent-banner cookie-consent-banner-html">
          {/* Static preview version for component showcase.
          Using `open` instead of `showModal()` because this
          is a visual HTML/CSS representation, not an interactive modal.
          Modal behavior (focus trap, backdrop, state management)
          is implemented in the React version. */}
          <div className="cookie-consent-banner-content">
            <h3>We use cookies</h3>
            <p>
              We use cookies to enhance your browsing experience and improve our
              website's performance. By continuing to use this site, you consent
              to the use of cookies. To learn more about how we use cookies and
              your options, please read our <a href="" target="_blank" className="cookie-consent-banner-policy">cookie policy</a>.
            </p>
          </div>
          <div className="cookie-consent-banner-actions">
            <button
              type="button"
              className="ax-button button button-danger button-size-md button-decline-cookie"
            >
              Decline all
            </button>
            <div className="cookie-consent-banner-actions-allow">
              <button
                type="button"
                className="ax-button button button-primary button-size-lg button-allow-cookie"
              >
                Allow cookies
              </button>
              <button
                type="button"
                className="ax-button button button-secondary button-size-lg button-allow-cookie"
              >
                Manage cookies
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
