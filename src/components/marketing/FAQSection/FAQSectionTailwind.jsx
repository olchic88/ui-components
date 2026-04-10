import { AccordionIcon } from "../../../icons";

import { useState } from "react";

export default function FAQSectionTailwind({ faqs, fullpage }) {
  const [openItems, setOpenItems] = useState([]);

  function handleButtonClick(id) {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }

  return (
    <div
      className={`mx-auto w-full
        ${fullpage ? "max-w-full p-0" : "max-w-[1440px] p-4"}`}
    >
      <div
        className={`flex flex-col gap-12
        px-4 py-12
        rounded-sm
        bg-[var(--bg-primary)]
        shadow-[0px_1px_2px_rgba(0,0,0,0.05)]
        
        md:gap-[64px]
        md:py-16 md:px-4
        md:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),_0px_2px_4px_-1px_rgba(0,0,0,0.06)]

        [@media(min-width:90rem)]:p-[96px]
        [@media(min-width:90rem)]:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),_0px_4px_6px_-2px_rgba(0,0,0,0.05)]
        
        ${fullpage ? "min-h-screen rounded-none shadow-none" : ""}`}
      >
        <div className="flex flex-col gap-5">
          <h3
            className="text-3xl font-semibold text-[var(--color-primary)] text-center
              md:text-5xl"
          >
            Frequently asked questions
          </h3>
          <p
            className="text-lg font-normal text-[var(--color-secondary)] text-center
              md:text-xl"
          >
            Choose any questions you need
          </p>
        </div>
        <div className="flex flex-col">
          <ul
            className="flex flex-col gap-7
              list-none p-0"
          >
            {faqs.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              return (
                <li
                  className="flex flex-col gap-2 pb-7
                [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#d4d4d4]"
                  key={faq.id}
                >
                  <h4>
                    <button
                      className="flex justify-between gap-4
                      w-full text-left
                      !text-lg !font-medium text-[var(--color-primary)]
                      outline-none cursor-pointer 
                      focus:rounded 
                      focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => handleButtonClick(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <AccordionIcon isOpen={isOpen} className="shrink-0" />
                    </button>
                  </h4>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <p
                      className="overflow-hidden 
                    pr-10 
                    text-base font-normal text-[var(--color-secondary)]"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div
            className="flex flex-col gap-4 
          p-4 
          border border-[var(--border-primary)] 
          rounded-lg 
          shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),_0px_2px_4px_-1px_rgba(0,0,0,0.06)] 
          bg-[var(--bg-primary)] 
          text-base font-normal text-[var(--color-secondary)] 
          
          md:flex-row md:justify-between md:items-center md:p-8"
          >
            <div className="flex flex-col gap-2">
              <h5 className="text-xl font-semibold text-[var(--color-primary)]">
                Can’t find the answer you’re looking for?
              </h5>
              <p>
                Reach out to our
                <a
                  href="#"
                  className="outline-none no-underline
                hover:text-[var(--color-brand-primary-emphasize)]
                focus-visible:text-[var(--color-brand-primary-emphasize)]
                focus-visible:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]
                focus-visible:rounded

                !text-[var(--color-brand-primary)]
                "
                >
                  {" "}
                  customer support{" "}
                </a>
                team.
              </p>
            </div>
            <button
              type="button"
              /* ax-button button button-primary button-size-xl faq-section-button */
              className="
            inline-flex items-center justify-center
            w-full rounded-sm
            outline-none 
            no-underline
            !font-medium
            transition-[background-color,box-shadow,color,transform] duration-300
      
            focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]

            text-[var(--color-primary-invert)]
            bg-[var(--bg-brand-primary)]
            shadow-[0px_1px_3px_rgba(0,0,0,0.1),_0px_1px_2px_rgba(0,0,0,0.06)]
             
            hover:bg-[var(--bg-brand-primary-emphasize)]
            focus:bg-[var(--bg-brand-primary-emphasize)]
            focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]

            active:translate-x-[0.5px] 
            active:translate-y-[0.5px]

            h-12 py-3 px-5
            text-base

            md:!w-[138px]"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
