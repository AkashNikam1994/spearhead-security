/**
 * SPEARHEAD SECURITY SERVICE — CAREERS CONFIGURATION
 *
 * Selection basis (aptitude, intelligence, physical and written tests) is
 * stated in the company brochure. Historical guard eligibility criteria
 * (education/age/height) are intentionally NOT published here until the
 * current recruitment policy and compliance requirements are confirmed.
 *
 * Service locations are brochure-era and updated only on confirmation.
 */

export type Position = {
  title: string;
  type: "Full-time" | "Full-time / Rotational" | "Contract";
  locations: string[];
  description: string;
  /** Set true only when genuinely open. */
  open: boolean;
};

export const brochureLocations = ["Jaysingpur", "Kolhapur", "Sangli", "Satara", "Karad", "Pune"];

export const careerBenefits = [
  "Training in military drill and professional bearing (per brochure)",
  "The company's own complete uniform — headgear to footwear",
  "Attention to applicable wages, benefits and gratuity (per brochure)",
  "Free monsoon wear for staff (per brochure)",
  "Administrative team support across deployments",
  "Structured supervision for a disciplined, professional environment",
];

export const positions: Position[] = [
  {
    title: "Security Guard",
    type: "Full-time",
    locations: brochureLocations,
    description:
      "Guard deployment at designated points — access control, gate records, entry/exit checks, patrolling and site responsibilities under the company's disciplined operating framework.",
    open: true,
  },
  {
    title: "Security Supervisor",
    type: "Full-time / Rotational",
    locations: brochureLocations,
    description:
      "Monitoring of security operations at designated points, site inspections, records review (gate records, registers, reports) and client coordination.",
    open: true,
  },
  {
    title: "Operations Management",
    type: "Full-time",
    locations: brochureLocations,
    description:
      "Deployment planning after joint surveys, supervision and inspection programmes, administrative coordination and client-facing operational updates.",
    open: true,
  },
];

export const applicationPositions = [
  "Security Guard",
  "Security Supervisor",
  "Operations Management",
  "Other",
];
