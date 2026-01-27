export default function StatisticsSectionTailwind({
  supportingText,
  title,
  subtitle,
  src,
  alt,
  width,
  height,
  statsTitle,
  statistics = [],
  fullpage
}) {
  return (
    <div className={`mx-auto w-full
        ${fullpage ? "max-w-full p-0" : "max-w-[1440px] p-4"}`}>
      <div className={`flex flex-col gap-12
        px-3 py-12
        rounded-sm
        bg-[var(--bg-primary)]
        shadow-[0px_1px_2px_rgba(0,0,0,0.05)]

        md:gap-16
        md:py-16 md:px-4
        md:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),_0px_2px_4px_-1px_rgba(0,0,0,0.06)]

        [@media(min-width:90rem)]:p-[96px]
        [@media(min-width:90rem)]:shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),_0px_4px_6px_-2px_rgba(0,0,0,0.05)]
        [@media(min-width:90rem)]:rounded-md

        ${fullpage ? "min-h-screen rounded-none shadow-none" : ""}
       `} 
        >
        <div className="flex flex-col gap-3 w-full">
          <p className="text-center text-base font-semibold text-[var(--color-brand-primary)]">
            {supportingText}
          </p>
          <div className="flex flex-col gap-5">
            <h3 className="text-center text-3xl font-semibold text-[var(--color-primary)]
              md:text-5xl">{title}</h3>
            <p className="text-center text-xl font-normal text-[var(--color-secondary)]">{subtitle}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 gap-y-[48px]
        
          md:grid-cols-6
          md:gap-16
          md:landscape:grid-cols-12
          md:landscape:gap-8
          
          [@media(min-width:90rem)]:grid-cols-12">
          <div className="col-span-4 w-full
          md:col-span-6">
            <img className="block w-full h-[311px]
                object-cover rounded-lg
                shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),_0px_4px_6px_-2px_rgba(0,0,0,0.05)]
                
                md:h-[656px] md:landscape:h-[544px] [@media(min-width:90rem)]:h-[544px]" src={src} alt={alt} width={width} height={height} />
          </div>
          <div className="col-span-4 
          flex flex-col gap-6
          md:col-span-6
          md:gap-8">
            <p className="text-lg text-[var(--color-secondary)]">{statsTitle}</p>
            <ul className="w-full p-0
            list-none
            
            flex flex-col gap-6
            md:gap-8
            ">
              {statistics.map((card) => (
                <li key={card.id} className="flex flex-col items-center justify-center gap-4
                p-[23px] border border-[var(--border-primary)] 
                rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)]
                text-xl font-normal text-[var(--color-secondary)]">
                  <p className="text-4xl font-bold text-[var(--color-brand-primary)]
                  md:text-5xl">
                    {card.value}
                  </p>
                  <p>{card.metric}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
