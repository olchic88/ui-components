/* CookieConsentReact связывает логику из useCookieConsent 
с UI-компонентами CookieBanner и CookieModal.
*/

import CookieBannerReact from "./CookieBannerReact";
import CookieModalReact from "./CookieModalReact";
import { useCookieConsent } from "./useCookieConsent";

export default function CookieConsentReact() {
  const {
    consent,
    isBannerOpen,
    isModalOpen,
    acceptAll,
    declineAll,
    manageCookies,
    savePreferences,
  } = useCookieConsent();

  return (
    <>
      {isBannerOpen && (
        <CookieBannerReact
          onDeclineAll={declineAll}
          onAcceptAll={acceptAll}
          onManageCookies={manageCookies}
        />
      )}

      {isModalOpen && (
        <CookieModalReact
          onDeclineAll={declineAll}
          onAcceptAll={acceptAll}
          onSavePreferences={savePreferences}
        />
      )}
    </>
  );
}
