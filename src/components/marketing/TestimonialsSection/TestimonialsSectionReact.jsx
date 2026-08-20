import "./testimonialsSection.css";
import TestimonialCardReact from "../TestimonialCard/TestimonialCardReact";
import SectionHeaderReact from "../SectionHeader/SectionHeaderReact";

export default function TestimonialsSectionReact({ testimonials }) {
  return (
    <section className="testimonials-section">
      <SectionHeaderReact
        supportingText="Testimonials"
        title="Countless users, countless smiles"
        subtitle="Explore our community's journey and discover why satisfaction defines us."
      />

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
    </section>
  );
}
