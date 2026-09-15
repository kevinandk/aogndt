import type { Metadata } from "next";
import Link from "next/link";
import { FaaCertificate } from "@/components/FaaCertificate";
import { PageHero } from "@/components/PageHero";
import { SitePhoto } from "@/components/SitePhoto";
import { daveArms, formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "AOGNDT is the public front door for Level 3 NDT (FAA Repair Station N5DR176O), Chief Inspector Dave Arms, and affiliate supplier QC NDT in Hayward, California.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="One front door. Two shops that already work together."
        lede="AOGNDT is the public name for Aircraft-on-Ground Non-Destructive Testing. The work is done by Level III NDT and QC NDT Equipment LLC from the same Hayward industrial address."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            <SitePhoto
              src={daveArms.photo}
              alt={`${daveArms.name}, ${daveArms.role}`}
              credit="Dave Arms · qcndt.net seminar, 2014"
              className="h-56 w-full sm:h-48 sm:w-36 sm:shrink-0"
            />
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-amber-500 uppercase">
                Level III
              </p>
              <h2 className="mt-2 font-display text-2xl tracking-wide uppercase">
                {daveArms.name}
              </h2>
              <p className="mt-1 text-sm font-medium">{daveArms.role}</p>
              <p className="mt-3 text-sm leading-6 text-navy-800/85">
                Began NDT in {daveArms.startedNdt} with a major airline in the SF
                Bay Area as an inspector, instructor, and engineer. {daveArms.certs}.{" "}
                {daveArms.extras} {daveArms.also}.
              </p>
              <a
                href={daveArms.source.href}
                className="mt-3 inline-block text-xs underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Verify: {daveArms.source.label}
              </a>
            </div>
          </div>

          <article className="mt-8 border border-navy-800/15 bg-white p-6">
            <p className="font-mono text-xs tracking-[0.18em] text-amber-500 uppercase">
              Since {site.foundedLevel3}
            </p>
            <h3 className="mt-2 font-display text-xl tracking-wide uppercase">
              {site.legalName}
            </h3>
            <p className="mt-4 leading-7 text-navy-800/85">
              Marketing name {site.marketingName}. Aircraft NDT and professional
              training — transport, corporate, and private — with published
              worldwide field service.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {site.level3.existingSites.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-navy-900 underline-offset-2 hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <FaaCertificate />
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <article className="border border-navy-800/15 p-6">
            <p className="font-mono text-xs tracking-[0.18em] text-amber-500 uppercase">
              Since {site.foundedQc}
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-wide uppercase">
              {site.qcndt.legalName}
            </h2>
            <p className="mt-4 leading-7 text-navy-800/85">
              NDT equipment and supplies. Started in San Leandro as a StressTel
              distributor; first West Coast Magnaflux authorized distributor in
              1989. Dave Arms is the published sales manager.
            </p>
            <p className="mt-4 text-sm">
              <a href={site.qcndt.site.href} className="underline-offset-2 hover:underline">
                {site.qcndt.site.label}
              </a>
            </p>
          </article>
          <SitePhoto
            src="/photos/qc-shop-team.jpg"
            alt="Dave Arms with colleagues at a QC NDT seminar"
            credit="QC NDT seminar · qcndt.net"
            className="min-h-64"
          />
        </div>
      </section>

      <section className="bg-navy-950 text-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
            Hayward shop
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-steel">
            {formatAddress()}. {site.address.note}. Shared roof for inspectors,
            instructors, and the supply counter.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block font-display tracking-[0.12em] text-amber-400 uppercase hover:text-amber-300"
          >
            Contact →
          </Link>
        </div>
      </section>
    </>
  );
}
