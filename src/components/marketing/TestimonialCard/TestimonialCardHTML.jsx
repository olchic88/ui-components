import "./TestimonialCardCSS.css";
import profileThumbnail1 from "./profile-thumbnail-1.png";
import profileThumbnail2 from "./profile-thumbnail-2.png";

export default function TestimonialCardHTML() {
  return (
    <>
      <figure className="testimonial-card">
        <figcaption className="testimonial-card-author">
          <img
            className="testimonial-card-img"
            src={profileThumbnail1}
            alt="Michael Carter's profile picture"
            width={48}
            height={48}
          />
          <div className="testimonial-card-info">
            <p className="testimonial-card-name">Michael Carter</p>
            <p className="testimonial-card-username">&#64;mikec</p>
          </div>
        </figcaption>
        <blockquote className="testimonial-card-text">
          <p>
            I’ve started using this app to track my workouts, and it’s been a
            game changer. The progress charts keep me motivated every day.
          </p>
        </blockquote>
      </figure>

      <figure className="testimonial-card">
        <figcaption className="testimonial-card-author">
          <img
            className="testimonial-card-img"
            src={profileThumbnail2}
            alt="Jessica Brown's profile picture"
            width={48}
            height={48}
          />
          <div className="testimonial-card-info">
            <p className="testimonial-card-name">
              Elizabeth Alexandra Montgomery
            </p>
            <p
              className="testimonial-card-username"
              title="elizabeth_alexandra_montgomery_the_third"
            >
              &#64;elizabeth_alexandra_montgomery_the_third
            </p>
          </div>
        </figcaption>
        <blockquote className="testimonial-card-text">
          <p>
            I’ve been using this tool for a few weeks now, and I’m genuinely
            impressed. It saves me hours of manual work every single day and
            lets me focus on the creative part of my projects instead of routine
            tasks. Highly recommend it to anyone who values efficiency! Also,
            check this supercalifragilisticexpialidociouswordthatkeepsgrowing!
          </p>
        </blockquote>
      </figure>
    </>
  );
}
