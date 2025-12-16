import "./pricingSectionSingle.css";

export default function PricingSectionSimpleHTML() {
  return (
    <div className="container-section">
      <div className="pricing-section-single">
        <div className="pricing-section-single-header">
          <p className="pricing-section-single-header-supporting-text">
            One time purchase
          </p>
          <div className="pricing-section-single-header-content">
            <h3 className="pricing-section-single-header-title">
              Pay as you need
            </h3>
            <p className="pricing-section-single-header-subtitle">
              We offer one-time purchases with credits, for you to use as
              needed. Always active.
            </p>
          </div>
        </div>
        <div className="pricing-section-single-content">
          <div className="pricing-section-single-features">
            <h4 className="pricing-section-single-features-title">
              Unlock creativity once, enjoy forever
            </h4>
            <ul className="pricing-section-single-features-list">
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
                128 available credits for all images
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
                Up to 3 users
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
                24 hour response time
              </li>
              <li><svg
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
                Advanced analytics</li>
            </ul>
          </div>
          <div className="pricing-section-single-pricing-card">
            <div className="pricing-section-single-pricing-card-info">
                <p className="badge badge-success">Popular</p>
                <p className="pricing-section-single-pricing-card-price">$699</p>
                <p>Prices in USD</p>
            </div>
            <p className="pricing-section-single-pricing-card-desc">Pay once, use it forever. No strings attached.</p>
            <button className="ax-button button button-primary button-size-lg-xl">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
