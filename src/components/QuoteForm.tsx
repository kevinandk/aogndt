"use client";

import { useMemo, useState, type FormEvent } from "react";
import { inboxForNeed, quoteNeeds, type QuoteNeed, site } from "@/lib/site";

type FormState = {
  name: string;
  org: string;
  phone: string;
  email: string;
  aircraftLocation: string;
  need: QuoteNeed;
  message: string;
};

const empty = (need: QuoteNeed): FormState => ({
  name: "",
  org: "",
  phone: "",
  email: "",
  aircraftLocation: "",
  need,
  message: "",
});

function isNeed(value: string): value is QuoteNeed {
  return quoteNeeds.some((item) => item.value === value);
}

export function QuoteForm({ initialNeed = "inspection" }: { initialNeed?: QuoteNeed }) {
  const [form, setForm] = useState<FormState>(() => empty(initialNeed));
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const inbox = useMemo(() => inboxForNeed(form.need), [form.need]);

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.phone.trim()) next.phone = "Phone is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "A valid email is required.";
    }
    if (!form.aircraftLocation.trim()) {
      next.aircraftLocation = "Aircraft or location is required.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Quote API rejected the request");
      setStatus("sent");
      setForm(empty(form.need));
    } catch {
      setStatus("error");
    }
  }

  function field<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          value={form.name}
          error={errors.name}
          onChange={(v) => field("name", v)}
          autoComplete="name"
        />
        <Field
          id="org"
          label="Organization"
          value={form.org}
          onChange={(v) => field("org", v)}
          autoComplete="organization"
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={form.phone}
          error={errors.phone}
          onChange={(v) => field("phone", v)}
          autoComplete="tel"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={(v) => field("email", v)}
          autoComplete="email"
        />
      </div>

      <Field
        id="aircraftLocation"
        label="Aircraft / location"
        value={form.aircraftLocation}
        error={errors.aircraftLocation}
        onChange={(v) => field("aircraftLocation", v)}
        placeholder="Tail, type, airport or hangar"
      />

      <div>
        <label htmlFor="need" className="block text-sm font-medium text-navy-900">
          Need
        </label>
        <select
          id="need"
          name="need"
          value={form.need}
          onChange={(e) => field("need", isNeed(e.target.value) ? e.target.value : "inspection")}
          className="mt-1 w-full border border-navy-800/20 bg-white px-3 py-2.5 text-navy-900 outline-none focus:border-amber-500"
        >
          {quoteNeeds.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <p className="mt-1.5 font-mono text-xs text-navy-700/70">
          Routes to {inbox}
        </p>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900">
          Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => field("message", e.target.value)}
          className="mt-1 w-full border border-navy-800/20 bg-white px-3 py-2.5 text-navy-900 outline-none focus:border-amber-500"
          placeholder="Method, AD / AMM reference, timing"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-amber-500 px-5 py-3 font-display font-semibold tracking-[0.12em] text-navy-950 uppercase hover:bg-amber-400 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request a quote"}
        </button>
        <a
          href={site.aog.phoneHref}
          className="px-1 py-2 font-display tracking-[0.08em] text-navy-800 uppercase underline-offset-4 hover:text-navy-950 hover:underline"
        >
          Or call {site.aog.phone}
        </a>
      </div>

      {status === "sent" && (
        <p className="border border-navy-800/15 bg-paper-dark px-3 py-2 text-sm text-navy-900" role="status">
          Request received. We will follow up on the phone or email you provided.
          AOG work: call {site.aog.phone} if the aircraft is already down.
        </p>
      )}
      {status === "error" && (
        <p className="border border-red-800/30 bg-red-50 px-3 py-2 text-sm text-red-900" role="alert">
          The form endpoint could not send this request. Call {site.aog.phone} or email {inbox}.
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy-900">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-navy-800/20 bg-white px-3 py-2.5 text-navy-900 outline-none focus:border-amber-500"
      />
      {error && <p className="mt-1 text-sm text-red-800">{error}</p>}
    </div>
  );
}
