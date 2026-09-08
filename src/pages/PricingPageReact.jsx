import "./pageLayout.css";

import { featureSectionGridData } from "../components/marketing/FeatureSectionGrid/featureSectionGridData";
import FeatureSectionGridReact from "../components/marketing/FeatureSectionGrid/FeatureSectionGridReact";

import NavbarReact from "../components/marketing/NavbarComponent/NavbarReact";

import FAQSectionReact from "../components/marketing/FAQSection/FAQSectionReact";

import TestimonialsSectionReact from "../components/marketing/TestimonialsSection/TestimonialsSectionReact";
import { testimonials } from "../components/marketing/TestimonialsSection/testimonialsSectionData";

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

import PricingSectionTiersReact from "../components/marketing/PricingSectionTiers/PricingSectionTiersReact";
import {
  plan,
  pricingSectionTiersData,
} from "../components/marketing/PricingSectionTiers/pricingSectionTiersData";

const navbarLinks = [
  { id: 1, label: "Home", to: "", type: "anchor" },
  { id: 2, label: "Features", to: "", type: "anchor" },
  { id: 3, label: "Pricing", to: "", type: "anchor" },
  { id: 4, label: "About us", to: "", type: "anchor" },
  { id: 5, label: "Contact", to: "", type: "anchor" },
];

const faqs = [
  {
    id: 0,
    question: "Are there any discounts available for long-term subscriptions?",
    answer:
      "Yes! We offer a discount on annual subscriptions. If you choose an annual payment plan, you will receive a discount compared to monthly payments. This is a great way to enjoy all the features of our platform at a reduced cost.",
  },
  {
    id: 1,
    question: "Can I change my subscription plan at any time?",
    answer:
      "Absolutely! You can upgrade or downgrade your subscription at any time. Changes to your plan will take effect at the start of your next billing cycle.",
  },
  {
    id: 3,
    question: "What forms of payment do you accept?",
    answer:
      "We accept all major credit cards, including Visa, MasterCard, and American Express. We also accept payments through PayPal for added convenience.",
  },
  {
    id: 4,
    question:
      "Do you offer any special pricing for educational institutions or non-profits?",
    answer:
      "Yes, we support educational institutions and non-profit organizations by offering special discounted pricing. Please contact us for more details and to see if you qualify.",
  },
  {
    id: 5,
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days of your subscription, you can cancel your plan and receive a full refund.",
  },
  {
    id: 6,
    question: "Are there any additional fees apart from the subscription cost?",
    answer:
      "No, there are no hidden fees. The subscription price is all-inclusive, covering full access to our library and all features listed in your chosen plan.",
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

export default function PricingPageReact() {
  return (
    <>
      <title>Pricing Page</title>
      <div className="page">
        <header className="page-header">
          <NavbarReact navbarLinks={navbarLinks} logoTo={"/marketing"} />
        </header>
        <div className="page-content">
          <main>
            <PricingSectionTiersReact
              pricingSectionTiersData={pricingSectionTiersData}
              plan={plan}
            />

            <FAQSectionReact faqs={faqs} />

            <FeatureSectionGridReact {...featureSectionGridData} />

            <TestimonialsSectionReact testimonials={testimonials} />

            <ContactSectionAPIPage />
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
