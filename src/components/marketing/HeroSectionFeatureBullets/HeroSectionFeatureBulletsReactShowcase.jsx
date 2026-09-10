import HeroSectionFeatureBulletsReact from "./HeroSectionFeatureBulletsReact";
import prismFeatureBullets from "../HeroSectionFeatureBullets/prismFeatureBullets.webp";

export default function HeroSectionFeatureBulletsReactShowcase() {
  return (
    <div className="container-section">
      <div className="hero-section-feature-bullets-showcase">
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
      </div>
    </div>
  );
}
