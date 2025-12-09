import HeroSectionSimpleTailwind from "../components/marketing/HeroSectionSimple/HeroSectionSimpleTailwind.jsx";
import prism from "../components/marketing/HeroSectionSimple/prism.png";

export default function HeroSectionSimpleTailwindPage() {
  return (
    <>
      <title>Hero Section Simple</title>
      <HeroSectionSimpleTailwind
        title="Well crafted abstract images"
        description="High quality abstract images for your projects, wallpaper and
                presentations."
        src={prism}
        alt="Colorful abstract geometric shapes"
        width={696}
        height={526}
        fullpage={true}
      />
    </>
  );
}
