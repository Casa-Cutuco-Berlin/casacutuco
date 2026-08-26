import { NextRequest, NextResponse } from "next/server";

function parseICalDate(raw: string) {
  const value = raw.split(":").pop()?.trim() || "";
  const y = value.slice(0, 4);
  const m = value.slice(4, 6);
  const d = value.slice(6, 8);
  if (!y || !m || !d) return "";
  return `${y}-${m}-${d}`;
}

export async function GET(req: NextRequest) {
  const property = req.nextUrl.searchParams.get("property");

  if (!property || !["casa-1", "casa-2"].includes(property)) {
    return NextResponse.json({ error: "Invalid property" }, { status: 400 });
  }

  const envName =
    property === "casa-1"
      ? "AIRBNB_ICAL_CASA_1"
      : "AIRBNB_ICAL_CASA_2";

  const url = process.env[envName];

  if (!url) {
    return NextResponse.json({
      connected: false,
      blocked: [],
      message: `Missing ${envName}`
    });
  }

  try {
    const res = await fetch(url, {
      next: { revalidate: 300 },
      headers: { "User-Agent": "CasaCutucoAvailability/1.0" }
    });

    if (!res.ok) {
      return NextResponse.json(
        { connected: false, blocked: [], message: "Calendar fetch failed." },
        { status: 502 }
      );
    }

    const ics = await res.text();
    const lines = ics.replace(/\r?\n[ \t]/g, "").split(/\r?\n/);

    const blocked: Array<{ start: string; end: string }> = [];
    let start = "";
    let end = "";

    for (const line of lines) {
      if (line.startsWith("DTSTART")) start = parseICalDate(line);
      if (line.startsWith("DTEND")) end = parseICalDate(line);

      if (line === "END:VEVENT") {
        if (start && end) blocked.push({ start, end });
        start = "";
        end = "";
      }
    }

    blocked.sort((a, b) => a.start.localeCompare(b.start));

    return NextResponse.json({
      connected: true,
      blocked,
      syncedAt: new Date().toISOString()
    });
  } catch {
    return NextResponse.json(
      { connected: false, blocked: [], message: "Unable to read Airbnb calendar." },
      { status: 502 }
    );
  }
}
