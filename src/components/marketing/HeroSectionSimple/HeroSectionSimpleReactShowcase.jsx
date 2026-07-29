import "./heroSectionSimple.css";
import HeroSectionSimpleReact from "./HeroSectionSimpleReact";
import prism from "./prism.webp";

export default function HeroSectionSimpleReactShowcase() {
  return (
    <div className="container-section">
      <div className="hero-showcase">
        <HeroSectionSimpleReact
          title="Well crafted abstract images"
          description="High quality abstract images for your projects, wallpaper and
                    presentations."
          src={prism}
          alt="Colorful abstract geometric shapes"
          width={696}
          height={526}
        />
      </div>
    </div>
  );
}
