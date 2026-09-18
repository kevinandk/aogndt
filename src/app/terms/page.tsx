import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "AOGNDT terms stub for the public front-door site.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        lede="Stub terms for the local draft. This site is a marketing front door, not a contract for inspection work."
      />
      <section className="mx-auto max-w-3xl space-y-5 px-4 py-16 text-sm leading-7 text-navy-800 sm:px-6">
        <p>
          AOGNDT describes services performed by {site.legalName} (FAA Repair
          Station {site.faaStation}) and {site.qcndt.legalName}. A phone call or
          email is an inquiry, not an accepted work order.
        </p>
        <p>
          Inspection, training, and supply work is governed by the applicable
          repair-station, training, or sales terms of those businesses. Do not
          rely on this website for airworthiness decisions.
        </p>
        <p>
          Published capabilities are taken from existing public sites. They are
          not a complete list of approved data or OEM authorizations.
        </p>
      </section>
    </>
  );
}
