import TestimonialCardTailwind from "../TestimonialCard/TestimonialCardTailwind";

export default function TestimonialsSectionTailwind({ testimonials, fullpage }) {
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
       `}>
        <div className="flex flex-col gap-3 w-full">
          <p className="text-center text-base font-semibold text-[var(--color-brand-primary)]">
            Testimonials
          </p>
          <div className="flex flex-col gap-5">
            <h3 className="text-center text-3xl font-semibold text-[var(--color-primary)]
              md:text-5xl">
              Countless users, countless smiles
            </h3>
            <p className="text-center text-lg font-normal text-[var(--color-secondary)] md:text-xl">
              Explore our community's journey and discover why satisfaction
              defines us.
            </p>
          </div>
        </div>
        <ul className={`list-none columns-1 gap-x-6 p-0 mt-0 mx-0 mb-[-24px]
            md:columns-2 md:gap-x-8 md:mb-[-38px]
            [@media(min-width:90rem)]:columns-3 [@media(min-width:90rem)]:mb-[-32px]`}>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className={`inline-block w-full max-w-full break-inside-avoid
            mb-6 md:mb-[38px] [@media(min-width:90rem)]:mb-8`}>
              <TestimonialCardTailwind
              img={testimonial.image}
              name={testimonial.name}
              username={testimonial.username}
              text={testimonial.text}
              className="max-w-none"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
