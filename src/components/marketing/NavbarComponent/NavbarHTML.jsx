import "./navBar.css";
import logo from "./abstractly.svg";
import { Link } from "react-router";

export default function NavbarHTML() {
  return (
    <div className="container-section">
      <div className="navbar-section navbar-section-showcase">
        <div className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Abstractly's logo" width={112} height={32} />
            </Link>
          </div>
          <nav className="navbar-content">
            <ul className="navbar-links">
              <li>
                <Link to="/" className="navbar-link link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="navbar-link link">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="navbar-link link">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="navbar-link link">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" className="navbar-link link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="navbar-actions">
              <Link
                to="/"
                className="ax-button button button-secondary button-size-lg button-navbar-learn"
              >
                Learn more
              </Link>
              <Link
                to="/"
                className="ax-button button button-primary button-size-lg button-navbar-pricing"
              >
                See pricing
              </Link>
            </div>
          </nav>
          <button
            aria-label="Open menu"
            className="ax-button button-sidebar-open"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 3.33333H17.5V5H2.5V3.33333ZM2.5 9.16667H17.5V10.8333H2.5V9.16667ZM2.5 15H17.5V16.6667H2.5V15Z"
                fill="#525252"
              />
            </svg>
          </button>
        </div>

        <nav id="sidebar" className="open">
          <div className="sidebar-header">
            <div className="navbar-logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="Abstractly's logo"
                  width={112}
                  height={32}
                />
              </Link>
            </div>
            <button
              aria-label="Close menu"
              className="ax-button button-sidebar-close"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0006 8.82208L14.1253 4.69727L15.3038 5.87577L11.1791 10.0006L15.3038 14.1253L14.1253 15.3038L10.0006 11.1791L5.87577 15.3038L4.69727 14.1253L8.82208 10.0006L4.69727 5.87577L5.87577 4.69727L10.0006 8.82208Z"
                  fill="#525252"
                />
              </svg>
            </button>
          </div>

          <ul className="navbar-links">
            <li>
              <Link to="/" className="sidebar-link link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="sidebar-link link">
                Features
              </Link>
            </li>
            <li>
              <Link to="/" className="sidebar-link link">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" className="sidebar-link link">
                About us
              </Link>
            </li>
            <li>
              <Link to="/" className="sidebar-link link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar-actions">
            <Link
              to="/"
              className="ax-button button button-secondary button-size-lg button-navbar-learn"
            >
              Learn more
            </Link>
            <Link
              to="/"
              className="ax-button button button-primary button-size-lg button-navbar-pricing"
            >
              See pricing
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
