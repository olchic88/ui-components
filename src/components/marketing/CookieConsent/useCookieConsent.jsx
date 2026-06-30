/* useCookieConsent (логика)
Отвечает за:
consent state
localStorage
loadScripts
обработчики кнопок
*/

import { useEffect, useState } from "react";
import { getConsent, setConsentStorage } from "./cookieStorage";
import { loadScripts } from "./loadScripts";

export function useCookieConsent() {
  const [consent, setConsent] = useState(null);
  /* 
  null - ещё ничего не выбрал
  consent - object
  {
    essentials: true,
    analytics: false,
    marketing: false,
  } 
    */

  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // localStorage → React state (initial sync)
  // On first page load, check if the user has already made a cookie choice.
  // If consent exists in localStorage, restore it into React state.
  useEffect(() => {
    const saved = getConsent();
    if (saved) {
      setConsent(saved);
    } else {
      setIsBannerOpen(true);
    }
  }, []);

  // отвечает за загрузку скриптов в зависимости от выбора пользователя (loadScripts.js)
  useEffect(() => {
    // если ничего не выбрал ещё. То есть после первого визита ещё не сработает.
    if (!consent) {
      return;
    }
    loadScripts(consent);
  }, [consent]);
  // срабатывает каждый раз, когда consent меняется

  function acceptAll() {
    const newConsent = {
      essentials: true,
      analytics: true,
      marketing: true,
    };
    setConsent(newConsent);
    setConsentStorage(newConsent); // save in localStorage (loadScripts.js)
    setIsBannerOpen(false);
    setIsModalOpen(false);
  }

  function declineAll() {
    const newConsent = {
      essentials: true,
      analytics: false,
      marketing: false,
    };
    setConsent(newConsent);
    setConsentStorage(newConsent); // save in localStorage (loadScripts.js)
    setIsBannerOpen(false);
    setIsModalOpen(false);
  }

  function manageCookies() {
    setIsBannerOpen(false);
    setIsModalOpen(true);
  }

  function savePreferences(newPartialConsent) {
    const newConsent = {
      essentials: true,
      ...newPartialConsent,
    };
    setConsent(newConsent);
    setConsentStorage(newConsent); // save in localStorage (loadScripts.js)
    setIsBannerOpen(false);
    setIsModalOpen(false);
  }

  return {
    consent,
    isBannerOpen,
    isModalOpen,
    acceptAll,
    declineAll,
    manageCookies,
    savePreferences,
  };
}
