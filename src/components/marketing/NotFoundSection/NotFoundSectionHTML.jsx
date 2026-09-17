import "./notFoundSection.css";
import { Link } from "react-router";

export default function NotFoundSectionHTML() {
  return (
    <div className="container-section">
      <div className="not-found-section">
        <div className="not-found-section-content">
          <div className="section-header not-found-section-header">
            <p className="section-header-supporting-text not-found-section-supporting-text">
              Not found
            </p>
            <div className="section-header-content">
              <h3 className="section-header-title not-found-section-title">
                We can’t find the page
              </h3>
              <p className="section-header-subtitle not-found-section-subtitle">
                Sorry, the page you are looking for doesn't exist or has been
                moved.
              </p>
            </div>
          </div>
        </div>
        <Link to="" className="ax-button button button-primary notfound-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
