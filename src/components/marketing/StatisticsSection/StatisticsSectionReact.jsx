import "./statisticsSection.css";

export default function StatisticsSectionReact({
  supportingText,
  title,
  subtitle,
  src,
  alt,
  width,
  height,
  statsTitle,
  statistics = [], // защита от пустых данных, если после fetch statistics = undefined //
}) {
  return (
    <div className="container-section">
      <div className="statistics-section">
        <div className="statistics-section-header">
          <p className="statistics-section-header-supporting-text">
            {supportingText}
          </p>
          <div className="statistics-section-header-content">
            <h3 className="statistics-section-header-title">{title}</h3>
            <p className="statistics-section-header-subtitle">{subtitle}</p>
          </div>
        </div>
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
      </div>
    </div>
  );
}
