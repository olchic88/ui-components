import "./newsletterSection.css";
import abstract from "./abstract.jpg";

export default function NewsletterSectionHTML() {
  return (
    <>
    <div className="container-section">
      <div className="newsletter-section">
        <div className="newsletter-section-wrapper">
          <div className="newsletter-section-content">
            <h3 className="newsletter-section-title">
              Get the finest curated abstracts delivered weekly to your inbox
            </h3>
            <ul className="newsletter-section-features">
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                    fill="#EEF2FF"
                  />
                  <path
                    d="M9.64715 15.5245L10.0007 15.878L10.3543 15.5245L19.1931 6.68562L19.9002 7.39272L10.0007 17.2922L4.34383 11.6354L5.05093 10.9283L9.64715 15.5245Z"
                    fill="#6366F1"
                    stroke="#6366F1"
                  />
                </svg>
                Exclusive access to new abstract images and collections
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                    fill="#EEF2FF"
                  />
                  <path
                    d="M9.64715 15.5245L10.0007 15.878L10.3543 15.5245L19.1931 6.68562L19.9002 7.39272L10.0007 17.2922L4.34383 11.6354L5.05093 10.9283L9.64715 15.5245Z"
                    fill="#6366F1"
                    stroke="#6366F1"
                  />
                </svg>
                Unlock special promotions only for subscribers
              </li>
              <li>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                    fill="#EEF2FF"
                  />
                  <path
                    d="M9.64715 15.5245L10.0007 15.878L10.3543 15.5245L19.1931 6.68562L19.9002 7.39272L10.0007 17.2922L4.34383 11.6354L5.05093 10.9283L9.64715 15.5245Z"
                    fill="#6366F1"
                    stroke="#6366F1"
                  />
                </svg>
                Regular doses of artistic inspiration
              </li>
            </ul>
          </div>
          <form className="newsletter-section-form">
            <div className="newsletter-section-form-content">
                <div className="newsletter-section-form-input-wrapper">
                    <label>
                      <span className="sr-only">Email</span>
                      <input
                        className="input-field"
                        type="email"
                        placeholder="Enter your email"
                        required
                        autocomplete="email"
                      />
                    </label>
                    <p className="input-error"></p>
                </div>
                <p className="newsletter-section-form-content-message">We only send you the best! No spam.</p>
            </div>
            <button type="submit" className="ax-button button button-primary button-size-md button-newsletter">
              Subscribe
            </button>
          </form>
        </div>
        <img
          className="newsletter-section-banner"
          src={abstract}
          alt="Abstract images"
          width={1176}
          height={1216}
        />
      </div>
      <div className="toast">
        <div className="toast-content">
            <p className="toast-badge">Error</p>
            <p> Failed to submit. Please ensure your details are correct or try again
          later.</p>
        </div>
    </div>
    </div>
    </>
  );
}
