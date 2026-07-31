import "./logoMarqueeSection.css";
import LogoStripReact from "./LogoStripReact";
import { logos } from "./logoMarqueeSectionData";

export default function LogoMarqueeSectionReact() {
  return (
    <section className="logo-marquee-section">
      <div className="logo-marquee-section-content">
        <h3>Used by teams that you love</h3>
        <div className="logo-marquee-section-logos-wrapper">
          <div className="logo-marquee-section-logos">
            <LogoStripReact logos={logos} />
            <LogoStripReact logos={logos} ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
