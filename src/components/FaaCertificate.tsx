import { faaCertificate } from "@/lib/site";

export function FaaCertificate() {
  return (
    <aside className="border border-navy-800/20 bg-[#f7f1df] p-5 text-navy-950 shadow-[0_8px_24px_rgb(6_16_24/0.12)]">
      <div className="border-2 border-navy-900 px-4 py-5">
        <p className="text-center font-display text-[0.65rem] tracking-[0.16em] uppercase sm:text-[0.7rem] sm:tracking-[0.28em]">
          United States of America
        </p>
        <p className="mt-1 text-center font-display text-[0.6rem] leading-4 tracking-[0.08em] uppercase sm:text-[0.65rem] sm:tracking-[0.18em]">
          Department of Transportation · Federal Aviation Administration
        </p>
        <h2 className="mt-4 text-center font-display text-xl tracking-[0.1em] uppercase sm:text-2xl sm:tracking-[0.14em]">
          Air Agency Certificate
        </h2>
        <p className="mt-4 text-center font-mono text-sm">
          Number <span className="text-lg font-semibold">{faaCertificate.number}</span>
        </p>
        <p className="mt-5 text-center text-xs tracking-wide uppercase">This certificate is issued to</p>
        <p className="mt-1 text-center font-display text-xl tracking-wide">
          {faaCertificate.holder}
        </p>
        <p className="mt-1 text-center text-sm">{faaCertificate.address}</p>
        <dl className="mx-auto mt-5 max-w-sm space-y-2 text-sm">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
            <dt className="text-navy-700">Type</dt>
            <dd>{faaCertificate.companyType}</dd>
          </div>
          <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
            <dt className="text-navy-700">Rating</dt>
            <dd>{faaCertificate.rating}</dd>
          </div>
          <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
            <dt className="text-navy-700">Status</dt>
            <dd>{faaCertificate.status}</dd>
          </div>
        </dl>
      </div>
      <p className="mt-3 text-xs leading-5 text-navy-800/80">{faaCertificate.note}</p>
      <ul className="mt-3 space-y-2 text-xs">
        {faaCertificate.sources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              className="break-words text-navy-900 underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Verify: {source.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
