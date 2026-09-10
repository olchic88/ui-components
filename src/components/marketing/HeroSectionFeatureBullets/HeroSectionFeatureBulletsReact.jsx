import { Link } from "react-router";
import "./heroSectionFeatureBullets.css";
import ButtonReact from "../../../ui/Button/ButtonReact";

export default function HeroSectionFeatureBulletsReact({
  title,
  bullets,
  src,
  alt,
  width,
  height,
}) {
  return (
    <section className="hero-section-feature-bullets">
      <div className="hero-feature-bullets-content">
        <h3 className="hero-feature-bullets-title">{title}</h3>
        <ul className="hero-feature-bullets">
          {bullets.map((bullet) => (
            <li key={bullet.id}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                  fill="#EEF2FF"
                />
                <path
                  d="M9.64715 15.5245L10.0007 15.878L10.3543 15.5245L19.1931 6.68562L19.9002 7.39272L10.0007 17.2922L4.34383 11.6354L5.05093 10.9283L9.64715 15.5245Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                />
              </svg>
              {bullet.text}
            </li>
          ))}
        </ul>
        <div className="hero-feature-bullets-actions">
          <div className="hero-feature-bullets-actions-btn">
            <ButtonReact variant="secondary" size="xl" as="link" to="">
              Learn more
            </ButtonReact>
          </div>
          <div className="hero-feature-bullets-actions-btn">
            <ButtonReact variant="primary" size="xl" as="link" to="">
              See pricing
            </ButtonReact>
          </div>
        </div>
      </div>
      <img
        src={src}
        className="hero-feature-bullets-banner"
        alt={alt}
        width={width}
        height={height}
      />
    </section>
  );
}
