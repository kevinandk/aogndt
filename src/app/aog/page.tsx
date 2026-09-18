import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SitePhoto } from "@/components/SitePhoto";
import { formatAirportsProse, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AOG / field dispatch",
  description:
    "Call Level 3 NDT for aircraft-on-ground and field NDT dispatch from the San Francisco Bay Area.",
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

const ready = [
  "Aircraft type and tail number",
  "Airport, hangar, or shop location",
  "AMM / AD / SB reference if you have it",
  "Method requested, or a description of the finding",
  "Access, power, and who will meet the inspector",
] as const;

export default function AogPage() {
  return (
    <>
      <PageHero
        eyebrow="AOG / field"
        title="The aircraft is down. Call first."
        lede="The clock is the job: get the inspection done so the aircraft can leave. AOGNDT routes that call to Level 3 NDT — FAA Repair Station N5DR176O. Field-ready Bay Area dispatch with published prompt worldwide field service since 1996."
      >
        <a
          href={site.aog.phoneHref}
          className="inline-block bg-amber-500 px-5 py-3 font-display text-lg font-semibold tracking-[0.08em] text-navy-950 uppercase hover:bg-amber-400"
        >
          {site.aog.phone}
        </a>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
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

      <section className="bg-navy-950 text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
              Have this ready
            </h2>
            <ul className="mt-6 space-y-3 text-steel">
              {ready.map((item) => (
                <li key={item} className="border-l-2 border-amber-500 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-white/10 p-6">
            <p className="font-mono text-xs tracking-[0.18em] text-amber-400 uppercase">
              Time off the ground
            </p>
            <p className="mt-3 leading-7 text-steel">
              We come to the aircraft so you are not waiting on a ferry. Hayward
              shop, minutes from {formatAirportsProse()}. Their published language is
              prompt worldwide field service — not a guaranteed hour count, and
              not a 24/7 desk until hours are confirmed.
            </p>
            <SitePhoto
              src="/photos/ndi-cracks.jpg"
              alt="Nondestructive inspection looking for cracks on aircraft structure"
              credit="Method illustration · U.S. Air Force / Wikimedia (public domain)"
              className="mt-6 min-h-52"
            />
            <Link
              href="/contact?need=aog"
              className="mt-6 inline-block font-display tracking-[0.12em] text-amber-400 uppercase hover:text-amber-300"
            >
              Prefer a written request →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
