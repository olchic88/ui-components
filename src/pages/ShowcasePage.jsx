import { Link } from "react-router";

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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </section>
      <section className="showcase">
        <h2 className="section-title">
          Hero Section Feature Bullets (HTML+CSS)
        </h2>
        <HeroSectionFeatureBulletsHTML />
        <Link to="/hero-feature-bullets-html" className="view-full-link">
          View full page
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </section>
      <section className="showcase">
        <h2 className="section-title">Feature Section Side Image (HTML+CSS)</h2>
        <FeatureSectionImageHTML side="right" heading={true} />
        <Link to="/feature-section-image-right-html" className="view-full-link">
          View full page
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
        </Link>
        <FeatureSectionImageHTML side="left" heading={true} />
        <Link to="/feature-section-image-left-html" className="view-full-link">
          View full page
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
        </Link>
        <FeatureSectionImageReact
          side="left"
          heading={true}
          {...featureSectionImageData.left}
        />
        <Link to="/feature-section-image-left-react" className="view-full-link">
          View full page
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </section>
      <section className="showcase">
        <h2 className="section-title">Feature Section Grid (HTML+CSS)</h2>
        <FeatureSectionGridHTML />
        <Link to="/feature-section-grid-html" className="view-full-link">
          View full page
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
        </Link>
        <h2 className="section-title">Feature Section Grid (React)</h2>
        <FeatureSectionGridReact
          {...featureSectionGridData}
        />
        <Link to="/feature-section-grid-react" className="view-full-link">
          View full page
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
        </Link>
         <h2 className="section-title">Feature Section Grid (React+Tailwind)</h2>
         <FeatureSectionGridTailwind
         fullpage={false}
         {...featureSectionGridData}
         />
         <Link to="/feature-section-grid-tailwind" className="view-full-link">
          View full page
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </section>
    </main>
  );
}
