import SectionHeaderReact from "../SectionHeader/SectionHeaderReact";
import "./teamSection.css";

export default function TeamSectionReact({ members }) {
  return (
    <section className="team-section">
      <SectionHeaderReact
        supportingText="Team"
        title="Meet our team"
        subtitle="From skilled designers to tech-savvy developers, each member brings a unique perspective and expertise to the table."
      />

      <ul className="team-section-members">
        {members.map((member) => (
          <li key={member.id} className="team-section-member">
            <img
              src={member.img}
              alt={member.name}
              width={300}
              height={298}
              className="team-section-member-picture"
            />
            <div className="team-section-member-info">
              <div className="team-section-member-info-header">
                <h4 className="team-section-member-name">{member.name}</h4>
                <p className="team-section-member-designation">
                  {member.designation}
                </p>
              </div>
              <p className="team-section-member-description">
                {member.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
