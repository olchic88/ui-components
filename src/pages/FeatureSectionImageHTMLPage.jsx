import FeatureSectionImageHTML from "../components/marketing/FeatureSectionImage/FeatureSectionImageHTML";

export default function FeatureSectionImageHTMLPage({side}) {
  return (
    <div className="fullpage">
      <FeatureSectionImageHTML side={side} heading={false} />
    </div>
  );
}