import PricingSectionSingleReact from "../components/marketing/PricingSectionSingle/PricingSectionSingleReact";

export default function PricingSectionSingleReactPage() {
  return (
    <div className="fullpage">
      <title>Pricing Section Single</title>
      <PricingSectionSingleReact
        supportingText="One time purchase"
        title="Pay as you need"
        subtitle="We offer one-time purchases with credits, for you to use as needed. Always active."
        featuresTitle="Unlock creativity once, enjoy forever"
        features={[
          { id: 1, text: "128 available credits for all images" },
          { id: 2, text: "Up to 3 users" },
          { id: 3, text: "24 hour response time" },
          { id: 4, text: "Advanced analytics" },
        ]}
        price={699}
        badge="Popular"
        currency="USD"
        buttonText="Buy now"
        desc="Pay once, use it forever. No strings attached."
      />
    </div>
  );
}
