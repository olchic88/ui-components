import HeroSectionSimpleReact from "../components/marketing/HeroSectionSimple/HeroSectionSimpleReact.jsx";
import prism from "../components/marketing/HeroSectionSimple/prism.png";

export default function HeroSectionSimpleReactPage() {
  return (
    <div className="fullpage">
      <title>Hero Section Simple</title>
      <HeroSectionSimpleReact
        title="Well crafted abstract images"
        description="High quality abstract images for your projects, wallpaper and
                presentations."
        alt="Colorful abstract geometric shapes"
        src={prism}
        width={696}
        height={526}
      />
    </div>
  );
}
