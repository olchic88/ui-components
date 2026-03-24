import "./teamSection.css";

import joe from "./joe.webp";
import ash from "./ash.webp";
import farias from "./farias.webp";
import sarah from "./sarah.webp";

export default function TeamSectionHTML() {
  return (
    <>
      <div className="container-section">
        <div className="team-section">
          <div className="team-section-header">
            <p className="team-section-header-supporting-text">Team</p>
            <div className="team-section-header-content">
              <h3 className="team-section-header-title">Meet our team</h3>
              <p className="team-section-header-subtitle">
                From skilled designers to tech-savvy developers, each member
                brings a unique perspective and expertise to the table.
              </p>
            </div>
          </div>
          <ul className="team-section-members">
            <li className="team-section-member">
              <img
                src={joe}
                alt="Joe Jackson"
                width={300}
                height={298}
                className="team-section-member-picture"
              />
              <div className="team-section-member-info">
                <div className="team-section-member-info-header">
                  <h4 className="team-section-member-name">Joe Jackson</h4>
                  <p className="team-section-member-designation">
                    Founder & CEO
                  </p>
                </div>
                <p className="team-section-member-description">
                  Joe leads with a strategic vision for innovation and growth.
                  With a passion for combining artistry with technology, he
                  drives our mission to deliver cutting-edge solutions.
                </p>
              </div>
            </li>
            <li className="team-section-member">
              <img
                src={ash}
                alt="Ash Karter"
                width={300}
                height={298}
                className="team-section-member-picture"
              />
              <div className="team-section-member-info">
                <div className="team-section-member-info-header">
                  <h4 className="team-section-member-name">Ash Karter</h4>
                  <p className="team-section-member-designation">
                    Founder & CFO
                  </p>
                </div>
                <p className="team-section-member-description">
                  Ash brings financial acumen and a keen eye for detail to our
                  operations. Her leadership ensures sustainable growth and
                  operational excellence.
                </p>
              </div>
            </li>
            <li className="team-section-member">
              <img
                src={farias}
                alt="Farias Amed"
                width={300}
                height={298}
                className="team-section-member-picture"
              />
              <div className="team-section-member-info">
                <div className="team-section-member-info-header">
                  <h4 className="team-section-member-name">Farias Amed</h4>
                  <p className="team-section-member-designation">
                    Front End AI Engineer
                  </p>
                </div>
                <p className="team-section-member-description">
                  Farias is at the forefront of AI-driven design, developing
                  interfaces that blend intuitive usability with advanced
                  functionality.
                </p>
              </div>
            </li>
            <li className="team-section-member">
              <img
                src={sarah}
                alt="Sarah Haust"
                width={300}
                height={298}
                className="team-section-member-picture"
              />
              <div className="team-section-member-info">
                <div className="team-section-member-info-header">
                  <h4 className="team-section-member-name">Sarah Haust</h4>
                  <p className="team-section-member-designation">Dev Ops</p>
                </div>
                <p className="team-section-member-description">
                  Sarah orchestrates our development pipelines with precision,
                  ensuring seamless deployment cycles and system reliability.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
