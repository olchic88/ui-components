import StatisticsSectionTailwind from "../components/marketing/StatisticsSection/StatisticsSectionTailwind.jsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "../fetcher.jsx";
import whiteBlocks from "../components/marketing/StatisticsSection/whiteBlocks.png";

export default function StatisticsSectionAPITailwindPage() {
  const { data } = useSuspenseQuery({
    queryKey: ["statistics"],
    queryFn: () => get("statistics-metrics?latest=true"),
  });

  const formatMetric = (metric) => {
    const withSpaces = metric.replace("_", " ");
    return withSpaces[0].toUpperCase() + withSpaces.substring(1).toLowerCase();
  };

  const statistics = data?.data.map((card) => ({
    id: card.metric,
    value: new Intl.NumberFormat("en-US").format(card.value),
    metric: formatMetric(card.metric),
  }));

  return (
    <div className="fullpage">
      <title>Statistics Section</title>
      <StatisticsSectionTailwind
        supportingText="Statistics"
        title="More than premium abstract imagery"
        subtitle="Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery."
        src={whiteBlocks}
        alt="White blocks"
        width={592}
        height={544}
        statsTitle="Our mission, in numbers"
        statistics={statistics}
        fullpage={true}
      />
    </div>
  );
}

/* Suspense in App.tsx */
