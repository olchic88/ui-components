export default function FeatureSectionImageTailwind({
  side,
  heading,
  supportingText,
  title,
  subtitle,
  features,
  image,
  alt,
  width,
  height,
  fullpage,
}) {
  return (
    <section>
      {heading && (
        <h3 className="my-[6px] ml-4 text-base font-semibold tracking-[0.3px]">
          {side === "right" ? "Image Right" : "Image Left"}
        </h3>
      )}
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
              <h4
                className="text-center text-3xl font-semibold text-[var(--color-primary)]
              md:text-4xl
              [@media(min-width:90rem)]:px-[250px]"
              >
                {title}
              </h4>
              <p
                className="text-center text-lg font-normal text-[var(--color-secondary)]
              md:text-xl
              [@media(min-width:90rem)]:px-[360px]"
              >
                {subtitle}
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-4 gap-8 gap-y-[48px]
        
          md:grid-cols-6
          md:landscape:grid-cols-12
          
          [@media(min-width:90rem)]:grid-cols-12
          "
          >
            <ul
              className={`col-span-4 
            w-full p-0
            list-none

            flex flex-col gap-10

            md:col-span-6  
            
            ${side === "right" ? "order-1" : "order-2"}`}
            >
              {features.map((feature) => (
                <li key={feature.id} className="flex gap-5">
                  <div
                    className="flex justify-center items-center shrink-0
                  w-12 h-12 
                  bg-[var(--bg-primary)] shadow-md rounded-full 
                  text-[var(--color-brand-primary)]"
                  >
                    {feature.icon}
                  </div>
                  <div className="flex flex-col gap-2 py-[10px]">
                    <h5 className="text-lg font-semibold text-[var(--color-primary)]">
                      {feature.title}
                    </h5>
                    <p className="text-base font-normal text-[var(--color-secondary)]">
                      {feature.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div
              className={`col-span-4
                md:col-span-6
                ${side === "right" ? "order-2" : "order-1"}`}
            >
              <img
                src={image}
                alt={alt}
                width={width}
                height={height}
                className="block w-full h-[180px]
                object-cover rounded-lg
                shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),_0px_4px_6px_-2px_rgba(0,0,0,0.05)]
                
                md:h-[394px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
