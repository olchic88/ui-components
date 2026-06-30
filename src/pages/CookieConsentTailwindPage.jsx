import CookieConsentTailwind from "../components/marketing/CookieConsent/CookieConsentTailwind";
import HeroSectionFeatureBulletsReact from "../components/marketing/HeroSectionFeatureBullets/HeroSectionFeatureBulletsReact";
import prismFeatureBullets from "../components/marketing/HeroSectionFeatureBullets/prismFeatureBullets.png";

export default function CookieConsentTailwindPage() {
  return (
    <div className="fullpage">
      <title>Cookie Consent</title>
      <main>
        <HeroSectionFeatureBulletsReact
          title="Premium abstract images"
          bullets={[
            { id: 1, text: "Minimum 5K image resolution" },
            { id: 2, text: "Various format variants available" },
            { id: 3, text: "Retina display support" },
          ]}
          src={prismFeatureBullets}
          alt="Colorful abstract geometric shapes"
          width={696}
          height={526}
        />
      </main>
      <CookieConsentTailwind />
    </div>
  );
}
