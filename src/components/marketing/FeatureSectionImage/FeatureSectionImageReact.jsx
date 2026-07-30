import "./featureSectionImage.css";

export default function FeatureSectionImageReact({
  side,
  supportingText,
  title,
  subtitle,
  features,
  image,
  alt,
  width,
  height,
}) {
  return (
    <section className={`feature-section feature-section-image-${side}`}>
      <div className="feature-section-header">
        <p className="feature-section-header-supporting-text">
          {supportingText}
        </p>
        <div className="feature-section-header-content">
          <h4 className="feature-section-header-title">{title}</h4>
          <p className="feature-section-header-subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="feature-section-content">
        <ul className="feature-section-features">
          {features.map((feature) => (
            <li key={feature.id} className="feature-section-feature">
              <div className="feature-section-feature-icon">{feature.icon}</div>
              <div className="feature-section-feature-content">
                <h5 className="feature-section-feature-content-title">
                  {feature.title}
                </h5>
                <p className="feature-section-feature-content-text">
                  {feature.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="feature-section-image-wrapper">
          <img src={image} alt={alt} width={width} height={height} />
        </div>
      </div>
    </section>
  );
}
