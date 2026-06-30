import "./cookieModal.css";

export default function CookieModalHTML() {
  return (
    <div className="container-section">
      <div className="cookie-consent-section">
  
        <dialog open className="cookie-consent-modal cookie-consent-modal-html">
          {/* Static preview version for component showcase.
          Using `open` instead of `showModal()` because this
          is a visual HTML/CSS representation, not an interactive modal.
          Modal behavior (focus trap, backdrop, state management)
          is implemented in the React version. */}
          <div className="cookie-consent-modal-content">
           <div className="cookie-consent-modal-cookie">
             <div className="cookie-consent-modal-cookie-header">
               <h3>Essentials</h3>
               <label className="switch">
                <input type="checkbox" checked disabled />
                <span className="switch-slider"></span>
               </label>
             </div>
             <p>These cookies are essential for the proper functioning of our services and cannot be disabled.</p>
           </div>
           <div className="cookie-consent-modal-cookie">
             <div className="cookie-consent-modal-cookie-header">
               <h3>Analytics</h3>
               <label className="switch">
                <input type="checkbox" />
                <span className="switch-slider"></span>
               </label>
             </div>
             <p>These cookies collect information about how you use our services or potential errors you encounter. Based on this information we are able to improve your experience and react to any issues.</p>
           </div>
           <div className="cookie-consent-modal-cookie">
             <div className="cookie-consent-modal-cookie-header">
               <h3>Marketing</h3>
               <label className="switch">
                <input type="checkbox" />
                <span className="switch-slider"></span>
               </label>
             </div>
             <p>These cookies allow us to show you advertisements relevant to you through our advertising partners.</p>
           </div>
          </div>
          <div className="cookie-consent-modal-actions">
            <button
              type="button"
              className="ax-button button button-danger button-size-md button-decline-cookie"
            >
              Decline all
            </button>
            <div className="cookie-consent-modal-actions-allow">
              <div className="cookie-consent-modal-btn-wrapper">
                <button
                  type="button"
                  className="ax-button button button-primary button-size-lg button-allow-cookie"
                >
                  Accept all
                </button>
              </div>
              <div className="cookie-consent-modal-btn-wrapper">
                <button
                  type="button"
                  className="ax-button button button-secondary button-size-lg button-allow-cookie"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
