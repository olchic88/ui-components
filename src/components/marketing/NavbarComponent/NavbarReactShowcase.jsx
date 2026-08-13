import "./navBar.css";
import NavbarReact from "./NavbarReact";

const navbarLinks = [
  { id: 1, label: "Home", to: "/" },
  { id: 2, label: "Features", to: "/" },
  { id: 3, label: "Pricing", to: "/" },
  { id: 4, label: "About us", to: "/" },
  { id: 5, label: "Contact", to: "/" },
];

export default function NavbarReactShowcase() {
  return (
    <div className="container-section">
      <div className="navbar-section-showcase">
        <NavbarReact navbarLinks={navbarLinks} logoTo={"/"} />
      </div>
    </div>
  );
}
