export function loadScripts(consent) {
  if (consent.analytics) {
    console.log("Load Google analytics");
  }
  if (consent.marketing) {
    console.log("Load Meta Pixel");
  }
}
