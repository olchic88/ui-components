import "./featureSectionGrid.css";

export default function FeatureSectionGridReact({
  supportingText,
  title,
  subtitle,
  features,
}) {
  return (
    <div className="container-section">
      <div className="feature-section-grid">
        <div className="feature-section-grid-header">
          <p className="feature-section-grid-header-supporting-text">
            {supportingText}
          </p>
          <div className="feature-section-grid-header-content">
            <h3 className="feature-section-grid-header-title">{title}</h3>
            <p className="feature-section-grid-header-subtitle">{subtitle}</p>
          </div>
        </div>

        <ul className="feature-section-grid-features">
          {features.map((feature) => {
            return (
              <li className="feature-section-grid-feature" key={feature.id}>
                <div className="feature-section-grid-feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-section-grid-feature-content">
                  <h4 className="feature-section-grid-feature-content-title">
                    {feature.title}
                  </h4>
                  <p className="feature-section-grid-feature-content-text">
                    {feature.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
