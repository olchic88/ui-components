import { useState } from "react";

import "./pricingSectionTiers.css";

export default function PricingSectionTiersReact({
  supportingText,
  title,
  subtitle,
  pricingSectionTiersData,
  plan,
}) {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [activePlan, setActivePlan] = useState("standard");

  function formatPrice(amount, currency, fractionDigits = 2) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: fractionDigits,
    }).format(amount);
  }

  return (
    <div className="container-section">
      <div className="pricing-section-tiers">
        <div className="pricing-section-tiers-header">
          <p className="pricing-section-tiers-header-supporting-text">
            {supportingText}
          </p>
          <div className="pricing-section-tiers-header-content">
            <h3 className="pricing-section-tiers-header-title">{title}</h3>
            <p className="pricing-section-tiers-header-subtitle">{subtitle}</p>
          </div>
        </div>
        <div className="pricing-section-tiers-content">
          {/* segmented controls / segmented buttons */}
          <div className="pricing-section-tiers-toggle">
            {["monthly", "annually"].map((period) => {
              return <button
                key={period}
                className={`ax-button button button-size-lg button-secondary button-toggle ${
                  billingPeriod === period ? "active" : "inactive"
                }`}
                aria-pressed={billingPeriod === period}
                onClick={() => setBillingPeriod(period)}
              >{period === "monthly" ? "Monthly" : "Annually"}</button>;
            })}
          </div>
          <div className="pricing-section-tiers-plans">
            {pricingSectionTiersData[billingPeriod].map((tier) => {
              const planMeta = plan[tier.plan];
              return (
                <div key={tier.plan}
                className={`pricing-section-tiers-plan ${activePlan === tier.plan ? "active" : ""}`}
                onClick={() => setActivePlan(tier.plan)}>
                    {tier.popular && (<p className="pricing-section-tiers-badge">Most popular</p>)}
                  <div className="pricing-section-tiers-plan-header">
                    <h4>{planMeta.title}</h4>
                    <p>{planMeta.description}</p>
                  </div>

                  <div className="pricing-section-tiers-price">
                    <p className="pricing-section-tiers-price-amount"><span>{formatPrice(tier.price, tier.currency, 2)}</span> / month</p>
                    <p className="pricing-section-tiers-price-label">
                      {billingPeriod === "monthly"
                        ? "Billed monthly"
                        : `Billed annually (${formatPrice(
                            tier.price * 12,
                            tier.currency,
                            0
                          )})`}
                    </p>
                  </div>
                  <ul className="pricing-section-tiers-features">
                    {planMeta.features.map((feature) => {
                      return (
                        <li key={feature}>
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
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                  <button className={`ax-button button button-size-xl
                    ${activePlan === tier.plan ? "button-primary" : "button-secondary"}
                    `}>Buy now</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
