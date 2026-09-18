import { faaCertificate } from "@/lib/site";

export function FaaCertificate() {
  return (
    <aside className="border border-navy-800/20 bg-[#f7f1df] p-5 text-navy-950 shadow-[0_8px_24px_rgb(6_16_24/0.12)]">
      <p className="font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
        FAA Repair Station {faaCertificate.number}
      </p>
      <a
        href={faaCertificate.certPdf}
        target="_blank"
        rel="noreferrer"
        className="mt-3 block border border-navy-800/20 bg-white"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={faaCertificate.certPreview}
          alt={`Air Agency Certificate ${faaCertificate.number}, ${faaCertificate.holder}`}
          className="h-auto w-full"
        />
      </a>
      <div className="mt-4 flex flex-col gap-2 text-sm">
        <a
          href={faaCertificate.certPdf}
          target="_blank"
          rel="noreferrer"
          className="text-navy-900 underline-offset-2 hover:underline"
        >
          Air Agency Certificate (PDF)
        </a>
        <a
          href={faaCertificate.opsSpecPdf}
          target="_blank"
          rel="noreferrer"
          className="text-navy-900 underline-offset-2 hover:underline"
        >
          Ops Spec A003 (PDF)
        </a>
        <a
          href={faaCertificate.verify.href}
          target="_blank"
          rel="noreferrer"
          className="text-navy-900 underline-offset-2 hover:underline"
        >
          Verify: {faaCertificate.verify.label}
        </a>
      </div>
    </aside>
  );
}
