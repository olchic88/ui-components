import "./pricingSectionSingle.css";

export default function PricingSectionSingleReact({
  supportingText,
  title,
  subtitle,
  featuresTitle,
  features,
  price,
  badge,
  currency,
  desc,
  buttonText
}) {
  return (
    <div className="container-section">
      <div className="pricing-section-single">
        <div className="pricing-section-single-header">
          <p className="pricing-section-single-header-supporting-text">
            {supportingText}
          </p>
          <div className="pricing-section-single-header-content">
            <h3 className="pricing-section-single-header-title">{title}</h3>
            <p className="pricing-section-single-header-subtitle">{subtitle}</p>
          </div>
        </div>
        <div className="pricing-section-single-content">
          <div className="pricing-section-single-features">
            <h4 className="pricing-section-single-features-title">
              {featuresTitle}
            </h4>
            <ul className="pricing-section-single-features-list">
              {features.map((feature) => {
                return (
                  <li key={feature.id}>
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
                    {feature.text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pricing-section-single-pricing-card">
            <div className="pricing-section-single-pricing-card-info">
              <p className="badge badge-success">{badge}</p>
              <p className="pricing-section-single-pricing-card-price">
                ${price}
              </p>
              <p>Prices in {currency}</p>
            </div>
            <p className="pricing-section-single-pricing-card-desc">{desc}</p>
            <button className="ax-button button button-primary button-size-lg-xl">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
