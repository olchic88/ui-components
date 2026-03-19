import "./contactSection.css";

import { useState, useRef } from "react";

import { ConfirmationIcon } from "../../../icons";

export default function ContactSectionTailwind({
  title,
  subtitle,
  contactDetails,
  onSubmit,
  isSubmitting,
  isSuccess,
  onReset,
  fullpage,
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

  function handleReset() {
    formRef.current.reset(); // сбрасываем заполненные поля формы
    onReset(); // сообщаем родителю ContactSectionAPIPage, что нужно сбросить isSuccess
    setMessage(""); // сбросить character-count
  }

  const inputFieldClass = `w-full rounded
  border border-[var(--border-primary)]
  bg-[var(--bg-primary-hover)]
  px-[14px] py-[10px]
  text-sm font-normal text-[var(--color-primary)]
  outline-none
  placeholder:text-[var(--color-tertiary)]
  placeholder:text-sm
  focus:shadow-[0px_0px_0px_1px_#444ce7,0px_1px_2px_rgba(16,24,40,0.05),0px_0px_0px_4px_rgba(68,76,231,0.12)]`;

  const inputFieldErrorClass = `border-red-300 
focus:shadow-[0px_0px_0px_1px_#d92d20,0px_0px_0px_4px_rgba(217,45,32,0.12)]`;

  return (
    <>
      <div
        className={`mx-auto w-full
        ${fullpage ? "max-w-full p-0" : "max-w-[1440px] p-4"}`}
      >
        <div
          className={`grid grid-cols-4 gap-12 content-center
        px-3 py-12
        rounded-sm
        bg-[var(--bg-primary)]
        shadow-[0px_1px_2px_rgba(0,0,0,0.05)]
        
        md:grid-cols-6 md:gap-[64px]
        md:py-16 md:px-4
        md:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),_0px_2px_4px_-1px_rgba(0,0,0,0.06)]

        md:landscape:grid-cols-12
        md:landscape:gap-8
        md:landscape:items-center
        md:landscape:p-16

        [@media(min-width:90rem)]:px-[96px]
        [@media(min-width:90rem)]:py-[169px]
        [@media(min-width:90rem)]:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),_0px_4px_6px_-2px_rgba(0,0,0,0.05)]
        [@media(min-width:90rem)]:rounded-md
        
        ${fullpage ? "min-h-screen rounded-none shadow-none" : ""}`}
        >
          <div
            className="col-span-4 flex flex-col gap-10
          md:col-span-6"
          >
            <div className="flex flex-col gap-5">
              <h3
                className="text-4xl font-semibold text-[var(--color-primary)]
              md:text-5xl
              [@media(min-width:90rem)]:text-6xl"
              >
                {title}
              </h3>
              <p
                className="text-lg font-normal text-[var(--color-secondary)]
              md:text-xl"
              >
                {subtitle}
              </p>
            </div>
            <address className="not-italic">
              <ul
                className="flex flex-col gap-6
              list-none p-0
              text-base font-medium text-[var(--color-secondary)]"
              >
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.id} className="flex items-center gap-3">
                      {Icon && (
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-full p-3
                        shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)]
                        text-[var(--color-brand-primary)] bg-[var(--bg-primary)]"
                        >
                          <Icon />
                        </div>
                      )}

                      {item.href ? (
                        <a
                          href={item.href}
                          className="outline-none text-inherit no-underline
                         hover:text-indigo-800 focus:text-indigo-800
                         focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)] focus:rounded"
                        >
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
          <div
            className="col-span-4
          border border-[var(--border-primary)] rounded-lg 
          p-4
          relative
          md:col-span-6
          md:p-8"
          >
            <form
              ref={formRef}
              className="flex flex-col gap-10"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="flex flex-col gap-6">
                <div
                  className="flex flex-col gap-6
                md:flex-row md:gap-8"
                >
                  <div className="flex flex-col gap-[6px] md:flex-1">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Name
                    </label>
                    <input
                      onChange={() => {
                        if (errors.name) {
                          setErrors((prev) => ({
                            ...prev,
                            name: "",
                          }));
                        }
                      }}
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      autoComplete="name"
                      className={`
                        ${inputFieldClass}
                        ${errors.name ? `${inputFieldErrorClass}` : ""}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-[var(--color-error)]">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-[6px] md:flex-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Email
                    </label>
                    <input
                      onChange={() => {
                        if (errors.email) {
                          setErrors((prev) => ({
                            ...prev,
                            email: "",
                          }));
                        }
                      }}
                      id="email"
                      type="email"
                      name="email"
                      placeholder="example@example.com"
                      autoComplete="email"
                      className={`
                        ${inputFieldClass}
                        ${errors.email ? `${inputFieldErrorClass}` : ""}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-[var(--color-error)]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-[6px]">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-neutral-700"
                  >
                    Message
                  </label>
                  <textarea
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) {
                        setErrors((prev) => ({
                          ...prev,
                          message: "",
                        }));
                      }
                    }}
                    id="message"
                    name="message"
                    className={`
                        ${inputFieldClass}

                        w-full h-[108px] resize-none

                        ${errors.message ? `${inputFieldErrorClass}` : ""}`}
                    placeholder="Write your message..."
                    maxLength={maxLength + 100}
                  ></textarea>
                  {errors.message ? (
                    <p className="text-sm text-[var(--color-error)]">
                      {errors.message}
                    </p>
                  ) : (
                    <p
                      className={`mt-[6px] text-right text-sm font-normal ${message.length > maxLength ? "text-[#d92d20]" : "text-[var(--color-tertiary)]"}`}
                    >
                      {message.length} / {maxLength}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                /* ax-button button button-size-lg button-primary */
                className="inline-flex items-center justify-center
                w-full rounded-sm
                outline-none 
                transition-[background-color,box-shadow,color,transform] duration-300
      
                focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]
                

                h-11 py-[10px] px-[14px] 
                !text-base !font-medium
                [font-family:inherit]

                text-[var(--color-primary-invert)]
                bg-[var(--bg-brand-primary)]
                shadow-[0px_1px_3px_rgba(0,0,0,0.1),_0px_1px_2px_rgba(0,0,0,0.06)]

                hover:bg-[var(--bg-brand-primary-emphasize)]
                focus:bg-[var(--bg-brand-primary-emphasize)]
                focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]

                active:translate-x-[0.5px] 
                active:translate-y-[0.5px]

                disabled:bg-[var(--bg-disabled)]
                disabled:shadow-none
                disabled:text-[var(--color-disabled)]
                disabled:pointer-events-none
                "
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
            {isSuccess && (
              <div
                className="absolute inset-0 
              flex flex-col items-center justify-center gap-16 
              h-[398px] p-4 
              bg-[var(--bg-primary)] rounded-lg
              md:p-8"
              >
                <div
                  className="flex flex-col items-center gap-6
                [@media(min-width:90rem)]:px-[135px]"
                >
                  <div
                    className="w-16 h-16 
                  flex items-center justify-center 
                  flex-shrink-0 
                  rounded-full 
                  bg-[var(--bg-primary)] shadow"
                  >
                    <ConfirmationIcon size={32} />
                  </div>
                  <p
                    className="text-center text-xl text-[var(--color-primary)] px-[14.5px]
                  md:py-0 md:px-[159px]
                  md:landscape:px-[50px]
                  [@media(min-width:90rem)]:p-0"
                  >
                    Submission successful! We will get back to you in 3-5 days
                    via email.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  /* ax-button button button-secondary button-size-lg button-send-message */
                  className="inline-flex items-center justify-center
                w-full rounded-sm
                outline-none 
                transition-[background-color,box-shadow,color,transform] duration-300
      
                focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]
                
                 h-11 py-[10px] px-[14px] 
                !text-base !font-medium
                [font-family:inherit]

                border border-[#e6e6e6] 
                bg-[var(--bg-primary)] text-[var(--color-primary)] 
                shadow 
                transition-transform duration-200 
                
                hover:bg-[var(--bg-primary-hover)] 
                hover:text-[var(--color-primary-hover)] 
                
                focus:bg-[var(--bg-primary-hover)] 
                focus:text-[var(--color-primary-hover)] 
                focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)] 
                
                active:translate-x-[0.5px] 
                active:translate-y-[0.5px] 
                
                disabled:bg-[var(--bg-disabled)] 
                disabled:text-[var(--color-disabled)]
                disabled:shadow-none disabled:pointer-events-none

                w-[212px]
                
                "
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
