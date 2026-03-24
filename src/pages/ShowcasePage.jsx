import { Link } from "react-router";

import { AddressIcon, PhoneIcon, EmailIcon, LinkIcon } from "../icons";

import TestimonialCardHTML from "../components/marketing/TestimonialCard/TestimonialCardHTML.jsx";
import TestimonialCardReact from "../components/marketing/TestimonialCard/TestimonialCardReact.jsx";
import TestimonialCardTailwind from "../components/marketing/TestimonialCard/TestimonialCardTailwind.jsx";
import profileThumbnail1 from "../components/marketing/TestimonialCard/profile-thumbnail-1.png";
import profileThumbnail2 from "../components/marketing/TestimonialCard/profile-thumbnail-2.png";

import BlogCardHTML from "../components/marketing/BlogCard/BlogCardHTML.jsx";
import BlogCardReact from "../components/marketing/BlogCard/BlogCardReact.jsx";
import BlogCardTailwind from "../components/marketing/BlogCard/BlogCardTailwind.jsx";
import blogCard1 from "../components/marketing/BlogCard/blog-card-1.jpg";

import ProfileCardHTML from "../components/marketing/ProfileCard/ProfileCardHTML.jsx";
import ProfileCardReact from "../components/marketing/ProfileCard/ProfileCardReact.jsx";
import ProfileCardTailwind from "../components/marketing/ProfileCard/ProfileCardTailwind.jsx";
import profile from "../components/marketing/ProfileCard/profile.png";

import HeroSectionSimpleHTML from "../components/marketing/HeroSectionSimple/HeroSectionSimpleHTML.jsx";
import HeroSectionSimpleReact from "../components/marketing/HeroSectionSimple/HeroSectionSimpleReact.jsx";
import HeroSectionSimpleTailwind from "../components/marketing/HeroSectionSimple/HeroSectionSimpleTailwind.jsx";
import prism from "../components/marketing/HeroSectionSimple/prism.png";

import HeroSectionFeatureBulletsHTML from "../components/marketing/HeroSectionFeatureBullets/HeroSectionFeatureBulletsHTML.jsx";
import HeroSectionFeatureBulletsReact from "../components/marketing/HeroSectionFeatureBullets/HeroSectionFeatureBulletsReact.jsx";
import HeroSectionFeatureBulletsTailwind from "../components/marketing/HeroSectionFeatureBullets/HeroSectionFeatureBulletsTailwind.jsx";
import prismFeatureBullets from "../components/marketing/HeroSectionFeatureBullets/prismFeatureBullets.png";

import FeatureSectionImageHTML from "../components/marketing/FeatureSectionImage/FeatureSectionImageHTML.jsx";
import FeatureSectionImageReact from "../components/marketing/FeatureSectionImage/FeatureSectionImageReact.jsx";
import FeatureSectionImageTailwind from "../components/marketing/FeatureSectionImage/FeatureSectionImageTailwind.jsx";
import { featureSectionImageData } from "../components/marketing/FeatureSectionImage/featureSectionImageData.jsx";
import unsplashLeft from "../components/marketing/FeatureSectionImage/unsplashLeft.jpg";
import unsplashRight from "../components/marketing/FeatureSectionImage/unsplashRight.jpg";

import FeatureSectionGridHTML from "../components/marketing/FeatureSectionGrid/FeatureSectionGridHTML.jsx";
import FeatureSectionGridReact from "../components/marketing/FeatureSectionGrid/FeatureSectionGridReact.jsx";
import { featureSectionGridData } from "../components/marketing/FeatureSectionGrid/featureSectionGridData.jsx";
import FeatureSectionGridTailwind from "../components/marketing/FeatureSectionGrid/FeatureSectionGridTailwind.jsx";

import PricingSectionSingleHTML from "../components/marketing/PricingSectionSingle/PricingSectionSingleHTML.jsx";
import PricingSectionSingleReact from "../components/marketing/PricingSectionSingle/PricingSectionSingleReact.jsx";
import PricingSectionSingleTailwind from "../components/marketing/PricingSectionSingle/PricingSectionSingleTailwind.jsx";

import PricingSectionTiersHTML from "../components/marketing/PricingSectionTiers/PricingSectionTiersHTML.jsx";
import PricingSectionTiersReact from "../components/marketing/PricingSectionTiers/PricingSectionTiersReact.jsx";
import {
  pricingSectionTiersData,
  plan,
} from "../components/marketing/PricingSectionTiers/pricingSectionTiersData.jsx";
import PricingSectionTiersTailwind from "../components/marketing/PricingSectionTiers/PricingSectionTiersTailwind.jsx";

import StatisticsSectionHTML from "../components/marketing/StatisticsSection/StatisticsSectionHTML.jsx";
import StatisticsSectionReact from "../components/marketing/StatisticsSection/StatisticsSectionReact.jsx";
import whiteBlocks from "../components/marketing/StatisticsSection/whiteBlocks.png";
import StatisticsSectionTailwind from "../components/marketing/StatisticsSection/StatisticsSectionTailwind.jsx";

import NewsletterSectionHTML from "../components/marketing/NewsletterSection/NewsletterSectionHTML.jsx";
import NewsletterSectionReact from "../components/marketing/NewsletterSection/NewsletterSectionReact.jsx";
import abstract from "../components/marketing/NewsletterSection/abstract.jpg";
import NewsletterSectionTailwind from "../components/marketing/NewsletterSection/NewsletterSectionTailwind.jsx";

import ContactSectionHTML from "../components/marketing/ContactSection/ContactSectionHTML.jsx";
import ContactSectionReact from "../components/marketing/ContactSection/ContactSectionReact.jsx";
import ContactSectionTailwind from "../components/marketing/ContactSection/ContactSectionTailwind.jsx";

import TeamSectionHTML from "../components/marketing/TeamSection/TeamSectionHTML.jsx";
import TeamSectionReact from "../components/marketing/TeamSection/TeamSectionReact.jsx";
import joe from "../components/marketing/TeamSection/joe.webp";
import ash from "../components/marketing/TeamSection/ash.webp";
import farias from "../components/marketing/TeamSection/farias.webp";
import sarah from "../components/marketing/TeamSection/sarah.webp";
import TeamSectionTailwind from "../components/marketing/TeamSection/TeamSectionTailwind.jsx";

export default function Showcase() {
  return (
    <main id="layout-page-overlay">
      <div className="container">
        <section>
          <h2 className="section-title">Testimonial Cards (HTML+CSS)</h2>
          <div className="testimonial-card-container">
            <TestimonialCardHTML />
          </div>
          <h2 className="section-title">Testimonial Cards (React)</h2>
          <div className="testimonial-card-container">
            <TestimonialCardReact
              img={profileThumbnail1}
              name="Michael Carter"
              username="mikec"
              text="I’ve started using this app to track my workouts, and it’s been a
                game changer. The progress charts keep me motivated every day."
            />
            <TestimonialCardReact
              img={profileThumbnail2}
              name="Elizabeth Alexandra Montgomery"
              username="elizabeth_alexandra_montgomery_the_third"
              text="I’ve been using this tool for a few weeks now, and I’m genuinely
                impressed. It saves me hours of manual work every single day and
                lets me focus on the creative part of my projects instead of routine
                tasks. Highly recommend it to anyone who values efficiency! Also, check this supercalifragilisticexpialidociouswordthatkeepsgrowing!"
            />
          </div>
          <h2 className="section-title">Testimonial Cards (React+Tailwind)</h2>
          <div className="testimonial-card-container">
            <TestimonialCardTailwind
              img={profileThumbnail1}
              name="Michael Carter"
              username="mikec"
              text="I’ve started using this app to track my workouts, and it’s been a
                game changer. The progress charts keep me motivated every day."
            />
            <TestimonialCardTailwind
              img={profileThumbnail2}
              name="Elizabeth Alexandra Montgomery"
              username="elizabeth_alexandra_montgomery_the_third"
              text="I’ve been using this tool for a few weeks now, and I’m genuinely
                impressed. It saves me hours of manual work every single day and
                lets me focus on the creative part of my projects instead of routine
                tasks. Highly recommend it to anyone who values efficiency! Also, check this supercalifragilisticexpialidociouswordthatkeepsgrowing!"
            />
          </div>
        </section>
        <section>
          <h2 className="section-title">Blog Card (HTML+CSS)</h2>
          <BlogCardHTML />
          <h2 className="section-title">Blog Card (React)</h2>
          <BlogCardReact
            src={blogCard1}
            alt="Beautifully designed living room with modern decor"
            width={340}
            height={288}
            badge="Interior"
            title="Top 5 Living Room Inspirations"
            text="Curated vibrants colors for your living, make it pop & calm in the same time."
          />
          <h2 className="section-title">Blog Card (React+Tailwind)</h2>
          <BlogCardTailwind
            src={blogCard1}
            alt="Beautifully designed living room with modern decor"
            width={340}
            height={288}
            badge="Interior"
            title="Top 5 Living Room Inspirations"
            text="Curated vibrants colors for your living, make it pop & calm in the same time."
          />
        </section>
        <section>
          <h2 className="section-title">Profile Card (HTML+CSS)</h2>
          <ProfileCardHTML />
          <h2 className="section-title">Profile Card (React)</h2>
          <ProfileCardReact
            src={profile}
            width={64}
            height={64}
            name="Sarah Dole"
            designation="Front End Engineer @ Microsoft"
            bio="I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer."
          />
          <h2 className="section-title">Profile Card (React+Tailwind)</h2>
          <ProfileCardTailwind
            src={profile}
            width={64}
            height={64}
            name="Sarah Dole"
            designation="Front End Engineer @ Microsoft"
            bio="I turn coffee into bugs which are fixed by someone else. Certified
          Stack Overflow and ChatGPT developer."
          />
        </section>
      </div>

      <section className="showcase">
        <h2 className="section-title">Hero Section Simple (HTML+CSS)</h2>
        <HeroSectionSimpleHTML />
        <Link to="/hero-simple-html" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
        <h2 className="section-title">Hero Section Simple (React)</h2>
        <HeroSectionSimpleReact
          title="Well crafted abstract images"
          description="High quality abstract images for your projects, wallpaper and
                presentations."
          src={prism}
          alt="Colorful abstract geometric shapes"
          width={696}
          height={526}
        />
        <Link to="/hero-simple-react" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
        <h2 className="section-title">Hero Section Simple (React+Tailwind)</h2>
        <HeroSectionSimpleTailwind
          title="Well crafted abstract images"
          description="High quality abstract images for your projects, wallpaper and
                presentations."
          src={prism}
          alt="Colorful abstract geometric shapes"
          width={696}
          height={526}
          fullpage={false}
        />
        <Link to="/hero-simple-tailwind" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
      </section>
      <section className="showcase">
        <h2 className="section-title">
          Hero Section Feature Bullets (HTML+CSS)
        </h2>
        <HeroSectionFeatureBulletsHTML />
        <Link to="/hero-feature-bullets-html" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
        <h2 className="section-title">Hero Section Feature Bullets (React)</h2>
        <HeroSectionFeatureBulletsReact
          title="Premium abstract images"
          bullets={[
            { id: 1, text: "Minimum 5K image resolution" },
            { id: 2, text: "Various format variants available" },
            { id: 3, text: "Retina display support" },
          ]}
          src={prismFeatureBullets}
          alt="Colorful abstract geometric shapes"
          width={696}
          height={526}
        />
        <Link to="/hero-feature-bullets-react" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
        <h2 className="section-title">
          Hero Section Feature Bullets (React+Tailwind)
        </h2>
        <HeroSectionFeatureBulletsTailwind
          title="Premium abstract images"
          bullets={[
            { id: 1, text: "Minimum 5K image resolution" },
            { id: 2, text: "Various format variants available" },
            { id: 3, text: "Retina display support" },
          ]}
          src={prismFeatureBullets}
          alt="Colorful abstract geometric shapes"
          width={696}
          height={526}
          fullpage={false}
        />
        <Link to="/hero-feature-bullets-tailwind" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
      </section>
      <section className="showcase">
        <h2 className="section-title">Feature Section Side Image (HTML+CSS)</h2>
        <FeatureSectionImageHTML side="right" heading={true} />
        <Link to="/feature-section-image-right-html" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
        <FeatureSectionImageHTML side="left" heading={true} />
        <Link to="/feature-section-image-left-html" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
        <h2 className="section-title">Feature Section Side Image (React)</h2>
        <FeatureSectionImageReact
          side="right"
          heading={true}
          {...featureSectionImageData.right}
        />
        <Link
          to="/feature-section-image-right-react"
          className="view-full-link"
        >
          View full page
          <LinkIcon />
        </Link>
        <FeatureSectionImageReact
          side="left"
          heading={true}
          {...featureSectionImageData.left}
        />
        <Link to="/feature-section-image-left-react" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
        <h2 className="section-title">
          Feature Section Side Image (React+Tailwind)
        </h2>
        <FeatureSectionImageTailwind
          side="right"
          heading={true}
          fullpage={false}
          {...featureSectionImageData.right}
        />
        <Link
          to="/feature-section-image-right-tailwind"
          className="view-full-link"
        >
          View full page
          <LinkIcon />
        </Link>
        <FeatureSectionImageTailwind
          side="left"
          heading={true}
          fullpage={false}
          {...featureSectionImageData.left}
        />
        <Link
          to="/feature-section-image-left-tailwind"
          className="view-full-link"
        >
          View full page
          <LinkIcon />
        </Link>
      </section>
      <section className="showcase">
        <h2 className="section-title">Feature Section Grid (HTML+CSS)</h2>
        <FeatureSectionGridHTML />
        <Link to="/feature-section-grid-html" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
        <h2 className="section-title">Feature Section Grid (React)</h2>
        <FeatureSectionGridReact {...featureSectionGridData} />
        <Link to="/feature-section-grid-react" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
        <h2 className="section-title">Feature Section Grid (React+Tailwind)</h2>
        <FeatureSectionGridTailwind
          fullpage={false}
          {...featureSectionGridData}
        />
        <Link to="/feature-section-grid-tailwind" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
      </section>
      <section className="showcase">
        <h2 className="section-title">Pricing Section Single (HTML+CSS)</h2>
        <PricingSectionSingleHTML />
        <Link to="/pricing-section-single-html" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
        <h2 className="section-title">Pricing Section Single (React)</h2>
        <PricingSectionSingleReact
          supportingText="One time purchase"
          title="Pay as you need"
          subtitle="We offer one-time purchases with credits, for you to use as needed. Always active."
          featuresTitle="Unlock creativity once, enjoy forever"
          features={[
            { id: 1, text: "128 available credits for all images" },
            { id: 2, text: "Up to 3 users" },
            { id: 3, text: "24 hour response time" },
            { id: 4, text: "Advanced analytics" },
          ]}
          price={699}
          badge="Popular"
          currency="USD"
          buttonText="Buy now"
          desc="Pay once, use it forever. No strings attached."
        />
        <Link to="/pricing-section-single-react" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
        <h2 className="section-title">
          Pricing Section Single (React+Tailwind)
        </h2>
        <PricingSectionSingleTailwind
          supportingText="One time purchase"
          title="Pay as you need"
          subtitle="We offer one-time purchases with credits, for you to use as needed. Always active."
          featuresTitle="Unlock creativity once, enjoy forever"
          features={[
            { id: 1, text: "128 available credits for all images" },
            { id: 2, text: "Up to 3 users" },
            { id: 3, text: "24 hour response time" },
            { id: 4, text: "Advanced analytics" },
          ]}
          price={699}
          badge="Popular"
          currency="USD"
          buttonText="Buy now"
          desc="Pay once, use it forever. No strings attached."
          fullpage={false}
        />
        <Link to="/pricing-section-single-tailwind" className="view-full-link">
          View full page
          <LinkIcon />
        </Link>
      </section>
      <section className="showcase">
        <h2 className="section-title">
          Pricing Section Tiers - Static (HTML+CSS)
        </h2>
        <PricingSectionTiersHTML />
        <h2 className="section-title">
          Pricing Section Tiers - Interactive (React)
        </h2>
        <PricingSectionTiersReact
          pricingSectionTiersData={pricingSectionTiersData}
          plan={plan}
          supportingText="Pricing Tiers"
          title="Fit for all your needs"
          subtitle="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
        />
        <h2 className="section-title">
          Pricing Section Tiers - Interactive (React+Tailwind)
        </h2>
        <PricingSectionTiersTailwind
          pricingSectionTiersData={pricingSectionTiersData}
          plan={plan}
          supportingText="Pricing Tiers"
          title="Fit for all your needs"
          subtitle="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
        />
      </section>
      <section className="showcase">
        <h2 className="section-title">Statistics Section (HTML+CSS)</h2>
        <StatisticsSectionHTML />
        <h2 className="section-title">Statistics Section (React)</h2>
        <StatisticsSectionReact
          supportingText="Statistics"
          title="More than premium abstract imagery"
          subtitle="Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery."
          src={whiteBlocks}
          alt="White blocks"
          width={592}
          height={544}
          statsTitle="Our mission, in numbers"
          statistics={[
            { id: 1, value: "25,664,890", metric: "Downloads" },
            { id: 2, value: "17,219", metric: "Paid users" },
            {
              id: 3,
              value: "190,654,321",
              metric: "Images in library",
            },
          ]}
        />
        <Link to="/statistics-section-api" className="view-full-link">
          View live data version (API)
          <LinkIcon />
        </Link>
        <h2 className="section-title">Statistics Section (React+Tailwind)</h2>
        <StatisticsSectionTailwind
          supportingText="Statistics"
          title="More than premium abstract imagery"
          subtitle="Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery."
          src={whiteBlocks}
          alt="White blocks"
          width={592}
          height={544}
          statsTitle="Our mission, in numbers"
          statistics={[
            { id: 1, value: "25,664,890", metric: "Downloads" },
            { id: 2, value: "17,219", metric: "Paid users" },
            {
              id: 3,
              value: "190,654,321",
              metric: "Images in library",
            },
          ]}
          fullpage={false}
        />
        <Link to="/statistics-section-api-tailwind" className="view-full-link">
          View live data version (API)
          <LinkIcon />
        </Link>
      </section>
      <section className="showcase">
        <h2 className="section-title">
          Newsletter Section - Static (HTML+CSS)
        </h2>
        <NewsletterSectionHTML />
        <h2 className="section-title">
          Newsletter Section - Interactive (React)
        </h2>
        <NewsletterSectionReact
          title="Get the finest curated abstracts delivered weekly to your inbox"
          banner={abstract}
          width={1176}
          height={1216}
          features={[
            {
              id: 1,
              text: " Exclusive access to new abstract images and collections",
            },
            { id: 2, text: "Unlock special promotions only for subscribers" },
            { id: 3, text: "Regular doses of artistic inspiration" },
          ]}
        />
        <Link to="/newsletter-section-api" className="view-full-link">
          View live data version (API)
          <LinkIcon />
        </Link>
        <h2 className="section-title">
          Newsletter Section - Interactive (React+Tailwind)
        </h2>
        <NewsletterSectionTailwind
          title="Get the finest curated abstracts delivered weekly to your inbox"
          banner={abstract}
          width={1176}
          height={1216}
          features={[
            {
              id: 1,
              text: " Exclusive access to new abstract images and collections",
            },
            { id: 2, text: "Unlock special promotions only for subscribers" },
            { id: 3, text: "Regular doses of artistic inspiration" },
          ]}
          fullpage={false}
        />
        <Link to="/newsletter-section-api-tailwind" className="view-full-link">
          View live data version (API)
          <LinkIcon />
        </Link>
      </section>
      <section className="showcase">
        <h2 className="section-title">Contact Section - Static (HTML+CSS)</h2>
        <ContactSectionHTML />
        <h2 className="section-title">Contact Section - Interactive (React)</h2>
        <ContactSectionReact
          title="Talk to our team"
          subtitle="We're committed to delivering the support you require to make your experience as smooth as possible."
          contactDetails={[
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
          ]}
        />
        <Link to="/contact-section-api" className="view-full-link">
          View live data version (API)
          <LinkIcon />
        </Link>
        <h2 className="section-title">
          Contact Section - Interactive (React+Tailwind)
        </h2>
        <ContactSectionTailwind
          title="Talk to our team"
          subtitle="We're committed to delivering the
        support you require to make your experience as smooth as possible."
          contactDetails={[
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
          ]}
          fullpage={false}
        />
        <Link to="/contact-section-api-tailwind" className="view-full-link">
          View live data version (API)
          <LinkIcon />
        </Link>
      </section>
      <section className="showcase">
        <h2 className="section-title">Team Section (HTML+CSS)</h2>
        <TeamSectionHTML />
        <h2 className="section-title">Team Section (React)</h2>
        <TeamSectionReact
          supportingText="Team"
          title="Meet our team"
          subtitle="From skilled designers to tech-savvy developers, each member brings a unique perspective and expertise to the table."
          members={[
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
          ]}
        />
        <h2 className="section-title">Team Section (React+Tailwind)</h2>
        <TeamSectionTailwind
          supportingText="Team"
          title="Meet our team"
          subtitle="From skilled designers to tech-savvy developers, each member brings a unique perspective and expertise to the table."
          members={[
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
          ]}
          fullpage={false}
        />
      </section>
    </main>
  );
}
