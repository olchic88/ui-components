import SectionHeaderReact from "../SectionHeader/SectionHeaderReact";
import "./statisticsSection.css";

export default function StatisticsSectionReact({
  src,
  alt,
  width,
  height,
  statsTitle,
  statistics = [], // защита от пустых данных, если после fetch statistics = undefined //
}) {
  return (
    <section className="statistics-section">
      <SectionHeaderReact
        supportingText="Statistics"
        title="More than premium abstract imagery"
        subtitle="Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery."
      />

      <div className="statistics-section-content">
        <div className="statistics-section-image-wrapper">
          <img src={src} alt={alt} width={width} height={height} />
        </div>
        <div className="statistics-section-stats-wrapper">
          <p className="statistics-section-stats-title">{statsTitle}</p>
          {statistics.length === 0 ? (
            <p>No statistics available</p>
          ) : (
            <ul className="statistics-section-stats">
              {statistics.map((card) => (
                <li key={card.id} className="statistics-section-stats-card">
                  <p className="statistics-section-stats-card-number">
                    {card.value}
                  </p>
                  <p>{card.metric}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
