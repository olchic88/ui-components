import logo from "./abstractly.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function NavbarTailwind({ navbarLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const baseButtonClass = `
        inline-flex items-center justify-center
        w-full rounded-sm
        outline-none 
        no-underline
        !font-medium
        transition-[background-color,box-shadow,color,transform] duration-300`;

  const primaryButtonClass = `     
        text-[var(--color-primary-invert)]
        bg-[var(--bg-brand-primary)]
        shadow-[0px_1px_3px_rgba(0,0,0,0.1),_0px_1px_2px_rgba(0,0,0,0.06)]
        hover:bg-[var(--bg-brand-primary-emphasize)]
        focus:bg-[var(--bg-brand-primary-emphasize)]`;

  const secondaryButtonClass = `
        border border-[0.5px] border-[#e6e6e6]
        bg-[var(--bg-primary)]
        text-[var(--color-primary)]
        shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)]

        hover:bg-[var(--bg-primary-hover)]
        hover:text-[var(--color-primary-hover)]
        hover:border-[#e6e6e6]
            
        focus:bg-[var(--bg-primary-hover)]
        focus:text-[var(--color-primary-hover)]
        focus:border
        focus:border-[#e6e6e6]`;

  const lgButtonSizeClass = `h-11 px-[15px] py-[9px] text-base`;

  return (
    <div className="w-full max-w-[1440px] mx-auto p-4">
      <div
        className={`relative 
        overflow-hidden 
        min-h-[710px]
        rounded 
        bg-[linear-gradient(147.52deg,_#f9fafb_8.89%,_#d2d6db_100.48%)] 
        shadow-[0px_1px_2px_rgba(0,0,0,0.05)]`}
      >
        <header
          className={`
            flex items-center justify-between gap-20 
            h-[68px] max-w-[1216px] mx-auto 
            px-4 
            md:px-8 
            [@media(min-width:90rem)]:px-0`}
        >
          <div className="h-8 w-[163px]">
            <Link
              to="/"
              className="inline-block outline-none focus:rounded focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]"
            >
              <img src={logo} alt="Abstractly's logo" width={112} height={32} />
            </Link>
          </div>
          <nav className="hidden [@media(min-width:90rem)]:flex-1 [@media(min-width:90rem)]:items-center [@media(min-width:90rem)]:gap-24 [@media(min-width:90rem)]:flex">
            <ul
              className={`flex flex-1 flex-col gap-2
            [@media(min-width:90rem)]:flex-row 
            [@media(min-width:90rem)]:gap-8`}
            >
              {navbarLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    className={`px-[2px] text-base font-medium text-[#525252] hover:text-[#171717] focus:text-[#171717]`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={`flex flex-col gap-4 [@media(min-width:90rem)]:flex-row`}
            >
              <Link
                to="/"
                /* "ax-button button button-secondary button-size-lg button-navbar-learn" */
                className={`${baseButtonClass} ${secondaryButtonClass} ${lgButtonSizeClass} [@media(min-width:90rem)]:w-[125px]`}
              >
                Learn more
              </Link>
              <Link
                to="/"
                /* "ax-button button button-primary button-size-lg button-navbar-pricing" */
                className={`${baseButtonClass} ${primaryButtonClass} ${lgButtonSizeClass} [@media(min-width:90rem)]:w-[121px]`}
              >
                See pricing
              </Link>
            </div>
          </nav>
          <button
            aria-label="Open menu"
            className={`
                cursor-pointer 
                rounded 
                outline-none 
                focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]
                [@media(min-width:90rem)]:hidden`}
            onClick={() => setIsOpen(true)}
          >
            <svg
              className="block"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 3.33333H17.5V5H2.5V3.33333ZM2.5 9.16667H17.5V10.8333H2.5V9.16667ZM2.5 15H17.5V16.6667H2.5V15Z"
                fill="#525252"
              />
            </svg>
          </button>
        </header>

        <nav
          className={`
            absolute
            left-0
            top-0
            bottom-0
            flex
            w-[300px]
            min-h-[710px]
            flex-col
            gap-6
            overflow-y-scroll
            overscroll-contain
            bg-[var(--bg-primary)]
            px-4
            pt-8
            pb-4
            transition-transform
            duration-300
            ${isOpen ? "translate-x-0" : "translate-x-[calc(-100%_-_16px)]"}
            [@media(min-width:90rem)]:hidden`}
        >
          <div className="flex items-center justify-between">
            <div className="h-8 w-[163px]">
              <Link
                to="/"
                className="inline-block outline-none focus:rounded focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]"
              >
                <img
                  src={logo}
                  alt="Abstractly's logo"
                  width={112}
                  height={32}
                />
              </Link>
            </div>
            <button
              aria-label="Close menu"
              className="cursor-pointer rounded outline-none focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="block"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0006 8.82208L14.1253 4.69727L15.3038 5.87577L11.1791 10.0006L15.3038 14.1253L14.1253 15.3038L10.0006 11.1791L5.87577 15.3038L4.69727 14.1253L8.82208 10.0006L4.69727 5.87577L5.87577 4.69727L10.0006 8.82208Z"
                  fill="#525252"
                />
              </svg>
            </button>
          </div>

          <ul
            className={`flex flex-1 flex-col gap-2
            [@media(min-width:90rem)]:flex-row 
            [@media(min-width:90rem)]:gap-8`}
          >
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  className={`block w-full px-3 py-2 text-sm text-[var(--color-primary)] hover:text-[var(--color-primary)] focus:text-[var(--color-primary)] link`}
                  onClick={closeSidebar}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`flex flex-col gap-4 [@media(min-width:90rem)]:flex-row`}
          >
            <Link
              to="/"
              /* "ax-button button button-secondary button-size-lg button-navbar-learn" */
              className={`${baseButtonClass} ${secondaryButtonClass} ${lgButtonSizeClass} [@media(min-width:90rem)]:w-[125px]`}
              onClick={closeSidebar}
            >
              Learn more
            </Link>
            <Link
              to="/"
              /* "ax-button button button-primary button-size-lg button-navbar-pricing" */
              className={`${baseButtonClass} ${primaryButtonClass} ${lgButtonSizeClass} [@media(min-width:90rem)]:w-[121px]`}
              onClick={closeSidebar}
            >
              See pricing
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
