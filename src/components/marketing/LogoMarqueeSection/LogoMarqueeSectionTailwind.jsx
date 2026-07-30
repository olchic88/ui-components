import { logos } from "./logoMarqueeSectionData";
import LogoStripTailwind from "./LogoStripTailwind";

export default function LogoMarqueeSectionTailwind({ fullpage }) {
  return (
    <div
      className={`mx-auto w-full
        ${fullpage ? "max-w-full p-0" : "max-w-[1440px] p-4"}`}
    >
      <div
        className={`
        py-[264px]
        rounded-sm
        bg-[var(--bg-primary)]
        shadow-[0px_1px_2px_rgba(0,0,0,0.05)]
        
        md:py-[356px] md:px-2
        md:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),_0px_2px_4px_-1px_rgba(0,0,0,0.06)]

        [@media(min-width:90rem)]:py-[196px] [@media(min-width:90rem)]:px-2
        [@media(min-width:90rem)]:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),_0px_4px_6px_-2px_rgba(0,0,0,0.05)]
        [@media(min-width:90rem)]:rounded-md
        
        ${fullpage ? "min-h-screen rounded-none shadow-none" : ""}`}
      >
        <div
          className={`flex flex-col gap-8 px-4 py-12
            md:py-16 md:px-0
            [@media(min-width:90rem)]:py-[96px] [@media(min-width:90rem)]:px-0
            `}
        >
          <h3 className="text-base font-medium text-center text-[var(--color-secondary)]">
            Used by teams that you love
          </h3>
          <div className="overflow-hidden group">
            <div
              className={`
            flex
            w-[200%]
            select-none
            md:p-0

            [--marquee-gap:80px]
            md:[--marquee-gap:8px]
            [@media(min-width:90rem)]:[--marquee-gap:32px]
            
             gap-[var(--marquee-gap)]`}
            >
              <LogoStripTailwind logos={logos} />
              <LogoStripTailwind logos={logos} ariaHidden />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
