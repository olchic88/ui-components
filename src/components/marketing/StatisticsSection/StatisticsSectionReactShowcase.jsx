import StatisticsSectionReact from "./StatisticsSectionReact";
import whiteBlocks from "./whiteBlocks.webp";

export default function StatisticsSectionReactShowcase() {
  return (
    <div className="container-section">
      <div className="statistics-section-showcase">
        <StatisticsSectionReact
          src={whiteBlocks}
          alt="White blocks"
          width={592}
          height={544}
          statsTitle="Our mission, in numbers"
          statistics={[
            { id: 1, value: "25,664,890", metric: "Downloads" },
            { id: 2, value: "17,219", metric: "Paid users" },
            {
              id: 3,
              value: "190,654,321",
              metric: "Images in library",
            },
          ]}
        />
      </div>
    </div>
  );
}
