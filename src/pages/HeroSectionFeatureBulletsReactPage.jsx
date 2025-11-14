import HeroSectionFeatureBulletsReact from "../components/marketing/HeroSectionFeatureBullets/HeroSectionFeatureBulletsReact";
import prismFeatureBullets from "../components/marketing/HeroSectionFeatureBullets/prismFeatureBullets.png";

export default function HeroSectionFeatureBulletsReactPage() {
  return (
    <div className="fullpage">
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
  );
}
