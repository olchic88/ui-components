import FeatureSectionGridTailwind from "../components/marketing/FeatureSectionGrid/FeatureSectionGridTailwind";
import { featureSectionGridData } from "../components/marketing/FeatureSectionGrid/featureSectionGridData";

export default function FeatureSectionGridTailwindPage() {
    return (
        <>
        <title>Feature Section Grid</title>
        <FeatureSectionGridTailwind
        {...featureSectionGridData}
        fullpage={true}
        />
        </>
    )
}