import "./footerSection.css";
import { Link } from "react-router";

export default function FooterSectionReact({ footerLinks, socialMediaLinks }) {

const currentYear = new Date().getFullYear;

  return (
    <div className="container-section">
      <div className="footer-section">
        <footer className="footer">
          <div className="footer-section-content">
            <nav aria-label="Footer">
              <ul className="footer-section-nav">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="footer-section-icons">
              {socialMediaLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} target="_blank">
                    <span className="sr-only">{link.label}</span>
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p>
            <small>&copy; {currentYear} Abstractly, Inc. All rights reserved.</small>
          </p>
        </footer>
      </div>
    </div>
  );
}
