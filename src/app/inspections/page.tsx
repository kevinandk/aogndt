import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SitePhoto } from "@/components/SitePhoto";
import {
  airframesInspected,
  companiesHelped,
  inspectionCapabilities,
  methods,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Aircraft NDT inspections",
  description:
    "Level 3 NDT aircraft inspections: eddy current, ultrasonic, magnetic particle, penetrant, visual, and borescope. FAA Repair Station N5DR176O.",
};

export default function InspectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Inspections"
        title="Aircraft NDT, shop or field"
        lede={`${site.marketingName} has provided basic and advanced aircraft NDT since ${site.foundedLevel3}. Portable and stationary penetrant and magnetic particle lines, analog and impedance-plane eddy current, digital and analog ultrasonic flaw detectors, and hundreds of reference standards.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
          Methods
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {methods.map((method) => (
            <article key={method.code} className="border border-navy-800/15 bg-white p-6">
              <p className="font-display text-3xl text-amber-500">{method.code}</p>
              <h3 className="mt-2 font-display text-xl tracking-wide uppercase">
                {method.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-navy-800/80">{method.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
              Published capabilities
            </h2>
            <p className="mt-3 text-sm text-navy-700">
              From the Level III NDT inspection site. Not an exhaustive OEM list.
            </p>
            <ul className="mt-6 space-y-2">
              {inspectionCapabilities.map((item) => (
                <li key={item} className="border-l-2 border-amber-500 pl-4 text-navy-900">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            <SitePhoto
              src="/photos/mt-inspection.jpg"
              alt="Magnetic particle inspection under black light"
              credit="Method illustration · U.S. Air National Guard / Wikimedia (public domain) — not a Level 3 NDT job photo"
              className="min-h-64"
            />
            <SitePhoto
              src="/photos/ut-inspection.jpg"
              alt="Ultrasonic inspection of aircraft engine blades"
              credit="Method illustration · U.S. Air Force / Wikimedia (public domain)"
              className="min-h-64"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
          Airframes we inspect
        </h2>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {airframesInspected.map((item) => (
            <li key={item} className="border-l-2 border-amber-500 pl-4 text-navy-900">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 font-mono text-xs tracking-[0.16em] text-navy-700 uppercase">
          Companies / programs
        </p>
        <ul className="mt-3 space-y-2">
          {companiesHelped.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="border border-navy-800/15 bg-navy-950 p-8 text-paper">
          <h2 className="font-display text-2xl tracking-wide uppercase">
            Schedule or dispatch
          </h2>
          <p className="mt-3 max-w-2xl text-steel">
            AOG, field work, and planned inspections: call {site.aog.phone} with
            aircraft, location, and the instruction you are working to.
          </p>
          <div className="mt-6">
            <a
              href={site.aog.phoneHref}
              className="inline-block bg-amber-500 px-5 py-3 text-center font-display font-semibold tracking-[0.1em] text-navy-950 uppercase transition-colors duration-200 hover:bg-white"
            >
              Call {site.aog.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
