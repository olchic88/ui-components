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
        />
      </div>
    </div>
  );
}
