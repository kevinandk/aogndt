import Link from "next/link";
import { FaaCertificate } from "@/components/FaaCertificate";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { SitePhoto } from "@/components/SitePhoto";
import {
  airframesInspected,
  companiesHelped,
  daveArms,
  fleetPhotos,
  formatAddress,
  formatAirports,
  formatAirportsProse,
  methods,
  site,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-paper">
        <div className="absolute inset-0 opacity-40">
          <SitePhoto
            src="/photos/hangar-engine.jpg"
            alt="Jet engine open for maintenance inside a hangar"
            credit="Hangar context · Pexels (free license) — not a Level 3 NDT job photo"
            className="h-full min-h-[28rem]"
            priority
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/55" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-24">
          <p className="hero-in font-mono text-[0.65rem] tracking-[0.14em] text-amber-400 uppercase sm:text-xs sm:tracking-[0.22em]">
            Aircraft on Ground · Non-Destructive Testing
          </p>
          <h1 className="hero-in mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-normal uppercase [animation-delay:120ms] sm:mt-4 sm:text-5xl sm:tracking-wide lg:text-6xl">
            Your AOG is our priority.
          </h1>
          <p className="hero-in mt-4 max-w-xl text-base leading-7 text-steel [animation-delay:240ms] sm:mt-6 sm:text-lg sm:leading-8">
            Every hour it sits is a missed trip. Level 3 NDT brings field-ready
            NDT to the ramp so you can inspect, document, and move. FAA Repair
            Station {site.faaStation}. Published prompt worldwide field service
            since {site.foundedLevel3}.
          </p>
          <div className="hero-in mt-6 flex flex-col gap-3 [animation-delay:360ms] sm:mt-8 sm:flex-row sm:items-center">
            <a
              href={site.aog.phoneHref}
              className="aog-pulse bg-amber-500 px-5 py-3.5 text-center font-display text-lg font-semibold tracking-[0.08em] text-navy-950 uppercase transition-colors hover:bg-amber-400"
            >
              Call {site.aog.phone}
              <span className="mt-0.5 block font-mono text-sm font-normal tracking-[0.08em] text-navy-950/70">
                {site.aog.phoneDigits}
              </span>
            </a>
            <p className="text-sm text-steel">
              Not AOG?{" "}
              <Link href="#quote" className="text-amber-400 underline-offset-2 hover:underline">
                Request a quote
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-800/15 bg-navy-900 text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 py-4 font-mono text-[0.7rem] tracking-[0.12em] uppercase sm:grid-cols-4 sm:gap-6 sm:px-6 sm:py-5 sm:text-xs sm:tracking-[0.14em]">
          <p>FAA Repair Station {site.faaStation}</p>
          <p>Level 3 NDT since {site.foundedLevel3}</p>
          <p>Chief Inspector Dave Arms</p>
          <p>{formatAirports()}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="font-mono text-xs tracking-[0.22em] text-navy-700 uppercase">
            Not AOG?
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide uppercase">
            Class or equipment
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link
              href="/training"
              className="group border border-navy-800/15 p-6 transition-all hover:-translate-y-0.5 hover:border-amber-500 hover:shadow-lg hover:shadow-navy-950/10"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-amber-500 uppercase">
                Train
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-wide uppercase">
                Level 1–3 classroom
              </h3>
              <p className="mt-3 text-sm leading-6 text-navy-800/80">
                Method courses and engine-specific borescope training at Hayward
                or on-site.
              </p>
            </Link>
            <Link
              href="/supplies"
              className="group border border-navy-800/15 p-6 transition-all hover:-translate-y-0.5 hover:border-amber-500 hover:shadow-lg hover:shadow-navy-950/10"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-amber-500 uppercase">
                Equip
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-wide uppercase">
                QC NDT supplies
              </h3>
              <p className="mt-3 text-sm leading-6 text-navy-800/80">
                Instruments, rentals, and consumables from the affiliate counter
                next door.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-navy-700 uppercase">
            Who we already work
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide uppercase">
            Airframes we inspect
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-navy-700">
            Published on aircraftndt.com. Authorizations, not testimonials.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fleetPhotos.map((aircraft, i) => (
            <Reveal key={aircraft.type} delay={i * 90}>
              <figure className="group relative h-52 overflow-hidden bg-navy-900 sm:h-56">
                <SitePhoto
                  src={aircraft.photo}
                  alt={aircraft.alt}
                  className="photo-zoom h-full w-full"
                />
                <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent p-4">
                  <p className="font-display text-xl tracking-[0.1em] text-paper uppercase">
                    {aircraft.type}
                  </p>
                  <p className="mt-0.5 font-mono text-[0.58rem] tracking-wide text-paper/65">
                    {aircraft.credit}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal delay={fleetPhotos.length * 90} className="h-full">
            <div className="flex h-full flex-col justify-center border border-navy-800/15 p-5">
              <p className="font-mono text-xs tracking-[0.18em] text-navy-700 uppercase">
                Also inspected
              </p>
              <ul className="mt-3 space-y-2">
                {airframesInspected.slice(5).map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-amber-500 pl-3 text-sm leading-6 text-navy-900"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-8 font-mono text-[0.6rem] tracking-wide text-navy-700/70">
            Aircraft shown are examples of each type from freely licensed
            photography, not Level 3 NDT customers or job photos.
          </p>
          <div className="mt-6">
            <p className="font-mono text-xs tracking-[0.18em] text-navy-700 uppercase">
              Companies / programs we already support
            </p>
            <ul className="mt-3 space-y-2">
              {companiesHelped.map((item) => (
                <li key={item} className="text-navy-900">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="bg-navy-950 text-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="font-mono text-xs tracking-[0.22em] text-amber-400 uppercase">
            Methods
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide uppercase">
            ET · UT · MT · PT · VT
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {methods.map((method, i) => (
              <Reveal key={method.code} delay={i * 80} className="h-full">
                <div className="h-full border border-white/10 p-4 transition-colors hover:border-amber-400/60">
                  <p className="font-display text-2xl text-amber-400">{method.code}</p>
                  <p className="mt-1 text-sm font-medium">{method.name}</p>
                  <p className="mt-2 text-sm leading-6 text-steel">{method.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/inspections"
            className="mt-8 inline-block font-display tracking-[0.12em] text-amber-400 uppercase hover:text-amber-300"
          >
            Full inspection list →
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.22em] text-navy-700 uppercase">
            Time on the ground
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide uppercase">
            Bay Area based. Field ready.
          </h2>
          <p className="mt-4 leading-7 text-navy-800/85">
            The job is the clock: get the inspection done so the aircraft can
            leave. We come to the ramp, hangar, or shop — {formatAddress()},
            minutes from {formatAirportsProse()} — instead of waiting on a ferry. Their
            published line is prompt worldwide field service, not a guaranteed
            hour count.
          </p>
          <p className="mt-4 text-sm text-navy-700">
            After-hours coverage is not listed until those hours are confirmed.
            Call for AOG / field dispatch.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <SitePhoto
            src="/photos/field-inspection.jpg"
            alt="Level 3 NDT technician running a portable flaw detector on aircraft structure in a hangar"
            credit="Level 3 NDT technician on a field inspection"
            className="photo-zoom h-full min-h-[26rem]"
            focus="object-[50%_22%]"
          />
        </Reveal>
      </section>

      <section className="bg-paper-dark">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            <SitePhoto
              src={daveArms.photo}
              alt={`${daveArms.name}, ${daveArms.role}`}
              credit="Dave Arms at a QC NDT seminar · qcndt.net"
              className="h-52 w-full sm:h-44 sm:w-36 sm:shrink-0"
            />
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-navy-700 uppercase">
                Who answers
              </p>
              <h2 className="mt-2 font-display text-2xl tracking-wide uppercase">
                {daveArms.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-navy-900">{daveArms.role}</p>
              <p className="mt-3 text-sm leading-6 text-navy-800/85">
                NDT since {daveArms.startedNdt}. {daveArms.certs}. {daveArms.extras}{" "}
                Also {daveArms.also}.
              </p>
              <a
                href={daveArms.source.href}
                className="mt-3 inline-block text-xs text-navy-900 underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Verify: {daveArms.source.label}
              </a>
            </div>
          </div>
          <FaaCertificate />
        </div>
      </section>

      <section id="quote" className="border-t border-navy-800/15 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs tracking-[0.22em] text-navy-700 uppercase">
              Non-emergency
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide uppercase">
              Request a quote
            </h2>
            <p className="mt-4 leading-7 text-navy-800/85">
              Aircraft on the ground? Call first. For scheduled inspections,
              classes, or equipment, send the form. It stays on this page and
              routes to the inspections, training, or QC NDT inbox.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
