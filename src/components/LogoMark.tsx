export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect x="1" y="1" width="38" height="38" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7 26h26M10 22h4l3-8h6l3 8h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M6 29h28" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <circle cx="20" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2 text-paper sm:gap-2.5">
      <LogoMark className="h-7 w-7 text-amber-500 sm:h-8 sm:w-8" />
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
