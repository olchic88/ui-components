const STORAGE_KEY = "cookie-consent";

export function getConsent() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function setConsentStorage(value) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

/* localStorage хранит только строки, 
он не умеет хранить объекты, а здесь value - object 
→ JSON.stringify().
и при чтении вернёт строку, а надо объект
→ JSON.parse().
*/
