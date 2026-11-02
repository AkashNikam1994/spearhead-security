/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SPEARHEAD SECURITY — CENTRAL COMPANY CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Every piece of editable, factual company information lives here.
 * Update values in this file; components stay untouched.
 *
 * ⚠  FACTUAL ACCURACY RULE
 * Placeholders are clearly marked with `placeholder: true` and render with a
 * subtle "To be confirmed" treatment. Never set placeholder values to look
 * like verified claims. Enable items (boolean `enabled` / `published`) only
 * after documentary verification is supplied by the company.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Registered/legal company name — update once confirmed. */
  legalName: "Spearhead Security",
  legalNamePlaceholder: true,

  brand: "Spearhead Security",

  brandPositioning: "Professional Protection. Disciplined Execution. Trusted Partnerships.",
  tagline: "Stay Ahead. Stay Secure.",

  primaryMessage: "Security That Protects More Than Property.",

  description:
    "Spearhead Security delivers professional security solutions designed to protect people, property, infrastructure and business continuity. Through experienced leadership, trained security personnel, disciplined operating procedures and a commitment to service excellence, we help organisations create safer environments.",

  /** Public site URL — also set in .env (NEXT_PUBLIC_SITE_URL). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const contact = {
  /** All contact details are editable placeholders until confirmed. */
  phone: {
    display: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
    placeholder: true,
  },
  email: {
    display: "info@spearheadsecurity.in",
    href: "mailto:info@spearheadsecurity.in",
    placeholder: true,
  },
  whatsapp: {
    display: "+91 XXXXX XXXXX",
    href: "https://wa.me/91XXXXXXXXXX?text=Hello%20Spearhead%20Security%2C%20I%27d%20like%20to%20discuss%20a%20security%20requirement.",
    placeholder: true,
  },
  address: {
    line1: "Office address — to be confirmed",
    line2: "City, State, PIN",
    placeholder: true,
  },

  hours: "Monday – Saturday, 9:30 AM – 6:30 PM",
  hoursPlaceholder: true,

  /**
   * Google Maps embed — publish ONLY for a verified office address.
   * Set to null to hide the map.
   */
  mapEmbedUrl: null as string | null,

  /** Service coverage locations — enable/extend only once confirmed. */
  coverageLocations: ["Add confirmed service locations here"],
  coveragePlaceholder: true,
};

/* ─── Navigation ───────────────────────────────────────────────────────────── */

export const navigation: { label: string; href: string; dropdown?: boolean }[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Industries", href: "/industries" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

export const ctaButton = { label: "Request a Security Assessment", href: "/contact" };

/* ─── Trust strip (Section 2) — factual items only ─────────────────────────── */

export const trustStrip = [
  { title: "Experienced Leadership", text: "Structured governance and operational oversight." },
  { title: "Trained Security Personnel", text: "Selected, inducted and briefed for every assignment." },
  { title: "Structured Operations", text: "Defined procedures, reporting and supervision." },
  { title: "Client-Focused Service", text: "Deployments aligned to your operating needs." },
];

/* ─── Why Spearhead (Section 6) — differentiators ──────────────────────────── */

export const differentiators = [
  {
    title: "Experienced Leadership",
    text: "Strong leadership and structured operational management guide every client engagement.",
  },
  {
    title: "Trained Security Personnel",
    text: "Personnel selected and trained according to the requirements of their assignments.",
  },
  {
    title: "Structured Operating Procedures",
    text: "Defined duties, reporting systems and site-specific security instructions for every post.",
  },
  {
    title: "Active Supervision",
    text: "Regular monitoring, inspections and clear escalation procedures across every deployment.",
  },
  {
    title: "Client-Centric Approach",
    text: "Security arrangements aligned with each client's operational needs, not a standard template.",
  },
];

/* ─── Delivery framework (Section 7) ──────────────────────────────────────── */

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    text: "Understand the client's premises, operations and security objectives.",
  },
  {
    step: "02",
    title: "Assess",
    text: "Identify vulnerabilities, security risks, access requirements and operational challenges.",
  },
  {
    step: "03",
    title: "Design",
    text: "Prepare a customised security deployment plan with personnel requirements and site procedures.",
  },
  {
    step: "04",
    title: "Deploy",
    text: "Deploy suitable personnel following the required verification, briefing and induction processes.",
  },
  {
    step: "05",
    title: "Monitor",
    text: "Supervise operations through reporting, inspections, attendance monitoring and escalation processes.",
  },
  {
    step: "06",
    title: "Improve",
    text: "Review service performance, identify gaps and implement corrective actions.",
  },
];

/* ─── People & training (Section 8) ───────────────────────────────────────── */

export const peoplePoints = [
  "Personnel selection against defined criteria",
  "Background and document verification, as applicable",
  "Induction training on conduct, duties and reporting",
  "Site-specific deployment training and briefings",
  "Discipline and professional conduct standards",
  "Emergency awareness and escalation readiness",
  "Communication and reporting capabilities",
  "Supervisory development for security leaders",
];

/* ─── Technology (Section 9) ──────────────────────────────────────────────── */

export const techCapabilities = [
  { title: "CCTV Monitoring", text: "Supervised surveillance of client-provided systems, where offered." },
  { title: "Digital Attendance Management", text: "Attendance tracking and verification of deployed personnel." },
  { title: "Visitor Management", text: "Structured recording and control of visitors at guarded entries." },
  { title: "Site Inspection Reporting", text: "Documented supervisor inspections of every operating site." },
  { title: "Incident Reporting", text: "Recorded, escalated and reviewed incident documentation." },
  { title: "Patrol Monitoring", text: "Tracking of scheduled patrolling across client premises." },
];

/** Future enhancements are clearly separated and NOT presented as live. */
export const techFutureNote =
  "Technology capability is presented as support for trained personnel — existing capabilities only. Planned future enhancements are maintained internally until implemented.";

/* ─── Compliance (Section 10) ─────────────────────────────────────────────── */

export const complianceItems = [
  { title: "Applicable PSARA Licensing", text: "Operations conducted under applicable Private Security Agencies Regulation Act requirements. Licence details published only after documentary verification." },
  { title: "Employee Documentation & Verification", text: "Identity documents and background information collected and verified as applicable for each deployed employee." },
  { title: "Statutory Registrations", text: "Applicable statutory registrations maintained and kept current." },
  { title: "Site Deployment Documentation", text: "Documented deployment letters, site instructions and post orders for every engagement." },
  { title: "Attendance & Duty Records", text: "Systematic attendance and duty-hour records maintained for deployed personnel." },
  { title: "Service Quality Inspections", text: "Scheduled and surprise inspections by supervisory and management teams." },
  { title: "Complaint Handling", text: "Logged client complaints with defined response and closure timelines." },
  { title: "Incident Documentation", text: "Structured recording and escalation of security incidents." },
  { title: "Client Performance Reviews", text: "Regular service reviews and corrective-action tracking with clients." },
];

/** PSARA / GST / certification numbers — publish only with documentation. */
export const statutory = {
  psara: { label: "PSARA licence details", value: "To be published after verification", placeholder: true },
  gst: { label: "GST registration", value: "To be published after verification", placeholder: true },
};

/* ─── Leadership (Section 11) — no invented biographies ───────────────────── */

export const leadershipIntro =
  "Spearhead Security is led by an operations-focused management team with responsibility for deployment quality, personnel standards, statutory compliance and client relationships. Genuine leadership profiles are published here as they are confirmed and approved for use.";

export type LeadershipProfile = {
  name: string;
  designation: string;
  bio: string;
  photo?: string;
  published: boolean;
};

export const leadershipProfiles: LeadershipProfile[] = [
  { name: "Founder / Managing Director", designation: "Founder & Managing Director", bio: "Profile to be published after confirmation.", published: false },
  { name: "Operations Head", designation: "Head of Operations", bio: "Profile to be published after confirmation.", published: false },
  { name: "Regional Leadership", designation: "Regional / Branch Operations", bio: "Profile to be published after confirmation.", published: false },
];

/* ─── Social links (footer) — enable once real URLs exist ────────────────── */

export const socialLinks = {
  linkedin: null as string | null,
  facebook: null as string | null,
  x: null as string | null,
};

export const footerSummary =
  "Spearhead Security provides professional security solutions for corporate, industrial, residential and institutional environments — delivered through trained personnel, structured operations and active supervision.";

/**
 * Client testimonials — add approved testimonials here as
 * { client_name, client_designation, company_name, testimonial }.
 * NEVER publish unapproved or invented feedback. The homepage renders a
 * labelled placeholder while this list stays empty.
 */
export const approvedTestimonials: {
  client_name: string;
  client_designation?: string;
  company_name?: string;
  testimonial: string;
}[] = [];
