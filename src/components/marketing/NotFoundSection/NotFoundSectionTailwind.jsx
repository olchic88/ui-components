import "./notFoundSection.css";
import { Link } from "react-router";

export default function NotFoundSectionTailwind({
  supportingText,
  title,
  description,
  fullpage,
}) {
  return (
    <div
      className={`mx-auto w-full
        ${fullpage ? "max-w-full p-0" : "max-w-[1440px] p-4"}`}
    >
      <div
        className={`not-found-bg
        flex flex-col gap-8
        px-3 py-12
        rounded-sm
        shadow-[0px_1px_2px_rgba(0,0,0,0.05)]
        
        md:gap-16
        md:py-16 md:px-4

        [@media(min-width:90rem)]:p-[96px]
        
        ${fullpage ? "justify-center min-h-screen rounded-none shadow-none" : ""}`}
      >
        <div className="flex flex-col gap-5">
          <div className="w-full flex flex-col gap-2">
            <p className="text-base font-semibold text-[var(--color-brand-primary)]">
              {supportingText}
            </p>
            <h3
              className="text-4xl font-semibold text-[var(--color-primary)]
              md:text-5xl
              [@media(min-width:90rem)]:text-6xl"
            >
              {title}
            </h3>
          </div>
          <p
            className="text-lg font-normal text-[var(--color-secondary)]
              md:text-xl"
          >
            {description}
          </p>
        </div>
        <Link
          to="/"
          /* ax-button button button-primary button-notFound */
          className={`
            inline-flex items-center justify-center
            w-full rounded-sm
            outline-none 
            no-underline
            font-medium
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
            
            h-12
            py-3 px-5

            md:h-15
            md:py-4 md:px-6
            md:w-[173px]
            md:text-lg
            `}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
