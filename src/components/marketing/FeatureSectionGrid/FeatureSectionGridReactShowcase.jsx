import "./featureSectionGrid.css";
import FeatureSectionGridReact from "./FeatureSectionGridReact";
import { featureSectionGridData } from "./featureSectionGridData";

export default function FeatureSectionGridReactShowcase() {
  return (
    <div className="container-section">
      <div className="feature-section-grid-showcase">
        <FeatureSectionGridReact {...featureSectionGridData} />
      </div>
    </div>
  );
}
