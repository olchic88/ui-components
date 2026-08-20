import SectionHeaderReact from "../SectionHeader/SectionHeaderReact";
import "./featureSectionGrid.css";

export default function FeatureSectionGridReact({ features }) {
  return (
    <section className="feature-section-grid">
      <SectionHeaderReact
        supportingText="Premium abstract images"
        title="Easy access to top quality images"
        subtitle="In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence."
      ></SectionHeaderReact>

      <ul className="feature-section-grid-features">
        {features.map((feature) => {
          return (
            <li className="feature-section-grid-feature" key={feature.id}>
              <div className="feature-section-grid-feature-icon">
                {feature.icon}
              </div>
              <div className="feature-section-grid-feature-content">
                <h4 className="feature-section-grid-feature-content-title">
                  {feature.title}
                </h4>
                <p className="feature-section-grid-feature-content-text">
                  {feature.text}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
