import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { aogEmailHref, formatAddress, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy-950 text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-9 w-9 text-[15px]" />
            <p className="font-display text-xl font-semibold tracking-[0.16em]">AOGNDT</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-steel">
            Front door for {site.marketingName} aircraft NDT and {site.qcndt.name}{" "}
            supplies. Operating name {site.legalName}. FAA Repair Station{" "}
            {site.faaStation}.
          </p>
          <p className="mt-4 font-mono text-xs tracking-wide text-steel uppercase">
            {formatAddress()}
          </p>
        </div>

        <div>
          <p className="font-display tracking-[0.16em] text-amber-400 uppercase">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/80 hover:text-amber-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display tracking-[0.16em] text-amber-400 uppercase">Call</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li>
              <p className="text-steel">24/7 AOG</p>
              <a href={site.aog.phoneHref} className="text-paper hover:text-amber-400">
                {site.aog.phone}
              </a>
              <p className="mt-1">
                <a
                  href={aogEmailHref()}
                  className="text-paper hover:text-amber-400"
                >
                  {site.aog.email}
                </a>
              </p>
            </li>
            <li>
              <p className="text-steel">QC NDT supplies</p>
              <a href={site.qcndt.phoneHref} className="text-paper hover:text-amber-400">
                {site.qcndt.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-steel sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}. AOGNDT is the public
            front door for {site.marketingName} and {site.qcndt.name}.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-amber-400">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-amber-400">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
