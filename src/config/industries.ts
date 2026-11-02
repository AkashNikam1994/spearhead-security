/**
 * SPEARHEAD SECURITY — INDUSTRIES CONFIGURATION
 *
 * Each industry appears on /industries (anchored sections) and can be linked
 * from service pages via `industryRefs` slugs. `enabled: false` hides the
 * industry everywhere without touching components.
 */

export type Industry = {
  slug: string;
  name: string;
  short: string;
  image: string;
  enabled: boolean;
  /** Homepage grid order/priority — null = not on homepage */
  homepageRank: number | null;
  challenges: string[];
  arrangements: string[];
};

export const industries: Industry[] = [
  {
    slug: "banking",
    name: "Banking & Financial Institutions",
    short: "Disciplined guarding and access control for branches, offices and customer areas.",
    image: "/images/industries/banking.png",
    enabled: true,
    homepageRank: 1,
    challenges: [
      "High-traffic customer areas requiring controlled, presentable security",
      "Vault, cash-handling and restricted-zone access discipline",
      "Strict conduct and confidentiality expectations on-site",
    ],
    arrangements: [
      "Front-desk and branch guarding in corporate-appropriate presentation",
      "Documented visitor and staff access procedures",
      "Supervisory checks aligned with branch operating hours",
      "Access-control coordination for restricted areas",
    ],
  },
  {
    slug: "it-parks",
    name: "IT & Technology Parks",
    short: "Front-office security and visitor management for corporate campuses.",
    image: "/images/industries/it-parks.png",
    enabled: true,
    homepageRank: 2,
    challenges: [
      "Large daily employee and visitor movement across campuses",
      "Multiple tenants with distinct access and escort rules",
      "Extended working hours and late-night transport windows",
    ],
    arrangements: [
      "Reception and access-control postings across gates",
      "Visitor and contractor management with records",
      "After-hours access authorisation and monitoring",
      "Campus patrol and parking-area supervision",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial Facilities",
    short: "Gate discipline, material movement control and shift-round operations.",
    image: "/images/industries/manufacturing.png",
    enabled: true,
    homepageRank: 3,
    challenges: [
      "Material-in, material-out control across multiple gates",
      "Contract labour and vehicle verification at scale",
      "Continuous operations across three shifts",
    ],
    arrangements: [
      "Gate-wise standard operating procedures",
      "Material gate-pass verification and vehicle logging",
      "Shift-covering deployment with supervisor rounds",
      "Integration with plant safety and incident frameworks",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Hospitals",
    short: "Sensitive-context guarding for hospitals, clinics and medical facilities.",
    image: "/images/industries/healthcare.png",
    enabled: true,
    homepageRank: null,
    challenges: [
      "Emergency and patient-movement areas requiring perceptiveness",
      "Around-the-clock operations with fluctuating visitor load",
      "Balancing accessibility with controlled entry",
    ],
    arrangements: [
      "Entrance, emergency and reception-area guarding",
      "Visitor-recording and patient-area access discipline",
      "Sensitivity-oriented conduct for healthcare contexts",
      "Coordination with facility administration",
    ],
  },
  {
    slug: "education",
    name: "Educational Institutions",
    short: "Safe campus access control for schools, colleges and institutes.",
    image: "/images/industries/education.png",
    enabled: true,
    homepageRank: null,
    challenges: [
      "Student, staff and visitor identification at entry points",
      "Campus-wide movement during events and dispersal times",
      "Conservative, vigilant presence suited to the setting",
    ],
    arrangements: [
      "Campus gate control and visitor recording",
      "Event-day access management support",
      "Regular supervisor oversight of entrance standards",
      "Emergency-support briefing for campus staff coordination",
    ],
  },
  {
    slug: "residential",
    name: "Residential Communities",
    short: "Gate management and premises vigilance for gated societies and complexes.",
    image: "/images/industries/residential.png",
    enabled: true,
    homepageRank: 4,
    challenges: [
      "Continuous visitor, delivery and service traffic",
      "Resident expectations of courteous, consistent presence",
      "Night-time vigilance across common areas",
    ],
    arrangements: [
      "Gate management under committee-approved instructions",
      "Visitor, delivery and staff-entry recording",
      "Common-area patrol during assigned hours",
      "Committee-facing reviews and accountability",
    ],
  },
  {
    slug: "retail",
    name: "Retail & Commercial Spaces",
    short: "Customer-area guarding, shrinkage control and store-entry discipline.",
    image: "/images/industries/retail.png",
    enabled: true,
    homepageRank: 5,
    challenges: [
      "Open customer access with pilferage exposure",
      "Peak-hour crowd management at entrances",
      "Staff, delivery and tenant movement in commercial complexes",
    ],
    arrangements: [
      "Entrance presence and customer-flow assistance",
      "Stock-area and staff-exit monitoring support",
      "Peak-hour and event-day deployment flexibility",
      "Shrinkage-control coordination with store teams",
    ],
  },
  {
    slug: "warehousing",
    name: "Warehousing & Logistics",
    short: "Yard control, vehicle verification and perimeter guarding around the clock.",
    image: "/images/industries/warehousing.png",
    enabled: true,
    homepageRank: 6,
    challenges: [
      "High daily vehicle movement requiring verification discipline",
      "Loading and dispatch-bay control",
      "Perimeter and night-shift exposure of stock",
    ],
    arrangements: [
      "Vehicle-in/vehicle-out logging and seal checks",
      "Loading-area and dispatch supervision support",
      "Yard patrol and boundary monitoring",
      "Documented escalation to warehouse management",
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    short: "Guest-facing security presence for hotels, venues and resorts.",
    image: "/images/industries/hospitality.png",
    enabled: true,
    homepageRank: null,
    challenges: [
      "Security visible to guests must appear composed and courteous",
      "Function and banquet traffic alongside regular guests",
      "Back-of-house and staff-movement control",
    ],
    arrangements: [
      "Entrance and lobbies guest-facing postings",
      "Function and event access support",
      "Back-of-house access checks",
      "Service-quality supervision aligned with hospitality standards",
    ],
  },
];

export const activeIndustries = industries.filter((i) => i.enabled);
export const homepageIndustries = industries.filter(
  (i) => i.enabled && i.homepageRank !== null
);
export const getIndustry = (slug: string) =>
  industries.find((i) => i.enabled && i.slug === slug);
