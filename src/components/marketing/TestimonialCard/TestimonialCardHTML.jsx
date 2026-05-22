import "./testimonialCard.css";
import profileThumbnail from "./profile-thumbnail.webp";

export default function TestimonialCardHTML() {
  return (
    <>
      <figure className="testimonial-card">
        <figcaption className="testimonial-card-author">
          <img
            className="testimonial-card-img"
            src={profileThumbnail}
            alt="Sarah Dole's profile picture"
            width={48}
            height={48}
          />
          <div className="testimonial-card-info">
            <p className="testimonial-card-name">Sarah Dole</p>
            <p className="testimonial-card-username">&#64;sarahdole</p>
          </div>
        </figcaption>
        <blockquote className="testimonial-card-text">
          <p>
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </p>
        </blockquote>
      </figure>
    </>
  );
}
