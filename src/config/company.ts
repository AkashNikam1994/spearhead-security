/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SPEARHEAD SECURITY SERVICE — CENTRAL COMPANY CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Source of truth for company facts: the printed "Information Brochure"
 * (SPEARHEAD SECURITY SERVICE, Jaysingpur). Update values here; components
 * stay untouched.
 *
 * ⚠  FACTUAL ACCURACY RULES
 * - `placeholder: true` items render with an explicit "to be confirmed"
 *   treatment and are never presented as verified claims.
 * - Brochure-era figures (workforce, locations, client references) are kept
 *   with `brochureStated: true` and captioned accordingly until management
 *   confirms current status.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Public-facing brand name used consistently across the website. */
  brand: "Spearhead Security Service",
  brochureBrand: "SPEARHEAD SECURITY SERVICE",

  /** Legal registered entity name — publish only after verification. */
  legalName: "Spearhead Security Service",
  legalNamePlaceholder: false,

  /** Founded in 2014 by SM Badame (per company brochure). */
  established: 2014,
  founder: "SM Badame",
  founderBio:
    "Spearhead Security Service was founded in 2014 by SM Badame. As described in the company's information brochure, SM Badame is a former Special Protection Group (SPG) professional who worked with VVIPs across India and internationally. His professional background and experience have influenced the company's emphasis on security discipline, professional presentation, trained personnel and structured security operations.",

  headquarters: "Jaysingpur, Maharashtra",

  /** Brochure-era workforce figure — keep configurable; confirm before use. */
  workforce: {
    value: 1000,
    label: "1000+",
    phrase: "over 1,000 trained security personnel",
    brochureStated: true,
    verifiedForCurrentPublication: false,
    caption: "As stated in the company information brochure (historical figure)",
  },

  brandPositioning: "Professional Security. Discipline You Can Trust.",
  heroPhrase: "People. Discipline. Vigilance. Protection.",

  /** Public site URL — also set in .env (NEXT_PUBLIC_SITE_URL). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  description:
    "Spearhead Security Service, established in 2014 and headquartered in Jaysingpur, Maharashtra, provides professional security services and security personnel for companies, organisations and institutions.",
};

export const contact = {
  /** Verified brochure contact details. */
  phone: {
    display: "+91 95526 66896",
    raw: "9552666896",
    href: "tel:+919552666896",
    placeholder: false,
  },
  email: {
    display: "Spearhead076@gmail.com",
    href: "mailto:Spearhead076@gmail.com",
    placeholder: false,
  },
  address: {
    line1: "9th Lane, Opp. Janata Bank, Bhirdi Complex, 1st Floor",
    line2: "Jaysingpur – 416 101, Maharashtra, India",
    placeholder: false,
  },

  /** WhatsApp number NOT provided in the brochure — buttons stay hidden until set. */
  whatsapp: {
    display: "",
    href: "",
    placeholder: true,
  },

  hours: "Branch office support on a 24/7 basis (as described in the brochure)",
  hoursPlaceholder: false,

  /**
   * Google Maps embed — enable only after the office address is confirmed
   * for map display by management. Null hides the map.
   */
  mapEmbedUrl: null as string | null,

  /**
   * Service locations mentioned in the company brochure — HISTORICAL.
   * Confirm current operating coverage before presenting as active
   * branch locations (see `brochureStated`).
   */
  coverageLocations: ["Jaysingpur", "Kolhapur", "Sangli", "Satara", "Karad", "Pune"],
  coverageNote: "as mentioned in the company brochure (historical service activity)",
};

/* ─── Navigation ───────────────────────────────────────────────────────────── */

export const navigation: { label: string; href: string; dropdown?: boolean }[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Industries", href: "/industries" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Training", href: "/training" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

export const ctaButton = { label: "Request a Security Assessment", href: "/contact" };

/* ─── Trust / credibility strip (factual, brochure-based) ─────────────────── */

export const trustStrip = [
  { title: "Experienced Security Leadership", text: "Founded by an ex-SPG professional (per company brochure)." },
  { title: "Trained Security Personnel", text: "Deployed in the company's own complete uniform." },
  { title: "Monitoring & Supervision", text: "Posting at designated points, inspections and updates." },
  { title: "Administrative Support", text: "A dedicated administrative team backing field operations." },
];

/* ─── Statistics band (brochure-based; nothing invented) ──────────────────── */

export const stats = [
  { label: "Established", value: "2014", note: "Founded in Jaysingpur, Maharashtra" },
  { label: "Trained Workforce", value: "1000+", note: "Brochure-stated historical figure — subject to current verification" },
  { label: "Business Model", value: "B2B", text: "Security services for companies, organisations & institutions" },
  { label: "Headquarters", value: "Jaysingpur", text: "Kolhapur district, South-West Maharashtra" },
] as { label: string; value: string; text?: string; note?: string }[];

/* ─── Why Spearhead (brochure-based differentiators) ──────────────────────── */

export const differentiators = [
  {
    title: "Experienced Security Leadership",
    text: "Founded by SM Badame, whose professional background is described in the brochure as former SPG service and VVIP protection assignments.",
  },
  {
    title: "Trained Security Personnel",
    text: "Deployed personnel with training and experience relevant to their security assignments.",
  },
  {
    title: "Professional Uniform & Appearance",
    text: "Personnel are provided the company's own complete uniform — from headgear to footwear.",
  },
  {
    title: "Client-Specific Security Planning",
    text: "Joint site surveys, recce and understanding customer requirements before deployment.",
  },
  {
    title: "Monitoring & Supervision",
    text: "Security deployment at designated points, regular inspections and operational updates.",
  },
  {
    title: "Administrative Support",
    text: "A dedicated administrative team and decentralised staff support operational coordination at all times.",
  },
  {
    title: "Employee Welfare",
    text: "Attention to applicable wages, benefits, uniforms and seasonal clothing — described in the company brochure.",
  },
];

/* ─── Operations approach (brochure-based, 6 steps) ───────────────────────── */

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    text: "Work closely with the client to understand the organisation, premises and operational security requirements.",
  },
  {
    step: "02",
    title: "Recce & Survey",
    text: "Joint site survey of premises, entry points, important buildings, equipment, parking areas and required security positions.",
  },
  {
    step: "03",
    title: "Plan Deployment",
    text: "Identify guard deployment points, site responsibilities, staffing requirements and supervision arrangements.",
  },
  {
    step: "04",
    title: "Deploy",
    text: "Deploy suitable personnel with assignment-specific briefing, uniform and instructions.",
  },
  {
    step: "05",
    title: "Monitor",
    text: "Monitor operations through supervisory staff, site inspections, reporting and coordination.",
  },
  {
    step: "06",
    title: "Review & Update",
    text: "Maintain client coordination and communicate observations, requirements and operational updates.",
  },
];

/* ─── People, selection & training ────────────────────────────────────────── */

export const selectionProcess = [
  { title: "Application", text: "Candidate expresses interest and applies." },
  { title: "Screening", text: "Initial eligibility and document screening." },
  { title: "Assessment", text: "Aptitude, intelligence, physical and written testing — as described in the company brochure." },
  { title: "Selection", text: "Qualifying candidates selected against assignment requirements." },
  { title: "Induction", text: "Introduction to duties, uniform, discipline and reporting." },
  { title: "Deployment", text: "Assignment-specific briefing and posting at designated points." },
];

export const peoplePoints = [
  "Selection on the basis of qualifying aptitude, intelligence, physical and written tests (per brochure)",
  "Induction covering professional appearance and military drill",
  "Site-specific briefing before deployment",
  "Provision of the company's complete uniform — headgear to footwear",
  "Discipline, honesty and professional conduct",
  "Emergency awareness across key incident types",
  "Structured reporting and communication practice",
];

/* ─── Training syllabus (brochure categories) ─────────────────────────────── */

export const trainingIntro =
  "The company brochure describes a training approach that emphasises military drill, professional bearing, intelligence, control, crime prevention and detection. Personnel are introduced to the importance of professional appearance, security procedures, identification, access control, reporting and operational discipline.";

export const trainingNotes =
  "These topics reflect the syllabus listed in the company's information brochure. Whether every employee receives every module should be confirmed by the current training programme before any broader claim is made.";

export const trainingModules = [
  {
    key: "A",
    title: "Basic Military Drill & Professional Bearing",
    items: [
      "Correct wearing of the uniform",
      "Standing at attention",
      "Standing at ease",
      "Saluting",
      "Professional appearance",
      "Discipline",
    ],
  },
  {
    key: "B",
    title: "Physical Protection",
    items: [
      "Protection of vital buildings, rooms and equipment",
      "Perimeter barriers",
      "Radio communications",
      "Parking lots and vehicles",
      "Protective lighting",
      "Lock and key systems",
    ],
  },
  {
    key: "C",
    title: "Personal Control & Identification",
    items: [
      "Employee and visitor control and identification",
      "Package, material and property movement",
      "Trucks and vehicle control",
      "Closed-circuit television monitoring",
      "Maintenance of gate records and registers",
      "Entry/exit checks of men and material",
    ],
  },
  {
    key: "D",
    title: "Emergency Awareness",
    items: [
      "Bomb threats",
      "Fire",
      "Medical emergencies",
      "Demonstrations",
      "Hold-up",
      "Burglary and other security incidents",
    ],
  },
  {
    key: "E",
    title: "Records & Reporting",
    items: [
      "Daily guard reports",
      "Incident reports",
      "Log books",
      "Gate records",
      "Entry and exit records",
      "Maintenance of duties registers",
    ],
  },
  {
    key: "F",
    title: "Communication & Public Relations",
    items: [
      "Verbal communication",
      "Written reports",
      "The media",
      "Specific client requirements",
      "Communication regarding ongoing problems",
      "Liaison on behalf of the assignment",
    ],
  },
];

/* ─── Technology & operational support (brochure-honest) ─────────────────── */

export const techCapabilities = [
  { title: "CCTV Monitoring Support", text: "CCTV monitoring is part of the trained syllabus for control and identification duties." },
  { title: "Gate Records & Registers", text: "Documented gate records, registers and entry/exit documentation at deployments." },
  { title: "Monitoring & Posting", text: "Security guards posted at designated points under supervisory monitoring." },
  { title: "Site Inspections", text: "Regular inspections and operational updates reported to clients." },
  { title: "24/7 Branch Coordination", text: "The branch office functions on a 24/7 basis for client emergencies (per brochure)." },
  { title: "Liaison & Escalation", text: "Liaison with agencies on behalf of assignments to support operational results." },
];

/** Brochure mentions "usage of modern technology" — a live platform claim is NOT made. */
export const techNote =
  "The brochure references the usage of modern technology within its operating approach. No proprietary platform or app is claimed on this website — capabilities above are those described in the brochure, pending management confirmation of current tooling.";

/* ─── Compliance & welfare (brochure statements) ──────────────────────────── */

export const complianceItems = [
  { title: "Minimum Wages Adherence", text: "The company describes adherence to the Minimum Wages Act in its operations." },
  { title: "Statutory Benefits", text: "Gratuity, bonus and benefits described as per applicable labour regulations (brochure statement)." },
  { title: "Contract Labour Compliance", text: "Practices described with regard to the Contract Labour Act and other relevant Acts." },
  { title: "Uniforms for All Deployed Staff", text: "Personnel receive the company's own complete uniform, including headgear and footwear." },
  { title: "Seasonal Welfare", text: "Free monsoon wear is described as provided to staff (brochure statement)." },
  { title: "Duty Records at Every Post", text: "Gate records, registers and daily guard reports maintained per the training syllabus." },
  { title: "Inspections & Updates", text: "Regular inspection cycles and operational updates communicated with clients." },
  { title: "Administrative Team", text: "A strong administrative team supports alert and effective duty at all times." },
  { title: "Discipline & Conduct", text: "Personnel are expected to be honest, disciplined, loyal and well mannered." },
];

/** Only publish verified registration numbers once documentary proof is supplied.
 *  (PSARA/GST details are NOT claimed in the brochure.) */
export const statutory = {
  psara: {
    label: "Licence & statutory registration details",
    value: "Available on request — to be published after verification",
    placeholder: true,
  },
  gst: { label: "Statutory commercial details", value: "Available on request", placeholder: true },
};

/* ─── Leadership (founder feature; other profiles stay unpublished) ───────── */

export const leadershipIntro =
  "Spearhead Security Service is led by its founder, SM Badame, whose professional background — as described in the company's information brochure — spans Special Protection Group service and VVIP protection assignments across India and internationally. Additional leadership profiles are published only when confirmed and approved.";

export type LeadershipProfile = {
  name: string;
  designation: string;
  bio: string;
  photo?: string;
  published: boolean;
};

export const leadershipProfiles: LeadershipProfile[] = [
  { name: "SM Badame", designation: "Founder", bio: "Founder of the company (2014). Former SPG professional; worked with VVIPs across India and internationally, as described in the company brochure.", published: true },
  { name: "Operations Leadership", designation: "Operations & Administrative Team", bio: "Profile to be published after confirmation.", published: false },
];

/* ─── Historical client references (brochure-stated; captions required) ───── */

export const clientReferences = {
  heading: "Organisations We Have Served",
  subheading: "Building professional security relationships through disciplined service and operational commitment.",
  caption:
    "As mentioned in the company information brochure — historical client relationships. Official logos and testimonials are used only with client authorisation, and current relationships are not claimed.",
  clients: ["Kirloskar Oil Engines Ltd.", "FIE Group", "Sanjay Ghodawat Group"],
};

/* ─── Additional brochure capabilities (NOT active services by default) ───── */

export const additionalCapabilities = [
  { title: "Special Security Squads", note: "Featured in the company brochure." },
  { title: "Protection for Family & Personal Assets", note: "Featured in the company brochure." },
  { title: "Event Security", note: "Featured in the company brochure." },
];

/* ─── Approved testimonials (empty until management supplies approved text) ── */

export const approvedTestimonials: {
  client_name: string;
  company_name: string;
  testimonial: string;
}[] = [];

/* ─── Social links (footer) — enable once real URLs exist ───────────────── */

export const socialLinks = {
  linkedin: null as string | null,
  facebook: null as string | null,
  x: null as string | null,
};

export const footerSummary =
  "Spearhead Security Service, established in 2014 and headquartered in Jaysingpur, Maharashtra, provides professional security services and trained security personnel to companies, organisations and institutions — with disciplined operations, client-specific planning and active supervision.";
