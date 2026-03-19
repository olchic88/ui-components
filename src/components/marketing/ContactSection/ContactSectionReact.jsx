import "./contactSection.css";

import { useState, useRef } from "react";

import { ConfirmationIcon } from "../../../icons";

export default function ContactSectionReact({
  title,
  subtitle,
  contactDetails,
  onSubmit,
  isSubmitting,
  isSuccess,
  onReset,
}) {
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState("");

  const formRef = useRef(null);
  // {current: null}, then {current: <form ref={formRef} ...>}

  const maxLength = 500;

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const email = data.get("email").trim().toLowerCase();
    const name = data.get("name").trim();
    const message = data.get("message").trim();

    setErrors({ name: "", email: "", message: "" }); // когда пользователь повторно жмёт Submit, нужно стереть старое сообщение об ошибке

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
      setErrors((prev) => ({
        ...prev,
        name: "Name is required.",
      }));
      return;
    }

    if (email === "") {
      setErrors((prev) => ({
        ...prev,
        email: "Email address is required.",
      }));
      return;
    }

    if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
      return;
    }

    if (message === "") {
      setErrors((prev) => ({
        ...prev,
        message: "Message is required.",
      }));
      return;
    }

    if (message.length > maxLength) {
      setErrors((prev) => ({
        ...prev,
        message: `Message must be no longer than ${maxLength} characters.`,
      }));
      return;
    }

    console.log("Form submitted");

    onSubmit({ name, email, message }); // prop from parent ContactSectionAPIPage onSubmit={(data) => mutation.mutate(data)}, т.е. вызывается эта f
  }

  function handleInputChange(field) {
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  } // очищаем ошибку при вводе

  function handleReset() {
    formRef.current.reset(); // сбрасываем заполненные поля формы
    onReset(); // сообщаем родителю ContactSectionAPIPage, что нужно сбросить isSuccess
    setMessage(""); // сбросить character-count
  }

  return (
    <>
      <div className="container-section">
        <div className="contact-section">
          <div className="contact-section-content-left">
            <div className="contact-section-header">
              <h3 className="contact-section-title">{title}</h3>
              <p>{subtitle}</p>
            </div>
            <address>
              <ul className="contact-section-details">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.id} className="contact-section-details-line">
                      {Icon && <Icon />}

                      {item.href ? (
                        <a href={item.href} className="link">
                          {item.text}
                        </a>
                      ) : (
                        <p>{item.text}</p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </address>
          </div>
          <div className="contact-section-content-right">
            <form
              ref={formRef}
              className="contact-section-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-section-form-fields">
                <div className="contact-section-form-fields-name-email">
                  <div className="input">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      onChange={() => handleInputChange("name")} // очищаем ошибку при вводе
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      autoComplete="name"
                      className={`input-field ${errors.name ? "input-field-error" : ""}`}
                    />
                    {errors.name && (
                      <p className="input-error-isVisible">{errors.name}</p>
                    )}
                  </div>
                  <div className="input">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      onChange={() => handleInputChange("email")} // очищаем ошибку при вводе
                      id="email"
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                      autoComplete="email"
                      className={`input-field ${errors.email ? "input-field-error" : ""}`}
                    />
                    {errors.email && (
                      <p className="input-error-isVisible">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="input">
                  <label htmlFor="message" className="input-label">
                    Message
                  </label>
                  <textarea
                    onChange={(e) => {
                      setMessage(e.target.value); // state используется для подсчёта символов
                      handleInputChange("message"); // очищаем ошибку при вводе
                    }}
                    id="message"
                    name="message"
                    className={`input-field input-field-textarea ${errors.message ? "input-field-error" : ""}`}
                    placeholder="Write your message..."
                    maxLength={maxLength + 100}
                  ></textarea>
                  {errors.message ? (
                    <p className="input-error-isVisible">{errors.message}</p>
                  ) : (
                    <p
                      className={`character-count ${message.length > maxLength ? "character-count-exceed" : ""}`}
                    >
                      {message.length} / {maxLength}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="ax-button button button-size-lg button-primary"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
            {isSuccess && (
              <div className="contact-section-confirmation">
                <div className="contact-section-confirmation-content">
                  <div className="contact-section-confirmation-icon">
                    <ConfirmationIcon size={32} />
                  </div>
                  <p className="contact-section-confirmation-message">
                    Submission successful! We will get back to you in 3-5 days
                    via email.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="ax-button button button-secondary button-size-lg button-send-message"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
