import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SitePhoto } from "@/components/SitePhoto";
import { borescopeEngines, site, trainingCourses } from "@/lib/site";

export const metadata: Metadata = {
  title: "NDT training",
  description:
    "Level 3 NDT classroom and on-site training: eddy current, ultrasonics, penetrant, magnetic particle, visual, and turbine engine borescope.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Training for the NDT professional"
        lede={`${site.marketingName} has taught basic and advanced NDT since ${site.foundedLevel3}. Classroom sessions in the Bay Area — minutes from SFO, SJC, and OAK — or on-site at your facility. Digital presentations, study material, and shop equipment for practical work.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
          Courses
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-navy-700">
          Hours and prerequisites below are from the published Level III NDT
          course-objectives page. Current fees and calendar are not listed here
          — ask when you register.
        </p>
        <div className="mt-8 overflow-x-auto border border-navy-800/15 bg-white">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-navy-950 font-display tracking-[0.1em] text-paper uppercase">
              <tr>
                <th className="px-4 py-3 font-medium">Course</th>
                <th className="px-4 py-3 font-medium">Duration</th>
                <th className="px-4 py-3 font-medium">Prerequisite</th>
              </tr>
            </thead>
            <tbody>
              {trainingCourses.map((course) => (
                <tr key={course.name} className="border-t border-navy-800/10">
                  <td className="px-4 py-3 font-medium text-navy-900">{course.name}</td>
                  <td className="px-4 py-3 text-navy-800">{course.hours}</td>
                  <td className="px-4 py-3 text-navy-800">{course.prerequisite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-navy-950 text-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
            Turbine engine borescope
          </h2>
          <p className="mt-3 max-w-2xl text-steel">
            Eight hours per engine type. Published types: {borescopeEngines.join(", ")}.
            Access, port selection, evaluation, and close-up are part of the
            course objectives.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <SitePhoto
          src="/photos/qc-seminar.jpg"
          alt="Students at an Introduction to Nondestructive Testing seminar at QC NDT"
          credit="QC NDT / Level 3 classroom seminar · qcndt.net"
          className="min-h-64"
        />
        <div>
        <h2 className="font-display text-3xl font-semibold tracking-wide uppercase">
          Enroll
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-navy-800/85">
          Email {site.level3.trainingEmail} or use the quote form. Business hours
          published on the training site are Monday–Friday, 8am–5pm. For
          equipment used in class, {site.qcndt.name} is the affiliate supplier.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact?need=training"
            className="bg-amber-500 px-5 py-3 text-center font-display font-semibold tracking-[0.1em] text-navy-950 uppercase hover:bg-amber-400"
          >
            Request training
          </Link>
          <a
            href={site.level3.existingSites[1].href}
            className="border border-navy-800/20 px-5 py-3 text-center font-display tracking-[0.1em] uppercase hover:border-amber-500"
          >
            Existing classroom site
          </a>
        </div>
        </div>
      </section>
    </>
  );
}
