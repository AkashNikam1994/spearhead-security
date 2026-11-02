/**
 * SPEARHEAD SECURITY — INSIGHTS CONFIGURATION
 *
 * Articles are content-managed here (CMS-ready). Every article below is an
 * editable editorial placeholder: generic educational topics that the company
 * reviews, edits or replaces before going live. `published: false` articles
 * are NOT served — nothing unverifiable is published automatically.
 */

export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  /** ISO date */
  date: string;
  readMinutes: number;
  /** Set `published: true` only after editorial review/approval. */
  published: boolean;
  draftBody: string[];
};

export const insightCategories = [
  "Corporate Security",
  "Industrial Security",
  "Risk Management",
  "Residential Security",
  "Workforce",
];

export const insights: Insight[] = [
  {
    slug: "modern-corporate-security-practices",
    title: "Modern Corporate Security: What Good Looks Like Today",
    category: "Corporate Security",
    excerpt:
      "Corporate security has moved beyond a guard at the desk. A look at the practices that define well-run workplace security programmes.",
    date: "2025-11-18",
    readMinutes: 6,
    published: false,
    draftBody: [
      "EDITORIAL NOTES — Overview to be written after editorial review:",
      "[Placeholder body] Corporate security programmes are increasingly judged on visitor-experience quality, documented access discipline and incident readiness — not just presence.",
      "[Placeholder body] Suggested sections: front-office standards, visitor management practice, after-hours control, service review cadence.",
    ],
  },
  {
    slug: "industrial-security-management",
    title: "Industrial Security Management: Control Without Disruption",
    category: "Industrial Security",
    excerpt:
      "Gate discipline, material movement and contractor verification — how industrial sites balance control with production continuity.",
    date: "2025-11-04",
    readMinutes: 7,
    published: false,
    draftBody: [
      "EDITORIAL NOTES — Overview to be written after editorial review:",
      "[Placeholder body] Core controls: gate SOPs, gate-pass verification, vehicle logging, shift-change windows.",
      "[Placeholder body] Suggested sections: multi-gate design, contract labour flows, shrinkage prevention.",
    ],
  },
  {
    slug: "importance-of-access-control",
    title: "The Importance of Access Control Across Every Facility Type",
    category: "Risk Management",
    excerpt:
      "From banks to warehouses, access control remains the single most visible measure of a site's security discipline.",
    date: "2025-10-21",
    readMinutes: 5,
    published: false,
    draftBody: [
      "EDITORIAL NOTES — Overview to be written after editorial review:",
      "[Placeholder body] Visitor logs, badge discipline, material gate passes, after-hours authorisation — and why records matter.",
    ],
  },
  {
    slug: "security-workforce-training",
    title: "Security Workforce Training: Why Induction Quality Defines Service Quality",
    category: "Workforce",
    excerpt:
      "How structured induction, site briefings and supervisory development translate into consistent on-ground performance.",
    date: "2025-10-07",
    readMinutes: 6,
    published: false,
    draftBody: [
      "EDITORIAL NOTES — Overview to be written after editorial review:",
      "[Placeholder body] Induction curriculum themes, site-specific deployment briefings, refreshers, supervisor development.",
    ],
  },
  {
    slug: "security-risk-assessment-explained",
    title: "Security Risk Assessment Explained: What a Good Assessment Covers",
    category: "Risk Management",
    excerpt:
      "A structured assessment looks past hardware to procedures, movement patterns and human factors. Here's what it examines.",
    date: "2025-09-23",
    readMinutes: 8,
    published: false,
    draftBody: [
      "EDITORIAL NOTES — Overview to be written after editorial review:",
      "[Placeholder body] Assessment scope: premises walk-through, procedure review, vulnerability documentation, recommendations.",
    ],
  },
  {
    slug: "residential-security-guidelines",
    title: "Residential Security: Raising Standards in Gated Communities",
    category: "Residential Security",
    excerpt:
      "Practical guidelines for society committees — deployment structure, visitor discipline and service review expectations.",
    date: "2025-09-09",
    readMinutes: 5,
    published: false,
    draftBody: [
      "EDITORIAL NOTES — Overview to be written after editorial review:",
      "[Placeholder body] Committee-facing guidance: gate SOPs, delivery discipline, attendance verification, quarterly reviews.",
    ],
  },
];

export const publishedInsights = insights.filter((a) => a.published);
export const getInsight = (slug: string) => insights.find((a) => a.slug === slug);
