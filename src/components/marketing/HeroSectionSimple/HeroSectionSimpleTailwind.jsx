import { Link } from "react-router";

export default function HeroSectionSimpleTailwind({
  title,
  description,
  src,
  alt,
  width,
  height,
  fullpage,
}) {
  const baseBtnClasses = `
  flex justify-center items-center
  h-12
  rounded-sm
  shadow-[0px_1px_3px_rgba(0,0,0,0.1),_0px_1px_2px_rgba(0,0,0,0.06)]
  font-medium text-base no-underline
  outline-none
  focus:outline-none
  focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]
  transition-[background-color,color,box-shadow,border-color] duration-300
  md:h-[60px]
  md:text-lg`;

  return (
    <div
      className={`mx-auto w-full
        ${fullpage ? "max-w-full p-0" : "max-w-[1440px] p-4"}`}
    >
      <div
        className={`grid grid-cols-4 gap-8 gap-y-12
          py-[104px] px-3
          rounded-sm
          bg-[linear-gradient(176.17deg,_#f9fafb_0.94%,_#edf0f3_316.54%)]
          shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),_0_4px_6px_-2px_rgba(0,0,0,0.05)]
          
          md:grid-cols-6 md:landscape:grid-cols-12
          md:gap-y-8 md:py-[91px] md:p-4

          [@media(min-width:90rem)]:grid-cols-12
          [@media(min-width:90rem)]:gap-8
          [@media(min-width:90rem)]:p-[96px]
          [@media(min-width:90rem)]:py-[105px]
          [@media(min-width:90rem)]:rounded-md
          
          ${fullpage ? "min-h-screen rounded-none shadow-none" : ""}`}
      >
        <div
          className="col-span-4 flex flex-col justify-center
          gap-8 md:gap-16
          md:col-span-6 md:landscape:col-span-6
          [@media(min-width:90rem)]:col-span-5"
        >
          <div className="flex flex-col gap-4 md:gap-6">
            <h3
              className="text-4xl font-semibold text-[var(--color-primary)]
            md:text-5xl
            [@media(min-width:90rem)]:text-6xl"
            >
              {title}
            </h3>
            <p
              className="text-lg font-normal text-[var(--color-secondary)]
            md:text-xl"
            >
              {description}
            </p>
          </div>
          <div
            className="flex gap-4
          md:justify-start md:gap-8"
          >
            <div
              className="flex-1
            md:flex-none md:w-[213px]
            [@media(min-width:90rem)]:w-[175.5px]"
            >
              <Link
                className={`
                ${baseBtnClasses}
                py-[11px] px-[19px]
                border-[0.5px] border-[#e6e6e6]
                bg-[var(--bg-primary)]
                text-[var(--color-primary)]
                hover:bg-[var(--bg-primary-hover)]
                focus:bg-[var(--bg-primary-hover)]
                hover:border
                focus:border
                hover:text-[var(--color-primary-hover)]
                focus:text-[var(--color-primary-hover)]
                
                md:py-[15px] md:p-[23px]`}
                to="#"
              >
                Learn more
              </Link>
            </div>
            <div className="flex-1 md:flex-none md:w-[213px] [@media(min-width:90rem)]:w-[175.5px]">
              <Link
                className={`
                ${baseBtnClasses}
                py-3 px-5
                bg-[var(--bg-brand-primary)]
                text-[var(--color-primary-invert)]
                hover:bg-[var(--bg-brand-primary-emphasize)]
                focus:bg-[var(--bg-brand-primary-emphasize)]

                md:py-4 md:p-6`}
                to="#"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
        <img
          src={src}
          className="col-span-4
          max-w-full w-full h-auto object-cover
          md:col-span-6 md:landscape:col-span-6
          [@media(min-width:90rem)]:col-span-7"
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}
