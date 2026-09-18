import Image from "next/image";

export function SitePhoto({
  src,
  alt,
  credit,
  className = "",
  priority = false,
  focus = "object-center",
}: {
  src: string;
  alt: string;
  credit?: string;
  className?: string;
  priority?: boolean;
  /** Tailwind object-position class, for photos that crop badly when centered. */
  focus?: string;
}) {
  return (
    <figure className={`relative overflow-hidden bg-navy-900 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${focus}`}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      {credit && (
        <figcaption className="absolute inset-x-0 bottom-0 line-clamp-2 bg-navy-950/75 px-2.5 py-1 font-mono text-[0.58rem] leading-[1.15rem] tracking-wide text-paper/80">
          {credit}
        </figcaption>
      )}
    </figure>
  );
}
