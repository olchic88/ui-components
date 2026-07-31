import { Link } from "react-router";

export default function FooterSectionTailwind({
  footerLinks,
  socialMediaLinks,
}) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full max-w-[1440px] mx-auto p-4">
      <div
        className={`py-[286px] bg-[var(--bg-primary)] rounded shadow-sm
        md:py-[376px] 
        md:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]
        [@media(min-width:90rem)]:py-[216px]
        [@media(min-width:90rem)]:rounded-md
        [@media(min-width:90rem)]:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05)]`}
      >
        <div
          className={`
            flex flex-col items-center justify-center gap-4 
            text-center
            px-8 py-12
            md:px-4
            md:py-16
            [@media(min-width:90rem)]:px-4
            [@media(min-width:90rem)]:py-24
            `}
        >
          <div className="flex flex-col gap-8">
            <nav aria-label="Footer">
              <ul
                className={`
                    flex flex-wrap gap-[18px]
                    text-sm
                    font-medium
                    text-[var(--color-secondary)]
                    p-0
                    md:gap-[26px]`}
              >
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.to}
                      className={`outline-none
                        rounded
                        hover:text-[var(--color-primary)]
                        focus:text-[var(--color-primary)]
                        focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {socialMediaLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    className={`
                    inline-flex
                    px-[2px]
                    text-[var(--color-disabled)]
                    rounded
                    outline-none
                    hover:text-[var(--color-primary)]
                    focus:text-[var(--color-primary)]
                    focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]`}
                  >
                    <span className="sr-only">{link.label}</span>
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p>
            <small className="text-sm font-normal text-[var(--color-primary)]">
              &copy; {currentYear} Abstractly, Inc. All rights reserved.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
