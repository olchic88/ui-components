import "./newsletterSection.css";
import NewsletterSectionReact from "./NewsletterSectionReact";
import abstract from "./abstract.webp";

const newsletterFeatures = [
  {
    id: 1,
    text: " Exclusive access to new abstract images and collections",
  },
  { id: 2, text: "Unlock special promotions only for subscribers" },
  { id: 3, text: "Regular doses of artistic inspiration" },
];

export default function NewsletterSectionReactShowcase() {
  return (
    <div className="container-section">
      <div className="newsletter-section-showcase">
        <NewsletterSectionReact
          title="Get the finest curated abstracts delivered weekly to your inbox"
          banner={abstract}
          width={1176}
          height={1216}
          features={newsletterFeatures}
        />
      </div>
    </div>
  );
}
