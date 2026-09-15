import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-paper">
      <div className="pointer-events-none absolute inset-0 hangar-grid opacity-60" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 ramp-stripe" />
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-20">
        <p className="font-mono text-[0.65rem] tracking-[0.16em] text-amber-400 uppercase sm:text-xs sm:tracking-[0.22em]">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-normal uppercase sm:text-5xl sm:tracking-wide">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-steel sm:mt-5 sm:text-lg">{lede}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
