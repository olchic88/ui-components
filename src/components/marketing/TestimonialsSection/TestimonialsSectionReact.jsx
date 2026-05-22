import "./testimonialsSection.css";
import TestimonialCardReact from "../TestimonialCard/TestimonialCardReact";

export default function TestimonialsSectionReact({ testimonials }) {
  return (
    <div className="container-section">
      <div className="testimonials-section">
        <div className="testimonials-section-header">
          <p className="testimonials-section-header-supporting-text">
            Testimonials
          </p>
          <div className="testimonials-section-header-content">
            <h3 className="testimonials-section-header-title">
              Countless users, countless smiles
            </h3>
            <p className="testimonials-section-header-subtitle">
              Explore our community's journey and discover why satisfaction
              defines us.
            </p>
          </div>
        </div>
        <ul className="testimonials-section-cards-list">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="testimonials-card-content">
              <TestimonialCardReact
              img={testimonial.image}
              name={testimonial.name}
              username={testimonial.username}
              text={testimonial.text}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
