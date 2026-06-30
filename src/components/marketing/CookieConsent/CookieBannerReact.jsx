/* 
CookieBannerReact, CookieModalReact не знают ничего 
про localStorage, useCookieConsent, loadScripts или состояние приложения. 
Их задача - показать интерфейс и сообщить наверх, что произошло событие.
*/

import { useEffect, useRef } from "react";
import { Link } from "react-router";
import "./cookieBanner.css";

export default function CookieBannerReact({
  onDeclineAll,
  onAcceptAll,
  onManageCookies,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="cookie-consent-banner cookie-consent-banner-react"
      onCancel={(event) => event.preventDefault()} // Disable ESC key closing because cookie consent requires explicit user action
    >
      <div className="cookie-consent-banner-content">
        <h3>We use cookies</h3>
        <p>
          We use cookies to enhance your browsing experience and improve our
          website's performance. By continuing to use this site, you consent to
          the use of cookies. To learn more about how we use cookies and your
          options, please read our{" "}
          <Link
            to="/cookie-policy"
            target="_blank"
            className="cookie-consent-banner-policy"
          >
            cookie policy
          </Link>
          .
        </p>
      </div>
      <div className="cookie-consent-banner-actions">
        <button
          type="button"
          className="ax-button button button-danger button-size-md button-decline-cookie"
          onClick={onDeclineAll}
        >
          Decline all
        </button>
        <div className="cookie-consent-banner-actions-allow">
          <button
            type="button"
            className="ax-button button button-primary button-size-lg button-allow-cookie"
            onClick={onAcceptAll}
          >
            Allow cookies
          </button>
          <button
            type="button"
            className="ax-button button button-secondary button-size-lg button-allow-cookie"
            onClick={onManageCookies}
          >
            Manage cookies
          </button>
        </div>
      </div>
    </dialog>
  );
}
