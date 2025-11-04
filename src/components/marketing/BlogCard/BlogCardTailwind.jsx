import { Link } from "react-router";

export default function BlogCardTailwind({
  src,
  alt,
  width,
  height,
  badge,
  title,
  text,
}) {
  return (
    <div
      className="
      w-full max-w-[340px]
      my-2 md:my-4
      rounded-lg overflow-hidden shadow-md
      bg-[var(--bg-primary)]"
    >
      <img
        className="block
        w-full h-[288px]
        object-cover"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <div
        className="flex flex-col items-start gap-2
      py-6 px-4"
      >
        <span
          className="
          py-[1px] px-[7.5px]
          rounded-full border border-[var(--border-success)]
          bg-[var(--bg-success)]
          text-[var(--color-success)] text-sm text-center"
        >
          {badge}
        </span>
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-[var(--color-primary)] wrap-anywhere line-clamp-1">
              {title}
            </h3>
            <p className="text-base font-medium text-[var(--color-secondary)] wrap-anywhere line-clamp-2">
              {text}
            </p>
          </div>

          <Link
            className="
            flex items-center gap-2
            rounded-sm
            text-[var(--color-brand-primary)] text-base font-medium no-underline
            hover:text-[var(--color-brand-primary-emphasize)]
            focus:outline-none
            focus:text-[var(--color-brand-primary-emphasize)]
            focus:shadow-[0_0_0_1px_#444ce7,0_0_0_4px_rgba(68,76,231,0.12)]
            transition-[colors,shadow] duration-300"
            to="/"
          >
            Read more
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4763 9.16658L9.00633 4.69657L10.1848 3.51807L16.6667 9.99992L10.1848 16.4817L9.00633 15.3032L13.4763 10.8332H3.33333V9.16658H13.4763Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
