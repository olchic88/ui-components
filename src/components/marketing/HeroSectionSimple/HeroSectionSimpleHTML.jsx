import "./heroSectionSimple.css";
import prism from "./prism.png";

export default function HeroSectionSimpleHTML() {
  return (
    <div className="container-section">
      <div className="hero-section">
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
              <a className="hero-btn btn-secondary" href="#">
                Learn more
              </a>
            </div>
            <div className="hero-actions-btn">
              <a className="hero-btn btn-primary" href="#">
                See pricing
              </a>
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
