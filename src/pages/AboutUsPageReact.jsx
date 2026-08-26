import "./pageLayout.css";

import HeroSectionSimpleReact from "../components/marketing/HeroSectionSimple/HeroSectionSimpleReact";
import prism from "../components/marketing/HeroSectionSimple/prism.webp";

import NavbarReact from "../components/marketing/NavbarComponent/NavbarReact";

import ContactSectionAPIPage from "./ContactSectionAPIPage";

import {
  AddressIcon,
  PhoneIcon,
  EmailIcon,
  LinkIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  GitHubIcon,
  XIcon,
} from "../icons";

import FooterSectionReact from "../components/marketing/FooterSection/FooterSectionReact";

import StatisticsSectionAPIPage from "./StatisticsSectionAPIPage";

import TeamSectionReact from "../components/marketing/TeamSection/TeamSectionReact";
import joe from "../components/marketing/TeamSection/joe.webp";
import ash from "../components/marketing/TeamSection/ash.webp";
import farias from "../components/marketing/TeamSection/farias.webp";
import sarah from "../components/marketing/TeamSection/sarah.webp";

const navbarLinks = [
  { id: 1, label: "Home", to: "#home", type: "anchor" },
  { id: 2, label: "Features", to: "#features", type: "anchor" },
  { id: 3, label: "Pricing", to: "#pricing", type: "anchor" },
  { id: 4, label: "About us", to: "#about", type: "anchor" },
  { id: 5, label: "Contact", to: "#contact", type: "anchor" },
];

const members = [
  {
    id: 1,
    img: joe,
    name: "Joe Jackson",
    designation: "Founder & CEO",
    description:
      "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
  },
  {
    id: 2,
    img: ash,
    name: "Ash Karter",
    designation: "Founder & CFO",
    description:
      "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
  },
  {
    id: 3,
    img: farias,
    name: "Farias Amed",
    designation: "Front End AI Engineer",
    description:
      "Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.",
  },
  {
    id: 4,
    img: sarah,
    name: "Sarah Haust",
    designation: "Dev Ops",
    description:
      "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
  },
];

const contactDetails = [
  {
    id: 1,
    icon: AddressIcon,
    text: "123 Maple Street, Springfield, IL, USA",
  },
  {
    id: 2,
    icon: PhoneIcon,
    text: "+1 (650) 555-0198",
    href: "tel:+16505550198",
  },
  {
    id: 3,
    icon: EmailIcon,
    text: "hello@abstractly.com",
    href: "mailto:hello@abstractly.com",
  },
];

const footerLinks = [
  { id: 1, label: "Features", to: "/" },
  { id: 2, label: "Pricing", to: "/" },
  { id: 3, label: "About us", to: "/" },
  { id: 4, label: "Contact", to: "/" },
];

const socialMediaLinks = [
  {
    id: 1,
    label: "Youtube",
    href: "/",
    icon: <YoutubeIcon />,
  },
  {
    id: 2,
    label: "Instagram",
    href: "/",
    icon: <InstagramIcon />,
  },
  {
    id: 3,
    label: "Facebook",
    href: "/",
    icon: <FacebookIcon />,
  },
  {
    id: 4,
    label: "GitHub",
    href: "/",
    icon: <GitHubIcon />,
  },
  {
    id: 5,
    label: "X",
    href: "/",
    icon: <XIcon />,
  },
];

export default function AboutUsPageReact() {
  return (
    <>
      <title>About Us Page</title>
      <div className="page">
        <header className="page-header">
          <NavbarReact navbarLinks={navbarLinks} logoTo={"/marketing"} />
        </header>
        <div className="page-content">
          <main>
            <HeroSectionSimpleReact
              title="Well crafted abstract images"
              description="High quality abstract images for your projects, wallpaper and
                                presentations."
              src={prism}
              alt="Colorful abstract geometric shapes"
              width={696}
              height={526}
            />

            <StatisticsSectionAPIPage />

            <TeamSectionReact members={members} />

            <ContactSectionAPIPage
              title="Talk to our team"
              subtitle="We're committed to delivering the support you require to make your experience as smooth as possible."
              contactDetails={contactDetails}
            />
          </main>
          <footer>
            <FooterSectionReact
              footerLinks={footerLinks}
              socialMediaLinks={socialMediaLinks}
            />
          </footer>
        </div>
      </div>
    </>
  );
}
