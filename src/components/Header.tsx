"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Wordmark } from "@/components/LogoMark";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-amber-500 text-navy-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-2 sm:flex-row sm:justify-between sm:px-6 sm:py-1.5">
          <p className="order-2 mt-0.5 font-display text-[0.7rem] font-semibold tracking-[0.14em] uppercase sm:order-1 sm:mt-0 sm:text-[0.95rem] sm:tracking-[0.12em]">
            {site.aog.label}
          </p>
          <a
            href={site.aog.phoneHref}
            className="order-1 w-full py-1 text-center font-display text-2xl font-semibold tracking-wide sm:w-auto sm:py-0 sm:text-base"
          >
            {site.aog.phone}
          </a>
        </div>
      </div>

      <div className="border-b border-white/10 bg-navy-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" onClick={() => setOpen(false)} aria-label="AOGNDT home">
            <Wordmark compact />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-display text-[0.95rem] tracking-[0.12em] uppercase transition-colors ${
                    active ? "text-amber-400" : "text-paper/80 hover:text-amber-400"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="bg-amber-500 px-3.5 py-2 font-display text-[0.9rem] font-semibold tracking-[0.12em] text-navy-950 uppercase hover:bg-amber-400"
            >
              Request a quote
            </Link>
          </nav>

          <button
            type="button"
            className="shrink-0 border border-white/20 px-3 py-2 font-display text-sm tracking-[0.12em] text-paper uppercase lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            className="border-t border-white/10 px-4 py-3 lg:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 font-display tracking-[0.12em] text-paper uppercase"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block bg-amber-500 px-3 py-3 text-center font-display font-semibold tracking-[0.12em] text-navy-950 uppercase"
                >
                  Request a quote
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
