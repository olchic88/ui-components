import { BrowserRouter } from "react-router";

import TestimonialCardHTML from "./components/TestimonialCard/TestimonialCardHTML.jsx";
import TestimonialCardReact from "./components/TestimonialCard/TestimonialCardReact.jsx";
import TestimonialCardTailwind from "./components/TestimonialCard/TestimonialCardTailwind.jsx";
import profileThumbnail1 from "./components/TestimonialCard/profile-thumbnail-1.png";
import profileThumbnail2 from "./components/TestimonialCard/profile-thumbnail-2.png";

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
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
