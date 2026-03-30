import "./notFoundSection.css";
import { Link } from "react-router";

export default function NotFoundSectionHTML() {
  return (
    <div className="container-section">
      <div className="not-found-section">
        <div className="not-found-section-content">
          <div className="not-found-section-header">
            <p className="not-found-section-header-supporting-text">Not found</p>
            <h3 className="not-found-section-header-title">
              We can’t find the page
            </h3>
          </div>
          <p className="not-found-section-description">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link to="/" className="ax-button button button-primary button-notFound">Back to Home</Link>
      </div>
    </div>
  );
}
