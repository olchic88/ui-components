import FeatureSectionImageReact from "../components/marketing/FeatureSectionImage/FeatureSectionImageReact";
import { featureSectionImageData } from "../components/marketing/FeatureSectionImage/featureSectionImageData";

export default function FeatureSectionImageReactPage({ side }) {
  return (
    <div className="fullpage">
      <title>Feature Section Side Image</title>
      <FeatureSectionImageReact side={side} heading={false} {...featureSectionImageData[side]} />
    </div>
  );
}
