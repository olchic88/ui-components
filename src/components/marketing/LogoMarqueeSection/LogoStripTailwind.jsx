export default function LogoStripTailwind({ logos, ariaHidden = false }) {
  return (
    <ul
      className={`flex shrink-0 list-none m-0 py-[2px]
    animate-marquee-tw
    group-hover:[animation-play-state:paused]
    motion-reduce:animate-none

    md:p-0

    gap-[var(--marquee-gap)]
    
    `}
      aria-hidden={ariaHidden}
    >
      {logos.map((logo) => (
        <li key={logo.id}>
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="w-[218px] h-auto"
          />
        </li>
      ))}
    </ul>
  );
}
