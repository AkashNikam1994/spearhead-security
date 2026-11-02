/**
 * SPEARHEAD SECURITY — CAREERS CONFIGURATION
 */

export type Position = {
  title: string;
  type: "Full-time" | "Full-time / Rotational" | "Contract";
  locations: string[];
  description: string;
  /** Set true only when genuinely open. */
  open: boolean;
};

export const careerBenefits = [
  "Structured deployment and duty rosters",
  "Induction and site-specific training",
  "Supervisory support across shifts",
  "Defined standards of conduct and recognition",
  "Timely documentation and statutory compliance, as applicable",
];

export const positions: Position[] = [
  {
    title: "Security Guard",
    type: "Full-time",
    locations: ["Add confirmed cities/locations"],
    description:
      "Deployed guarding duties — access control, visitor management, patrolling and site responsibilities under defined post orders and supervision.",
    open: true,
  },
  {
    title: "Security Supervisor",
    type: "Full-time / Rotational",
    locations: ["Add confirmed cities/locations"],
    description:
      "Site rounding, attendance and conduct verification, register audits, guarding performance guidance and client-facing operational coordination.",
    open: true,
  },
  {
    title: "Operations Management",
    type: "Full-time",
    locations: ["Add confirmed cities/locations"],
    description:
      "Multi-site deployment oversight, quality inspection programmes, compliance documentation, incident review and service performance governance.",
    open: true,
  },
];

export const applicationPositions = [
  "Security Guard",
  "Security Supervisor",
  "Operations Management",
  "Other",
];
