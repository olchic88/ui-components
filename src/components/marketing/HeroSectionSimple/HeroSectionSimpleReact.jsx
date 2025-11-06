import { Link } from "react-router";
import "./heroSectionSimple.css";


export default function HeroSectionSimpleReact({title, description, src, width, height}) {
  return (
    <div className="container-section">
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-header">
              <h3 className="hero-title">{title}</h3>
              <p className="hero-description">{description}</p>
            </div>
            <div className="hero-actions">
              <div className="hero-actions-btn">
                <Link className="hero-btn btn-secondary" to="#">
                  Learn more
                </Link>
              </div>
              <div className="hero-actions-btn">
                <Link className="hero-btn btn-primary" to="#">
                  See pricing
                </Link>
              </div>
            </div>
          </div>
          <img
            src={src}
            className="hero-banner"
            alt=""
            width={width}
            height={height}
          />
        </div>
    </div>
  );
}
