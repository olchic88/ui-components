import "./notFoundSection.css";
import { Link } from "react-router";

export default function NotFoundSectionReact({
  supportingText,
  title,
  description,
}) {
  return (
    <div className="container-section">
      <div className="not-found-section">
        <div className="not-found-section-content">
          <div className="not-found-section-header">
            <p className="not-found-section-header-supporting-text">
              {supportingText}
            </p>
            <h3 className="not-found-section-header-title">{title}</h3>
          </div>
          <p className="not-found-section-description">{description}</p>
        </div>
        <Link to="/" className="ax-button button button-primary button-notFound">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
