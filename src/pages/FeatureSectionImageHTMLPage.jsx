import FeatureSectionImageHTML from "../components/marketing/FeatureSectionImage/FeatureSectionImageHTML";

export default function FeatureSectionImageHTMLPage({side}) {
  return (
    <div className="fullpage">
      <title>Feature Section Side Image</title>
      <FeatureSectionImageHTML side={side} heading={false} />
    </div>
  );
}