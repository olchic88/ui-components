import "./pricingSectionTiers.css";
import PricingSectionTiersReact from "./PricingSectionTiersReact";
import { pricingSectionTiersData, plan } from "./pricingSectionTiersData";

export default function PricingSectionTiersReactShowcase() {
  return (
    <div className="container-section">
      <div className="pricing-section-tiers-showcase">
        <PricingSectionTiersReact
          pricingSectionTiersData={pricingSectionTiersData}
          plan={plan}
          supportingText="Pricing Tiers"
          title="Fit for all your needs"
          subtitle="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
        />
      </div>
    </div>
  );
}
