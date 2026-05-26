import "./logoMarqueeSection.css";
import logo from "./logo.svg";
import logo1 from "./logo-1.svg";
import logo2 from "./logo-2.svg";
import logo3 from "./logo-3.svg";
import logo4 from "./logo-4.svg";
import logo5 from "./logo-5.svg";
import logo6 from "./logo-6.svg";
import logo7 from "./logo-7.svg";

export default function LogoMarqueeSectionHTML() {
  return (
    <div className="container-section">
      <div className="logo-marquee-section">
        <div className="logo-marquee-section-content">
          <h3>Used by teams that you love</h3>
          <div className="logo-marquee-section-logos-wrapper">
            <div className="logo-marquee-section-logos">
              <ul className="logo-marquee-section-logos-strip">
                <li>
                  <img
                    src={logo}
                    alt="Wan Nain's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo1}
                    alt="Robinwood's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo2}
                    alt="BitterFly's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo3}
                    alt="Swapdo's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo4}
                    alt="Wirang's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo5}
                    alt="Diamond's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo6}
                    alt="Air Car's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo7}
                    alt="Makro Hard's logo"
                    width={218}
                    height={96}
                  />
                </li>
              </ul>
              <ul
                className="logo-marquee-section-logos-strip"
                aria-hidden="true"
              >
                <li>
                  <img
                    src={logo}
                    alt="Wan Nain's logo"
                    width={218}
                    height={96}
                    className=""
                  />
                </li>
                <li>
                  <img
                    src={logo1}
                    alt="Robinwood's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo2}
                    alt="BitterFly's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo3}
                    alt="Swapdo's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo4}
                    alt="Wirang's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo5}
                    alt="Diamond's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo6}
                    alt="Air Car's logo"
                    width={218}
                    height={96}
                  />
                </li>
                <li>
                  <img
                    src={logo7}
                    alt="Makro Hard's logo"
                    width={218}
                    height={96}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
