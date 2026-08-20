import { useState } from "react";
import "./pricingSectionTiers.css";
import ButtonReact from "../../../ui/Button/ButtonReact";
import { CheckCircleIcon } from "../../../icons";
import SectionHeaderReact from "../SectionHeader/SectionHeaderReact";

export default function PricingSectionTiersReact({
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
    <section className="pricing-section-tiers">
      <SectionHeaderReact
        supportingText="Pricing Tiers"
        title="Fit for all your needs"
        subtitle="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
      ></SectionHeaderReact>

      <div className="pricing-section-tiers-content">
        {/* segmented controls / segmented buttons */}
        <div className="pricing-section-tiers-toggle">
          {["monthly", "annually"].map((period) => (
            <ButtonReact
              key={period}
              size="lg"
              variant="secondary"
              className={`button-toggle ${
                billingPeriod === period ? "active" : "inactive"
              }`}
              aria-pressed={billingPeriod === period}
              onClick={() => setBillingPeriod(period)}
            >
              {period === "monthly" ? "Monthly" : "Annually"}
            </ButtonReact>
          ))}
        </div>
        <div className="pricing-section-tiers-plans">
          {pricingSectionTiersData[billingPeriod].map((tier) => {
            const planMeta = plan[tier.plan];
            return (
              <div
                key={tier.plan}
                className={`pricing-section-tiers-plan ${activePlan === tier.plan ? "active" : ""}`}
                onClick={() => setActivePlan(tier.plan)}
              >
                {tier.popular && (
                  <p className="pricing-section-tiers-badge">Most popular</p>
                )}
                <div className="pricing-section-tiers-plan-header">
                  <h4>{planMeta.title}</h4>
                  <p>{planMeta.description}</p>
                </div>

                <div className="pricing-section-tiers-price">
                  <p className="pricing-section-tiers-price-amount">
                    <span>{formatPrice(tier.price, tier.currency, 2)}</span> /
                    month
                  </p>
                  <p className="pricing-section-tiers-price-label">
                    {billingPeriod === "monthly"
                      ? "Billed monthly"
                      : `Billed annually (${formatPrice(
                          tier.price * 12,
                          tier.currency,
                          0,
                        )})`}
                  </p>
                </div>
                <ul className="pricing-section-tiers-features">
                  {planMeta.features.map((feature) => {
                    return (
                      <li key={feature}>
                        <CheckCircleIcon />
                        {feature}
                      </li>
                    );
                  })}
                </ul>
                <ButtonReact
                  variant={activePlan === tier.plan ? "primary" : "secondary"}
                  size="xl"
                >
                  Buy now
                </ButtonReact>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
