// All public copy for viabo.ai lives here. Edit words in this file, not in components.
// Vocabulary rules:
//  1. Describe what the customer gets, never how it's produced.
//  2. Every claim must be true of what the viabo team + platform deliver today.
//     Forward-looking work belongs on the Advisory & Innovation page, framed as
//     something we explore with clients — never as a shipped feature.
//  3. No client or partner names. Describe projects generically ("a distribution
//     warehouse", "an operational airport") until a client approves being named.
//  4. Institutional voice: headings are neutral and noun-led; body copy is third
//     person ("viabo", "clients", "facility teams"). "You" appears only in
//     buttons and calls to action.

export const site = {
  name: "viabo",
  legalName: "viabo AI",
  tagline: "Spatial asset intelligence for the built environment",
  url: "https://www.viabo.ai",
  email: "info@viabo.ai",
  linkedin: "https://www.linkedin.com/company/viabo-ai",
};

import type { IconName } from "@/components/Icon";

export type ArtKind = "capture" | "register" | "lifecycle" | "campus" | "portfolio" | "handover";

type Cta = { label: string; href: string };
const walkthrough: Cta = { label: "Book a walkthrough", href: "/contactus" };

/* ------------------------------------------------------------------ */
/* Platform capabilities                                               */
/* What a client can do in viabo. Used on How it works and referenced   */
/* from sector and lifecycle copy.                                      */
/* ------------------------------------------------------------------ */

export const capabilities = {
  title: "Platform capabilities",
  intro: "Everything happens inside a measurable, accurate record of the site, in a browser, for every authorised user.",
  items: [
    {
      icon: "pin" as IconName,
      title: "Register assets in the record",
      body: "Assets and equipment are registered where they sit and classified by category, with key attributes such as location, type, condition, age, maintenance status, documents and ownership.",
    },
    {
      icon: "search" as IconName,
      title: "Search and filter",
      body: "Equipment located in seconds, asset distribution understood at a glance, and large inventories managed across a site or a portfolio.",
    },
    {
      icon: "importExport" as IconName,
      title: "Import and export",
      body: "Existing asset lists imported and registers exported, fitting established facilities, maintenance, audit and asset management workflows.",
    },
    {
      icon: "ruler" as IconName,
      title: "Measure accurately",
      body: "Widths, heights, clearances and floor areas taken directly from the record, without repeat site visits or manual surveys.",
    },
    {
      icon: "annotate" as IconName,
      title: "Annotate in 3D",
      body: "Notes and markups pinned to the exact location in the model, so teams and contractors refer to the same thing.",
    },
    {
      icon: "files" as IconName,
      title: "Attach documents",
      body: "Manuals, data sheets, drawings and operational files linked to the asset or space they belong to — one repository, nothing misplaced.",
    },
    {
      icon: "box" as IconName,
      title: "Place designs in the real space",
      body: "3D CAD models of new equipment, fittings, displays or structures placed in the scanned environment to confirm fit, clearances and sightlines before installation.",
    },
    {
      icon: "compare" as IconName,
      title: "Compare over time",
      body: "Where a site has been captured more than once, two dates viewed side by side from exactly the same position, with linked navigation, show what has changed.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Lifecycle                                                           */
/* The primary way services are organised: every stage of an asset's   */
/* life, from acquisition to demolition. Services (audits, as-built     */
/* records, capital planning…) sit inside the stages.                   */
/* ------------------------------------------------------------------ */

export type Stage = {
  id: string;
  label: string; // short label for nav, strip and chips
  icon: IconName;
  title: string;
  body: string;
  helps: string[];
  services: string[];
};

export const lifecycle = {
  meta: {
    title: "Across the asset lifecycle · viabo",
    description:
      "How a viabo digital twin and asset register adds value at every stage of a building's life — from acquisition and design to maintenance, upgrade, expansion and demolition.",
  },
  hero: {
    title: "One record for the whole life of an asset.",
    sub: "Buildings change hands, are built, handed over, maintained, upgraded, expanded and eventually taken down. Every stage depends on knowing what is there. viabo gives each stage an accurate starting point — and keeps the record for the next one.",
  },
  stagesTitle: "Where viabo fits",
  stages: [
    {
      id: "acquisition",
      icon: "fileSearch",
      label: "Acquisition & sale",
      title: "Acquisition, due diligence & sale",
      body: "Before a property changes hands, both sides need to know what's really there and what state it's in.",
      helps: [
        "A complete, dated record of plant, services and fabric before settlement",
        "Condition documented with visual evidence for valuers, insurers and lenders",
        "Remote inspection for investors and advisers who can't visit",
        "Selling? Hand the buyer the same record and shorten the process",
      ],
      services: ["Due diligence capture", "Condition record", "Asset register"],
    },
    {
      id: "pre-construction",
      icon: "compass",
      label: "Pre-construction & design",
      title: "Pre-construction, feasibility & design",
      body: "Designs go wrong when they're drawn over plans that don't match the site. Start from what's actually there.",
      helps: [
        "Existing-conditions capture for sites with old, paper-only or missing drawings",
        "Accurate measurements for feasibility, scoping and design briefs",
        "Proposed designs and equipment placed in the real space to test fit and clearances",
        "Every stakeholder reviewing the same, current picture of the site",
      ],
      services: ["Existing-conditions capture", "Measured survey", "Design placement"],
    },
    {
      id: "construction",
      icon: "hardHat",
      label: "Construction",
      title: "Construction",
      body: "What's installed behind walls and above ceilings is invisible once the building is finished — unless it was captured first.",
      helps: [
        "Progress captures compared side by side across dates",
        "Services recorded before walls and ceilings are closed in",
        "Remote progress checks for owners, consultants and project managers",
        "Dated evidence that helps resolve variations and disputes",
      ],
      services: ["Progress capture", "Pre-close-in record", "Side-by-side comparison"],
    },
    {
      id: "handover",
      icon: "key",
      label: "Completion & handover",
      title: "Practical completion & handover",
      body: "Most developers are judged on what they build; the best are remembered for how their buildings perform after completion. A digital handover sets a new benchmark.",
      helps: [
        "A permanent record of common property, basements, plant rooms and commercial areas",
        "Delivered condition documented — valuable throughout the defects period",
        "Manuals, data sheets and drawings attached to the assets they belong to",
        "Base-build documentation for commercial tenants and their future fit-outs",
        "A clean start for owners, strata, building managers and FM providers",
      ],
      services: ["As-built records", "Digital handover pack", "Asset register"],
    },
    {
      id: "operations",
      icon: "wrench",
      label: "Operations & maintenance",
      title: "Operations & maintenance",
      body: "The first years of operation are the most demanding — and car parks, common areas, building services and plant carry most of the maintenance, inspection and defect workload for decades after.",
      helps: [
        "Assets located, identified and documented before a contractor is sent",
        "Defects and issues pinned to the exact spot, with evidence",
        "Contractors briefed remotely, with better accountability for the work",
        "Condition and maintenance status recorded against each asset",
        "Recaptures compared side by side to monitor facility condition over time",
      ],
      services: ["Asset register", "Defects management", "Condition monitoring"],
    },
    {
      id: "capital-planning",
      icon: "chart",
      label: "Lifecycle & capital planning",
      title: "Lifecycle & capital planning",
      body: "Capital plans are only as good as the asset data behind them. The strongest are built on what is actually installed.",
      helps: [
        "Asset age, condition and quantities recorded from the real site, not old schedules",
        "Registers exported to established financial and capital-planning tools",
        "Priorities backed by visual evidence that finance and boards can see",
        "Comparable data across sites for portfolio-level decisions",
      ],
      services: ["Condition assessment", "Asset register export", "Portfolio records"],
    },
    {
      id: "upgrade",
      icon: "bulb",
      label: "Upgrade & refurbishment",
      title: "Upgrade & refurbishment",
      body: "Refurbishments and services upgrades start with an audit — and succeed or fail on how accurate it is.",
      helps: [
        "Mounting heights, spacings and clearances measured without return visits",
        "Services and lighting audits with every fitting counted and located",
        "New fittings and equipment placed in the record to check fit before install",
        "Before-and-after captures that document the outcome — and the return on it",
      ],
      services: ["Services audit", "Lighting audit", "Upgrade planning"],
    },
    {
      id: "expansion",
      icon: "expand",
      label: "Expansion & reconfiguration",
      title: "Expansion & reconfiguration",
      body: "Adding space, moving equipment or re-planning a floor means fitting something new into something existing.",
      helps: [
        "New layouts, racking, displays or equipment tested against the real space",
        "Existing services and structures located before work begins",
        "Extensions tied back to the same record as the original building",
        "Stakeholders sign off on a layout they can see in context",
      ],
      services: ["Space planning", "Layout testing", "Design placement"],
    },
    {
      id: "decommissioning",
      icon: "recycle",
      label: "Decommissioning & demolition",
      title: "Decommissioning & demolition",
      body: "Even at the end of its life, a building's record has value — for the teams taking it apart and for whatever comes next.",
      helps: [
        "A complete record of what's in the building before strip-out",
        "Inventory of equipment and materials that can be salvaged or reused",
        "Services located before isolation and removal",
        "A permanent archive of the building after it's gone",
      ],
      services: ["Pre-demolition record", "Reuse inventory", "Digital archive"],
    },
  ] as Stage[],
  cta: {
    title: "Every stage starts with an accurate record.",
    body: "A short conversation about the site, its stage of life and the next decision ahead.",
  },
};

/* ------------------------------------------------------------------ */
/* Sectors                                                             */
/* ------------------------------------------------------------------ */

export type SectorPage = {
  slug: string;
  icon: IconName;
  label: string; // nav + card title
  card: string; // one-line card description
  image?: string; // hero photo for sector cards, served from /public
  meta: { title: string; description: string };
  hero: { title: string; sub: string };
  main: {
    title: string;
    body?: string;
    enables: string[];
    value: string[];
    art: ArtKind;
    image?: string;
  };
  extra: { title: string; body: string; art: ArtKind }[];
  stages: string[]; // lifecycle stage ids most relevant to this sector
  cta: { title: string; body?: string };
};

export const sectors: SectorPage[] = [
  {
    slug: "commercial-retail",
    icon: "store",
    label: "Commercial property & retail",
    card: "Office, retail and mixed-use portfolios that need consistent, defensible asset data across every centre and building.",
    image: "/sectors/commercial-retail.jpg",
    meta: {
      title: "Commercial property & retail · viabo",
      description:
        "A consistent, visual asset register across every centre and building — for owners, operators, managing agents and FM providers.",
    },
    hero: {
      title: "Every centre, every building, on the same basis.",
      sub: "Owners, operators and the FM teams working for them need to know what's installed, where it is and what state it's in — across the whole portfolio, not one site and one spreadsheet at a time.",
    },
    main: {
      title: "One record per site. One standard across all of them.",
      body: "viabo captures each property as a measurable site record and registers its assets on the same structure everywhere — so a car park in one centre can be compared with a car park in another.",
      enables: [
        "CCTV, signage, services, lighting and fit-out registered where they actually are",
        "Car parks, back-of-house and plant areas documented without repeated site visits",
        "Measurements taken from the record for upgrade scoping and contractor briefs",
        "Tenancy, common-area and activation spaces visible to leasing and operations alike",
      ],
      value: [
        "Upgrade and capex scoping from what's installed, not what's on old drawings",
        "One shared view for asset, operations, design and leasing teams",
        "Evidence for insurers, valuers and buyers when a property changes hands",
      ],
      art: "portfolio",
    },
    extra: [
      {
        title: "Upgrades that pay back — and can prove it",
        body: "Services and lighting upgrades in car parks and common areas are among the fastest returns in a portfolio. Audit from the record, plan the upgrade in context, then capture again to document the result.",
        art: "lifecycle",
      },
    ],
    stages: ["acquisition", "operations", "upgrade", "capital-planning"],
    cta: { title: "Start with a single centre.", body: "One site is enough to show the value of a consistent, portfolio-wide record." },
  },
  {
    slug: "infrastructure",
    icon: "plane",
    label: "Critical infrastructure & transport hubs",
    card: "Operational sites that can't close, where the drawings are old, incomplete or missing entirely.",
    image: "/sectors/infrastructure.jpg",
    meta: {
      title: "Critical infrastructure & transport hubs · viabo",
      description:
        "Accurate, current records of operational areas where drawings are missing or out of date — captured without disrupting operations.",
    },
    hero: {
      title: "Accurate records for places that never stop.",
      sub: "Critical infrastructure and transport hubs run around the clock, often in areas decades old whose plans were never digitised or never updated. Every upgrade, inspection and maintenance job starts with the same question: what's actually there?",
    },
    main: {
      title: "A reliable picture of complex, operational spaces",
      body: "viabo captures operational areas around live operations and delivers a measurable site record with the assets that matter registered in place — a shared base for design, maintenance and operations teams.",
      enables: [
        "Spatially accurate records of areas with missing or outdated drawings",
        "Critical assets registered and located across multiple disciplines",
        "Upgrade design and coordination from the real space",
        "Contractors briefed from the record before entering restricted areas",
      ],
      value: [
        "Less time on site in restricted, operational areas",
        "Better-coordinated upgrades across disciplines",
        "A record that keeps supporting operations after the project closes",
      ],
      art: "capture",
      image: "/sectors/infrastructure-main.jpg",
    },
    extra: [],
    stages: ["pre-construction", "operations", "upgrade"],
    cta: {
      title: "Areas without reliable drawings",
      body: "A walkthrough of a comparable capture shows what an accurate record of the space would deliver.",
    },
  },
  {
    slug: "logistics",
    icon: "warehouse",
    label: "Logistics & industrial",
    card: "Warehouses, distribution centres and workshops where layout, safety and racking change constantly.",
    image: "/sectors/logistics.jpg",
    meta: {
      title: "Logistics, warehousing & industrial · viabo",
      description:
        "A measurable site record and asset register for warehouses and industrial sites — for layout planning, safety, racking and asset management.",
    },
    hero: {
      title: "Warehouses, measurable from any desk.",
      sub: "Warehouses and distribution centres change constantly: racking moves, equipment is added, zones are reassigned. Operations, safety and facilities teams need a record that keeps up — and one they can plan the next change in.",
    },
    main: {
      title: "Plan, check and manage the whole floor",
      body: "viabo captures the warehouse, offices and workshops as a measurable record of the site, then registers racking, safety equipment, electrical and plant so operations and facilities teams can search, measure and plan from it.",
      enables: [
        "Racking, safety equipment, switchboards, EV chargers and plant registered in place",
        "Aisle widths, clearances and heights measured from the record",
        "New layouts and equipment tested against the real space before anything moves",
        "Repeat captures compared side by side — ideal for recurring inspections",
      ],
      value: [
        "Faster, better-informed layout and fit-out decisions",
        "Safety and inspection records tied to where things actually are",
        "A site record shared easily with head office, insurers and contractors",
      ],
      art: "register",
    },
    extra: [
      {
        title: "Warehouse, offices and workshop in one record",
        body: "For a recent distribution facility, viabo captured the warehouse floor, offices and service workshop as one record and registered the site's assets — giving operations, facilities and management a single place to find, measure and plan.",
        art: "capture",
      },
    ],
    stages: ["handover", "operations", "expansion"],
    cta: { title: "Relocations, reconfigurations and new sites", body: "A measurable record makes the next layout decision faster and safer." },
  },
  {
    slug: "museums",
    icon: "landmark",
    label: "Museums & cultural institutions",
    card: "Galleries, museums and collections balancing ageing buildings with changing exhibitions.",
    image: "/sectors/museums.jpg",
    meta: {
      title: "Museums & cultural institutions · viabo",
      description:
        "Support facility condition, maintenance and exhibition planning in museums and galleries with a measurable digital twin and asset register.",
    },
    hero: {
      title: "Care for the building as carefully as the collection.",
      sub: "Museums run some of the most demanding buildings anywhere: heritage fabric, strict environmental conditions, public access and exhibitions that change the space every few months. Facilities, curatorial and design teams all need the same accurate picture.",
    },
    main: {
      title: "Facilities and exhibitions, from one record",
      body: "viabo captures galleries, stores, plant and back-of-house as a measurable record and registers the building's assets — supporting facility condition and maintenance while giving exhibition teams a precise space to plan in.",
      enables: [
        "Facility condition recorded and compared over time, with visual evidence",
        "HVAC, security, lighting and building services registered where they sit",
        "Widths, heights, clearances and floor areas measured for exhibition planning",
        "Display cases, signage and structures placed in the real space to check sightlines and visitor flow",
      ],
      value: [
        "Fewer site visits and faster, more confident exhibition planning",
        "Better coordination across curatorial, design and facilities teams",
        "A reliable record for maintenance, capital works and condition reporting",
      ],
      art: "campus",
    },
    extra: [
      {
        title: "One place for every document",
        body: "Attach manuals, data sheets, drawings and condition reports to the assets and spaces they relate to, and pin annotations in 3D — so information stops getting lost between teams and years.",
        art: "register",
      },
    ],
    stages: ["operations", "upgrade", "expansion"],
    cta: {
      title: "Exhibitions and facilities reviews",
      body: "A walkthrough of a museum capture shows what a measurable record could do for the building.",
    },
  },
  {
    slug: "education",
    icon: "cap",
    label: "Education & public estates",
    card: "Campuses, schools and public buildings with decades of layered assets and tight capital budgets.",
    image: "/sectors/education.jpg",
    meta: {
      title: "Education & public estates · viabo",
      description:
        "One visual asset register across campuses, schools and public buildings — for estates, facilities and capital works teams.",
    },
    hero: {
      title: "Whole estates, one register.",
      sub: "Universities, school estates and public buildings manage thousands of assets across buildings of every age — with capital budgets that rarely grow to match.",
    },
    main: {
      title: "Every building, one picture",
      body: "An accurate record of the whole estate — teaching spaces, labs, plant and grounds — with assets registered and placed. Estates, facilities and capital works teams work from the same picture instead of three different spreadsheets.",
      enables: [
        "HVAC, equipment, lighting, accessibility features and fixtures registered in place",
        "Centralised visibility for estates, facilities and capital works teams",
        "Condition recorded at capture, with visual evidence for every asset",
        "Remote inspection of spaces before sending a contractor",
      ],
      value: [
        "Capital works planned from a current record, not an old audit",
        "Stronger evidence for safety, accessibility and funding submissions",
        "Institutional knowledge kept in the record, not in one person's head",
      ],
      art: "campus",
    },
    extra: [
      {
        title: "Evidence-based accessibility records",
        body: "Step-free routes, accessible facilities, hearing loops and signage — recorded where they are and in what state, so accessibility audits and funding applications draw on a current record rather than a walk-around.",
        art: "register",
      },
    ],
    stages: ["operations", "capital-planning", "upgrade"],
    cta: {
      title: "One building, then the estate",
      body: "A walkthrough of a single building shows what a full-estate record would look like.",
    },
  },
];

export const solutionsIndex = {
  meta: {
    title: "Solutions · viabo",
    description: "viabo by sector and across the asset lifecycle — from acquisition and design to maintenance, upgrade and demolition.",
  },
  hero: {
    title: "Solutions",
    sub: "Solutions are organised by sector and by stage of the asset lifecycle. Most projects are both — a car park upgrade in a shopping centre, a handover of a mixed-use development, a condition review of a museum.",
  },
  sectorsTitle: "By sector",
  sectorsIntro: "Tailored to how each sector owns, operates and regulates its assets.",
  sectorOrder: ["infrastructure", "commercial-retail", "logistics", "museums", "education"],
  lifecycleTitle: "Across the asset lifecycle",
  lifecycleIntro: "From acquisition to demolition, every stage starts with knowing what's there.",
};

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type NavLink = { label: string; href: string; icon?: IconName };
export type NavGroup = { heading: string; href: string; links: NavLink[] };
export type NavItem =
  | { label: string; href: string; groups?: undefined }
  | { label: string; href: string; groups: NavGroup[] };

export const nav: { primary: NavItem[]; cta: Cta } = {
  primary: [
    { label: "How it works", href: "/how-it-works" },
    {
      label: "Solutions",
      href: "/solutions",
      groups: [
        {
          heading: "By sector",
          href: "/solutions",
          links: sectors.map((s) => ({ label: s.label, href: `/solutions/${s.slug}`, icon: s.icon })),
        },
        {
          heading: "Across the lifecycle",
          href: "/solutions/lifecycle",
          links: lifecycle.stages.map((s) => ({ label: s.label, href: `/solutions/lifecycle#${s.id}`, icon: s.icon })),
        },
      ],
    },
    { label: "Partners", href: "/partners" },
    { label: "Advisory & Innovation", href: "/advisory" },
  ],
  cta: walkthrough,
};

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const home = {
  meta: {
    title: "viabo · The built environment, measured and managed",
    description:
      "Capture, registration and a live asset platform, delivered end to end. Photo-real, measurable digital twins and verified asset registers for the built environment.",
  },
  hero: {
    title: "The built environment, measured and managed.",
    sub: "Capture, registration and a live asset platform, delivered end to end.",
    primary: walkthrough,
    secondary: { label: "See how it works", href: "/how-it-works" },
  },
  challenge: {
    title: "Asset information is fragmented, outdated and hard to verify.",
    items: [
      {
        icon: "files" as IconName,
        title: "Drawings that don't match the building",
        body: "Plans for older sites are missing, paper-only or out of date, so every project starts by finding out what is really there.",
      },
      {
        icon: "folder" as IconName,
        title: "Handovers that lose information",
        body: "Manuals, warranties and as-built details are scattered across folders and inboxes, and institutional knowledge leaves with people.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Inspections that start from zero",
        body: "Each inspection, assessment, planning exercise and upgrade repeats the same site visits, and the results end up in spreadsheets that go stale.",
      },
    ],
  },
  approach: {
    title: "One accurate record of the real site, delivered through viabo.",
    items: [
      {
        title: "Capture",
        body: "The site is captured with survey-grade equipment — floors, plant rooms, car parks and grounds — with no downtime and no disruption to occupants.",
      },
      {
        title: "Register & verify",
        body: "Every in-scope asset is registered and classified in the site record, then reviewed and signed off by the client team.",
      },
      {
        title: "Manage & keep current",
        body: "Teams search, measure and plan from the live record. Recaptures on an agreed cycle keep the register current.",
      },
    ],
    link: { label: "See the full process", href: "/how-it-works" },
  },
  outcomes: {
    title: "What viabo delivers",
    items: [
      {
        icon: "scan" as IconName,
        title: "A measurable site record",
        body: "An accurate, navigable record of the site, viewable in a browser from any angle. Plant rooms checked, clearances measured and contractors briefed without a site visit.",
      },
      {
        icon: "pin" as IconName,
        title: "A verified asset register",
        body: "Assets and equipment registered, classified and placed where they actually sit — with condition, age, maintenance status, documents and ownership — reviewed before sign-off.",
      },
      {
        icon: "compare" as IconName,
        title: "A record over time",
        body: "Where the site changes, recaptures bring the record up to date — with before-and-after views giving dated, visual evidence for condition, compliance, handover and upgrades.",
      },
    ],
  },
  solutions: {
    title: "Built for owners, developers and operators",
  },
  featured: {
    eyebrow: "Featured project",
    title: "A distribution warehouse, end to end",
    body: "Warehouse floor, offices and service workshop captured as one measurable record, with the site's racking, safety equipment, electrical and plant registered in place — giving operations, facilities and management one place to find, measure and plan.",
    link: { label: "Logistics & industrial", href: "/solutions/logistics" },
  },
  why: {
    eyebrow: "Why viabo",
    title: "What sets viabo apart",
    items: [
      {
        lead: "Visual and structured, together.",
        body: "Every register entry is tied to an accurate view of where the asset sits — no row in a spreadsheet has to be trusted on its own.",
      },
      {
        lead: "End-to-end delivery.",
        body: "Consulting, planning, capture, processing, asset registration and the platform itself — one team accountable for the result.",
      },
      {
        lead: "No drawings or BIM required.",
        body: "Every project starts from the building as it is today. Ideal for older sites where the plans are missing, paper-only or simply wrong.",
      },
      {
        lead: "Verified by people.",
        body: "Nothing is final until it has been checked. Fast, without being careless.",
      },
      {
        lead: "Portable client data.",
        body: "Captures and registers belong to the client, with exports in open formats at any time.",
      },
    ],
  },
  paths: [
    {
      title: "Partners",
      body: "For consultants, integrators and FM providers: viabo captures and builds the register, and the partner keeps the client relationship.",
      link: { label: "Partner programme", href: "/partners" },
    },
    {
      title: "Advisory & Innovation",
      body: "Robotics readiness, portfolio strategy, simulation and more — where spatial intelligence can take an organisation next.",
      link: { label: "Advisory & Innovation", href: "/advisory" },
    },
  ],
  cta: {
    title: "See a site the way viabo sees it.",
    body: "A 30-minute walkthrough of a comparable site, and a conversation about what a capture would deliver.",
    cta: walkthrough,
  },
};

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

type Step = { title: string; body: string; youGet: string; art: ArtKind; image?: string };

export const howItWorks: {
  meta: { title: string; description: string };
  hero: { title: string; sub: string };
  steps: Step[];
  engagement: { title: string; body: string; items: { title: string; body: string }[] };
  fits: { title: string; body: string };
  ownership: { title: string; body: string };
  cta: { title: string; body: string; cta: Cta };
} = {
  meta: {
    title: "How it works · viabo",
    description:
      "From planning and capture to a verified, live asset register — each stage of a viabo engagement, and the capabilities of the platform.",
  },
  hero: {
    title: "From first walk to live register.",
    sub: "One team plans, captures, processes and registers the site — each stage and its deliverable are set out below.",
  },
  steps: [
    {
      title: "Plan",
      body: "Every engagement starts with the purpose of the record — an inspection, a handover, an upgrade, ongoing asset management — and agreement on the areas, asset types and recording standard.",
      youGet: "A clear scope, programme and deliverables list before anyone arrives on site.",
      art: "lifecycle",
      image: "/howitworks-plan.jpg",
    },
    {
      title: "Capture",
      body: "Our team walks the site with the appropriate equipment — floors, plant rooms, car parks, roof spaces, grounds.",
      youGet: "An accurate, measurable record of the site as it is today, viewable from any browser.",
      art: "capture",
      image: "/howitworks-capture.jpg",
    },
    {
      title: "Register & verify",
      body: "viabo's team registers every in-scope asset in the record — cameras, services, plant, racking, lighting, fixtures — with category, attributes, condition and a visual record, and attaches the documents that belong to it. The client team reviews the result and signs it off.",
      youGet: "A structured, verified asset register tied to the site record — in days, not months.",
      art: "register",
      image: "/howitworks-register.jpg",
    },
    {
      title: "Manage & keep current",
      body: "The register supports day-to-day work: search, measure, annotate and share. When the site changes, viabo recaptures and brings the register up to date — with dates compared side by side.",
      youGet: "A single, current record that asset, operations, design and finance teams share.",
      art: "handover",
      image: "/howitworks-manage.jpg",
    },
  ],
  engagement: {
    title: "How engagements are structured",
    body: "Most clients start with one site and expand once the value is clear.",
    items: [
      {
        title: "Capture project",
        body: "A one-off project to plan, capture, register and deliver the site record and asset register.",
      },
      {
        title: "Platform subscription",
        body: "Ongoing access, hosting and support for the client team, with register updates as the site changes.",
      },
      {
        title: "Recapture",
        body: "Scheduled or on-demand recaptures to keep the record current — after works, for inspections, or on an agreed cycle.",
      },
    ],
  },
  fits: {
    title: "Works with existing systems",
    body: "viabo complements, rather than replaces, established maintenance, asset and finance systems. Existing lists are imported and registers exported in open formats, giving those systems reliable, current data.",
  },
  ownership: {
    title: "Client data ownership",
    body: "Captures and registers belong to the client. Access is controlled per organisation, per site and per user; data is hosted in-region; and data can be exported or removed at any time.",
  },
  cta: {
    title: "Start with one site.",
    body: "The building with the biggest gap between what is documented and what is there is usually the best place to begin.",
    cta: walkthrough,
  },
};

/* ------------------------------------------------------------------ */
/* Partners                                                            */
/* ------------------------------------------------------------------ */

export const partners = {
  meta: {
    title: "Partners · viabo",
    description:
      "A partner model for consultants, integrators, FM providers and technology companies: viabo delivers, and the partner keeps the client relationship.",
  },
  video: { src: "/partnersviabo.mp4" },
  hero: {
    title: "Where partner expertise meets spatial asset intelligence.",
    sub: "viabo works alongside consultants, integrators and suppliers, adding a digital record of the site to the work they already do, scoped to what each client needs.",
  },
  who: {
    title: "Partner types",
    items: [
      {
        title: "Architecture, engineering & services consultants",
        body: "Design from the building as it stands today, not from drawings that stopped matching it years ago.",
      },
      {
        title: "Facility management providers",
        body: "See and plan work across every site from one place, before anyone is sent out.",
      },
      {
        title: "Design & technology integrators",
        body: "Check and measure the space as often as needed, so quotes and installs are right the first time.",
      },
      {
        title: "Technology & robotics companies",
        body: "Test routes, clearances and layouts against the real site before the first unit arrives.",
      },
      {
        title: "Manufacturers & suppliers",
        body: "Show buyers how products fit in their own site, and shorten the road to a decision.",
      },
    ],
  },
  how: {
    title: "How it works",
    items: [
      {
        title: "Identify the opportunity",
        body: "A client would benefit from a clearer picture of their site. viabo helps plan the job and supports the pitch with demos and pricing.",
      },
      {
        title: "Record the site",
        body: "viabo's team visits the site and builds the record to the scope the client sets, while partners focus on what they do best.",
      },
      {
        title: "Deliver more",
        body: "Work is faster and more accurate, and the client keeps a record of their site long after the project ends.",
      },
    ],
  },
  benefits: {
    title: "Why partner with viabo",
    items: [
      { lead: "Stand out in a pitch.", body: "Something most competitors can’t offer." },
      { lead: "Faster work, fewer site visits.", body: "Measure, check and plan from anywhere. Fewer return trips, better designs, more accurate quotes." },
      { lead: "Value beyond the project.", body: "The record keeps working for the client long after handover, with the partner’s name attached." },
      { lead: "Fits how clients already work.", body: "Clients choose what goes in. The record sits alongside existing spreadsheets and specialist systems, such as fire-testing platforms, rather than replacing them." },
    ],
  },
  cta: {
    title: "Partnership enquiries",
    body: "An introductory conversation covers the partner model, pre-sales support and how partners use viabo in proposals.",
    cta: { label: "Become a partner", href: "/contactus?topic=partner" },
  },
};

/* ------------------------------------------------------------------ */
/* Advisory & Innovation                                               */
/* Forward-looking work lives here, framed as exploration with clients. */
/* ------------------------------------------------------------------ */

export const advisory = {
  meta: {
    title: "Advisory & Innovation · viabo",
    description:
      "Where spatial intelligence can take an organisation — digital twin strategy, pilots, robotics readiness, condition programmes and simulation.",
  },
  hero: {
    title: "Advisory for spatial asset intelligence.",
    sub: "A digital twin is more than a better record. viabo works with organisations to find where spatial data changes how they plan, operate and automate, and then put it to work on a real site.",
  },
  areas: {
    title: "Advisory areas",
    items: [
      {
        title: "Digital twin strategy",
        body: "Which sites, which assets, what standard, and what it's worth. A practical plan for building and using spatial asset data across a portfolio.",
      },
      {
        title: "Robotics & automation readiness",
        body: "Robots, from cleaning fleets to industrial arms, start with understanding the space. viabo helps organisations prepare sites, spaces and layouts for deployment.",
      },
      {
        title: "Condition programmes",
        body: "Design a recapture cycle that turns side-by-side comparison into an ongoing facility-condition programme across a portfolio.",
      },
      {
        title: "Simulation & scenario planning",
        body: "Test layouts, equipment, fittings and installations in a true-to-life 3D model of your site before committing budget or disrupting operations.",
      },
      {
        title: "Data & systems integration",
        body: "Connect spatial asset data to established maintenance, asset, building and finance systems.",
      },
      {
        title: "Intelligent asset data",
        body: "Explore how AI can speed up asset identification, surface patterns in condition and prioritise what needs attention — with people approving every change.",
      },
    ],
  },
  // Plays behind the page hero — decorative, muted and looping.
  video: { src: "/viabo-robotics.mp4" },
  process: {
    title: "How engagements run",
    items: [
      {
        title: "Discover",
        body: "A short, focused engagement to understand sites, systems and goals, and identify where spatial data creates the most value.",
      },
      {
        title: "Pilot",
        body: "Prove it on one real site, with success measures agreed up front — not “it looks good.”",
      },
      {
        title: "Scale",
        body: "Roll out across the portfolio with the standards, templates and integrations the pilot established.",
      },
    ],
  },
  cta: {
    title: "Ideas worth testing",
    body: "It starts with a conversation about what you're trying to solve. If there's a case for a pilot, we scope it together: the site, the question it answers and what success looks like.",
    cta: { label: "Start a conversation", href: "/contactus?topic=advisory" },
  },
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  meta: {
    title: "Contact · viabo",
    description:
      "Book a walkthrough, discuss a partnership or start an advisory conversation. Enquiries receive a reply within one business day.",
  },
  hero: {
    title: "Contact viabo",
    sub: "Walkthroughs, partnerships and advisory enquiries. Every enquiry receives a reply within one business day.",
  },
  topics: [
    { value: "walkthrough", label: "Book a walkthrough" },
    { value: "project", label: "A specific site or project" },
    { value: "partner", label: "Partnering with viabo" },
    { value: "advisory", label: "Advisory & innovation" },
    { value: "other", label: "Something else" },
  ],
  placeholder: "e.g. basement car park and plant rooms of a new mixed-use building, approaching handover",
  submit: "Send",
  success: "Thank you. Your enquiry has been received and viabo will be in touch within one business day.",
  aside: { title: "Direct contact" },
};
