import FeatureSectionGridReact from "../components/marketing/FeatureSectionGrid/FeatureSectionGridReact";
import { featureSectionGridData } from "../components/marketing/FeatureSectionGrid/featureSectionGridData";

export default function FeatureSectionGridReactPage() {
    return (
            <div className="fullpage">
                <FeatureSectionGridReact {...featureSectionGridData}/>
            </div>
        )
}