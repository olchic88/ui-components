import "./navBar.css";
import logo from "./abstractly.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import ButtonReact from "../../../ui/Button/ButtonReact";
import { CloseMenuIcon, MenuIcon } from "../../../icons";

export default function NavbarReact({ navbarLinks, logoTo }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to={logoTo}>
            <img src={logo} alt="Abstractly's logo" width={112} height={32} />
          </Link>
        </div>
        <div className="navbar-content">
          <ul className="navbar-links">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                {link.type === "anchor" ? (
                  <a href={link.to} className="navbar-link link">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.to} className="navbar-link link">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="navbar-actions">
            <ButtonReact
              as="link"
              to="#"
              variant="secondary"
              size="lg"
              className="button-navbar-learn"
            >
              Learn more
            </ButtonReact>
            <ButtonReact
              as="link"
              to="#"
              variant="primary"
              size="lg"
              className="button-navbar-pricing"
            >
              See pricing
            </ButtonReact>
          </div>
        </div>
        <button
          aria-label="Open menu"
          className="button-sidebar-open"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon size={20} />
        </button>
      </nav>
      {isOpen && <div className="sidebar-backdrop" onClick={closeSidebar} />}{" "}
      {/* overlay */}
      <nav id="sidebar" className={`${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="navbar-logo">
            <Link to={logoTo}>
              <img src={logo} alt="Abstractly's logo" width={112} height={32} />
            </Link>
          </div>
          <button
            aria-label="Close menu"
            className="button-sidebar-close"
            onClick={closeSidebar}
          >
            <CloseMenuIcon size={20} />
          </button>
        </div>

        <ul className="navbar-links">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              {link.type === "anchor" ? (
                <a
                  href={link.to}
                  className="sidebar-link link"
                  onClick={closeSidebar}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className="sidebar-link link"
                  onClick={closeSidebar}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="navbar-actions">
          <ButtonReact
            as="link"
            to="#"
            variant="secondary"
            size="lg"
            className="button-navbar-learn"
            onClick={closeSidebar}
          >
            Learn more
          </ButtonReact>
          <ButtonReact
            as="link"
            to="#"
            variant="primary"
            size="lg"
            className="button-navbar-pricing"
            onClick={closeSidebar}
          >
            See pricing
          </ButtonReact>
        </div>
      </nav>
    </>
  );
}
