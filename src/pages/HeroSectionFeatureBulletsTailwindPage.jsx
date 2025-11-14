
import HeroSectionFeatureBulletsTailwind from "../components/marketing/HeroSectionFeatureBullets/HeroSectionFeatureBulletsTailwind";
import prismFeatureBullets from "../components/marketing/HeroSectionFeatureBullets/prismFeatureBullets.png";

export default function HeroSectionFeatureBulletsTailwindPage() {
  return (
    <HeroSectionFeatureBulletsTailwind
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
          fullpage={true}
    />
  );
}
