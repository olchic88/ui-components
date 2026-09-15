import "./sectionHeader.css";

export default function SectionHeaderReact({
  supportingText,
  title,
  subtitle,
  heading = "h2",
  className = "",
  supportingTextClassName = "",
  titleClassName = "",
  subtitleClassName = "",
}) {
  const Heading = heading; /* for dynamic heading */

  return (
    <div className={`section-header ${className}`}>
      <p className={`section-header-supporting-text ${supportingTextClassName}`}>{supportingText}</p>
      <div className="section-header-content">
        <Heading className={`section-header-title ${titleClassName}`}>
          {title}
        </Heading>
        <p className={`section-header-subtitle ${subtitleClassName}`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
