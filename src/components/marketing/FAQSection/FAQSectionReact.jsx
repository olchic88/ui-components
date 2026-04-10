import { AccordionIcon } from "../../../icons";
import "./faqSection.css";

import { useState } from "react";

export default function FAQSectionReact({ faqs }) {
  const [openItems, setOpenItems] = useState([]);

  function handleButtonClick(id) {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }

  return (
    <div className="container-section">
      <div className="faq-section">
        <div className="faq-section-header">
          <h3 className="faq-section-title">Frequently asked questions</h3>
          <p className="faq-section-subtitle">Choose any questions you need</p>
        </div>
        <div className="faq-section-content">
          <ul className="faq-section-faqs">
            {faqs.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              return (
                <li className="faq-section-accordion" key={faq.id}>
                  <h4>
                    <button
                      className="faq-section-label ax-button"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => handleButtonClick(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <AccordionIcon
                        isOpen={isOpen}
                        className="faq-section-icon"
                      />
                    </button>
                  </h4>

                  <div
                    className={`faq-section-panel-wrapper ${isOpen ? "open" : ""}`}
                  >
                    <p className="faq-section-panel">{faq.answer}</p>
                  </div>
                </li>
              );
            })}
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
