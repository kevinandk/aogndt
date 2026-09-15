import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <p className="font-mono text-xs tracking-[0.22em] text-amber-500 uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-wide uppercase">
        No page at this heading
      </h1>
      <p className="mt-4 max-w-lg text-navy-800/80">
        The aircraft is not here. Try AOG, inspections, training, or supplies.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-amber-500 px-5 py-3 font-display font-semibold tracking-[0.12em] text-navy-950 uppercase hover:bg-amber-400"
      >
        Back to AOGNDT
      </Link>
    </section>
  );
}
