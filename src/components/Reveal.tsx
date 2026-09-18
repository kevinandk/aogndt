"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Renders visible on the server so the page still reads with JS off. The
// hidden state is only armed once the observer is attached.
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("shown");
      return;
    }

    setState("armed");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${state === "armed" ? "reveal-armed" : ""} ${
        state === "shown" ? "reveal-shown" : ""
      } ${className}`}
      style={state === "shown" && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
