import "./pageLayout.css";

import { featureSectionGridData } from "../components/marketing/FeatureSectionGrid/featureSectionGridData";
import FeatureSectionGridReact from "../components/marketing/FeatureSectionGrid/FeatureSectionGridReact";

import FeatureSectionImageReact from "../components/marketing/FeatureSectionImage/FeatureSectionImageReact";
import { featureSectionImageData } from "../components/marketing/FeatureSectionImage/featureSectionImageData";

import HeroSectionSimpleReact from "../components/marketing/HeroSectionSimple/HeroSectionSimpleReact";
import prism from "../components/marketing/HeroSectionSimple/prism.webp";

import LogoMarqueeSectionReact from "../components/marketing/LogoMarqueeSection/LogoMarqueeSectionReact";

import NavbarReact from "../components/marketing/NavbarComponent/NavbarReact";

import PricingSectionTiersReact from "../components/marketing/PricingSectionTiers/PricingSectionTiersReact";
import {
  pricingSectionTiersData,
  plan,
} from "../components/marketing/PricingSectionTiers/pricingSectionTiersData";

import FAQSectionReact from "../components/marketing/FAQSection/FAQSectionReact";

import NewsletterSectionReact from "../components/marketing/NewsletterSection/NewsletterSectionReact";
import abstract from "../components/marketing/NewsletterSection/abstract.webp";

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
    question: "What types of images are available on your platform?",
    answer:
      "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
  },
  {
    id: 1,
    question: "How can I access and download images from your platform?",
    answer:
      "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
  },
  {
    id: 3,
    question: "Do you offer free images, or is there a subscription required?",
    answer:
      "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
  },
  {
    id: 4,
    question: "What payment methods do you accept for subscriptions?",
    answer:
      "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
  },
  {
    id: 5,
    question: "Can I cancel or modify my subscription at any time?",
    answer:
      "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
  },
  {
    id: 6,
    question: "How frequently do you update your image collection?",
    answer:
      "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
  },
];

const newsletterFeatures = [
  {
    id: 1,
    text: " Exclusive access to new abstract images and collections",
  },
  { id: 2, text: "Unlock special promotions only for subscribers" },
  { id: 3, text: "Regular doses of artistic inspiration" },
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

export default function MarketingLandingPageReact() {
  return (
    <>
      <title>Marketing Landing Page</title>
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

            <LogoMarqueeSectionReact />

            <FeatureSectionGridReact {...featureSectionGridData} />

            <FeatureSectionImageReact
              side="right"
              {...featureSectionImageData.right}
            />
            <FeatureSectionImageReact
              side="left"
              {...featureSectionImageData.left}
            />

            <PricingSectionTiersReact
              pricingSectionTiersData={pricingSectionTiersData}
              plan={plan}
              supportingText="Pricing Tiers"
              title="Fit for all your needs"
              subtitle="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
            />

            <FAQSectionReact faqs={faqs} />

            <NewsletterSectionReact
              title="Get the finest curated abstracts delivered weekly to your inbox"
              banner={abstract}
              width={1176}
              height={1216}
              features={newsletterFeatures}
            />

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
