export const site = {
  name: "AOGNDT",
  legalName: "Level III NDT",
  marketingName: "Level 3 NDT",
  tagline: "Aircraft on Ground Non-Destructive Testing",
  description:
    "24/7 AOG NDT dispatch. Call 877-9AOG-NDT — a dispatcher answers. Bay Area FAA Repair Station N5DR176O.",
  url: "https://aogndt.com",
  faaStation: "N5DR176O",
  foundedLevel3: 1996,
  foundedQc: 1986,
  address: {
    line1: "27720 Industrial Blvd",
    city: "Hayward",
    state: "CA",
    zip: "94545",
    note: "2.7 miles from Hayward Executive (HWD)",
  },
  airports: ["SFO", "SJC", "OAK", "HWD"],
  /** Coverage beyond the four local fields — matches published worldwide field service. */
  airportsAndMore: "And More",
  /** Commercial hubs inspectors fly from. HWD is the Hayward shop field, not a hub. */
  dispatchHubs: ["SFO", "OAK", "SJC"] as const,
  /** Geographic span of field dispatch — not a scheduled-service map. */
  coverageSpan: "Hawaii to Puerto Rico",
  /** Section title on the coverage map. */
  coverageTitle: "We've got you covered",
  /** Lede under the coverage map title. */
  coverageLede:
    "Inspectors launch from the Bay Area - our NDT experts are authorized to conduct inspections on any Aircraft certificated under Part 23, 25, 27 and 31 of the FARs.",
  aog: {
    label: "24/7 AOG",
    who: "A dispatcher answers 24/7.",
    phone: "877-9AOG-NDT",
    phoneDigits: "(877) 926-4638",
    phoneHref: "tel:+18779264638",
    email: "AOGNDT@proton.me",
    /** Swap the public AOG mailbox to this once it is live. Do not print it. */
    emailNext: "dispatch@aogndt.com",
    vcard: "/aogndt.vcf",
  },
  level3: {
    phone: "877-9AOG-NDT",
    phoneHref: "tel:+18779264638",
    fax: "(650) 574-9198",
    inspectionEmail: "info@aircraftndt.com",
    trainingEmail: "info@level3ndt.com",
    existingSites: [
      { label: "aircraftndt.com", href: "http://www.aircraftndt.com/" },
      { label: "level3ndt.com", href: "http://www.level3ndt.com/" },
    ],
  },
  qcndt: {
    name: "QC NDT",
    legalName: "QC NDT Equipment LLC",
    phone: "(510) 568-8372",
    phoneHref: "tel:+15105688372",
    email: "sales@qcndt.net",
    site: { label: "qcndt.net", href: "https://qcndt.net/" },
    catalog: { label: "ndtcatalog.com", href: "https://www.ndtcatalog.com/" },
  },
} as const;

export const daveArms = {
  name: "Dave Arms",
  role: "Chief Inspector, Level III NDT",
  also: "Sales Manager, QC NDT Equipment",
  startedNdt: 1985,
  certs: "ASNT Level III in MT, PT, VT, RT, UT, and ET",
  extras: "Licensed aircraft mechanic and private pilot. Former Secretary and Vice Chairman, Golden Gate ASNT.",
  photo: "/photos/dave-arms.jpg",
  source: {
    label: "Golden Gate ASNT — officers",
    href: "https://www.ggasnt.org/officers",
  },
} as const;

export const faaCertificate = {
  number: "N5DR176O",
  holder: "LEVEL III NDT",
  address: "27720 Industrial Blvd., Hayward, CA 94545",
  rating: "Limited: NDT",
  companyType: "Repair Station (MRO)",
  status: "Operating",
  certPdf: "/certs/145_Cert_BW.pdf",
  certPreview: "/certs/145_Cert_BW.jpg",
  opsSpecPdf: "/certs/A003_Ops_Spec.pdf",
  verify: {
    label: "FAA AV-Info facility dashboard",
    href: "https://www.faa.gov/av-info/facility-dashboard",
  },
} as const;

export const falconLine =
  "Inspectors are Dassault factory-trained and on the vendor-approved list. Call with the AMM / AD / SB — we will say if we have the standard.";

export const aogReady = [
  "Aircraft type and tail number",
  "Airport, hangar, or shop location",
  "AMM / AD / SB reference if you have it",
  "Method requested, or a description of the finding",
  "Access, power, and who will meet the inspector",
] as const;

export function aogEmailHref(): string {
  const body = [
    "Aircraft type and tail:",
    "Airport, hangar, or shop:",
    "AMM / AD / SB:",
    "Method or finding:",
    "Access, power, and who will meet the inspector:",
    "Callback number:",
    "",
  ].join("\n");
  return `mailto:${site.aog.email}?subject=${encodeURIComponent("AOG NDT dispatch")}&body=${encodeURIComponent(body)}`;
}

/** OEM / program authorizations published on aircraftndt.com — not customer testimonials. */
export const companiesHelped = [
  "Pratt & Whitney Engine Services (borescope and NDT)",
  "Cessna Citation (authorized NDI facility)",
] as const;

export const airframesInspected = [
  "Cessna Citation",
  "Lear 60",
  "Dassault Falcon",
  "King Air",
  "Cessna Caravan / 400 Series",
  "Rolls-Royce BR700",
  "Transport-category, corporate, and private aircraft",
  "Aircraft wheels",
] as const;

/**
 * In-flight photos of the airframe families we inspect. Freely licensed
 * Wikimedia Commons files; the aircraft shown are examples of the type, not
 * Level 3 NDT customers. Full attribution in PHOTO-SOURCES.md.
 */
export const fleetPhotos = [
  {
    type: "Cessna Citation",
    photo: "/photos/fleet-citation.jpg",
    alt: "Cessna CitationJet CJ3 airborne against a deep blue sky",
    credit: "CitationJet CJ3 · Markus Eigenheer, CC BY-SA 2.0",
  },
  {
    type: "Learjet",
    photo: "/photos/fleet-learjet.jpg",
    alt: "Learjet 45 climbing after takeoff",
    credit: "Learjet 45 · Tomás Del Coro, CC BY-SA 2.0",
  },
  {
    type: "Dassault Falcon",
    photo: "/photos/fleet-falcon.jpg",
    alt: "Dassault Falcon 7X in flight, seen from below",
    credit: "Falcon 7X · Alan Wilson, CC BY-SA 2.0",
  },
  {
    type: "King Air",
    photo: "/photos/fleet-kingair.jpg",
    alt: "Beechcraft Super King Air 200 in flight",
    credit: "Super King Air 200 · Tomás Del Coro, CC BY-SA 2.0",
  },
  {
    type: "Cessna Caravan",
    photo: "/photos/fleet-caravan.jpg",
    alt: "Cessna Grand Caravan 208B in flight below broken cloud",
    credit: "Grand Caravan 208B · MauroTongco II, CC BY-SA 4.0",
  },
] as const;

/** Names QC NDT lists on its public catalog — text only, no logos. */
export const qcCatalogNames = [
  "Northrop Grumman",
  "Virgin Galactic",
  "Aerojet Rocketdyne",
  "Gulfstream Aerospace",
  "Peterson CAT",
  "Vail Resorts",
  "Cashman Equipment",
] as const;

export const qcVendorSectors = [
  "Airline industry",
  "Armed forces",
  "City and state municipalities",
  "Hospitals",
  "Gas and electric utilities",
  "Oil refineries",
  "Universities",
  "Independent inspection laboratories",
] as const;

export const nav = [
  { href: "/aog", label: "AOG" },
  { href: "/inspections", label: "Inspections" },
  { href: "/training", label: "Training" },
  { href: "/supplies", label: "Supplies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const methods = [
  {
    code: "ET",
    name: "Eddy Current",
    blurb: "Surface and near-surface flaws in conductive structure, skinlap, and coatings.",
  },
  {
    code: "UT",
    name: "Ultrasonic",
    blurb: "Thickness, bond, and internal discontinuities with analog and digital flaw detectors.",
  },
  {
    code: "MT",
    name: "Magnetic Particle",
    blurb: "Portable and stationary lines for ferromagnetic parts and landing-gear hardware.",
  },
  {
    code: "PT",
    name: "Liquid Penetrant",
    blurb: "Visible and fluorescent penetrant on wheels, fittings, and open-surface parts.",
  },
  {
    code: "VT",
    name: "Visual / Borescope",
    blurb: "Engine and airframe visual work, including Pratt & Whitney–approved borescope.",
  },
] as const;

export const inspectionCapabilities = [
  "Approved by Pratt & Whitney Engine Services to provide borescope and NDT inspections",
  "Airworthiness Directive compliance",
  "Cessna Citation authorized NDI facility",
  "Lear 60 IBR inspections",
  "Rolls-Royce BR700 series inspections",
  "Dassault Falcon inspections — factory-trained inspectors on the vendor-approved list",
  "Dual-frequency skinlap inspections",
  "King Air SIRM inspections",
  "Caravan and 400 Series inspections",
  "Aircraft wheel inspections",
] as const;

export const trainingCourses = [
  {
    name: "Eddy Current Level 1",
    hours: "40 hours",
    prerequisite: "None",
  },
  {
    name: "Eddy Current Level 2",
    hours: "40 hours",
    prerequisite: "ET Level 1 or equivalent",
  },
  {
    name: "Ultrasonics Level 1",
    hours: "40 hours",
    prerequisite: "None",
  },
  {
    name: "Ultrasonics Level 2",
    hours: "40 hours",
    prerequisite: "UT Level 1 or equivalent",
  },
  {
    name: "Liquid Penetrant Level 1–2",
    hours: "16 hours",
    prerequisite: "None",
  },
  {
    name: "Magnetic Particle Level 1–2",
    hours: "24 hours",
    prerequisite: "None",
  },
  {
    name: "Visual inspection",
    hours: "Course-specific",
    prerequisite: "See registration",
  },
  {
    name: "Turbine engine borescope",
    hours: "8 hours per engine type",
    prerequisite: "Prior borescope experience or fundamentals course",
  },
] as const;

export const borescopeEngines = [
  "PW2000",
  "PW4000",
  "IAE V2500",
  "JT8D",
  "CF6 series",
  "CFM56",
] as const;

export function formatAddress(): string {
  const { line1, city, state, zip } = site.address;
  return `${line1}, ${city}, ${state} ${zip}`;
}

/** Navy-strip line: SFO · SJC · OAK · HWD · And More */
export function formatAirports(): string {
  return [...site.airports, site.airportsAndMore].join(" · ");
}

/** Prose for shop proximity: SFO, SJC, OAK, and HWD */
export function formatAirportsProse(): string {
  const codes = [...site.airports];
  const last = codes.pop();
  if (!last) return "";
  if (codes.length === 0) return last;
  return `${codes.join(", ")}, and ${last}`;
}

/** Dispatch hubs only: SFO, OAK, and SJC */
export function formatDispatchHubs(): string {
  const codes = [...site.dispatchHubs];
  const last = codes.pop();
  if (!last) return "";
  if (codes.length === 0) return last;
  return `${codes.join(", ")}, and ${last}`;
}

export const dispatchHubs = [
  {
    code: "SFO" as const,
    name: "San Francisco",
    lon: -122.38,
    lat: 37.62,
    color: "#f5a623",
    dx: -16,
    dy: 4,
  },
  {
    code: "OAK" as const,
    name: "Oakland",
    lon: -122.22,
    lat: 37.72,
    color: "#7dd3f0",
    dx: 12,
    dy: -18,
  },
  {
    code: "SJC" as const,
    name: "San Jose",
    lon: -121.93,
    lat: 37.36,
    color: "#f4f0e6",
    dx: 14,
    dy: 18,
  },
] as const;

/** Field-dispatch reach plotted on the coverage map. Not a route network. */
export const coverageAirports = [
  { code: "HNL", name: "Honolulu", lon: -157.92, lat: 21.32, label: "Honolulu", lx: 0, ly: -12 },
  { code: "LIH", name: "Lihue", lon: -159.35, lat: 21.98, label: "Lihue", lx: -10, ly: -10 },
  { code: "OGG", name: "Kahului", lon: -156.43, lat: 20.9, label: "Maui", lx: 16, ly: 3 },
  { code: "KOA", name: "Kona", lon: -156.05, lat: 19.74, label: "Kona", lx: 14, ly: 8 },
  { code: "SEA", name: "Seattle", lon: -122.31, lat: 47.45, label: "Seattle", lx: 0, ly: -11 },
  { code: "PDX", name: "Portland", lon: -122.6, lat: 45.59, label: "Portland", lx: 22, ly: 4 },
  { code: "GEG", name: "Spokane", lon: -117.53, lat: 47.62, label: "Spokane", lx: 22, ly: -8 },
  { code: "MSO", name: "Missoula", lon: -114.09, lat: 46.92, label: "Missoula", lx: 0, ly: -11 },
  { code: "GTF", name: "Great Falls", lon: -111.37, lat: 47.48, label: "Great Falls", lx: 8, ly: -11 },
  { code: "BZN", name: "Bozeman", lon: -111.15, lat: 45.78, label: "Bozeman", lx: 18, ly: 10 },
  { code: "BIL", name: "Billings", lon: -108.54, lat: 45.81, label: "Billings", lx: 20, ly: -8 },
  { code: "BOI", name: "Boise", lon: -116.22, lat: 43.56, label: "Boise", lx: 16, ly: 10 },
  { code: "RNO", name: "Reno", lon: -119.77, lat: 39.5, label: "Reno", lx: -16, ly: -8 },
  { code: "CYS", name: "Cheyenne", lon: -104.81, lat: 41.16, label: "Cheyenne", lx: 22, ly: -6 },
  { code: "BIS", name: "Bismarck", lon: -100.75, lat: 46.77, label: "Bismarck", lx: 0, ly: -11 },
  { code: "FAR", name: "Fargo", lon: -96.82, lat: 46.92, label: "Fargo", lx: 16, ly: -8 },
  { code: "SMF", name: "Sacramento", lon: -121.59, lat: 38.7, label: "Sacramento", lx: 28, ly: -4 },
  { code: "LAX", name: "Los Angeles", lon: -118.41, lat: 33.94, label: "Los Angeles", lx: -28, ly: 4 },
  { code: "SNA", name: "Orange County", lon: -117.87, lat: 33.68, label: "", lx: 0, ly: 0 },
  { code: "SAN", name: "San Diego", lon: -117.19, lat: 32.73, label: "San Diego", lx: 24, ly: 8 },
  { code: "LAS", name: "Las Vegas", lon: -115.15, lat: 36.08, label: "Las Vegas", lx: 22, ly: -6 },
  { code: "PHX", name: "Phoenix", lon: -112.01, lat: 33.43, label: "Phoenix", lx: 0, ly: 12 },
  { code: "SLC", name: "Salt Lake City", lon: -111.98, lat: 40.79, label: "Salt Lake", lx: 0, ly: -11 },
  { code: "ABQ", name: "Albuquerque", lon: -106.61, lat: 35.04, label: "Albuquerque", lx: 0, ly: 12 },
  { code: "DEN", name: "Denver", lon: -104.67, lat: 39.86, label: "Denver", lx: 0, ly: -11 },
  { code: "ELP", name: "El Paso", lon: -106.38, lat: 31.81, label: "El Paso", lx: 0, ly: 12 },
  { code: "OKC", name: "Oklahoma City", lon: -97.6, lat: 35.39, label: "Oklahoma City", lx: 0, ly: -11 },
  { code: "DFW", name: "Dallas", lon: -97.04, lat: 32.9, label: "Dallas", lx: -8, ly: -11 },
  { code: "AUS", name: "Austin", lon: -97.67, lat: 30.19, label: "Austin", lx: -16, ly: 10 },
  { code: "SAT", name: "San Antonio", lon: -98.47, lat: 29.53, label: "", lx: 0, ly: 0 },
  { code: "IAH", name: "Houston", lon: -95.34, lat: 29.98, label: "Houston", lx: 22, ly: 8 },
  { code: "MSY", name: "New Orleans", lon: -90.26, lat: 29.99, label: "New Orleans", lx: 8, ly: 12 },
  { code: "MCI", name: "Kansas City", lon: -94.71, lat: 39.3, label: "Kansas City", lx: 0, ly: -11 },
  { code: "STL", name: "St. Louis", lon: -90.37, lat: 38.75, label: "St. Louis", lx: 0, ly: 12 },
  { code: "MSP", name: "Minneapolis", lon: -93.22, lat: 44.88, label: "Minneapolis", lx: 0, ly: -11 },
  { code: "MEM", name: "Memphis", lon: -89.98, lat: 35.04, label: "Memphis", lx: 0, ly: 12 },
  { code: "ORD", name: "Chicago", lon: -87.91, lat: 41.98, label: "Chicago", lx: 0, ly: -11 },
  { code: "MKE", name: "Milwaukee", lon: -87.9, lat: 42.95, label: "", lx: 0, ly: 0 },
  { code: "IND", name: "Indianapolis", lon: -86.29, lat: 39.72, label: "Indianapolis", lx: 26, ly: 4 },
  { code: "BNA", name: "Nashville", lon: -86.68, lat: 36.13, label: "Nashville", lx: 0, ly: 12 },
  { code: "DTW", name: "Detroit", lon: -83.35, lat: 42.21, label: "Detroit", lx: 0, ly: -11 },
  { code: "CLE", name: "Cleveland", lon: -81.85, lat: 41.41, label: "Cleveland", lx: 22, ly: -4 },
  { code: "CMH", name: "Columbus", lon: -82.89, lat: 40.0, label: "", lx: 0, ly: 0 },
  { code: "CVG", name: "Cincinnati", lon: -84.67, lat: 39.05, label: "Cincinnati", lx: -22, ly: 4 },
  { code: "ATL", name: "Atlanta", lon: -84.43, lat: 33.64, label: "Atlanta", lx: 0, ly: -11 },
  { code: "CLT", name: "Charlotte", lon: -80.94, lat: 35.21, label: "Charlotte", lx: 22, ly: 4 },
  { code: "TPA", name: "Tampa", lon: -82.53, lat: 27.98, label: "Tampa", lx: -14, ly: 10 },
  { code: "MCO", name: "Orlando", lon: -81.31, lat: 28.43, label: "Orlando", lx: 20, ly: -6 },
  { code: "MIA", name: "Miami", lon: -80.29, lat: 25.8, label: "Miami", lx: 16, ly: 10 },
  { code: "FLL", name: "Fort Lauderdale", lon: -80.15, lat: 26.07, label: "", lx: 0, ly: 0 },
  { code: "RDU", name: "Raleigh", lon: -78.79, lat: 35.88, label: "Raleigh", lx: 18, ly: -6 },
  { code: "IAD", name: "Washington", lon: -77.46, lat: 38.95, label: "Washington", lx: -8, ly: -11 },
  { code: "PHL", name: "Philadelphia", lon: -75.24, lat: 39.87, label: "Philadelphia", lx: 28, ly: 8 },
  { code: "JFK", name: "New York", lon: -73.78, lat: 40.64, label: "New York", lx: 20, ly: -8 },
  { code: "BOS", name: "Boston", lon: -71.01, lat: 42.36, label: "Boston", lx: 16, ly: -8 },
  { code: "PIT", name: "Pittsburgh", lon: -80.23, lat: 40.49, label: "Pittsburgh", lx: 0, ly: 12 },
  { code: "SJU", name: "San Juan", lon: -66.0, lat: 18.44, label: "San Juan", lx: 0, ly: -12 },
  { code: "TEB", name: "Teterboro", lon: -74.06, lat: 40.85, label: "", lx: 0, ly: 0 },
  { code: "HPN", name: "White Plains", lon: -73.71, lat: 41.07, label: "", lx: 0, ly: 0 },
  { code: "EWR", name: "Newark", lon: -74.17, lat: 40.69, label: "", lx: 0, ly: 0 },
  { code: "BWI", name: "Baltimore", lon: -76.67, lat: 39.18, label: "", lx: 0, ly: 0 },
  { code: "DCA", name: "Reagan", lon: -77.04, lat: 38.85, label: "", lx: 0, ly: 0 },
  { code: "BDL", name: "Hartford", lon: -72.68, lat: 41.94, label: "", lx: 0, ly: 0 },
  { code: "BED", name: "Bedford", lon: -71.29, lat: 42.47, label: "", lx: 0, ly: 0 },
  { code: "SDL", name: "Scottsdale", lon: -111.91, lat: 33.62, label: "", lx: 0, ly: 0 },
  { code: "APA", name: "Centennial", lon: -104.85, lat: 39.57, label: "", lx: 0, ly: 0 },
  { code: "VNY", name: "Van Nuys", lon: -118.49, lat: 34.21, label: "", lx: 0, ly: 0 },
  { code: "BUR", name: "Burbank", lon: -118.36, lat: 34.2, label: "", lx: 0, ly: 0 },
  { code: "LGB", name: "Long Beach", lon: -118.15, lat: 33.82, label: "", lx: 0, ly: 0 },
  { code: "ONT", name: "Ontario", lon: -117.6, lat: 34.06, label: "", lx: 0, ly: 0 },
  { code: "PSP", name: "Palm Springs", lon: -116.51, lat: 33.83, label: "", lx: 0, ly: 0 },
  { code: "FAT", name: "Fresno", lon: -119.72, lat: 36.78, label: "", lx: 0, ly: 0 },
  { code: "MRY", name: "Monterey", lon: -121.84, lat: 36.59, label: "", lx: 0, ly: 0 },
  { code: "SBA", name: "Santa Barbara", lon: -119.84, lat: 34.43, label: "", lx: 0, ly: 0 },
  { code: "BFL", name: "Bakersfield", lon: -119.06, lat: 35.43, label: "", lx: 0, ly: 0 },
  { code: "DAL", name: "Dallas Love", lon: -96.85, lat: 32.85, label: "", lx: 0, ly: 0 },
  { code: "ADS", name: "Addison", lon: -96.84, lat: 32.97, label: "", lx: 0, ly: 0 },
  { code: "HOU", name: "Hobby", lon: -95.28, lat: 29.65, label: "", lx: 0, ly: 0 },
  { code: "TUL", name: "Tulsa", lon: -95.89, lat: 36.2, label: "", lx: 0, ly: 0 },
  { code: "TUS", name: "Tucson", lon: -110.94, lat: 32.12, label: "", lx: 0, ly: 0 },
  { code: "COS", name: "Colorado Springs", lon: -104.7, lat: 38.81, label: "", lx: 0, ly: 0 },
  { code: "ASE", name: "Aspen", lon: -106.87, lat: 39.22, label: "", lx: 0, ly: 0 },
  { code: "JAC", name: "Jackson Hole", lon: -110.74, lat: 43.61, label: "", lx: 0, ly: 0 },
  { code: "JAX", name: "Jacksonville", lon: -81.69, lat: 30.49, label: "", lx: 0, ly: 0 },
  { code: "PBI", name: "West Palm", lon: -80.1, lat: 26.68, label: "", lx: 0, ly: 0 },
  { code: "OPF", name: "Opa-locka", lon: -80.28, lat: 25.91, label: "", lx: 0, ly: 0 },
  { code: "FXE", name: "Executive", lon: -80.17, lat: 26.2, label: "", lx: 0, ly: 0 },
  { code: "APF", name: "Naples", lon: -81.76, lat: 26.15, label: "", lx: 0, ly: 0 },
  { code: "RSW", name: "Fort Myers", lon: -81.76, lat: 26.54, label: "", lx: 0, ly: 0 },
  { code: "SAV", name: "Savannah", lon: -81.2, lat: 32.13, label: "", lx: 0, ly: 0 },
  { code: "CHS", name: "Charleston", lon: -80.04, lat: 32.9, label: "", lx: 0, ly: 0 },
  { code: "PDK", name: "Peachtree", lon: -84.3, lat: 33.88, label: "", lx: 0, ly: 0 },
  { code: "BHM", name: "Birmingham", lon: -86.75, lat: 33.56, label: "", lx: 0, ly: 0 },
  { code: "RIC", name: "Richmond", lon: -77.32, lat: 37.51, label: "", lx: 0, ly: 0 },
  { code: "ORF", name: "Norfolk", lon: -76.2, lat: 36.89, label: "", lx: 0, ly: 0 },
  { code: "GSO", name: "Greensboro", lon: -79.94, lat: 36.1, label: "", lx: 0, ly: 0 },
  { code: "MDW", name: "Midway", lon: -87.75, lat: 41.79, label: "", lx: 0, ly: 0 },
  { code: "PWK", name: "Chicago Exec", lon: -87.9, lat: 42.11, label: "", lx: 0, ly: 0 },
  { code: "OMA", name: "Omaha", lon: -95.89, lat: 41.3, label: "", lx: 0, ly: 0 },
  { code: "DSM", name: "Des Moines", lon: -93.66, lat: 41.53, label: "", lx: 0, ly: 0 },
  { code: "GRR", name: "Grand Rapids", lon: -85.52, lat: 42.88, label: "", lx: 0, ly: 0 },
  { code: "LIT", name: "Little Rock", lon: -92.22, lat: 34.73, label: "", lx: 0, ly: 0 },
  { code: "BFI", name: "Boeing Field", lon: -122.3, lat: 47.53, label: "", lx: 0, ly: 0 },
  { code: "EUG", name: "Eugene", lon: -123.21, lat: 44.12, label: "", lx: 0, ly: 0 },
] as const;
