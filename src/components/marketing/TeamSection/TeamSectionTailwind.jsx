export default function TeamSectionTailwind({
  supportingText,
  title,
  subtitle,
  members,
  fullpage,
}) {
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
            <h3
              className="text-center text-3xl font-semibold text-[var(--color-primary)]
              md:text-5xl"
            >
              {title}
            </h3>
            <p className="text-center text-xl font-normal text-[var(--color-secondary)]">
              {subtitle}
            </p>
          </div>
        </div>
        <ul
          className="grid grid-cols-4 gap-8
          p-0
          list-none
        
          md:grid-cols-6
          md:gap-x-8 md:gap-y-16
          md:landscape:grid-cols-12
          
          [@media(min-width:90rem)]:grid-cols-12"
        >
          {members.map((member) => (
            <li
              key={member.id}
              className="col-span-4
              md:col-span-3
              
              flex flex-col gap-6
              "
            >
              <img
                src={member.img}
                alt={member.name}
                width={300}
                height={298}
                className="h-[296px] w-full object-cover"
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-semibold text-[var(--color-primary)]">
                    {member.name}
                  </h4>
                  <p className="text-lg font-medium text-[var(--color-brand-primary)]">
                    {member.designation}
                  </p>
                </div>
                <p className="text-base font-normal text-[var(--color-secondary)]">
                  {member.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
