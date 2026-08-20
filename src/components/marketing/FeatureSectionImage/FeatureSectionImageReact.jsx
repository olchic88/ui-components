import SectionHeaderReact from "../SectionHeader/SectionHeaderReact";
import "./featureSectionImage.css";

export default function FeatureSectionImageReact({
  side,
  features,
  image,
  alt,
  width,
  height,
}) {
  return (
    <section className={`feature-section feature-section-image-${side}`}>
      <SectionHeaderReact
        supportingText={
          side === "right" ? "High quality images" : "Best-in-class support"
        }
        title={
          side === "right"
            ? "For designers, by designers"
            : "Convenience and licensing that empowers"
        }
        subtitle={
          side === "right"
            ? "Unleash boundless creativity with a large repository of images optimized for designers"
            : "In a world where storytelling constantly evolves, don't let licensing and poor support hold you down"
        }
        titleClassName={side === "left" ? "section-header-title-left" : ""}
        subtitleClassName={
          side === "left" ? "section-header-subtitle-left" : ""
        }
      ></SectionHeaderReact>

      <div className="feature-section-content">
        <ul className="feature-section-features">
          {features.map((feature) => (
            <li key={feature.id} className="feature-section-feature">
              <div className="feature-section-feature-icon">{feature.icon}</div>
              <div className="feature-section-feature-content">
                <h5 className="feature-section-feature-content-title">
                  {feature.title}
                </h5>
                <p className="feature-section-feature-content-text">
                  {feature.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="feature-section-image-wrapper">
          <img src={image} alt={alt} width={width} height={height} />
        </div>
      </div>
    </section>
  );
}
