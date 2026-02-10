import { useState, useRef, useEffect } from "react";
import "./newsletterSection.css";

export default function NewsletterSectionReact({
  title,
  banner,
  width,
  height,
  features,
  onSubmit,
  isSubmitting
}) {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef();
  useEffect(() => {
    emailRef.current.focus();
  }, []); // to make the email input field automatically focus only after the component renders

  function handleSubscribe(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email").trim().toLowerCase();

    setErrorMessage(""); //  когда пользователь повторно жмёт Login, нужно стереть старое сообщение об ошибке

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      setErrorMessage("Email address is required.");
      return;
    } else if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    onSubmit(email);
  }

  return (
    <>
      <div className="container-section">
        <div className="newsletter-section">
          <div className="newsletter-section-wrapper">
            <div className="newsletter-section-content">
              <h3 className="newsletter-section-title">{title}</h3>
              <ul className="newsletter-section-features">
                {features.map((feature) => {
                  return (
                    <li key={feature.id}>
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
                      {feature.text}
                    </li>
                  );
                })}
              </ul>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="newsletter-section-form"
              noValidate
            >
              <div className="newsletter-section-form-content">
                <div className="newsletter-section-form-input-wrapper">
                  <label>
                    <span className="sr-only">Email</span>
                    <input
                      className="input-field"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      ref={emailRef}
                      disabled={isSubmitting}
                    />
                  </label>
                  {errorMessage && (
                    <p className="input-error-isVisible">{errorMessage}</p>
                  )}
                </div>
                <p className="newsletter-section-form-content-message">
                  We only send you the best! No spam.
                </p>
              </div>
              <button
                type="submit"
                className="ax-button button button-primary button-size-md button-newsletter"
                disabled={isSubmitting}
              >
                Subscribe
              </button>
            </form>
          </div>
          <img
            className="newsletter-section-banner"
            src={banner}
            alt="Abstract images"
            width={width}
            height={height}
          />
        </div>
       
      </div>
    </>
  );
}
