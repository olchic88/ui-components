import "./statisticsSection.css";
import whiteBlocks from "./whiteBlocks.webp";

export default function StatisticsSectionHTML() {
  return (
    <div className="container-section">
      <div className="statistics-section statistics-section-showcase">
        <div className="section-header">
          <p className="section-header-supporting-text">
            Statistics
          </p>
          <div className="section-header-content">
            <h3 className="section-header-title">
              More than premium abstract imagery
            </h3>
            <p className="section-header-subtitle">
              Our platform is more than just as a service to us – it is a
              catalyst for enriching lives through premium abstract imagery.
            </p>
          </div>
        </div>
        <div className="statistics-section-content">
          <div className="statistics-section-image-wrapper">
            <img
              src={whiteBlocks}
              alt="Colorful abstract geometric shapes"
              width={592}
              height={544}
            />
          </div>
          <div className="statistics-section-stats-wrapper">
            <p className="statistics-section-stats-title">
              Our mission, in numbers
            </p>
            <ul className="statistics-section-stats">
              <li className="statistics-section-stats-card">
                <p className="statistics-section-stats-card-number">
                  25,664,890
                </p>
                <p>Downloads</p>
              </li>
              <li className="statistics-section-stats-card">
                <p className="statistics-section-stats-card-number">17,219</p>
                <p>Paid users</p>
              </li>
              <li className="statistics-section-stats-card">
                <p className="statistics-section-stats-card-number">
                  190,654,321
                </p>
                <p>Images in library</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
