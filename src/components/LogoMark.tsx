// Modeled on a 4x4 AOG handling label: solid field, black rule, condensed
// caps. Size and letter size both come from className.
export function LogoMark({
  className = "h-8 w-8 text-[13px]",
}: {
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center bg-amber-500 p-[2px] ${className}`}
    >
      <span className="flex h-full w-full items-center justify-center border-2 border-navy-950">
        <span className="font-display font-bold leading-none tracking-[0.02em] text-navy-950 uppercase">
          AOG
        </span>
      </span>
    </span>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2 text-paper sm:gap-2.5">
      <LogoMark className="h-8 w-8 text-[13px] sm:h-9 sm:w-9 sm:text-[15px]" />
      <span className="leading-none">
        <span className="font-display text-xl font-semibold tracking-[0.12em] sm:text-[1.35rem] sm:tracking-[0.14em]">
          AOGNDT
        </span>
        {!compact && (
          <span className="mt-0.5 block font-mono text-[0.62rem] tracking-[0.18em] text-steel uppercase">
            Aircraft on Ground NDT
          </span>
        )}
      </span>
    </span>
  );
}
