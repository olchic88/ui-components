import FeatureSectionImageTailwind from "../components/marketing/FeatureSectionImage/FeatureSectionImageTailwind";
import { featureSectionImageData } from "../components/marketing/FeatureSectionImage/featureSectionImageData";

export default function FeatureSectionImageTailwindPage({ side }) {
  return (
    <FeatureSectionImageTailwind
      side={side}
      heading={false}
      fullpage={true}
      {...featureSectionImageData[side]}
    />
  );
}
