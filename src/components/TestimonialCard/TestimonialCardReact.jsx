import "./TestimonialCardCSS.css";

export default function TestimonialCardReact({ img, name, username, text }) {
  return (
    <figure className="testimonial-card">
      <figcaption className="testimonial-card-author">
        <img
          className="testimonial-card-img"
          src={img}
          alt={`${name}'s profile picture`}
          width={48}
          height={48}
        />
        <div className="testimonial-card-info">
          <p className="testimonial-card-name">{name}</p>
          <p className="testimonial-card-username" title={username}>
            &#64;{username}
          </p>
        </div>
      </figcaption>
      <blockquote className="testimonial-card-text">
        <p>{text}</p>
      </blockquote>
    </figure>
  );
}
