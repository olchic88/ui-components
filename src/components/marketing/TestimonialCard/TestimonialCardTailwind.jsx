export default function TestimonialCardTailwind({ img, name, username, text }) {
  return (
    <figure className="flex flex-col gap-4 p-6 !my-2 md:!my-4 bg-[var(--bg-primary)] rounded-lg shadow-md w-full">
      {" "}
      {/* !my because of figure {margin: 0;} in index.css */}
      <figcaption className="flex gap-4">
        <img
          className="w-12 h-12 rounded-full"
          src={img}
          alt={`${name}'s profile picture`}
          width={48}
          height={48}
        />
        <div className="grow min-w-0">
          <p
            className="text-lg font-semibold text-[var(--color-primary)]"
            wrap-anywhere
          >
            {name}
          </p>
          <p
            className="text-sm font-normal text-[var(--color-secondary)] truncate"
            title={username}
          >
            &#64;{username}
          </p>
        </div>
      </figcaption>
      <blockquote className="grow">
        <p className="text-base font-normal text-[var(--color-secondary)] wrap-break-word">
          {text}
        </p>
      </blockquote>
    </figure>
  );
}
