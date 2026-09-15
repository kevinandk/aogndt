import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { formatAddress, quoteNeeds, type QuoteNeed, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call Level 3 NDT for AOG and inspections, or QC NDT for supplies. Request a quote from Hayward, California.",
};

function parseNeed(value?: string): QuoteNeed {
  if (quoteNeeds.some((item) => item.value === value)) {
    return value as QuoteNeed;
  }
  return "inspection";
}

export default async function ContactPage({
  searchParams,
}: PageProps<"/contact">) {
  const params = await searchParams;
  const raw = typeof params.need === "string" ? params.need : undefined;
  const initialNeed = parseNeed(raw);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call for AOG. Write for everything else."
        lede="Two published phones, three inboxes. The form stays on this page and routes to the inbox that matches the need you select."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.aog.phoneHref}
            className="bg-amber-500 px-5 py-3 text-center font-display font-semibold tracking-[0.08em] text-navy-950 uppercase hover:bg-amber-400"
          >
            AOG {site.aog.phone}
          </a>
          <a
            href={site.qcndt.phoneHref}
            className="border border-paper/30 px-5 py-3 text-center font-display tracking-[0.08em] uppercase hover:border-amber-400 hover:text-amber-400"
          >
            Supplies {site.qcndt.phone}
          </a>
        </div>
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl tracking-wide uppercase">
            Direct lines
          </h2>
          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
                AOG / inspections
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
        </div>

        <div className="border border-navy-800/15 bg-white p-6">
          <h2 className="font-display text-2xl tracking-wide uppercase">
            Request a quote
          </h2>
          <p className="mt-2 mb-6 text-sm text-navy-700">
            Need pre-selected from the page you came from, if any.
          </p>
          <QuoteForm initialNeed={initialNeed} />
        </div>
      </section>
    </>
  );
}
