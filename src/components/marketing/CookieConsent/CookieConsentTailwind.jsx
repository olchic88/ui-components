/* CookieConsentReact связывает логику из useCookieConsent 
с UI-компонентами CookieBanner и CookieModal.
*/

import CookieBannerTailwind from "./CookieBannerTailwind";
import CookieModalTailwind from "./CookieModalTailwind";
import { useCookieConsent } from "./useCookieConsent";

export default function CookieConsentTailwind() {
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
        <CookieBannerTailwind
          onDeclineAll={declineAll}
          onAcceptAll={acceptAll}
          onManageCookies={manageCookies}
        />
      )}

      {isModalOpen && (
        <CookieModalTailwind
          onDeclineAll={declineAll}
          onAcceptAll={acceptAll}
          onSavePreferences={savePreferences}
        />
      )}
    </>
  );
}
