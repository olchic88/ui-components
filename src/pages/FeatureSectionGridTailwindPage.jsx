import FeatureSectionGridTailwind from "../components/marketing/FeatureSectionGrid/FeatureSectionGridTailwind";
import { featureSectionGridData } from "../components/marketing/FeatureSectionGrid/featureSectionGridData";

export default function FeatureSectionGridTailwindPage() {
    return (
        <FeatureSectionGridTailwind
        {...featureSectionGridData}
        fullpage={true}
        />
    )
}