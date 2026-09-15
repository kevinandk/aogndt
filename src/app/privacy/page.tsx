import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "AOGNDT privacy stub. How quote requests and call logs are treated.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        lede="Stub policy for the local draft. Replace with counsel-reviewed language before the domain goes live."
      />
      <section className="mx-auto max-w-3xl space-y-5 px-4 py-16 text-sm leading-7 text-navy-800 sm:px-6">
        <p>
          Quote forms collect name, organization, phone, email, aircraft or
          location, and the notes you type. Until a form endpoint is configured,
          that data is assembled into an email you send from your own client to{" "}
          {site.level3.inspectionEmail}, {site.level3.trainingEmail}, or{" "}
          {site.qcndt.email}.
        </p>
        <p>
          We use that information to schedule inspections, training, or supply
          orders. We do not sell it. Phone calls to published numbers are
          handled by {site.legalName} or {site.qcndt.legalName}.
        </p>
        <p>
          Hosting, analytics, and cookies will be documented here when the
          production domain is connected.
        </p>
      </section>
    </>
  );
}
