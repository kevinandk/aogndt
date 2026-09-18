"use client";

import { coverageAirports, site } from "@/lib/site";

const W = 1120;
const H = 540;
const FRAME_LON0 = -125;
const FRAME_LAT0 = 49.4;
const SCALE_Y = 15.1;
const SCALE_X = SCALE_Y * Math.cos((38 * Math.PI) / 180);
const HI_SHIFT = 26;
const BAY = { lon: -122.35, lat: 37.5 };
const INK = "#f5a623";
const PAPER = "#f4f0e6";
const VELOCITY_PX_PER_MS = 0.055;

type Pt = { x: number; y: number };
type Dest = (typeof coverageAirports)[number];

function project(lon: number, lat: number): Pt {
  const drawnLon = lon < -140 ? lon + HI_SHIFT : lon;
  return {
    x: (drawnLon - FRAME_LON0) * SCALE_X,
    y: (FRAME_LAT0 - lat) * SCALE_Y,
  };
}

const CONUS: readonly (readonly [number, number])[] = [
  [-124.72, 48.37], [-124.25, 46.85], [-124.05, 44.55], [-124.4, 42.85],
  [-124.55, 40.45], [-124.3, 38.95], [-124.15, 37.85], [-123.55, 37.7],
  [-123.35, 37.4], [-123.85, 37.15], [-123.55, 36.45], [-122.15, 36.2],
  [-120.85, 35.35], [-120.45, 34.45], [-119.2, 34.15],
  [-118.45, 33.75], [-117.15, 32.53], [-114.75, 32.72], [-110.85, 31.33],
  [-108.2, 31.33], [-106.55, 31.78], [-104.95, 30.62], [-104.55, 29.55],
  [-103.15, 28.98], [-101.9, 29.75], [-99.4, 27.65], [-97.4, 25.9],
  [-96.45, 28.35], [-95.0, 29.1], [-93.85, 29.7], [-89.25, 28.95],
  [-88.85, 30.2], [-87.5, 30.25], [-86.5, 30.4], [-85.4, 29.9],
  [-84.35, 30.1], [-83.85, 30.0], [-82.75, 27.9], [-82.55, 26.45],
  [-81.75, 24.55], [-80.4, 25.2], [-80.05, 26.9], [-80.2, 27.9],
  [-80.55, 28.55], [-81.25, 30.35], [-81.45, 30.75], [-80.85, 32.05],
  [-79.85, 32.75], [-78.55, 33.85], [-76.45, 34.65], [-75.55, 35.25],
  [-75.7, 36.85], [-75.95, 37.25], [-75.5, 37.85], [-75.05, 38.45],
  [-74.95, 38.95], [-74.0, 40.5], [-73.25, 40.8], [-72.0, 41.25],
  [-70.65, 41.55], [-69.95, 41.8], [-70.55, 42.15], [-70.8, 43.05],
  [-70.7, 43.7], [-67.15, 44.65], [-66.95, 44.8], [-67.8, 47.05],
  [-69.05, 47.35], [-70.25, 46.35], [-71.55, 45.25], [-73.35, 45.02],
  [-74.8, 45.0], [-76.4, 44.1], [-79.25, 43.25], [-82.0, 43.0],
  [-82.7, 43.0], [-83.45, 44.05], [-84.15, 45.35], [-84.8, 45.95],
  [-86.55, 45.9], [-87.9, 46.5], [-89.5, 46.95], [-91.95, 46.7],
  [-93.35, 46.7], [-95.15, 49.0], [-116.05, 49.0], [-123.25, 49.0],
  [-124.72, 48.37],
];

const ISLANDS = [
  { lon: -159.52, lat: 22.05, rx: 9, ry: 6, rot: -18 },
  { lon: -157.98, lat: 21.47, rx: 11, ry: 7, rot: -12 },
  { lon: -157.02, lat: 21.14, rx: 8, ry: 4, rot: -8 },
  { lon: -156.92, lat: 20.83, rx: 5, ry: 4, rot: 10 },
  { lon: -156.33, lat: 20.8, rx: 12, ry: 7, rot: -20 },
  { lon: -155.5, lat: 19.6, rx: 18, ry: 14, rot: -28 },
] as const;

const FRAME_POINTS = [
  ...CONUS.map(([lon, lat]) => project(lon, lat)),
  ...ISLANDS.map((isle) => project(isle.lon, isle.lat)),
  project(-66.4, 18.25),
];
const FRAME_MIN_X = Math.min(...FRAME_POINTS.map((p) => p.x));
const FRAME_MAX_X = Math.max(...FRAME_POINTS.map((p) => p.x));
const FRAME_MIN_Y = Math.min(...FRAME_POINTS.map((p) => p.y));
const FRAME_MAX_Y = Math.max(...FRAME_POINTS.map((p) => p.y));
const SHIFT_X = (W - (FRAME_MAX_X - FRAME_MIN_X)) / 2 - FRAME_MIN_X;
const SHIFT_Y = (H - (FRAME_MAX_Y - FRAME_MIN_Y)) / 2 - FRAME_MIN_Y;

function xy(lon: number, lat: number): Pt {
  const p = project(lon, lat);
  return { x: p.x + SHIFT_X, y: p.y + SHIFT_Y };
}

function pathFrom(coords: readonly (readonly [number, number])[]): string {
  return (
    coords
      .map(([lon, lat], i) => {
        const p = xy(lon, lat);
        return `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      })
      .join(" ") + " Z"
  );
}

function pointInPoly(p: Pt, poly: readonly Pt[]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i];
    const b = poly[j];
    const crosses = a.y > p.y !== b.y > p.y;
    if (crosses && p.x < ((b.x - a.x) * (p.y - a.y)) / (b.y - a.y || 1e-12) + a.x) {
      inside = !inside;
    }
  }
  return inside;
}

const CONUS_XY = CONUS.map(([lon, lat]) => xy(lon, lat));
const PACIFIC_COAST = new Set(["SEA", "PDX", "LAX", "SNA", "SAN"]);

function snapWestToCoast(lon: number, lat: number, pad = 6): Pt {
  let lo = lon;
  let p = xy(lo, lat);
  if (!pointInPoly(p, CONUS_XY)) {
    for (let i = 0; i < 50; i += 1) {
      lo += 0.12;
      p = xy(lo, lat);
      if (pointInPoly(p, CONUS_XY)) break;
    }
  } else {
    let last = p;
    for (let i = 0; i < 50; i += 1) {
      last = p;
      lo -= 0.12;
      p = xy(lo, lat);
      if (!pointInPoly(p, CONUS_XY)) {
        p = last;
        break;
      }
    }
  }
  return { x: p.x + pad, y: p.y };
}

function destPoint(dest: Dest): Pt {
  if (dest.code === "SJU") return xy(-66.4, 18.25);
  if (dest.lon < -140) {
    const raw = xy(dest.lon, dest.lat);
    let best = raw;
    let bestD = Infinity;
    for (const isle of ISLANDS) {
      const q = xy(isle.lon, isle.lat);
      const d = Math.hypot(raw.x - q.x, raw.y - q.y);
      if (d < bestD) {
        bestD = d;
        best = q;
      }
    }
    return best;
  }
  if (PACIFIC_COAST.has(dest.code)) return snapWestToCoast(dest.lon, dest.lat);
  return xy(dest.lon, dest.lat);
}

const ORIGIN = snapWestToCoast(BAY.lon, BAY.lat);

function controlPoint(a: Pt, b: Pt): Pt {
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  const bulge = Math.min(28, 6 + dist * 0.06);
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 - bulge };
}

function quad(a: Pt, c: Pt, b: Pt, t: number): Pt {
  const u = 1 - t;
  return {
    x: u * u * a.x + 2 * u * t * c.x + t * t * b.x,
    y: u * u * a.y + 2 * u * t * c.y + t * t * b.y,
  };
}

function quadAngle(a: Pt, c: Pt, b: Pt, t: number): number {
  const dx = 2 * (1 - t) * (c.x - a.x) + 2 * t * (b.x - c.x);
  const dy = 2 * (1 - t) * (c.y - a.y) + 2 * t * (b.y - c.y);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

type PathSamples = {
  pts: Pt[];
  angles: number[];
  dist: number[];
  length: number;
};

function samplePath(a: Pt, c: Pt, b: Pt, steps = 48): PathSamples {
  const pts: Pt[] = [];
  const angles: number[] = [];
  const dist: number[] = [0];
  let prev = a;
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const p = quad(a, c, b, t);
    pts.push(p);
    angles.push(quadAngle(a, c, b, t));
    if (i > 0) dist.push(dist[i - 1] + Math.hypot(p.x - prev.x, p.y - prev.y));
    prev = p;
  }
  return { pts, angles, dist, length: Math.max(dist[dist.length - 1], 1) };
}

const FLIGHT_CODES = ["HNL", "SEA", "LAX", "DEN", "ORD", "MIA", "JFK", "SJU"] as const;

function PlaneShape() {
  return (
    <g fill={INK}>
      <ellipse cx="0" cy="0" rx="4.4" ry="1.45" />
      <polygon points="-0.6,0 1.4,-4.6 2.1,-4.6 0.9,0 2.1,4.6 1.4,4.6" />
      <polygon points="-2.8,0 -4.6,-2.2 -3.8,-2.2 -2.4,0 -3.8,2.2 -4.6,2.2" />
      <circle cx="3.6" cy="0" r="1.15" />
    </g>
  );
}

function routeFor(dest: Dest) {
  const to = destPoint(dest);
  const c = controlPoint(ORIGIN, to);
  return { to, c, path: samplePath(ORIGIN, c, to) };
}

function Cloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={PAPER} opacity="0.12">
      <ellipse cx="0" cy="4" rx="18" ry="10" />
      <ellipse cx="14" cy="2" rx="14" ry="11" />
      <ellipse cx="-12" cy="3" rx="12" ry="9" />
      <ellipse cx="4" cy="-6" rx="10" ry="8" />
    </g>
  );
}

export function CoverageMap() {
  const dests = coverageAirports.map((dest) => {
    const route = routeFor(dest);
    return { dest, ...route };
  });
  const flights = FLIGHT_CODES.map((code, id) => {
    const dest = coverageAirports.find((d) => d.code === code) ?? coverageAirports[0];
    const route = routeFor(dest);
    const move = route.path.length / (VELOCITY_PX_PER_MS * 1000);
    const hold = 1.6;
    const dur = move + hold;
    return { id, dest, route, dur, arrive: move / dur, begin: id * 0.4 };
  });

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Cartoon flight map. Field dispatch from the Bay Area spanning ${site.coverageSpan}.`}
        className="h-auto w-full overflow-visible"
      >
        <rect width={W} height={H} fill="#061018" />

        <Cloud x={280} y={100} s={1.15} />
        <Cloud x={390} y={230} s={0.8} />
        <Cloud x={980} y={80} s={0.9} />
        <Cloud x={860} y={300} s={0.7} />

        <path
          d={pathFrom(CONUS)}
          fill="#1a3a5c"
          stroke="#24507a"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {ISLANDS.map((isle) => {
          const p = xy(isle.lon, isle.lat);
          return (
            <ellipse
              key={`${isle.lon}-${isle.lat}`}
              cx={p.x}
              cy={p.y}
              rx={isle.rx}
              ry={isle.ry}
              transform={`rotate(${isle.rot} ${p.x} ${p.y})`}
              fill="#1a3a5c"
              stroke="#24507a"
              strokeWidth="2"
            />
          );
        })}

        {(() => {
          const p = xy(-66.4, 18.25);
          return (
            <ellipse
              cx={p.x}
              cy={p.y}
              rx={22}
              ry={10}
              transform={`rotate(-12 ${p.x} ${p.y})`}
              fill="#1a3a5c"
              stroke="#24507a"
              strokeWidth="2.5"
            />
          );
        })()}

        {dests.map((r) => (
          <path
            key={r.dest.code}
            d={`M ${ORIGIN.x.toFixed(1)} ${ORIGIN.y.toFixed(1)} Q ${r.c.x.toFixed(1)} ${r.c.y.toFixed(1)} ${r.to.x.toFixed(1)} ${r.to.y.toFixed(1)}`}
            fill="none"
            stroke={INK}
            strokeWidth="1"
            strokeOpacity="0.2"
          />
        ))}

        <circle cx={ORIGIN.x} cy={ORIGIN.y} r="10" fill="none" stroke={INK} strokeWidth="1.2" opacity="0.35">
          <animate attributeName="r" values="8;34" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0" dur="4s" repeatCount="indefinite" />
        </circle>

        {dests.map(({ dest, to }) => (
            <circle key={dest.code} cx={to.x} cy={to.y} r="3" fill={PAPER} />
        ))}

        <text
          x={xy(-157.5, 23.4).x}
          y={xy(-157.5, 23.4).y}
          fill="#ffd27a"
          fontSize="13"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="700"
          letterSpacing="0.22em"
        >
          HI
        </text>
        <text
          x={xy(-66.1, 20.6).x}
          y={xy(-66.1, 20.6).y}
          textAnchor="middle"
          fill="#ffd27a"
          fontSize="12"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="700"
          letterSpacing="0.18em"
        >
          PR
        </text>

        <circle cx={ORIGIN.x} cy={ORIGIN.y} r="5.5" fill={INK} />
        <text
          x={ORIGIN.x + 10}
          y={ORIGIN.y + 16}
          textAnchor="start"
          fill={INK}
          fontSize="12"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="700"
          letterSpacing="0.2em"
        >
          BAY AREA
        </text>

        {flights.map((f) => (
          <g key={f.dest.code}>
            <path
              id={`flight-${f.dest.code}`}
              d={`M ${ORIGIN.x.toFixed(1)} ${ORIGIN.y.toFixed(1)} Q ${f.route.c.x.toFixed(1)} ${f.route.c.y.toFixed(1)} ${f.route.to.x.toFixed(1)} ${f.route.to.y.toFixed(1)}`}
              fill="none"
            />
            <g>
              <animateMotion
                dur={`${f.dur.toFixed(2)}s`}
                begin={`${f.begin.toFixed(2)}s`}
                repeatCount="indefinite"
                rotate="auto"
                calcMode="linear"
                keyTimes={`0;${f.arrive.toFixed(3)};1`}
                keyPoints="0;1;1"
              >
                <mpath href={`#flight-${f.dest.code}`} />
              </animateMotion>
              <PlaneShape />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function CoverageSection() {
  return (
    <section className="bg-navy-950 text-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="font-mono text-xs tracking-[0.22em] text-amber-400 uppercase">
          Field dispatch
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide uppercase">
          {site.coverageTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-steel sm:text-base">
          {site.coverageLede}
        </p>
        <div className="mt-8 border border-white/10">
          <CoverageMap />
        </div>
      </div>
    </section>
  );
}
