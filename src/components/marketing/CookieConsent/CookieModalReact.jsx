/* 
CookieBannerReact, CookieModalReact не знают ничего 
про localStorage, useCookieConsent, loadScripts или состояние приложения. 
Их задача - показать интерфейс и сообщить наверх, что произошло событие.
*/

import "./cookieModal.css";
import { useEffect, useRef, useState } from "react";

export default function CookieModalReact({
  onDeclineAll,
  onAcceptAll,
  onSavePreferences,
}) {
  const [settings, setSettings] = useState({
    analytics: false,
    marketing: false,
  });

  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="cookie-consent-modal cookie-consent-modal-react"
      onCancel={(event) => event.preventDefault()} // Disable ESC key closing because cookie consent requires explicit user action
    >
      <div className="cookie-consent-modal-content">
        <div className="cookie-consent-modal-cookie">
          <div className="cookie-consent-modal-cookie-header">
            <h3>Essentials</h3>
            <label className="switch">
              <input type="checkbox" checked disabled />
              <span className="switch-slider"></span>
            </label>
          </div>
          <p>
            These cookies are essential for the proper functioning of our
            services and cannot be disabled.
          </p>
        </div>
        <div className="cookie-consent-modal-cookie">
          <div className="cookie-consent-modal-cookie-header">
            <h3>Analytics</h3>
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.analytics}
                onChange={() => {
                  setSettings((prev) => ({
                    ...prev,
                    analytics: !prev.analytics,
                  }));
                }}
              />
              <span className="switch-slider"></span>
            </label>
          </div>
          <p>
            These cookies collect information about how you use our services or
            potential errors you encounter. Based on this information we are
            able to improve your experience and react to any issues.
          </p>
        </div>
        <div className="cookie-consent-modal-cookie">
          <div className="cookie-consent-modal-cookie-header">
            <h3>Marketing</h3>
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.marketing}
                onChange={() => {
                  setSettings((prev) => ({
                    ...prev,
                    marketing: !prev.marketing,
                  }));
                }}
              />
              <span className="switch-slider"></span>
            </label>
          </div>
          <p>
            These cookies allow us to show you advertisements relevant to you
            through our advertising partners.
          </p>
        </div>
      </div>
      <div className="cookie-consent-modal-actions">
        <button
          type="button"
          className="ax-button button button-danger button-size-md button-decline-cookie"
          onClick={onDeclineAll}
        >
          Decline all
        </button>
        <div className="cookie-consent-modal-actions-allow">
          <div className="cookie-consent-modal-btn-wrapper">
            <button
              type="button"
              className="ax-button button button-primary button-size-lg button-allow-cookie"
              onClick={onAcceptAll}
            >
              Accept all
            </button>
          </div>
          <div className="cookie-consent-modal-btn-wrapper">
            <button
              type="button"
              className="ax-button button button-secondary button-size-lg button-allow-cookie"
              onClick={() =>
                onSavePreferences({
                  analytics: settings.analytics,
                  marketing: settings.marketing,
                })
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
