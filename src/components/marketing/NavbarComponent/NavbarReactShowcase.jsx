import "./navBar.css";
import NavbarReact from "./NavbarReact";

const navbarLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/" },
  { label: "Pricing", to: "/" },
  { label: "About us", to: "/" },
  { label: "Contact", to: "/" },
];

export default function NavbarReactShowcase() {
  return (
    <div className="container-section">
      <div className="navbar-section">
        <NavbarReact navbarLinks={navbarLinks} />
      </div>
    </div>
  );
}
