import StatisticsSectionReact from "../components/marketing/StatisticsSection/StatisticsSectionReact";
import { useSuspenseQuery } from "@tanstack/react-query";
import { get } from "../fetcher.jsx";
import whiteBlocks from "../components/marketing/StatisticsSection/whiteBlocks.png";

export default function StatisticsSectionAPIPage() {
  const { data } = useSuspenseQuery({
    queryKey: ["statistics"],
    queryFn: () => get("statistics-metrics?latest=true"),
  });

  console.log(data);

  // get("statistics-WRONG"), to test //

  const formatMetric = (metric) => {
    const withSpaces = metric.replace("_", " ");
    return withSpaces[0].toUpperCase() + withSpaces.substring(1).toLowerCase();
  };

  const statistics = data?.data?.map((card) => ({
    id: card.metric,
    value: new Intl.NumberFormat("en-US").format(card.value),
    metric: formatMetric(card.metric),
  }));

  // const statistics = undefined; to test //

  return (
    <div className="fullpage">
      <title>Statistics Section</title>
      <StatisticsSectionReact
        supportingText="Statistics"
        title="More than premium abstract imagery"
        subtitle="Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery."
        src={whiteBlocks}
        alt="White blocks"
        width={592}
        height={544}
        statsTitle="Our mission, in numbers"
        statistics={statistics}
      />
    </div>
  );
}

/* Suspense in App.tsx */
