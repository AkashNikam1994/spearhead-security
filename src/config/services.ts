/**
 * SPEARHEAD SECURITY SERVICE — SERVICES CONFIGURATION
 *
 * The seven primary service categories are those printed on the brochure
 * cover. `enabled: false` removes a service from the homepage grid, dropdown,
 * landing page, footer and sitemap — no component changes required.
 *
 * Brochure-covered extras (Event Security, Special Security Squads, Family
 * Asset protection) are surfaced via company.ts → additionalCapabilities,
 * NOT as separate active services, pending management confirmation.
 */

export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  /** Grid card description (short). */
  summary: string;
  /** Detail-page full description (opening paragraphs). */
  description: string[];
  image: string;
  enabled: boolean;
  /** Detail-page content */
  highlights?: string[];
  challenges: string[];
  scope: string[];
  methodology: string[];
  controls: string[];
  benefits: string[];
  industryRefs: string[];
  faqs: { q: string; a: string }[];
};

export const services: ServiceDetail[] = [
  {
    slug: "private-investigations",
    title: "Private Investigations",
    shortTitle: "Private Investigations",
    summary:
      "Professional investigation support focused on information gathering, observation and reporting to address specific client requirements.",
    description: [
      "Spearhead Security Service provides professional investigation support focused on information gathering, observation and reporting to address specific client requirements.",
      "Engagements are planned with the client to define the scope of enquiry, the information sought and the reporting format, and every investigation is conducted with discretion and structured documentation.",
    ],
    image: "/images/extra/intro.jpg",
    enabled: true,
    challenges: [
      "Specific information required about premises, personnel or events",
      "Discreet observation and reporting needs",
      "Verification of facts before business or staffing decisions",
    ],
    scope: [
      "Scoping of the enquiry with the client",
      "Observation and information gathering within agreed assignments",
      "Structured, factual reporting of findings",
      "Coordination with client representatives during the engagement",
    ],
    methodology: [
      "Understanding the specific requirement from the client",
      "Planning the observation and documentation approach",
      "Assigning suitable personnel",
      "Compiling observations into a factual report",
    ],
    controls: [
      "Defined scope and confidentiality expectations agreed in writing",
      "Factual, documented reporting",
      "Client reviews of findings before follow-up actions",
    ],
    benefits: [
      "Objective information for decision-making",
      "Discreet and professionally handled enquiries",
      "Clear documentation of findings",
    ],
    industryRefs: [],
    faqs: [
      {
        q: "What can be included in an investigation assignment?",
        a: "Publishing a fixed list would overstate our scope. Each requirement is discussed with the client and a suitable plan is agreed before any engagement begins.",
      },
      {
        q: "Is the engagement confidential?",
        a: "Discretion is a core expectation of investigation assignments and is agreed with the client at the outset.",
      },
      {
        q: "How are findings delivered?",
        a: "In a structured documented format agreed with the client during scoping.",
      },
    ],
  },
  {
    slug: "industrial-security",
    title: "Industrial Security",
    shortTitle: "Industrial Security",
    summary:
      "Industrial security arrangements designed to protect facilities, personnel, equipment and business operations — with guard deployment, access management, supervision and inspection.",
    description: [
      "Spearhead Security Service provides industrial security arrangements designed to protect facilities, personnel, equipment and business operations.",
      "The company's approach includes security guard deployment at designated points, site monitoring, access management, supervision, inspection and coordination with the client — starting from a joint survey of the premises.",
    ],
    image: "/images/services/industrial-security.jpg",
    enabled: true,
    highlights: [
      "Industrial premises security",
      "Access control",
      "Guard deployment",
      "Entry and exit monitoring",
      "Men and material movement",
      "Vehicle monitoring",
      "Gate records",
      "Site supervision",
    ],
    challenges: [
      "Multi-point premises requiring planned guard positions",
      "Movement of men, material and vehicles demanding documented control",
      "Entry and exit discipline across shifts",
      "Equipment and critical-area protection",
    ],
    scope: [
      "Guard deployment at designated points identified in the joint survey",
      "Access control and entry/exit monitoring",
      "Men and material movement checks",
      "Vehicle monitoring with gate records and registers",
      "Site supervision, inspection and client coordination",
      "Protection of premises, personnel and equipment",
    ],
    methodology: [
      "Joint survey of the premises to assess deployment requirements",
      "Identification of guard deployment points and responsibilities",
      "Deployment with assignment-specific briefing and uniform",
      "Supervision through inspections, records and client updates",
    ],
    controls: [
      "Documented gate records and access registers",
      "Regular supervisory inspections at deployment points",
      "Attendance monitoring and duty records",
      "Client coordination and operational updates",
    ],
    benefits: [
      "Structured protection for facilities and operations",
      "Documented movement control across all entry points",
      "Continuity of supervision across shifts",
      "Clear client visibility through inspections and updates",
    ],
    industryRefs: ["manufacturing", "warehousing", "retail"],
    faqs: [
      {
        q: "How is a deployment planned?",
        a: "It starts with a joint survey of the premises — assessing entry points, important buildings, equipment, parking areas and required security positions — after which deployment is planned with the client.",
      },
      {
        q: "Are guards posted continuously across shifts?",
        a: "Deployment schedules are planned with the client covering the agreed operating hours across shifts.",
      },
      {
        q: "What records are maintained?",
        a: "Gate records, registers and entry/exit documentation form part of the disciplined operating practice described in our training syllabus.",
      },
    ],
  },
  {
    slug: "armed-escort",
    title: "Armed Escort",
    shortTitle: "Armed Escort",
    summary:
      "Specialised armed escort services for cash movement and protection of personnel, planned per assignment requirements and applicable authorisations.",
    description: [
      "Spearhead specialises in armed escort services for cash movement and protection of personnel (as described in the company brochure).",
      "Security deployment is planned according to assignment requirements and applicable permissions and authorisations. Every escort engagement is coordinated with the client in advance, covering route planning, personnel composition and communication.",
    ],
    image: "/images/extra/deployment-briefing.jpg",
    enabled: true,
    challenges: [
      "Cash movement requiring planned, supervised protection",
      "Personnel protection for specific movements",
      "Coordination and communication during movement",
    ],
    scope: [
      "Armed escort for cash movement (per assignment plan)",
      "Protection of personnel during designated movement",
      "Assignment-specific route and timing planning",
      "Coordination with the client before and during movement",
    ],
    methodology: [
      "Requirement discussion and assignment scoping",
      "Deployment planning aligned to applicable permissions and authorisations",
      "Selection of suitable personnel with briefing",
      "Structured communication and completion reporting",
    ],
    controls: [
      "Assignment-specific documented plans",
      "Briefing before each movement",
      "Client confirmation and completion feedback",
    ],
    benefits: [
      "Specialised, assignment-driven protection",
      "Planned movements rather than improvisation",
      "Clear coordination and communication throughout",
    ],
    industryRefs: ["banking", "retail"],
    faqs: [
      {
        q: "Which authorisations apply to armed escort deployments?",
        a: "Armed deployments follow applicable legal requirements and permissions specific to each assignment. Details of licences or authorisations are shared only with documented verification.",
      },
      {
        q: "Do you provide cash movement escort?",
        a: "Yes — armed escort services for cash and protection of personnel are described as a specialisation in the company brochure. Contact us to discuss a specific movement.",
      },
      {
        q: "How far in advance should a movement be planned?",
        a: "Escort deployments are planned per assignment; share details of the movement for the coordination timeline.",
      },
    ],
  },
  {
    slug: "surveillance",
    title: "Surveillance",
    shortTitle: "Surveillance",
    summary:
      "Security monitoring through observation, reporting and identification of potential security concerns at client premises.",
    description: [
      "Surveillance supports security monitoring through observation, reporting and the identification of potential security concerns.",
      "Spearhead's security approach incorporates monitoring, inspections and communication to help maintain effective security at client premises. Deployed personnel are trained in closed-circuit television monitoring as part of the syllabus described in the company brochure.",
    ],
    image: "/images/services/surveillance.jpg",
    enabled: true,
    challenges: [
      "Large premises needing consistent observation",
      "Potential security issues going unnoticed between rounds",
      "Undocumented observations that cannot inform action",
    ],
    scope: [
      "Monitoring of designated areas per the deployment plan",
      "Observation and documentation of irregularities",
      "Communication of potential security concerns",
      "CCTV monitoring support within agreed assignments",
      "Coordination with guarding staff during follow-ups",
    ],
    methodology: [
      "Understanding areas of concern through site recce",
      "Structured observation and reporting practice",
      "Escalation of concerns through defined channels",
      "Communication of updates to the client",
    ],
    controls: [
      "Observation records and reporting formats",
      "Supervisory follow-up on reported concerns",
      "Client-facing operational updates",
    ],
    benefits: [
      "Earlier identification of potential security concerns",
      "Documented observation that supports action",
      "Improved overall site awareness",
    ],
    industryRefs: ["manufacturing", "warehousing", "banking", "retail"],
    faqs: [
      {
        q: "Is CCTV monitoring available at every site?",
        a: "CCTV monitoring is part of the trained syllabus (personal control & identification). Where and how it is applied follows the site deployment plan agreed with each client.",
      },
      {
        q: "How are concerns escalated?",
        a: "Observations are reported and escalated through supervisory staff to the client, as described in the company's operations approach.",
      },
      {
        q: "Do observations form part of reports?",
        a: "Yes — records and reporting (daily guard reports, incident reports, log books) are part of the disciplined practice.",
      },
    ],
  },
  {
    slug: "safety-fire-fighting",
    title: "Safety & Fire Fighting",
    shortTitle: "Safety & Fire Fighting",
    summary:
      "Safety and fire-related support that complements security arrangements — helping organisations prepare for and respond to fire and other incidents.",
    description: [
      "Safety and fire-related support complements security arrangements by helping organisations prepare for emergency situations and respond appropriately to fire and other incidents.",
      "Emergency awareness — covering fire, medical emergencies, bomb threats, demonstrations, hold-up and burglary situations — is part of the training syllabus described in the company's brochure.",
    ],
    image: "/images/services/safety-fire-fighting.jpg",
    enabled: true,
    highlights: [
      "Fire",
      "Medical emergencies",
      "Bomb threat awareness",
      "Demonstrations",
      "Hold-up situations",
      "Burglary situations",
    ],
    challenges: [
      "Emergency situations that require rehearsed, disciplined response",
      "Untrained response making incidents worse",
      "Lack of basic fire-handling awareness at guard posts",
    ],
    scope: [
      "Emergency awareness training coverage for deployed personnel (per brochure syllabus)",
      "Fire and medical emergency awareness",
      "Bomb threat awareness",
      "Support for demonstrations, hold-up and burglary situations",
      "Coordination during incidents per client emergency plans",
    ],
    methodology: [
      "Awareness as part of induction and the training syllabus",
      "Site-specific briefing of emergency arrangements",
      "Coordination with client emergency contacts",
      "Reporting of incidents per the records & reporting syllabus",
    ],
    controls: [
      "Incident documentation",
      "Supervisory review after incidents",
      "Client coordination on emergency procedures",
    ],
    benefits: [
      "Personnel prepared for emergency situations",
      "Support rather than uncertainty during incidents",
      "Documented incident reporting",
    ],
    industryRefs: ["manufacturing", "warehousing", "education", "healthcare"],
    faqs: [
      {
        q: "Are your guards certified firefighters?",
        a: "No certification claims are made on this website. Fire-related support describes awareness training coverage and disciplined response support, as listed in the company's brochure syllabus.",
      },
      {
        q: "Which emergency types are covered in training?",
        a: "Per the brochure syllabus: bomb threats, fire, medical emergencies, demonstrations, hold-up, burglary and other security incidents.",
      },
      {
        q: "Can training be extended for our site's specific hazards?",
        a: "Share your site's requirements and current training arrangements can be discussed with the company.",
      },
    ],
  },
  {
    slug: "bank-security",
    title: "Bank Security",
    shortTitle: "Bank Security",
    summary:
      "Security arrangements for banking premises focused on professional guarding, access control, visitor coordination, vigilance and protection of physical assets.",
    description: [
      "Security arrangements for banking premises focused on professional guarding, access control, visitor coordination, vigilance and protection of physical assets.",
      "Bank deployments are planned through the same disciplined approach — joint survey, defined guard points, trained personnel in the company's own uniform, and continuous supervision with inspection and updates.",
    ],
    image: "/images/extra/guards-award.jpg",
    enabled: true,
    challenges: [
      "Public-facing premises needing presentable, disciplined guarding",
      "Customer and visitor movement requiring structured access control",
      "Protection of physical assets in sensitive environments",
    ],
    scope: [
      "Professional guard deployment at agreed points",
      "Access control and visitor coordination",
      "Vigilance and observation duties",
      "Protection of physical assets",
      "Records and reporting at the deployment",
    ],
    methodology: [
      "Joint survey of the premises",
      "Deployment planning aligned to branch operating hours",
      "Assignment-specific briefing and uniform",
      "Supervisory inspections with operational updates",
    ],
    controls: [
      "Visitor and entry/exit records",
      "Regular inspections",
      "Client updates on observations",
    ],
    benefits: [
      "Disciplined, presentable security presence",
      "Structured access and visitor control",
      "Consistent supervision and reporting",
    ],
    industryRefs: ["banking", "retail"],
    faqs: [
      {
        q: "Is bank security available across all our branch locations?",
        a: "Service coverage is coordinated by the company. Contact us with your locations to discuss availability (historical service activity is documented in Jayasingpur, Kolhapur, Sangli, Satara, Karad and Pune — current coverage is confirmed case-by-case).",
      },
      {
        q: "How is confidentially handled on premises?",
        a: "Personnel are trained to be honest, disciplined, loyal and well mannered, and are briefed on specific client requirements as part of deployment.",
      },
      {
        q: "Can armed guards be deployed at a branch?",
        a: "Armed guard deployments follow the armed-guards service line and applicable legal authorisations. Discuss your requirement with us.",
      },
    ],
  },
  {
    slug: "armed-guards",
    title: "Armed Guards",
    shortTitle: "Armed Guards",
    summary:
      "Trained security personnel for specialised assignments that require armed protection, subject to relevant legal authorisations and operational requirements.",
    description: [
      "Spearhead provides trained security personnel for specialised assignments that require armed protection, subject to relevant legal authorisations and operational requirements.",
      "As with every deployment, assignment-specific planning, briefing and uniform apply, with supervision through the company's monitoring and inspection approach.",
    ],
    image: "/images/services/armed-guards.jpg",
    enabled: true,
    challenges: [
      "Assignments requiring armed protection capability",
      "Legal authorisations specific to armed deployment",
      "Strict discipline expectations for armed posts",
    ],
    scope: [
      "Armed guard deployment for specialised assignments",
      "Assignment-specific operational planning",
      "Briefing, uniform and instructions per deployment standards",
      "Supervision through defined monitoring practice",
    ],
    methodology: [
      "Requirement and authorisation review with the client",
      "Deployment planning per the operational assessment",
      "Personnel selection with assignment-specific briefing",
      "Continuous supervision and client updates",
    ],
    controls: [
      "Compliance-with-authorisations review before each engagement",
      "Supervisory inspection of armed posts",
      "Documented duty conduct",
    ],
    benefits: [
      "Specialised protection for higher-risk assignments",
      "Disciplined handling of armed duties",
      "Clear legal-compliance framework per assignment",
    ],
    industryRefs: ["banking", "manufacturing"],
    faqs: [
      {
        q: "Are armed guard deployments legally authorised?",
        a: "Armed deployments proceed only when the relevant legal authorisations and permissions are in place for the assignment — this is agreed before deployment. Specific licence numbers are published only after documentary verification.",
      },
      {
        q: "What training do armed guards receive?",
        a: "Personnel deployed by Spearhead are selected through qualifying aptitude, intelligence, physical and written tests and receive professional training covering drill, bearing and duty discipline (per company brochure).",
      },
      {
        q: "Which assignments is this suitable for?",
        a: "Suitability is assessed per requirement — see also the Armed Escort service for cash movement and personnel protection.",
      },
    ],
  },
];

/* ─── helpers ─────────────────────────────────────────────────────────────── */

export const activeServices = services.filter((s) => s.enabled);
export const getService = (slug: string) =>
  services.find((s) => s.enabled && s.slug === slug);
