import { useState } from "react";
import "./newsletterSection.css";
import { CheckIcon } from "../../../icons";

export default function NewsletterSectionReact({
  title,
  banner,
  width,
  height,
  features,
  onSubmit,
  isSubmitting,
}) {
  const [errorMessage, setErrorMessage] = useState("");

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
                      <CheckIcon/>
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
                      className={`input-field ${errorMessage ? "input-field-error" : ""}`}
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      disabled={isSubmitting}
                      onChange={() => {
                        if (errorMessage) {
                          setErrorMessage("");
                        }
                      }}
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
