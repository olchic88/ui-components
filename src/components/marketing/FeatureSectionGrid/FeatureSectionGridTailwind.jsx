export default function FeatureSectionGridTailwind({
  supportingText,
  title,
  subtitle,
  features,
  fullpage,
}) {
  return (
    <div
      className={`mx-auto w-full
        ${fullpage ? "max-w-full p-0" : "max-w-[1440px] p-4"}`}
    >
      <div
        className={`
        flex flex-col gap-12
        px-3 py-12
        
        bg-[var(--bg-primary)]
       
        md:gap-16
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
        `}
      >
        <div className="flex flex-col gap-3 w-full">
          <p className="text-center text-base font-semibold text-[var(--color-brand-primary)]">
            {supportingText}
          </p>
          <div className="flex flex-col gap-5">
            <h3
              className="text-center text-3xl font-semibold text-[var(--color-primary)]
              md:text-4xl
              [@media(min-width:90rem)]:px-[250px]"
            >
              {title}
            </h3>
            <p
              className="text-center text-lg font-normal text-[var(--color-secondary)]
              md:text-xl
              [@media(min-width:90rem)]:px-[200px]"
            >
              {subtitle}
            </p>
          </div>
        </div>

        <ul
          className="
            grid grid-cols-4 gap-8 gap-y-[48px] p-0
            list-none
        
            md:grid-cols-6
            md:auto-rows-fr
            md:items-start
          
            [@media(min-width:90rem)]:grid-cols-12
            [@media(min-width:90rem)]:gap-y-12
        "
        >
          {features.map((feature) => {
            return (
              <li
                className="col-span-4 flex flex-col gap-5 items-center
              md:col-span-3
              [@media(min-width:90rem)]:col-span-4
              "
                key={feature.id}
              >
                <div
                  className="flex justify-center items-center shrink-0
                  w-12 h-12 
                  bg-[var(--bg-primary)] shadow-md rounded-full 
                  text-[var(--color-brand-primary)]"
                >
                  {feature.icon}
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <h4 className="text-lg font-semibold text-[var(--color-primary)]">
                    {feature.title}
                  </h4>
                  <p className="text-base font-normal text-[var(--color-secondary)]">
                    {feature.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
