/**
 * SPEARHEAD SECURITY — SERVICES CONFIGURATION
 *
 * Every published service needs only an `enabled` flag. Unpublished services
 * will not appear on the homepage grid, the services landing page, dropdowns,
 * the footer or the sitemap — no component changes required.
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
    slug: "manned-guarding",
    title: "Manned Guarding",
    shortTitle: "Manned Guarding",
    summary:
      "Professional security personnel for access control, guarding, surveillance and day-to-day site protection.",
    description: [
      "Professional manned guarding provides a visible and accountable security presence at your premises. Security personnel perform access control, visitor coordination, surveillance, reporting and other site-specific responsibilities in accordance with approved operating procedures.",
      "Every deployment is supported by structured supervision, documented post orders and periodic inspections, so that guarding performance remains consistent and measurable across the site.",
    ],
    image: "/images/services/manned-guarding.png",
    enabled: true,
    challenges: [
      "Uncontrolled visitor and contractor movement at entrances",
      "Lack of documented access-control discipline",
      "Theft, pilferage and unauthorised material movement",
      "Inconsistent guard conduct, attendance and standards",
      "Gaps in night-shift and weekend supervision",
    ],
    scope: [
      "Entrance and exit access control with visitor recording",
      "Visitor, contractor and delivery coordination",
      "Perimeter and internal guarding as per duty rosters",
      "Surveillance of premises and reporting of irregularities",
      "Mobile patrolling across designated checkpoints",
      "Material-movement checks and gate-pass verification",
      "Emergency response support and escalation",
    ],
    methodology: [
      "Site survey to understand entrances, exits and risk areas",
      "Preparation of site-specific post orders and duty rosters",
      "Deployment of guards following verification and induction",
      "Briefing on client procedures, escalation paths and duties",
      "Shift handovers with documented logs and instructions",
    ],
    controls: [
      "Attendance verification and shift-coverage checks",
      "Regular supervisor rounds and checkpoint inspections",
      "Incident and register documentation at every post",
      "Escalation matrix shared with client management",
      "Periodic performance reviews with the client",
    ],
    benefits: [
      "A disciplined, visible security presence at all times",
      "Documented and auditable access-control practice",
      "Consistent personnel quality through active supervision",
      "Faster detection and escalation of irregularities",
      "Clear accountability through reporting and reviews",
    ],
    industryRefs: [
      "banking",
      "it-parks",
      "retail",
      "warehousing",
      "residential",
      "hospitality",
    ],
    faqs: [
      {
        q: "How quickly can a manned guarding deployment start?",
        a: "Timelines depend on site size and manpower requirement. After a site assessment and agreement on shift structure, deployment is mobilised with verification and induction of the assigned personnel. Contact us with your requirement for a specific indicative timeline.",
      },
      {
        q: "How are guards replaced during absence?",
        a: "Deployments are planned with substitute arrangements so approved shift strength is maintained whenever possible.",
      },
      {
        q: "Do guards receive site-specific instructions?",
        a: "Yes. Every deployment is governed by site-specific post orders covering duties, access rules, escalation and reporting.",
      },
    ],
  },
  {
    slug: "corporate-security",
    title: "Corporate Security",
    shortTitle: "Corporate Security",
    summary:
      "Security arrangements for offices, IT parks, corporate campuses and commercial establishments.",
    description: [
      "Corporate security services are designed for professional workplaces where security personnel represent your organisation at the front door. Guards and supervisors manage access control, visitor management, reception support and workplace safeguarding with the discipline and presentation corporate environments require.",
      "Arrangements are customised around building layouts, tenant expectations, working hours and compliances, and remain under continuous supervisory review.",
    ],
    image: "/images/services/corporate-security.png",
    enabled: true,
    challenges: [
      "High visitor traffic requires controlled, professional front-office security",
      "Multiple tenant offices with differing access rules in one building",
      "After-hours access, deliveries and service personnel management",
      "Reception areas projecting your brand image daily",
    ],
    scope: [
      "Reception and entrance access control",
      "Visitor management, badges and facilitation",
      "Screening of staff, contractor and delivery entries",
      "Lobby, parking and common-area monitoring",
      "After-hours entry authorisation and logging",
      "Coordination with facility management teams",
    ],
    methodology: [
      "Assessment of building access architecture and peak-hour flows",
      "Deployment plan covering hours, postings and relief structure",
      "Grooming, conduct and client-orientation training for assigned guards",
      "Written operating procedures agreed with building management",
      "Scheduled supervisor reviews with facility teams",
    ],
    controls: [
      "Daily attendance and shift-handover logs",
      "Visitor registers and after-hours entry records",
      "Supervisor site rounds and grooming checks",
      "Incident documentation with escalation protocols",
      "Quarterly performance reviews with client stakeholders",
    ],
    benefits: [
      "Polished, front-office-quality security personnel",
      "Consistent access discipline without friction to staff",
      "Documented visitor and after-hours control",
      "Security presence that supports your workplace brand",
    ],
    industryRefs: ["it-parks", "banking", "retail", "healthcare"],
    faqs: [
      {
        q: "Can security personnel be groomed to client standards?",
        a: "Yes. Corporate deployments include orientation on conduct, grooming and interaction standards specific to the client environment.",
      },
      {
        q: "Do you support multi-tenant buildings?",
        a: "Yes. Access rules, tenant registers and escalation paths are individually documented per building.",
      },
      {
        q: "Is after-hours cover available?",
        a: "Yes. Shift structure is planned around building operating hours, including extended and 24x7 requirements.",
      },
    ],
  },
  {
    slug: "industrial-security",
    title: "Industrial Security",
    shortTitle: "Industrial Security",
    summary:
      "Security of manufacturing facilities, factories, warehouses, industrial premises and critical operational areas.",
    description: [
      "Industrial security demands control over materials, vehicles, contractors and shift movements without interrupting production. Our personnel work to documented gate protocols, supervise material movement, and support safety and compliance requirements within manufacturing environments.",
      "Deployments are designed with plant management so that security activity supports — never obstructs — operations.",
    ],
    image: "/images/services/industrial-security.png",
    enabled: true,
    challenges: [
      "Large, multi-gate premises with vehicle and contractor traffic",
      "Raw material, WIP and finished-goods pilferage risk",
      "Contract labour and service-crew verification",
      "Shift-change windows requiring disciplined control",
    ],
    scope: [
      "Main-gate and department-level access control",
      "Vehicle checking, logging and seal verification",
      "Material gate passes — inward/outward verification",
      "Contractor and labour attendance verification",
      "Yard, storage and critical-area patrolling",
      "Scrap and disposal movement supervision",
      "Coordination during shift changes and emergencies",
    ],
    methodology: [
      "Joint survey with plant security management",
      "Gate-wise standard operating procedures",
      "Familiarisation with plant layouts and hazard areas",
      "Trained deployment covering all operational shifts",
      "Integration with plant incident and safety frameworks",
    ],
    controls: [
      "Gate registers, vehicle logs and material records",
      "Supervisor rounds during and between shifts",
      "Random checks of entries, exits and storage areas",
      "Step-level escalation to plant management",
      "Incident documentation and review cycles",
    ],
    benefits: [
      "Reduced material shrinkage through controlled movement",
      "Verified contractor and vehicle movement discipline",
      "Security continuity across all three shifts",
      "Documented, auditable control at every gate",
    ],
    industryRefs: ["manufacturing", "warehousing", "retail"],
    faqs: [
      {
        q: "Can you handle vehicle and material-gate checking?",
        a: "Yes. Vehicle checks, seal verification, and gate-pass procedures are core industrial deployment activities described in site SOPs.",
      },
      {
        q: "Do your personnel follow plant safety rules?",
        a: "Yes. Industrial deployments include site induction covering areas, PPE rules and emergency frameworks.",
      },
      {
        q: "Is night-shift supervision included?",
        a: "Yes. Supervisory presence and inspection schedules cover all operational shifts.",
      },
    ],
  },
  {
    slug: "residential-security",
    title: "Residential Security",
    shortTitle: "Residential Security",
    summary:
      "Security solutions for housing societies, residential complexes and gated communities.",
    description: [
      "Residential security safeguards resident safety, daily comfort and controlled access to gated communities, apartment complexes and colonies. Guards manage visitor entry, delivery discipline, parking guidance and community coordination with courtesy and steadiness.",
      "Deployments align with society management-committee decisions and remain under regular supervisory oversight.",
    ],
    image: "/images/services/residential-security.png",
    enabled: true,
    challenges: [
      "Continuous visitor, delivery and service-person traffic",
      "Resident expectations of courtesy and consistency",
      "Night-time vigilance across gates and premises",
      "Coordination with society committees and managing agents",
    ],
    scope: [
      "Gate management and visitor recording",
      "Resident, tenant and staff access verification",
      "Delivery and service-personnel entry procedures",
      "Premises patrolling during assigned hours",
      "Parking and common-area monitoring",
      "Support during society events and emergencies",
    ],
    methodology: [
      "Assessment of gates, boundaries and movement patterns",
      "Deployment plan and roster approved by the committee",
      "Conduct and courtesy orientation for residential settings",
      "Established visitor and delivery recording practice",
      "Committee review meetings at agreed intervals",
    ],
    controls: [
      "Gate registers and delivery logs",
      "Supervisor visits and guard-appearance checks",
      "Attendance verification and substitute arrangements",
      "Incident escalation to committee office-bearers",
      "Regular performance reviews with the committee",
    ],
    benefits: [
      "A reliable, courteous presence at every gate",
      "Systematic control of visitors and deliveries",
      "Consistent standards residents recognise and trust",
      "Clear accountability to the society committee",
    ],
    industryRefs: ["residential", "education", "healthcare"],
    faqs: [
      {
        q: "Can one guard cover entry and patrolling?",
        a: "Deployment structure follows the committee's requirement and site layout — assessment determines the practical combination.",
      },
      {
        q: "How are society-specific rules applied?",
        a: "Committee decisions on visitors, deliveries, parking and timings are documented into the site's operating instructions.",
      },
      {
        q: "What happens when a guard is absent?",
        a: "Substitute arrangements are activated so the post remains covered wherever manpower allows.",
      },
    ],
  },
  {
    slug: "event-security",
    title: "Event Security",
    shortTitle: "Event Security",
    summary:
      "Event access management, visitor control, crowd management and coordination.",
    description: [
      "Event security provides disciplined access management, entry screening, crowd guidance and venue coordination for corporate events, conferences, exhibitions and functions. Personnel are deployed per an event-specific plan developed with organisers.",
      "Every event deployment is briefed on venue layout, entry points, VIP protocols and emergency coordination before gates open.",
    ],
    image: "/images/services/event-security.png",
    enabled: true,
    challenges: [
      "High-volume, short-duration visitor movement",
      "Uninvited persons and credential abuse",
      "Crowd pressure at entrances and choke areas",
      "Coordination among organisers, venue staff and security",
    ],
    scope: [
      "Entry screening and credential checks",
      "Queue and crowd-flow management",
      "Venue periphery and restricted-area access",
      "Stage, green-room and VIP area protection",
      "Emergency-support positioning and evacuation assistance",
      "Post-event dispersal control",
    ],
    methodology: [
      "Pre-event walk-through with the organising team",
      "Event security plan — postings, routes and escalation",
      "Briefing of all assigned personnel before the event",
      "Real-time coordination with event command",
      "Structured handover at event close",
    ],
    controls: [
      "Access-credential verification at all entry points",
      "Supervisor-managed sector deployment",
      "Radio/spot-level communication and escalation",
      "Incident documentation after the event",
      "Post-event review with organisers",
    ],
    benefits: [
      "Controlled entry without bottlenecks",
      "Professional conduct visible to your guests",
      "Pre-planned response to crowd situations",
      "Protection of restricted areas and VIP zones",
    ],
    industryRefs: ["hospitality", "retail", "it-parks", "education"],
    faqs: [
      {
        q: "What lead time does event security need?",
        a: "For a plan-quality deployment, engagement before the event date is preferred for rehearsals and briefings. Share event details for availability.",
      },
      {
        q: "Do you coordinate with venue authorities?",
        a: "Yes. Coordination requirements are part of the pre-event walk-through and plan.",
      },
      {
        q: "Are female guards available for specific duties?",
        a: "Availability depends on location and requirement; share your need while requesting the assessment.",
      },
    ],
  },
  {
    slug: "security-supervision",
    title: "Security Supervision & Management",
    shortTitle: "Supervision & Management",
    summary:
      "Site supervision, inspections, operational monitoring and service-quality management.",
    description: [
      "Supervision turns guarding deployments into managed operations. Security supervisors conduct planned rounds, verify attendance and discipline, review registers, monitor incidents and act as the single operational point between guarding staff, the security provider and the client.",
      "Supervisory structure is planned per site so that no deployment operates unreviewed.",
    ],
    image: "/images/services/supervision.png",
    enabled: true,
    challenges: [
      "Guard posts drifting from documented instructions",
      "Attendance and discipline lapses going unnoticed",
      "Client issues lacking a single point of resolution",
      "No objective mechanism to review service quality",
    ],
    scope: [
      "Supervisor site rounds and inspection schedules",
      "Attendance, grooming and duty-conduct checks",
      "Register, log-book and incident-record audits",
      "Guidance and correction of guarding performance",
      "Client liaison on operational matters",
      "Deployment review participation with the client",
    ],
    methodology: [
      "Supervisor assignment with defined visit frequency",
      "Standard inspection checklists and review formats",
      "Structured reporting of gaps and corrective actions",
      "Escalation protocol towards management and client",
      "Periodic service review meetings",
    ],
    controls: [
      "Inspection records maintained per visit",
      "Corrective-action tracking until closure",
      "Surprise inspection elements in the schedule",
      "Attendance-linked monitoring of discipline",
      "Client-visible reports and reviews",
    ],
    benefits: [
      "Deployments that stay aligned with their instructions",
      "Early identification and closure of operational gaps",
      "One accountable contact per site",
      "Objective service-quality evidence for the client",
    ],
    industryRefs: ["banking", "manufacturing", "it-parks", "retail", "residential"],
    faqs: [
      {
        q: "How frequently does a supervisor visit a site?",
        a: "Frequency is decided per deployment during planning and documented in the service review schedule.",
      },
      {
        q: "Are inspections documented?",
        a: "Yes. Inspection findings, corrective actions and closures are recorded for each visit.",
      },
      {
        q: "Can supervision be provided at multiple sites?",
        a: "Supervisory structures scale across locations as confirmed in the deployment plan.",
      },
    ],
  },
  {
    slug: "electronic-security",
    title: "Electronic Security",
    shortTitle: "Electronic Security",
    summary:
      "CCTV surveillance, access control, visitor management and supporting electronic security systems, where offered.",
    description: [
      "Electronic security services provide monitoring and operating support for CCTV surveillance, access-control and visitor-management systems — extending manned guarding with technology-supported oversight.",
      "Where clients wish to introduce monitoring capability, arrangements are implemented as part of the overall deployment plan. Support is delivered as a service component and is offered only where applicable to the client context.",
    ],
    image: "/images/services/electronic-security.png",
    enabled: true,
    challenges: [
      "Physical guarding without camera visibility misses blind spots",
      "CCTV systems installed but inconsistently monitored",
      "Visitor and access events not correlated with records",
      "No defined response loop when an alert or abnormality arises",
    ],
    scope: [
      "Monitoring of client CCTV and surveillance systems",
      "Operating support for access-control points",
      "Visitor-management process operation",
      "Log observation and irregularity escalation",
      "Coordination with guarding staff during follow-ups",
      "System-use familiarisation for site team",
    ],
    methodology: [
      "Understanding of the installed systems and coverage",
      "Monitoring protocol and escalation checklist",
      "Trained monitoring staff within operating shifts",
      "Integrated response with guarding and supervision",
      "Review of alert-handling practice with clients",
    ],
    controls: [
      "Monitoring-shift records and observation logs",
      "Response-time expectations agreed with client",
      "Management review of system-supported activity",
      "Access to management information reports",
      "Defined ownership for system upkeep actions",
    ],
    benefits: [
      "Technology extends visibility beyond fixed posts",
      "Unified response connecting monitoring and manpower",
      "Documented escalation of observed irregularities",
      "Management information for operational decisions",
    ],
    industryRefs: ["it-parks", "manufacturing", "banking", "retail", "warehousing"],
    faqs: [
      {
        q: "Do you install electronic security systems?",
        a: "This offering relates to monitoring and operating support in connection with guarding deployments. Installation scope, if any, would be confirmed during the assessment. Contact us to discuss.",
      },
      {
        q: "Is monitoring 24x7?",
        a: "Monitoring coverage follows the agreed shift structure and can extend with the deployment.",
      },
      {
        q: "Are monitoring records shared with the client?",
        a: "Yes. Management information reports related to monitoring activity are reviewed with clients as part of service governance.",
      },
    ],
  },
  {
    slug: "security-risk-assessment",
    title: "Security Risk Assessment & Consultancy",
    shortTitle: "Risk Assessment",
    summary:
      "Site inspections, vulnerability identification, security planning and deployment recommendations.",
    description: [
      "A security risk assessment reviews your premises, operations and procedures to identify vulnerabilities, document risk areas and recommend an appropriate security arrangement. The output is a structured assessment with deployment and control recommendations you can act upon.",
      "Assessments are typically conducted as the first step of an engagement, or as a standalone advisory exercise for organisations reviewing their security approach.",
    ],
    image: "/images/services/risk-assessment.png",
    enabled: true,
    challenges: [
      "Security arrangements built up over time without a review",
      "Unknown vulnerabilities and unclear priority among risks",
      "Manning levels based on habit rather than assessment",
      "Procedural gaps in access, movement and emergency handling",
    ],
    scope: [
      "On-site inspection and walk-through",
      "Review of premises layout, boundaries and access points",
      "Study of procedures, registers and current arrangements",
      "Vulnerability identification and risk documentation",
      "Deployment recommendations with staffing guidance",
      "Briefing of recommendations to management",
    ],
    methodology: [
      "Structured assessment format covering physical, procedural and human safeguards",
      "Interviews with client management and site stakeholders",
      "Consolidated assessment report with prioritised findings",
      "Deployment plan options where applicable",
      "Follow-up consultation on implementation",
    ],
    controls: [
      "Assessment conducted against a defined checklist",
      "Findings validated on site with the client team",
      "Recommendations traceable to identified risks",
      "Implementation reviews at agreed checkpoints",
    ],
    benefits: [
      "A clear, current view of your security posture",
      "Prioritised risks instead of assumptions",
      "Right-sized deployment before commitments",
      "A reference baseline for future reviews",
    ],
    industryRefs: ["banking", "manufacturing", "warehousing", "retail", "healthcare", "education"],
    faqs: [
      {
        q: "How long does an assessment take?",
        a: "Assessment duration depends on premises size and scope. Share details of your facility for an indicative schedule.",
      },
      {
        q: "Is the report shared with us?",
        a: "Yes. The client receives the consolidated assessment report with findings and recommendations.",
      },
      {
        q: "Is the assessment chargeable?",
        a: "The initial assessment offered through this website's enquiry process is a structured pre-engagement inspection. Terms are agreed before the visit; there is no obligation.",
      },
    ],
  },
];

/* ─── helpers ─────────────────────────────────────────────────────────────── */

export const activeServices = services.filter((s) => s.enabled);
export const getService = (slug: string) =>
  services.find((s) => s.enabled && s.slug === slug);
