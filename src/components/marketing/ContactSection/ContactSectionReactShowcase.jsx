import "./contactSection.css";
import ContactSectionReact from "./ContactSectionReact";
import { AddressIcon, PhoneIcon, EmailIcon } from "../../../icons";

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

export default function ContactSectionReactShowcase() {
  return (
    <div className="container-section">
      <div className="contact-section-showcase">
        <ContactSectionReact
          title="Talk to our team"
          subtitle="We're committed to delivering the support you require to make your experience as smooth as possible."
          contactDetails={contactDetails}
        />
      </div>
    </div>
  );
}
