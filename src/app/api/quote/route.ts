import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { inboxForNeed, quoteNeeds, type QuoteNeed } from "@/lib/site";

type Payload = {
  name: string;
  org?: string;
  phone: string;
  email: string;
  aircraftLocation: string;
  need: QuoteNeed;
  message?: string;
};

function isNeed(value: unknown): value is QuoteNeed {
  return quoteNeeds.some((item) => item.value === value);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name?.trim() || !body.phone?.trim() || !body.email?.trim() || !body.aircraftLocation?.trim()) {
    return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return Response.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (!isNeed(body.need)) {
    return Response.json({ ok: false, error: "Invalid need" }, { status: 400 });
  }

  const record = {
    ...body,
    to: inboxForNeed(body.need),
    receivedAt: new Date().toISOString(),
    source: "aogndt-quote",
  };

  try {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    const file = path.join(dir, "quotes.json");
    let existing: unknown[] = [];
    try {
      existing = JSON.parse(await readFile(file, "utf8")) as unknown[];
    } catch {
      existing = [];
    }
    existing.push(record);
    await writeFile(file, JSON.stringify(existing, null, 2));
  } catch {
    // Hosting filesystems may be read-only. Still try the remote endpoint.
  }

  const endpoint = process.env.FORM_ENDPOINT || process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  if (endpoint) {
    const forwarded = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(record),
    });
    if (!forwarded.ok) {
      return Response.json(
        { ok: false, error: "Form endpoint rejected the request" },
        { status: 502 },
      );
    }
  }

  return Response.json({ ok: true, to: record.to });
}
