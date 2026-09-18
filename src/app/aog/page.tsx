import type { Metadata } from "next";
import { CoverageSection } from "@/components/CoverageMap";
import { PageHero } from "@/components/PageHero";
import { aogEmailHref, aogReady, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AOG / field dispatch",
  description:
    "24/7 AOG NDT dispatch. Call 877-9AOG-NDT — a dispatcher answers. Email AOGNDT@proton.me if the line is busy.",
};

const steps = [
  {
    n: "01",
    title: "Call with the aircraft where it sits",
    body: "Ramp, hangar, or shop. Give tail or type, airport, and what the maintenance instruction is asking for.",
  },
  {
    n: "02",
    title: "We match method and kit",
    body: "Eddy current, ultrasonic, magnetic particle, penetrant, visual, or borescope — portable gear and reference standards go with the inspector.",
  },
  {
    n: "03",
    title: "Inspect, document, get it moving",
    body: "Results support AD compliance and return-to-service. The point of the call is time off the ground — a clear report, then the aircraft can leave.",
  },
] as const;

export default function AogPage() {
  return (
    <>
      <PageHero
        eyebrow="AOG / field"
        title="The aircraft is down. Call first."
        lede={`${site.aog.who} AOGNDT routes that call to Level 3 NDT — FAA Repair Station ${site.faaStation}. Field-ready Bay Area dispatch since ${site.foundedLevel3}. Every U.S. airport.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.aog.phoneHref}
            className="bg-amber-500 px-5 py-3 text-center font-display text-lg font-semibold tracking-[0.08em] text-navy-950 uppercase transition-colors duration-200 hover:bg-white"
          >
            Call {site.aog.phone}
          </a>
          <a
            href={aogEmailHref()}
            className="border border-paper/30 px-5 py-3 text-center font-display text-lg tracking-[0.08em] uppercase hover:border-amber-400 hover:text-amber-400"
          >
            Email {site.aog.email}
          </a>
        </div>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
            Have this ready
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {aogReady.map((item) => (
              <li key={item} className="border-l-2 border-amber-500 pl-4 text-navy-900">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
          How a call usually goes
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.n} className="border border-navy-800/15 bg-white p-6">
              <p className="font-mono text-amber-500">{step.n}</p>
              <h3 className="mt-3 font-display text-xl tracking-wide uppercase">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-navy-800/80">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CoverageSection />

      <section className="bg-navy-950 text-paper">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
            Save this number
          </h2>
          <p className="mt-3 max-w-xl text-steel">
            Add AOGNDT to the phone you will hand a technician. {site.aog.phone}{" "}
            · {site.aog.email}.
          </p>
          <a
            href={site.aog.vcard}
            download
            className="mt-6 inline-block bg-amber-500 px-5 py-3 font-display font-semibold tracking-[0.08em] text-navy-950 uppercase transition-colors duration-200 hover:bg-white"
          >
            Download vCard
          </a>
        </div>
      </section>
    </>
  );
}
