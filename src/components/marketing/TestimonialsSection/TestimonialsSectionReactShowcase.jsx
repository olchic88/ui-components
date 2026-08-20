import { testimonials } from "./testimonialsSectionData";
import TestimonialsSectionReact from "./TestimonialsSectionReact";

export default function TestimonialsSectionReactShowcase() {
  return (
    <div className="container-section">
      <div className="testimonials-section-showcase">
       <TestimonialsSectionReact testimonials={testimonials}/>
      </div>
    </div>
  );
}
