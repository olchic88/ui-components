import { useState, useRef, useEffect } from "react";

export default function NewsletterSectionTailwind({
  title,
  banner,
  width,
  height,
  features,
  onSubmit,
  isSubmitting,
  fullpage,
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
      <div
        className={`mx-auto w-full
        ${fullpage ? "max-w-full p-0" : "max-w-[1440px] p-4"}`}
      >
        <div
          className={`grid grid-cols-4 gap-4
        px-3 py-8
        rounded-sm
        bg-[var(--bg-primary)]
        shadow-[0px_1px_2px_rgba(0,0,0,0.05)]
        
        md:grid-cols-6 gap-[64px]
        md:py-16 md:px-4
        md:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),_0px_2px_4px_-1px_rgba(0,0,0,0.06)]

        md:landscape:grid-cols-12
        md:landscape:gap-8
        md:landscape:items-center

        [@media(min-width:90rem)]:p-[96px]
        [@media(min-width:90rem)]:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),_0px_4px_6px_-2px_rgba(0,0,0,0.05)]
        [@media(min-width:90rem)]:rounded-md
        
        ${fullpage ? "min-h-screen rounded-none shadow-none" : ""}`}
        >
          <div
            className="col-span-4 flex flex-col gap-12
          md:col-span-6"
          >
            <div className="flex flex-col gap-8">
              <h3
                className="text-3xl font-semibold text-[var(--color-primary)]
              md:text-5xl"
              >
                {title}
              </h3>
              <ul
                className="flex flex-col gap-5
              list-none p-0
              text-lg font-normal text-[var(--color-secondary)]"
              >
                {features.map((feature) => {
                  return (
                    <li key={feature.id} className="flex items-center gap-4">
                      <svg
                        className="shrink-0"
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
              className="flex flex-col gap-4
              md:flex-row"
              noValidate
            >
              <div className="flex flex-col gap-3 font-normal md:gap-4">
                <div className="flex flex-col gap-[6px]">
                  <label>
                    <span className="sr-only">Email</span>
                    <input
                      className={`w-full rounded
                      px-[14px] py-[10px]
                      bg-[var(--bg-primary-hover)]

                      border
                      
                      !text-sm leading-5 font-normal
                      text-[var(--color-primary)]
                      [font-family:inherit]

                      outline-none

                      placeholder:text-sm
                      placeholder:text-[var(--color-tertiary)]

                    ${
                      errorMessage
                        ? "border-[#fca5a5] focus:shadow-[0px_0px_0px_1px_#d92d20,0px_0px_0px_4px_rgba(217,45,32,0.12)]"
                        : "border-[var(--border-primary)] focus:shadow-[0_0_0_1px_#444ce7,0_1px_2px_rgba(16,24,40,0.05),0_0_0_4px_rgba(68,76,231,0.12)]"
                    }
                      `}
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      ref={emailRef}
                      disabled={isSubmitting}
                    />
                  </label>
                  {errorMessage && (
                    <p className="block text-sm font-normal text-[var(--color-error)]">
                      {errorMessage}
                    </p>
                  )}
                </div>
                <p className="text-base">We only send you the best! No spam.</p>
              </div>
              <button
                type="submit"
                /* ax-button button button-size-md button-primary button-newsletter */
                className="inline-flex items-center justify-center
                w-full rounded-sm
                outline-none transition-[background-color,box-shadow,color,transform] duration-300
      
                focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]
                

                h-10 py-[10px] px-[14px] 
                !text-sm font-medium
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

                md:w-[98px]
                "
                disabled={isSubmitting}
              >
                Subscribe
              </button>
            </form>
          </div>
          <img
            className="col-span-4
            w-full 
            block 
            h-[288px] 
            object-cover rounded-[6px]
            shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
            
            md:col-span-6
            md:h-[608px]
            md:rounded-xl"
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
