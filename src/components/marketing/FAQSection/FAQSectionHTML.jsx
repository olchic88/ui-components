import { AccordionIcon } from "../../../icons";
import "./faqSection.css";

export default function FAQSectionHTML() {
  return (
    <div className="container-section">
      <div className="faq-section">
        <div className="faq-section-header">
          <h3 className="faq-section-title">Frequently asked questions</h3>
          <p className="faq-section-subtitle">Choose any questions you need</p>
        </div>
        <div className="faq-section-content">
          <ul className="faq-section-faqs">
            <li className="faq-section-accordion">
              <h4>
                <button
                  className="faq-section-label ax-button"
                  type="button"
                  aria-expanded="true"
                >
                  <span>
                    What types of images are available on your platform?
                  </span>
                  <svg
                    className="faq-section-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                </button>
              </h4>
              <div className="faq-section-panel-wrapper open">
                <p className="faq-section-panel">
                  Our platform offers a diverse range of abstract images to suit
                  various preferences and needs. From vibrant geometric patterns
                  to soothing landscapes, we strive to provide a wide selection
                  to cater to different tastes.
                </p>
              </div>
            </li>
            <li className="faq-section-accordion">
              <h4>
                <button
                  className="faq-section-label ax-button"
                  type="button"
                  aria-expanded="false"
                >
                  <span>
                    How can I access and download images from your platform?
                  </span>
                  <svg
                    className="faq-section-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                </button>
              </h4>
            </li>
            <li className="faq-section-accordion">
              <h4>
                <button
                  className="faq-section-label ax-button"
                  type="button"
                  aria-expanded="false"
                >
                  <span>
                    Do you offer free images, or is there a subscription
                    required?
                  </span>
                  <svg
                    className="faq-section-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                </button>
              </h4>
            </li>
            <li className="faq-section-accordion">
              <h4>
                <button
                  className="faq-section-label ax-button"
                  type="button"
                  aria-expanded="false"
                >
                  <span>
                    What payment methods do you accept for subscriptions?
                  </span>
                  <svg
                    className="faq-section-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                </button>
              </h4>
            </li>
            <li className="faq-section-accordion">
              <h4>
                <button
                  className="faq-section-label ax-button"
                  type="button"
                  aria-expanded="false"
                >
                  <span>
                    Can I cancel or modify my subscription at any time?
                  </span>
                  <svg
                    className="faq-section-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                </button>
              </h4>
            </li>
            <li className="faq-section-accordion">
              <h4>
                <button
                  className="faq-section-label ax-button"
                  type="button"
                  aria-expanded="false"
                >
                  <span>
                    How frequently do you update your image collection?
                  </span>
                  <svg
                    className="faq-section-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                </button>
              </h4>
            </li>
          </ul>
          <div className="faq-section-support-card">
            <div className="faq-section-support-card-content">
              <h5 className="faq-section-support-card-title">
                Can’t find the answer you’re looking for?
              </h5>
              <p>
                Reach out to our
                <a href="#" className="link faq-section-support-card-link">
                  {" "}
                  customer support{" "}
                </a>
                team.
              </p>
            </div>
            <button
              type="button"
              className="ax-button button button-primary button-size-xl faq-section-button"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
