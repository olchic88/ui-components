import "./pricingSectionTiers.css";

export default function PricingSectionTiersHTML() {
  return (
    <div className="container-section">
      <div className="pricing-section-tiers">
        <div className="pricing-section-tiers-header">
          <p className="pricing-section-tiers-header-supporting-text">
            Pricing Tiers
          </p>
          <div className="pricing-section-tiers-header-content">
            <h3 className="pricing-section-tiers-header-title">
              Fit for all your needs
            </h3>
            <p className="pricing-section-tiers-header-subtitle">
              Pick the plan that suits you today and step up as your demands
              grow - our flexible options have your journey mapped out.
            </p>
          </div>
        </div>
        <div className="pricing-section-tiers-content">
          {/* segmented controls / segmented buttons */}
          <div className="pricing-section-tiers-toggle">
            <button
              id="monthlyPlanBtn"
              className="ax-button button button-size-lg button-secondary button-toggle active"
            >
              Monthly
            </button>
            <button
              id="annualPlanBtn"
              className="ax-button button button-size-lg button-secondary button-toggle inactive"
            >
              Annually
            </button>
          </div>
          <div className="pricing-section-tiers-plans">
            <div className="pricing-section-tiers-plan">
              <div className="pricing-section-tiers-plan-header">
                <h4>Basic Plan</h4>
                <p>Access to a curated selection of abstract images</p>
              </div>
              <div className="pricing-section-tiers-price">
                <p className="pricing-section-tiers-price-amount">
                  <span>$9.99</span> / month
                </p>
                <p className="pricing-section-tiers-price-label">
                  Billed monthly
                </p>
              </div>
              <ul className="pricing-section-tiers-features">
                <li>
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
                  Standard quality images
                </li>
                <li>
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
                  Limited to personal use
                </li>
                <li>
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
                  Email support
                </li>
              </ul>
              <button className="ax-button button button-size-xl button-secondary">
                Buy now
              </button>
            </div>

            <div className="pricing-section-tiers-plan active">
              <p className="pricing-section-tiers-badge">Most popular</p>
              <div className="pricing-section-tiers-plan-header">
                <h4>Standard Plan</h4>
                <p>Next-level Integrations, priced economically</p>
              </div>
              <div className="pricing-section-tiers-price">
                <p className="pricing-section-tiers-price-amount">
                  <span>$19.99</span> / month
                </p>
                <p className="pricing-section-tiers-price-label"></p>
              </div>
              <ul className="pricing-section-tiers-features">
                <li>
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
                  Expanded library with more diverse abstract images
                </li>
                <li>
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
                  High-resolution images available
                </li>
                <li>
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
                  Suitable for commercial use
                </li>
                <li>
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
                  Priority email support
                </li>
                <li>
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
                  Advanced analytics
                </li>
              </ul>
              <button className="ax-button button button-size-xl button-primary">
                Buy now
              </button>
            </div>

            <div className="pricing-section-tiers-plan">
              <div className="pricing-section-tiers-plan-header">
                <h4>Premium Plan</h4>
                <p>Experience limitless living for power users</p>
              </div>
              <div className="pricing-section-tiers-price">
                <p className="pricing-section-tiers-price-amount">
                  <span>$29.99</span> / month
                </p>
                <p className="pricing-section-tiers-price-label"></p>
              </div>
              <ul className="pricing-section-tiers-features">
                <li>
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
                  Full access to the entire image library, including exclusive
                  content
                </li>
                <li>
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
                  Highest quality images, including premium collections
                </li>
                <li>
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
                  Commercial and resale rights
                </li>
                <li>
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
                  Dedicated customer support line
                </li>
                <li>
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
                  24/7 support response time
                </li>
                <li>
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
                  Advanced analytics and insights
                </li>
              </ul>
              <button className="ax-button button button-size-xl button-secondary">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
