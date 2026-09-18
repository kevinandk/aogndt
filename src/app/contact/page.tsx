import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { aogEmailHref, formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "24/7 AOG: call 877-9AOG-NDT or email AOGNDT@proton.me. QC NDT supplies on the 510 line. Hayward, California.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call first."
        lede={`${site.aog.who} AOG on the 877 line or ${site.aog.email}. Training and supplies by the addresses below.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.aog.phoneHref}
            className="bg-amber-500 px-5 py-3 text-center font-display font-semibold tracking-[0.08em] text-navy-950 uppercase transition-colors duration-200 hover:bg-white"
          >
            AOG {site.aog.phone}
          </a>
          <a
            href={aogEmailHref()}
            className="border border-paper/30 px-5 py-3 text-center font-display tracking-[0.08em] uppercase hover:border-amber-400 hover:text-amber-400"
          >
            Email {site.aog.email}
          </a>
          <a
            href={site.qcndt.phoneHref}
            className="border border-paper/30 px-5 py-3 text-center font-display tracking-[0.08em] uppercase hover:border-amber-400 hover:text-amber-400"
          >
            Supplies {site.qcndt.phone}
          </a>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl tracking-wide uppercase">
          Direct lines
        </h2>
        <dl className="mt-6 max-w-xl space-y-5 text-sm">
          <div>
            <dt className="font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
              AOG / field dispatch
            </dt>
            <dd className="mt-1">
              <a href={site.aog.phoneHref} className="text-navy-950 hover:text-amber-500">
                {site.aog.phone}
              </a>
              <span className="text-navy-700"> · </span>
              <a href={aogEmailHref()} className="text-navy-950 hover:text-amber-500">
                {site.aog.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
              Scheduled inspections
            </dt>
            <dd className="mt-1">
              <a href={site.aog.phoneHref} className="text-navy-950 hover:text-amber-500">
                {site.level3.phone}
              </a>
              <span className="text-navy-700"> · </span>
              <a
                href={`mailto:${site.level3.inspectionEmail}`}
                className="text-navy-950 hover:text-amber-500"
              >
                {site.level3.inspectionEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
              Training
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${site.level3.trainingEmail}`}
                className="text-navy-950 hover:text-amber-500"
              >
                {site.level3.trainingEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
              QC NDT supplies
            </dt>
            <dd className="mt-1">
              <a href={site.qcndt.phoneHref} className="text-navy-950 hover:text-amber-500">
                {site.qcndt.phone}
              </a>
              <span className="text-navy-700"> · </span>
              <a
                href={`mailto:${site.qcndt.email}`}
                className="text-navy-950 hover:text-amber-500"
              >
                {site.qcndt.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
              Shop
            </dt>
            <dd className="mt-1 text-navy-900">
              {formatAddress()}
              <br />
              {site.address.note}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
              Fax
            </dt>
            <dd className="mt-1 text-navy-900">{site.level3.fax}</dd>
          </div>
        </dl>
      </section>
    </>
  );
}
