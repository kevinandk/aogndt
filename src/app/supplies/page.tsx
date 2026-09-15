import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SitePhoto } from "@/components/SitePhoto";
import { qcCatalogNames, qcVendorSectors, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "QC NDT supplies",
  description:
    "QC NDT Equipment LLC in Hayward supplies ultrasonic, magnetic particle, penetrant, eddy current, radiography, borescope, rentals, and consumables.",
};

const catalog = [
  {
    title: "Instruments",
    body: "Ultrasonic flaw detectors, eddy current, magnetic particle equipment, radiography systems, and video inspection probes.",
  },
  {
    title: "Consumables",
    body: "Liquid penetrant materials, magnetic particle media, couplants, and related shop supplies.",
  },
  {
    title: "Standards & accessories",
    body: "Calibration blocks, reference standards, and accessories used with the methods we inspect and teach.",
  },
  {
    title: "Rentals & demos",
    body: "Equipment rentals and on-site demonstrations. Ask before you buy a box you will not use on the line.",
  },
] as const;

export default function SuppliesPage() {
  return (
    <>
      <PageHero
        eyebrow="QC NDT"
        title="Equipment and supplies from the shop next to the inspectors"
        lede={`${site.qcndt.legalName} has supplied NDT labs since ${site.foundedQc}. First West Coast Magnaflux distributor. Same Hayward address as Level 3 NDT — useful when an AOG call turns into a parts or instrument run.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {catalog.map((item) => (
            <article key={item.title} className="border border-navy-800/15 bg-white p-6">
              <h2 className="font-display text-2xl tracking-wide uppercase">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-navy-800/80">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
              Calibration and consulting
            </h2>
            <p className="mt-4 leading-7 text-navy-800/85">
              QC NDT works with NDT Electronics in Vallejo for equipment
              calibration and repair. Consulting and specialized seminars are
              published services. Aircraft inspection itself is routed to Level
              3 NDT — the partnership this site exists to make obvious.
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
                  Phone
                </dt>
                <dd>
                  <a href={site.qcndt.phoneHref} className="text-navy-950 hover:text-amber-500">
                    {site.qcndt.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${site.qcndt.email}`}
                    className="text-navy-950 hover:text-amber-500"
                  >
                    {site.qcndt.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <SitePhoto
            src="/photos/qc-demo.jpg"
            alt="Equipment demonstration at a QC NDT seminar"
            credit="QC NDT seminar · qcndt.net"
            className="min-h-72"
          />
        </div>
      </section>

      <section className="bg-paper-dark">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
            Catalog names QC already lists
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-navy-700">
            From QC NDT’s public catalog — “Qualified Vendor Trusted by.” Text
            only.{" "}
            <a
              href={site.qcndt.catalog.href}
              className="underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Verify on {site.qcndt.catalog.label}
            </a>
            .
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {qcCatalogNames.map((name) => (
              <li key={name} className="border-l-2 border-amber-500 pl-4">
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-10 font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
            Also published as approved-vendor sectors
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {qcVendorSectors.map((item) => (
              <li key={item} className="text-sm text-navy-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact?need=supplies"
            className="bg-amber-500 px-5 py-3 text-center font-display font-semibold tracking-[0.1em] text-navy-950 uppercase hover:bg-amber-400"
          >
            Request supplies
          </Link>
          <a
            href={site.qcndt.site.href}
            className="border border-navy-800/20 px-5 py-3 text-center font-display tracking-[0.1em] uppercase hover:border-amber-500"
          >
            {site.qcndt.site.label}
          </a>
        </div>
      </section>
    </>
  );
}
