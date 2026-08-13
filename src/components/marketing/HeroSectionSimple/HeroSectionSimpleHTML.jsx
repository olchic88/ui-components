import "./heroSectionSimple.css";
import "../../../ui/Button/button.css";
import { Link } from "react-router";
import prism from "./prism.webp";

export default function HeroSectionSimpleHTML() {
  return (
    <div className="container-section">
      <div className="hero-section hero-section-showcase">
        <div className="hero-content">
          <div className="hero-header">
            <h3 className="hero-title">Well crafted abstract images</h3>
            <p className="hero-description">
              High quality abstract images for your projects, wallpaper and
              presentations.
            </p>
          </div>
          <div className="hero-actions">
            <div className="hero-actions-btn">
              <Link
                className="ax-button button button-secondary button-size-xl"
                href="#"
              >
                Learn more
              </Link>
            </div>
            <div className="hero-actions-btn">
              <Link
                className="ax-button button button-primary button-size-xl"
                href="#"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
        <img
          src={prism}
          className="hero-banner"
          alt="Colorful abstract geometric shapes"
          width={696}
          height={526}
        />
      </div>
    </div>
  );
}
