import "./teamSection.css";

export default function TeamSectionReact({
  supportingText,
  title,
  subtitle,
  members,
}) {
  return (
    <div className="container-section">
      <div className="team-section">
        <div className="team-section-header">
          <p className="team-section-header-supporting-text">
            {supportingText}
          </p>
          <div className="team-section-header-content">
            <h3 className="team-section-header-title">{title}</h3>
            <p className="team-section-header-subtitle">{subtitle}</p>
          </div>
        </div>
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
      </div>
    </div>
  );
}
