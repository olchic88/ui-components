import "./featureSectionImage.css";
import FeatureSectionImageReact from "./FeatureSectionImageReact";
import { featureSectionImageData } from "./featureSectionImageData";

export default function FeatureSectionImageReactShowcase() {
  return (
    <div className="container-section">
      <div className="feature-section-showcase">
        <div className="feature-section-showcase-item">
          <FeatureSectionImageReact
            side="right"
            {...featureSectionImageData.right}
          />
        </div>

        <div className="feature-section-showcase-item">
          <FeatureSectionImageReact
            side="left"
            {...featureSectionImageData.left}
          />
        </div>
      </div>
    </div>
  );
}
