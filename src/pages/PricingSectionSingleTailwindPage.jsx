import PricingSectionSingleTailwind from "../components/marketing/PricingSectionSingle/PricingSectionSingleTailwind"

export default function PricingSectionSingleTailwindPage() {
    return (
        <>
        <title>Pricing Section Single</title>
        <PricingSectionSingleTailwind
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
          fullpage={true}
        />
        </>
    )
}