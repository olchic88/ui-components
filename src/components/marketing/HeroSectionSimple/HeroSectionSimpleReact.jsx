import { Link } from "react-router";
import "./heroSectionSimple.css";
import ButtonReact from "../../../ui/Button/ButtonReact";

export default function HeroSectionSimpleReact({
  title,
  description,
  src,
  alt,
  width,
  height,
}) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-header">
          <h3 className="hero-title">{title}</h3>
          <p className="hero-description">{description}</p>
        </div>
        <div className="hero-actions">
          <div className="hero-actions-btn">
            <ButtonReact as="link" to="#" variant="secondary" size="xl">
              Learn more
            </ButtonReact>
          </div>
          <div className="hero-actions-btn">
            <ButtonReact as="link" to="#" variant="primary" size="xl">
              See pricing
            </ButtonReact>
          </div>
        </div>
      </div>
      <img
        src={src}
        className="hero-banner"
        alt={alt}
        width={width}
        height={height}
      />
    </section>
  );
}
