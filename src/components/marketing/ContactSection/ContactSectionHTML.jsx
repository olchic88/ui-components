import "./contactSection.css";

export default function ContactSectionHTML() {
  return (
    <>
      <div className="container-section">
        <div className="contact-section">
          <div className="contact-section-content-left">
            <div className="contact-section-header">
              <h3 className="contact-section-title">Talk to our team</h3>
              <p>
                We're committed to delivering the support you require to make
                your experience as smooth as possible.
              </p>
            </div>
            <address>
              <ul className="contact-section-details">
                <li className="contact-section-details-line">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>123 Maple Street, Springfield, IL, USA</p>
                </li>
                <li className="contact-section-details-line">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"
                      fill="currentColor"
                    />
                  </svg>
                  <a href="tel:+16505550198" className="link">
                    +1 (650) 555-0198
                  </a>
                </li>
                <li className="contact-section-details-line">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"
                      fill="currentColor"
                    />
                  </svg>
                  <a href="mailto:hello@abstractly.com" className="link">
                    hello@abstractly.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <div className="contact-section-content-right">
            <form className="contact-section-form">
              <div className="contact-section-form-fields">
                <div className="contact-section-form-fields-name-email">
                    <div className="input">
                      <label htmlFor="name" className="input-label">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="input-field"
                      />
                    </div>
                    <div className="input">
                      <label htmlFor="email" className="input-label">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="example@example.com"
                        className="input-field"
                      />
                    </div>
                </div>

                <div className="input">
                  <label htmlFor="message" className="input-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="input-field input-field-textarea"
                    placeholder="Write your message..."
                    maxLength={500}
                  ></textarea>
                  <p className="character-count">0 / 500</p>
                </div>
              </div>
              <button
                type="submit"
                className="ax-button button button-size-lg button-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
