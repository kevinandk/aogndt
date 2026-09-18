export const site = {
  name: "AOGNDT",
  legalName: "Level III NDT",
  marketingName: "Level 3 NDT",
  tagline: "Aircraft on Ground Non-Destructive Testing",
  description:
    "Bay Area FAA repair station for aircraft NDT. AOG and field dispatch, scheduled inspections, Level 1–3 training, and QC NDT supplies.",
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
  aog: {
    label: "Call for AOG / field dispatch",
    phone: "877-9AOG-NDT",
    phoneHref: "tel:+18779264638",
    email: "info@aircraftndt.com",
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
  note: "Reconstructed from public listings. This is not a scan of the paper Air Agency Certificate.",
  sources: [
    {
      label: "AeroBook certificate page N5DR176O",
      href: "https://aerobook.com/mro/faa/n5dr176o",
    },
    {
      label: "AeroBook FAA repair-station directory (L), verified 2 Apr 2025",
      href: "https://aerobook.com/mro/list/l",
    },
    {
      label: "Level III NDT publishes the same number",
      href: "http://www.aircraftndt.com/",
    },
    {
      label: "Official FAA AV-Info facility dashboard",
      href: "https://www.faa.gov/av-info/facility-dashboard",
    },
  ],
} as const;

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
  "Dassault Falcon inspections",
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

export const quoteNeeds = [
  { value: "aog", label: "AOG / field dispatch" },
  { value: "inspection", label: "Scheduled inspection" },
  { value: "training", label: "Training" },
  { value: "supplies", label: "QC NDT supplies" },
] as const;

export type QuoteNeed = (typeof quoteNeeds)[number]["value"];

export function inboxForNeed(need: QuoteNeed): string {
  if (need === "training") return site.level3.trainingEmail;
  if (need === "supplies") return site.qcndt.email;
  return site.level3.inspectionEmail;
}

export function formatAddress(): string {
  const { line1, city, state, zip } = site.address;
  return `${line1}, ${city}, ${state} ${zip}`;
}
