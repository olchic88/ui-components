import "./testimonialsSection.css";
import profileThumbnail from "./profile-thumbnail.webp";
import profileThumbnail1 from "./profile-thumbnail_1.webp";
import profileThumbnail2 from "./profile-thumbnail_2.webp";
import profileThumbnail3 from "./profile-thumbnail_3.webp";
import profileThumbnail4 from "./profile-thumbnail_4.webp";
import profileThumbnail5 from "./profile-thumbnail_5.webp";
import profileThumbnail6 from "./profile-thumbnail_6.webp";
import profileThumbnail7 from "./profile-thumbnail_7.webp";
import profileThumbnail8 from "./profile-thumbnail_8.webp";

export default function TestimonialsSectionHTML() {
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
          <li className="testimonials-card-content">
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
                  I've been searching for high-quality abstract images for my
                  design projects, and I'm thrilled to have found this platform.
                  The variety and depth of creativity are astounding!
                </p>
              </blockquote>
            </figure>
          </li>
          <li className="testimonials-card-content">
            <figure className="testimonial-card">
              <figcaption className="testimonial-card-author">
                <img
                  className="testimonial-card-img"
                  src={profileThumbnail1}
                  alt="John Appleseed's profile picture"
                  width={48}
                  height={48}
                />
                <div className="testimonial-card-info">
                  <p className="testimonial-card-name">John Appleseed</p>
                  <p className="testimonial-card-username">&#64;johnaseed</p>
                </div>
              </figcaption>
              <blockquote className="testimonial-card-text">
                <p>
                  As an artist, finding inspiration is crucial. This platform
                  has become my go-to source for unique abstract images that
                  ignite my creativity like never before.
                </p>
              </blockquote>
            </figure>
          </li>
          <li className="testimonials-card-content">
            <figure className="testimonial-card">
              <figcaption className="testimonial-card-author">
                <img
                  className="testimonial-card-img"
                  src={profileThumbnail2}
                  alt="Jean Gray's profile picture"
                  width={48}
                  height={48}
                />
                <div className="testimonial-card-info">
                  <p className="testimonial-card-name">Jean Gray</p>
                  <p className="testimonial-card-username">&#64;jeniic</p>
                </div>
              </figcaption>
              <blockquote className="testimonial-card-text">
                <p>
                  I never thought I'd find such stunning abstract images for
                  free! This platform has exceeded my expectations in every way.
                </p>
              </blockquote>
            </figure>
          </li>
          <li className="testimonials-card-content">
            <figure className="testimonial-card">
              <figcaption className="testimonial-card-author">
                <img
                  className="testimonial-card-img"
                  src={profileThumbnail3}
                  alt="Jake Johnson's profile picture"
                  width={48}
                  height={48}
                />
                <div className="testimonial-card-info">
                  <p className="testimonial-card-name">Jake Johnson</p>
                  <p className="testimonial-card-username">&#64;jakejohnshon</p>
                </div>
              </figcaption>
              <blockquote className="testimonial-card-text">
                <p>
                  From corporate presentations to personal projects, the
                  abstract images on this platform have added a touch of
                  elegance and sophistication to everything I create.
                </p>
              </blockquote>
            </figure>
          </li>
          <li className="testimonials-card-content">
            <figure className="testimonial-card">
              <figcaption className="testimonial-card-author">
                <img
                  className="testimonial-card-img"
                  src={profileThumbnail4}
                  alt="Igor Stravinsky's profile picture"
                  width={48}
                  height={48}
                />
                <div className="testimonial-card-info">
                  <p className="testimonial-card-name">Igor Stravinsky</p>
                  <p className="testimonial-card-username">&#64;igorstrav</p>
                </div>
              </figcaption>
              <blockquote className="testimonial-card-text">
                <p>
                  The subscription plans are worth every penny. Having unlimited
                  access to premium abstract images has transformed my design
                  workflow and elevated the quality of my work.
                </p>
              </blockquote>
            </figure>
          </li>
          <li className="testimonials-card-content">
            <figure className="testimonial-card">
              <figcaption className="testimonial-card-author">
                <img
                  className="testimonial-card-img"
                  src={profileThumbnail5}
                  alt="Declan Rice's profile picture"
                  width={48}
                  height={48}
                />
                <div className="testimonial-card-info">
                  <p className="testimonial-card-name">Declan Rice</p>
                  <p className="testimonial-card-username">&#64;drice</p>
                </div>
              </figcaption>
              <blockquote className="testimonial-card-text">
                <p>
                  I'm amazed by the attention to detail in every image on this
                  platform. It's clear that a lot of thought and creativity goes
                  into curating the collection.
                </p>
              </blockquote>
            </figure>
          </li>
          <li className="testimonials-card-content">
            <figure className="testimonial-card">
              <figcaption className="testimonial-card-author">
                <img
                  className="testimonial-card-img"
                  src={profileThumbnail6}
                  alt="Marcus Thompson's profile picture"
                  width={48}
                  height={48}
                />
                <div className="testimonial-card-info">
                  <p className="testimonial-card-name">Marcus Thompson</p>
                  <p className="testimonial-card-username">&#64;mthompson</p>
                </div>
              </figcaption>
              <blockquote className="testimonial-card-text">
                <p>
                  Using abstract images from this platform has helped me convey
                  complex concepts in a visually engaging way. My clients are
                  always impressed!
                </p>
              </blockquote>
            </figure>
          </li>
          <li className="testimonials-card-content">
            <figure className="testimonial-card">
              <figcaption className="testimonial-card-author">
                <img
                  className="testimonial-card-img"
                  src={profileThumbnail7}
                  alt="Oliver Neverloved's profile picture"
                  width={48}
                  height={48}
                />
                <div className="testimonial-card-info">
                  <p className="testimonial-card-name">Oliver Neverloved</p>
                  <p className="testimonial-card-username">&#64;olivernever</p>
                </div>
              </figcaption>
              <blockquote className="testimonial-card-text">
                <p>
                  I appreciate how user-friendly the platform is. Browsing,
                  downloading, and managing my image library couldn't be easier.
                </p>
              </blockquote>
            </figure>
          </li>
          <li className="testimonials-card-content">
            <figure className="testimonial-card">
              <figcaption className="testimonial-card-author">
                <img
                  className="testimonial-card-img"
                  src={profileThumbnail8}
                  alt="Mark Dennis's profile picture"
                  width={48}
                  height={48}
                />
                <div className="testimonial-card-info">
                  <p className="testimonial-card-name">Mark Dennis</p>
                  <p className="testimonial-card-username">&#64;marked</p>
                </div>
              </figcaption>
              <blockquote className="testimonial-card-text">
                <p>
                  The customer support team went above and beyond to help me
                  with a subscription issue. Their dedication to customer
                  satisfaction is truly commendable.
                </p>
              </blockquote>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  );
}
