import { BrowserRouter } from "react-router";

import TestimonialCardHTML from "./components/TestimonialCard/TestimonialCardHTML.jsx";
import TestimonialCardReact from "./components/TestimonialCard/TestimonialCardReact.jsx";
import TestimonialCardTailwind from "./components/TestimonialCard/TestimonialCardTailwind.jsx";
import profileThumbnail1 from "./components/TestimonialCard/profile-thumbnail-1.png";
import profileThumbnail2 from "./components/TestimonialCard/profile-thumbnail-2.png";

import BlogCardHTML from "./components/BlogCard/BlogCardHTML.jsx";
import BlogCardReact from "./components/BlogCard/BlogCardReact.jsx";
import BlogCardTailwind from "./components/BlogCard/BlogCardTailwind.jsx";
import blogCard1 from "./components/BlogCard/blog-card-1.jpg";


function App() {
  return (
    <BrowserRouter>
      <header id="header">
        <h1>UI Components</h1>
      </header>
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
            <h2 className="section-title">
              Testimonial Cards (React+Tailwind)
            </h2>
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
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
