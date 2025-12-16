

export default function PricingSectionSingleTailwind({
  supportingText,
  title,
  subtitle,
  featuresTitle,
  features,
  price,
  badge,
  currency,
  desc,
  buttonText,
  fullpage
}) {
  return (
    <div className={`mx-auto w-full
        ${fullpage ? "max-w-full p-0" : "max-w-[1440px] p-4"}`}>
      <div className={`
        flex flex-col gap-16
        px-3 py-12
        
        bg-[var(--bg-primary)]
       
        md:py-16 md:px-4

        [@media(min-width:90rem)]:p-[96px]
        
        ${
          fullpage
            ? "min-h-screen rounded-none shadow-none"
            : `rounded-sm  shadow-[0px_1px_2px_rgba(0,0,0,0.05)] 
        md:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),_0px_2px_4px_-1px_rgba(0,0,0,0.06)]
        [@media(min-width:90rem)]:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),_0px_4px_6px_-2px_rgba(0,0,0,0.05)]
        [@media(min-width:90rem)]:rounded-md`
        }
        `}>
        <div className="flex flex-col gap-3 w-full">
          <p className="text-center text-base font-semibold text-[var(--color-brand-primary)]">
            {supportingText}
          </p>
          <div className="flex flex-col gap-5">
            <h3 className="text-center text-3xl font-semibold text-[var(--color-primary)]
              md:text-5xl">{title}</h3>
            <p className="text-center text-lg font-normal text-[var(--color-secondary)]
              md:text-xl">{subtitle}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8
        md:grid-cols-6 md:gap-12
        md:landscape:grid-cols-12">
          <div className="col-span-4
          flex flex-col gap-8
          md:col-span-6 md:gap-16
          [@media(min-width:90rem)]:col-span-7">
            <h4 className="text-2xl font-semibold text-[var(--color-primary)]
            md:text-4xl
            ">
              {featuresTitle}
            </h4>
            <ul className="p-0 list-none
            flex flex-col gap-5
            text-xl font-normal text-[var(--color-secondary)]
            [@media(min-width:90rem)]:px-4">
              {features.map((feature) => {
                return (
                  <li key={feature.id} className="flex items-center gap-4">
                    <svg
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
          <div className="col-span-4 p-8
          border border-[var(--border-primary)]
          rounded-lg
          shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),_0px_4px_6px_-2px_rgba(0,0,0,0.05)]
          
          flex
          flex-col
          items-center
          gap-8
          md:col-span-6
          [@media(min-width:90rem)]:col-span-5
          ">
            <div className="flex flex-col items-center gap-2
            text-center text-sm font-normal text-[var(--color-secondary)]">
              <p className="
              py-[3px] px-[10px]
              rounded-full border border-[var(--border-success)]
              text-center font-normal text-[var(--color-success)]
              bg-[var(--bg-success)]">{badge}</p>
              <p className="text-center text-5xl font-semibold text-[var(--color-primary)]
              md:text-6xl">
                ${price}
              </p>
              <p>Prices in {currency}</p>
            </div>
            <p className="w-[80%] px-8 text-center text-lg font-normal text-[var(--color-primary)]
            md:w-[48%]
            md:landscape:w-[70%]">{desc}</p>
            <button className="inline-flex items-center justify-center
            w-full h-11 py-[10px] px-4
            rounded-sm
            text-base font-medium text-[var(--color-primary-invert)]
            bg-[var(--bg-brand-primary)]
            shadow-[0px_1px_3px_rgba(0,0,0,0.1),_0px_1px_2px_rgba(0,0,0,0.06)]
            outline-none transition-[background-color,box-shadow,color] duration-300
            hover:bg-[var(--bg-brand-primary-emphasize)]
            focus:bg-[var(--bg-brand-primary-emphasize)]
            focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]
            disabled:bg-[var(--bg-disabled)]
            disabled:shadow-none
            disabled:text-[var(--color-disabled)]
            disabled:pointer-events-none
            
            md:h-12 md:py-3 md:px-5">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}