export type ProjectCategory =
  | "ai-labs"
  | "engineering"
  | "client-systems"
  | "visual-craft";

export interface ProjectItem {
  id: string;
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  category: ProjectCategory;
  categoryLabel: string;
  role: string;
  summary: string;
  challenge: string;
  architecture: string;
  impact: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  gallery?: { src: string; caption: string }[];
  status: string;
}

export interface EssayItem {
  id: string;
  number: string;
  category: string;
  title: string;
  excerpt: string;
  url: string;
  featured?: boolean;
}

export interface SocialLink {
  id: string;
  label: string;
  handle: string;
  url: string;
  platform:
    | "github"
    | "linkedin"
    | "instagram"
    | "pinterest"
    | "web"
    | "mail"
    | "whatsapp"
    | "camera"
    | "calendar";
  group: "social" | "venture" | "direct";
}

export interface DisciplineItem {
  index: string;
  title: string;
  description: string;
  tools: string[];
}

export interface EngagementTrack {
  index: string;
  audience: string;
  title: string;
  description: string;
  outcomes: string[];
  ctaLabel: string;
  contactTrack: "contract" | "role" | "referral";
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const PERSON = {
  fullName: "Abdullah Qaasim-Falade",
  shortName: "Abdullah Qaasim",
  monogram: "AQF",
  handle: "@Alqaasimee-jr2",
  visualAlias: "Temoojii",
  title: "Creative Technologist, Systems Architect & Founder of NIT7ER",
  oneLineHook:
    "Nigerian creative technologist & founder of NIT7ER — engineering custom operational systems, offline-first African EdTech, AI products, and tactile web platforms.",
  location: "Lagos, Nigeria",
  timezone: "Africa/Lagos",
  coordinates: "6.5244° N, 3.3792° E",
  email: "qaasimkids6@gmail.com",
  // WhatsApp direct link kept without printing raw phone digits in page copy
  whatsappUrl: "https://wa.me/2349019597944",
  bookingUrl: "https://nit7er.vercel.app/book",
  responseSla: "Replies within 24 hours · Lagos (WAT / GMT+1)",
  availability:
    "Open to select systems contracts, AI product builds & founding/senior engineering collaborations",
  avatarImage: "/images/avatar-aqf.webp",
  avatarAlt: "Abdullah Qaasim-Falade — Creative Technologist & Founder of NIT7ER",
  studioImage: "/images/venture-studio.webp",
  studioAlt:
    "Contemporary Lagos creative technology studio with raw board-formed concrete walls, African mahogany workbench, architectural models, and tropical fiddle-leaf fig in golden-hour light",
  portraitImage: "/images/portrait-abdullah.webp",
  portraitAlt:
    "Editorial monochrome studio portrait of Abdullah Qaasim-Falade against a warm gallery wall with botanical leaf shadow",
  portraitCaption: "FIG 01 — ABDULLAH QAASIM-FALADE",
  heroHeadlinePrefix: "Designing systems that turn",
  heroHeadlineEmphasis: "chaos into proof.",
  heroBio:
    "I'm Abdullah Qaasim-Falade — a Lagos-based creative technologist, software architect, and founder of NIT7ER. I design and ship custom operational software, offline-first classroom engines, AI-native products, and high-craft digital ateliers.",
  aboutLead:
    "I build digital systems from scratch — engineered for real-world constraints, not slide decks.",
  aboutParagraphs: [
    "Based in Lagos with roots in the Obafemi Awolowo University (Great Ife) builder community, my work lives where systems engineering, applied AI, and visual direction reinforce each other.",
    "Through NIT7ER, I architect custom operational software for businesses outgrowing fragile spreadsheets — while NIT7ER Labs builds standalone products tested against real African infrastructure realities: 100% offline smartboard engines, Gemini-powered lesson accountability, and calm cognitive tools.",
    "Outside the terminal, I direct NIT7ER Academy to train builders through simulated production sprints, publish candid engineering field notes, and study light, architecture, and pacing through photography and cinematography under Tempalette.",
  ],
  collaborations: [
    "Custom operational software & internal business infrastructure",
    "AI-native products, agentic commerce & offline-first mobile apps",
    "Founding / senior product-engineering & technical advisory roles",
    "High-craft digital ateliers, open-source tooling & technical writing",
  ],
};

// Authentic, verifiable proof anchors — zero fabricated metrics
export const PROOF_STRIP = [
  {
    value: "18+",
    label: "Shipped Products, Labs & Client Systems",
  },
  {
    value: "NIT7ER",
    label: "Founder · Studio & Talent Academy",
  },
  {
    value: "100%",
    label: "Offline Smartboard Runtime (Lang Huey)",
  },
  {
    value: "<10s",
    label: "AST Security & Test CLI (CI-Guardian)",
  },
];

// Optional drop-in array: add real client or collaborator quotes here when ready.
// The UI renders a testimonials band automatically as soon as at least 1 quote is added.
export const TESTIMONIALS: TestimonialItem[] = [];

export const ENGAGEMENT_TRACKS: EngagementTrack[] = [
  {
    index: "01 / CONTRACTS",
    audience: "For Founders & Operators",
    title: "Custom Systems & Product Builds",
    description:
      "When off-the-shelf SaaS and spreadsheets start slowing your team down, I architect and ship custom internal tools, AI workflows, and high-trust web platforms end to end.",
    outcomes: [
      "Operational dashboards, inventory & booking infrastructure",
      "Production Next.js, TypeScript, Flutter & AI pipelines",
      "Direct founder-level architecture from audit to launch",
    ],
    ctaLabel: "Discuss a System Build",
    contactTrack: "contract",
  },
  {
    index: "02 / TEAMS & ROLES",
    audience: "For AI & Product Startups",
    title: "Product Engineering & Technical Leadership",
    description:
      "For ambitious engineering teams building AI-native tools, developer infrastructure, or global web/mobile products who want a builder with both architectural rigor and visual taste.",
    outcomes: [
      "Zero-to-one product velocity with production discipline",
      "Full-stack ownership across UX craft, APIs, and AI systems",
      "Clear written thinking, documentation, and technical ownership",
    ],
    ctaLabel: "Explore a Role or Advisory",
    contactTrack: "role",
  },
  {
    index: "03 / REFERRALS",
    audience: "For Peers, Founders & Connectors",
    title: "Introduce Someone Building Something Serious",
    description:
      "Know a school owner, scaling business, or startup team struggling with messy tools or looking for a sharp product engineer? Every warm introduction receives a fast, respectful reply.",
    outcomes: [
      "24-hour response guarantee on every warm intro",
      "Direct shareable case-study URLs for instant context",
      "Zero hard sales pitches — honest technical clarity first",
    ],
    ctaLabel: "Make a Quick Introduction",
    contactTrack: "referral",
  },
];

export const REFERRAL_TEMPLATES = {
  founder: {
    label: "For a founder or business owner",
    text: "You should speak with Abdullah Qaasim-Falade — he's a Lagos-based systems architect and founder of NIT7ER. He builds custom operational software, AI tools, and offline-first products from scratch (no bloated templates). Worth a look at his work: https://nit7er.vercel.app — email: qaasimkids6@gmail.com",
  },
  techTeam: {
    label: "For an AI startup or engineering leader",
    text: "Introducing Abdullah Qaasim-Falade — a sharp full-stack creative technologist (Next.js 16, TypeScript, Flutter, Gemini/watsonx AI, AST developer tooling) who ships zero-to-one products with strong architectural rigor and design craft. GitHub: https://github.com/Alqaasimee-jr2 — email: qaasimkids6@gmail.com",
  },
};

export const CURRENTLY_BUILDING = [
  {
    name: "NIT7ER Infrastructure",
    note: "Custom ops systems for scaling firms",
    href: "https://nit7er.vercel.app",
  },
  {
    name: "Lang Huey",
    note: "100% offline French smartboard engine",
    href: "/work/lang-huey",
  },
  {
    name: "Flow 7",
    note: "Reality tracking & cognitive regulation",
    href: "/work/flow-7",
  },
  {
    name: "OAUMods",
    note: "Open-source Great Ife freshman PWA",
    href: "/work/oaumods",
  },
];

export const VENTURES = [
  {
    id: "nit7er-studio",
    index: "01 / STUDIO",
    name: "NIT7ER",
    tagline: "Custom Systems & Operational Infrastructure",
    role: "Founder & Systems Director",
    location: "Lagos, Nigeria",
    url: "https://nit7er.vercel.app",
    description:
      "A Lagos-based creative technology studio and infrastructure engineering firm. We replace disconnected spreadsheets and off-the-shelf SaaS bloat with bespoke operations control systems, logistics platforms, booking engines, and automated workflows — while incubating standalone ventures inside NIT7ER Labs.",
    highlights: [
      "Custom Operations & Inventory Architecture",
      "WhatsApp & Business Workflow Automation",
      "NIT7ER Labs: Flow 7, Clasquera & Lang Huey",
    ],
  },
  {
    id: "nit7er-academy",
    index: "02 / INSTITUTE",
    name: "NIT7ER Academy",
    tagline: "Applied Creative Technology, Cognitive Systems & Thought Leadership",
    role: "Director",
    location: "Lagos & Remote",
    url: "https://nit7er-academy.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/NIT7ER-ACADEMY",
    description:
      "The education and talent-engineering division of NIT7ER. Built around a clear thesis: theory-heavy bootcamps rarely produce commercial engineers. Students train inside simulated studio sprints covering software engineering, cognitive execution, and technical writing — with top graduates apprenticing on live client deliverables.",
    highlights: [
      "Simulated Production Studio Sprints",
      "Cognitive Execution & Technical Writing",
      "Direct Apprenticeship on Live Systems",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "lang-huey",
    slug: "lang-huey",
    index: "01",
    title: "Lang Huey",
    subtitle: "100% Offline Autonomous French Classroom Engine",
    year: "2026",
    category: "ai-labs",
    categoryLabel: "AI & Labs",
    role: "Creator & Systems Architect",
    status: "NIT7ER Labs · Production",
    featured: true,
    image: "/images/story-lang-huey.webp",
    imageAlt:
      "Editorial still life of a matte slate tablet, African mahogany geometric blocks, brass pen, and linen notebooks in warm sunlight",
    summary:
      "An autonomous, zero-connectivity French teaching engine built in Dart/Flutter for Nigerian classroom smartboards. Transforms idle 75-inch touchscreens into complete NERDC-aligned lessons operable by any staff member with zero French knowledge.",
    challenge:
      "Private schools across Lagos, Abuja, and Port Harcourt invest millions in classroom smartboards that sit dark when French teachers are unavailable — and consumer apps built on cloud dopamine break immediately in 35-student classrooms with unreliable connectivity.",
    architecture:
      "Engineered a self-contained Dart/Flutter runtime with local speech synthesis assets, deterministic curriculum kinematics aligned to Nigerian NERDC standards, and classroom-scale touch choreography requiring zero internet connection.",
    impact:
      "Born directly to solve a real staffing bottleneck at a Lagos private school — proving that purposeful offline infrastructure unlocks hardware schools already own.",
    highlights: [
      "Zero internet dependency — engineered for real Nigerian classroom infrastructure",
      "Aligned end-to-end with NERDC primary & secondary French curricula",
      "Operable on 75-inch touchboards by any staff member with zero French fluency",
    ],
    stack: ["Flutter", "Dart", "Offline Runtime", "NERDC Curriculum", "Smartboard UI"],
    liveUrl: "https://nit7er.vercel.app/blog",
  },
  {
    id: "flow-7",
    slug: "flow-7",
    index: "02",
    title: "Flow 7",
    subtitle: "Reality Tracking & Cognitive Regulation Engine",
    year: "2026",
    category: "ai-labs",
    categoryLabel: "AI & Labs",
    role: "Founder & Product Engineer",
    status: "NIT7ER Labs · Live",
    featured: true,
    image: "/images/works/flow7-dash.webp",
    imageAlt: "Flow 7 live mobile interface showing daily tracked time, weekly focus chart, and session log",
    gallery: [
      { src: "/images/works/flow7-dash.webp", caption: "Flow 7 Mobile Dashboard — Daily & Weekly Reality Awareness" },
      { src: "/images/works/flow7.webp", caption: "Flow 7 Onboarding — See Where Your Time Goes" },
    ],
    summary:
      "A mobile-first reality tracking and cognitive regulation engine for young to mid-life adults. Replaces aspirational to-do guilt with factual logging of energy, focus, and daily actions across core life areas.",
    challenge:
      "Most productivity trackers act like shame factories built on optimistic forecasting, while wellness apps stop at surface-level affirmations. People needed a grounded mirror of how their hours and energy actually unfold.",
    architecture:
      "Designed a low-friction logging loop paired with calm daily and weekly energy telemetry, stripping away streak anxiety in favor of honest behavioral reflection and clear pattern visualization.",
    impact:
      "Flagship standalone product inside NIT7ER Labs and integrated as an interactive cognitive simulator inside NIT7ER Academy.",
    highlights: [
      "Replaces aspirational forecasting with factual daily and weekly reality logs",
      "Designed around cognitive regulation rather than punitive streak pressure",
      "Integrated into NIT7ER Academy as a live execution simulator",
    ],
    stack: ["HTML5", "CSS Architecture", "JavaScript", "Behavioral UX", "Vercel"],
    liveUrl: "https://flow7-two.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Flow7-Landing-Page",
  },
  {
    id: "araxie",
    slug: "araxie",
    index: "03",
    title: "Araxie",
    subtitle: "Agentic Commerce Marketplace for Student Builders",
    year: "2026",
    category: "engineering",
    categoryLabel: "Engineering & OSS",
    role: "Lead Full-Stack Engineer",
    status: "PayPal AI Hackathon · Live",
    featured: true,
    image: "/images/works/araxie.webp",
    imageAlt: "Araxie production landing hero — Where university builders trade peer software",
    gallery: [
      { src: "/images/works/araxie.webp", caption: "Araxie Production Landing — Student Digital Economy" },
      { src: "/images/works/araxie-market.webp", caption: "Campus Software Marketplace Storefront" },
      { src: "/images/works/araxie-paypal.webp", caption: "Agentic Commerce & PayPal Orders v2 Checkout" },
    ],
    summary:
      "“Whop for Students” — an AI-driven digital marketplace where campus developers publish micro-software, Chrome extensions, and study workspaces with intelligent multi-item bundling, PayPal Orders v2 checkout, and automated peer-to-peer payouts.",
    challenge:
      "Student engineers build extraordinarily useful campus tools every semester, yet have no cohesive distribution or payment rail — leaving buyers digging through fragmented group chats.",
    architecture:
      "Built on Next.js 16 App Router and TypeScript 5 with an agentic discovery and bundle-composition layer, verified PayPal Orders v2 server settlement, automated creator payouts, and 14 Vitest integration tests.",
    impact:
      "Shipped live to production for the PayPal AI Hackathon as a full end-to-end blueprint for the campus digital economy.",
    highlights: [
      "Agentic multi-item bundling tailored to student courses and workflows",
      "Verified PayPal Orders v2 checkout and automated P2P creator payout flows",
      "Backed by 14 passing Vitest integration tests on Next.js 16 + TypeScript 5",
    ],
    stack: ["Next.js 16", "TypeScript", "PayPal Orders v2", "Agentic AI", "Vitest"],
    liveUrl: "https://araxie.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/araxie",
  },
  {
    id: "oaumods",
    slug: "oaumods",
    index: "04",
    title: "OAUMods",
    subtitle: "The Great Ife Freshman Companion (Open-Source PWA)",
    year: "2026",
    category: "engineering",
    categoryLabel: "Engineering & OSS",
    role: "Creator & Maintainer",
    status: "Open Source · MIT · Live",
    featured: true,
    image: "/images/works/oaumods.webp",
    imageAlt: "OAUMods — Great Ife Freshman Companion & Campus Hub banner",
    gallery: [
      { src: "/images/works/oaumods.webp", caption: "OAUMods — Great Ife Freshman Companion & Campus Hub" },
      { src: "/images/works/oaumods-map.webp", caption: "Interactive OAU Campus Satellite Map & Landmarks" },
    ],
    summary:
      "An open-source, mobile-first, offline-ready campus survival guide and navigation hub built for incoming Obafemi Awolowo University (Great Ife) freshmen — unifying landmarks, bed-space balloting, clearance checklists, transit fares, and verified academic guides.",
    challenge:
      "Thousands of incoming OAU students face fragmented WhatsApp broadcasts, conflicting clearance instructions, scam-prone accommodation advice, and an expansive campus labyrinth.",
    architecture:
      "Engineered as an ultra-fast TypeScript progressive web app optimized for low-bandwidth mobile devices, structured data lookup across halls, faculties, and shuttle routes, and community-auditable open-source content.",
    impact:
      "100% non-profit civic infrastructure serving the Obafemi Awolowo University student community in Ile-Ife.",
    highlights: [
      "100% non-profit, MIT-licensed civic infrastructure for Great Ife students",
      "Offline-ready PWA architecture built for mobile campus bandwidth realities",
      "Replaces 50+ fragmented WhatsApp groups with verified clearance & transit guides",
    ],
    stack: ["TypeScript", "PWA", "Offline-First", "Mobile Web", "Open Source"],
    liveUrl: "https://oaumods.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/OAUMods",
  },
  {
    id: "clasquera",
    slug: "clasquera",
    index: "05",
    title: "Clasquera",
    subtitle: "AI Lesson Accountability System for Private Schools",
    year: "2026",
    category: "ai-labs",
    categoryLabel: "AI & Labs",
    role: "Founder & Full-Stack Architect",
    status: "NIT7ER Labs · Live",
    image: "/images/case-edtech.webp",
    imageAlt: "Sunlit tablet, African mahogany blocks, and brass pen representing Clasquera lesson accountability",
    summary:
      "Moves private school oversight from hope to proof: a Flutter teacher app records classroom sessions, Firebase Functions transcribe and evaluate lesson coverage via Gemini Pro against the syllabus, and a Next.js admin dashboard surfaces real-time mastery scores.",
    challenge:
      "Proprietors running 20+ classrooms simultaneously cannot be physically present in every lesson to verify curriculum adherence and instructional quality.",
    architecture:
      "Flutter mobile capture client + Firebase Cloud Functions audio pipeline + Gemini Pro semantic syllabus scoring + Next.js 16 executive dashboard with WhatsApp pilot onboarding.",
    impact:
      "Delivers per-class coverage scores (On Plan / Partial / Off Plan) so administrators intervene early with objective evidence.",
    highlights: [
      "End-to-end audio capture, transcription, and Gemini Pro syllabus evaluation",
      "Real-time On Plan / Partial / Off Plan coverage dashboard for proprietors",
      "Built across Flutter, Firebase Functions, and Next.js 16",
    ],
    stack: ["Flutter", "Firebase Functions", "Gemini Pro", "Next.js 16", "TypeScript"],
    liveUrl: "https://clasquera.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Clasquera-Landing-page",
  },
  {
    id: "ci-guardian",
    slug: "ci-guardian",
    index: "06",
    title: "CI-Guardian",
    subtitle: "Sub-10s Autonomous Pre-Flight Security & Quality Gate",
    year: "2026",
    category: "engineering",
    categoryLabel: "Engineering & OSS",
    role: "Author & Maintainer",
    status: "Open Source · CLI & GitHub Action",
    image: "/images/case-commerce.webp",
    imageAlt: "Machined charcoal aluminum block, prism, and copper trace representing CI-Guardian AST security gate",
    summary:
      "Zero-configuration local CLI (npx ci-guardian) and GitHub Action chaining syntax-aware AST security scanning (SARIF 2.1.0 compliant), universal test runner auto-discovery, and automated in-place PR documentation in under 10 seconds.",
    challenge:
      "Teams waste CI minutes and miss subtle security regressions because static scanners, test suites, and PR summaries live in slow, disconnected pipelines.",
    architecture:
      "Node.js CLI engine with automatic repository topology detection, AST static analysis outputting SARIF 2.1.0 reports, native test orchestration, and deterministic pre-push verification.",
    impact:
      "Enables solo builders and engineering teams to enforce enterprise pre-flight hygiene with a single command.",
    highlights: [
      "Zero-config execution via npx ci-guardian in under 10 seconds",
      "Syntax-aware AST security scanning outputting SARIF 2.1.0 compliant reports",
      "Auto-discovers native test commands and generates PR documentation",
    ],
    stack: ["Node.js", "AST Analysis", "SARIF 2.1.0", "GitHub Actions", "CLI"],
    repoUrl: "https://github.com/Alqaasimee-jr2/CI-Guardian",
  },
  {
    id: "schora-ai",
    slug: "schora-ai",
    index: "07",
    title: "Schora AI",
    subtitle: "AI School Operations & Teaching Assistant (IBM watsonx)",
    year: "2026",
    category: "ai-labs",
    categoryLabel: "AI & Labs",
    role: "AI Systems Developer",
    status: "Prototype · Open Source",
    image: "/images/works/schora.webp",
    imageAlt: "Schora AI Teaching Assistant powered by IBM watsonx.ai",
    gallery: [
      { src: "/images/works/schora.webp", caption: "IBM watsonx.ai Prompt & Briefing Architecture" },
      { src: "/images/works/schora-2.webp", caption: "Schora AI Full-Stack System Implementation" },
    ],
    summary:
      "AI-powered school operations platform for African private schools delivering personalized teacher feedback and structured weekly administrative briefings powered by IBM watsonx.ai.",
    challenge:
      "School leaders drown in raw operational notes without structured weekly synthesis or tailored coaching insights for faculty.",
    architecture:
      "TypeScript + React + Node.js service orchestrating IBM watsonx.ai foundation models to synthesize classroom signals into actionable weekly briefings.",
    impact:
      "Demonstrated practical enterprise AI adoption tailored to African K-12 operational workflows.",
    highlights: [
      "Powered by IBM watsonx.ai foundation models",
      "Automates weekly leadership briefings and teacher coaching feedback",
      "Clean full-stack TypeScript, React, and Node.js architecture",
    ],
    stack: ["TypeScript", "React", "Node.js", "IBM watsonx.ai"],
    repoUrl: "https://github.com/Alqaasimee-jr2/schora-ai-assistant",
  },
  {
    id: "nit7er-platform",
    slug: "nit7er-platform",
    index: "08",
    title: "NIT7ER Studio Platform",
    subtitle: "Custom Operations Infrastructure Agency & Editorial Hub",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Founder & Lead Architect",
    status: "Live Production",
    image: "/images/works/nit7er-studio.webp",
    imageAlt: "NIT7ER Studio visual identity backdrop",
    gallery: [
      { src: "/images/works/nit7er-studio.webp", caption: "NIT7ER Visual Identity & Brand Atmosphere" },
      { src: "/images/works/nit7er-academy.webp", caption: "NIT7ER Gold Emblem Header System" },
    ],
    summary:
      "The digital headquarters, engineering manifesto, strategy-call intake, and technical essay publication for NIT7ER — showcasing internal ops systems, logistics dashboards, and Labs ventures.",
    challenge:
      "Position NIT7ER sharply apart from generic web agencies by leading with systems thinking, operational ROI, and real proof from Labs.",
    architecture:
      "Custom editorial interface, structured case-study architecture, interactive booking intake, and long-form engineering publication.",
    impact:
      "Serves as the primary inbound engine for Lagos and international operational software engagements.",
    highlights: [
      "Positions operations infrastructure sharply against template web agencies",
      "Integrates Labs showcase, strategy-call booking, and engineering blog",
      "Direct editorial voice grounded in Lagos business realities",
    ],
    stack: ["Next.js", "TypeScript", "Editorial Systems", "Automation"],
    liveUrl: "https://nit7er.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Agency-NIT7ER",
  },
  {
    id: "nit7er-academy",
    slug: "nit7er-academy",
    index: "09",
    title: "NIT7ER Academy",
    subtitle: "High-Performance Creative Tech & Cognitive Systems Institute",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Director & Architect",
    status: "Live Production",
    image: "/images/works/nit7er-academy.webp",
    imageAlt: "NIT7ER Academy official gold emblem header",
    gallery: [
      { src: "/images/works/nit7er-academy.webp", caption: "NIT7ER Academy Official Emblem Header" },
      { src: "/images/venture-studio.webp", caption: "Simulated Production Studio Environment" },
    ],
    summary:
      "Public admissions platform, curriculum catalog, Studio Labs portal, and interactive Flow 7 simulator for NIT7ER's talent-engineering institute.",
    challenge:
      "Communicate an uncompromising, production-first alternative to conventional coding bootcamps with clarity and authority.",
    architecture:
      "Next.js 16 + React 19 + TypeScript application featuring modular program pages, admissions intake, and interactive lab modules.",
    impact:
      "Establishes the talent pipeline bridging self-driven builders into commercial software delivery.",
    highlights: [
      "Program catalog, admissions intake, Studio Labs, and Flow 7 simulator",
      "Built with Next.js 16, React 19, and TypeScript",
      "Connects curriculum directly to live studio apprenticeships",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Admissions Engine"],
    liveUrl: "https://nit7er-academy.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/NIT7ER-ACADEMY",
  },
  {
    id: "royal-grain",
    slug: "royal-grain",
    index: "10",
    title: "Royal Grain Interiors",
    subtitle: "Luxury Furniture & Interiors Digital Atelier (Ibadan)",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Design Engineer",
    status: "Client Delivery · Live",
    image: "/images/works/royal-grain.webp",
    imageAlt: "Royal Grain Interiors luxury living space crafted in African Mahogany",
    gallery: [
      { src: "/images/works/royal-grain.webp", caption: "Royal Grain — Contemporary West African Living Space" },
      { src: "/images/works/royal-grain-craft.webp", caption: "Master Woodworker Hand-Planing Mahogany Joinery" },
    ],
    summary:
      "Heritage-driven digital showroom and consultation engine for Royal Grain in Mokola, Ibadan — celebrating handcrafted pieces in African Mahogany, Iroko, Zuma Granite, and full-grain leather.",
    challenge:
      "Elevate a master West African furniture maker into a contemporary luxury atelier whose digital presence feels as tactile as the timber and stone.",
    architecture:
      "Next.js 16 + React 19 + TypeScript with curated showroom collections, craft storytelling pages, and private consultation booking.",
    impact:
      "Transformed brand positioning from local workshop to high-ticket architectural interiors studio.",
    highlights: [
      "Tactile digital showroom celebrating African Mahogany, Iroko & Zuma Granite",
      "Dedicated portfolio, showroom, craft narrative, and consultation routes",
      "Engineered on Next.js 16 + React 19 for crisp editorial pacing",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Brand Atelier"],
    liveUrl: "https://royal-grain.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/royal-grain",
  },
  {
    id: "barryham-intl",
    slug: "barryham-intl",
    index: "11",
    title: "Barryham International",
    subtitle: "Enterprise Sanitary, Plumbing & Electrical Catalogue (Lagos)",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Full-Stack Developer",
    status: "Client Delivery · Live",
    image: "/images/works/barryham.webp",
    imageAlt: "Barryham International luxury sanitary ware and architectural fittings",
    gallery: [
      { src: "/images/works/barryham.webp", caption: "Barryham International — European Sanitary & Plumbing Showcase" },
      { src: "/images/works/barryham-foyer.webp", caption: "Commercial Architectural Interior Specification" },
    ],
    summary:
      "Corporate platform, structured product catalogue, and RFQ quote engine for a Lagos distributor of Grohe, Geberit, Villeroy & Boch, and Ideal Standard serving clients like CBN, Polaris Bank, and LASU.",
    challenge:
      "Institutional contractors and procurement teams needed fast verification of genuine European brands, completed commercial projects, and direct quote requests.",
    architecture:
      "Next.js 14 + TypeScript catalogue architecture with brand directories, project credentials, and streamlined quote capture.",
    impact:
      "Digitized commercial specification discovery for 30+ major Nigerian construction projects.",
    highlights: [
      "Structured B2B product catalogue and direct Request-a-Quote workflow",
      "Highlights institutional deployments across CBN, Polaris Bank, and LASU",
      "Built for fast mobile and desktop procurement verification",
    ],
    stack: ["Next.js 14", "React 18", "TypeScript", "RFQ System"],
    liveUrl: "https://barryham-intl.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/BARRYHAM-INTL",
  },
  {
    id: "kinetic-logistics",
    slug: "kinetic-logistics",
    index: "12",
    title: "Kinetic Logistics",
    subtitle: "Supply Chain & Last-Mile Operations Platform (Ikeja, Lagos)",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Systems Engineer",
    status: "Live Production",
    image: "/images/case-systems.webp",
    imageAlt: "Precision modular slate system representing Kinetic Logistics supply chain operations",
    summary:
      "Enterprise-grade logistics and fleet visibility platform engineered for Ikeja, Lagos supply chain operations — addressing global freight, last-mile routing, and operational precision.",
    challenge:
      "Logistics in Lagos demands real-time operational clarity across traffic, fuel accountability, and dispatch workflows.",
    architecture:
      "Next.js 15 + TypeScript architectural dark interface with structured service telemetry and dispatch inquiry workflows.",
    impact:
      "Translated complex freight operations into a high-trust enterprise digital interface.",
    highlights: [
      "Bespoke architectural dark design system with centralized HSL tokens",
      "Structured around Ikeja/Lagos last-mile and global freight workflows",
      "Engineered on Next.js 15, TypeScript, and Framer Motion",
    ],
    stack: ["Next.js 15", "TypeScript", "Framer Motion", "Logistics UI"],
    liveUrl: "https://last-mile-chi.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/web",
  },
  {
    id: "crestview-health-hub",
    slug: "crestview-health-hub",
    index: "13",
    title: "Crestview Health Hub",
    subtitle: "Clinical Diagnostic Platform (Agege, Lagos)",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Frontend Architect",
    status: "Live Production",
    image: "/images/hero-monolith.webp",
    imageAlt: "Calm museum gallery travertine and botanical relief representing Crestview Diagnostic Center",
    summary:
      "Clinical precision meets human clarity: digital diagnostic portal engineered for Crestview Diagnostic Center in Agege, giving patients and clinicians calm, high-confidence access to services and scheduling.",
    challenge:
      "Medical websites frequently overwhelm anxious patients with cluttered copy and slow mobile flows.",
    architecture:
      "Next.js 16 + React 19 + TypeScript with crisp diagnostic service taxonomy and accessible mobile appointment paths.",
    impact:
      "Raised patient trust and mobile booking clarity for a premier Lagos diagnostic center.",
    highlights: [
      "Calm, high-trust information hierarchy built for anxious patients",
      "Clear diagnostic taxonomy and mobile-first booking pathways",
      "Powered by Next.js 16, React 19, and TypeScript",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Healthcare UX"],
    liveUrl: "https://crestview-umber.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Health-Hub",
  },
  {
    id: "pure-essence-school",
    slug: "pure-essence-school",
    index: "14",
    title: "Pure Essence School",
    subtitle: "Digital Sanctuary for Holistic Education (Ogun State)",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Creative Technologist",
    status: "Live Production",
    image: "/images/works/pure-essence.webp",
    imageAlt: "Pure Essence School illuminated maroon and gold Arabic calligraphy banner",
    gallery: [
      { src: "/images/works/pure-essence.webp", caption: "Pure Essence School — Maroon & Gold Heritage Identity" },
    ],
    summary:
      "Official web platform for Pure Essence School in Ibogun, Ogun State — blending traditional Islamic geometric harmony and maroon-gold warmth with responsive modern web engineering.",
    challenge:
      "Honor deep cultural and spiritual heritage without sacrificing modern accessibility, speed, or admissions clarity.",
    architecture:
      "Next.js 14 + TypeScript + Framer Motion featuring bespoke organic section framing and admissions guidance.",
    impact:
      "Gave parents a warm, credible digital window into the school's mission of purity, piety, and purpose.",
    highlights: [
      "Culturally grounded deep maroon and gold visual language",
      "Smooth responsive motion built with Next.js 14 and Framer Motion",
      "Clear admissions and community communication architecture",
    ],
    stack: ["Next.js 14", "TypeScript", "Framer Motion", "Editorial UI"],
    liveUrl: "https://pure-essence-school.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/pure-essence-school",
  },
  {
    id: "zenith-suites-lekki",
    slug: "zenith-suites-lekki",
    index: "15",
    title: "The Zenith Suites Lekki",
    subtitle: "Luxury Hospitality & WhatsApp Booking Engine",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Design & Automation Builder",
    status: "Live Production",
    image: "/images/works/zenith-suites.webp",
    imageAlt: "The Zenith Suites Lekki twilight rooftop infinity pool",
    gallery: [
      { src: "/images/works/zenith-suites.webp", caption: "The Zenith Suites Lekki — Rooftop Pool & Skyline" },
      { src: "/images/works/zenith-bedroom.webp", caption: "Luxury Black & Gold Master Suite" },
    ],
    summary:
      "High-exclusivity hospitality experience for Lekki, Lagos featuring black-and-gold editorial framing, bespoke interior visuals, and automated WhatsApp booking capture.",
    challenge:
      "Convert discerning short-let guests directly via mobile without losing leads to third-party OTA commissions.",
    architecture:
      "Responsive JavaScript web experience paired with pre-structured WhatsApp lead routing and direct booking incentives.",
    impact:
      "Streamlined high-intent guest inquiries straight into the concierge WhatsApp channel.",
    highlights: [
      "Tailored to Lekki luxury expectations: uninterrupted power, Starlink WiFi & discretion",
      "Automated WhatsApp lead-capture form with direct reservation framing",
      "Fast mobile-first conversion layout",
    ],
    stack: ["JavaScript", "WhatsApp Automation", "Hospitality UX", "SEO"],
    liveUrl: "https://housing-tan.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Housing",
  },
  {
    id: "saveur-restaurante",
    slug: "saveur-restaurante",
    index: "16",
    title: "Saveur (Restaurante)",
    subtitle: "Nigerian Soul · Continental Craft Dining App",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Frontend Engineer",
    status: "Live Production",
    image: "/images/hero-atelier.webp",
    imageAlt: "Warm travertine, anodized dial, and bronze still life representing Saveur dining craft",
    summary:
      "Full-featured dining web application pairing Nigerian & Continental menu curation, live cart management, light/dark modes, and WhatsApp order fulfillment.",
    challenge:
      "Demonstrate how modern hospitality brands can own their digital storefront and direct ordering flow with zero friction.",
    architecture:
      "React 19 + Vite + React Router 7 + Vanilla CSS with responsive menu filtering and direct WhatsApp checkout formatting.",
    impact:
      "Became a reference storefront architecture for NIT7ER's restaurant systems practice.",
    highlights: [
      "Categorized Nigerian & Continental menu with interactive cart state",
      "Seamless light/dark theme toggle and WhatsApp order dispatch",
      "Built on React 19, Vite, and Vanilla CSS",
    ],
    stack: ["React 19", "Vite", "Vanilla CSS", "WhatsApp Ordering"],
    liveUrl: "https://restaurante-rose-gamma.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Restaurante",
  },
  {
    id: "tempalette-photography",
    slug: "tempalette-photography",
    index: "17",
    title: "Tempalette & Temoojii",
    subtitle: "Photography, Cinematography & Visual Storytelling",
    year: "Ongoing",
    category: "visual-craft",
    categoryLabel: "Visual & Craft",
    role: "Photographer & Visual Director",
    status: "Active Practice",
    image: "/images/works/g3neralola.webp",
    imageAlt: "Expressive Nigerian editorial portrait photography from G3NERALOLA & Tempalette",
    gallery: [
      { src: "/images/works/g3neralola.webp", caption: "G3NERALOLA — Expressive Visual Storytelling & Portrait" },
      { src: "/images/visual-lagos.webp", caption: "Architectural Light & Shadow Monochrome Study" },
    ],
    summary:
      "My personal visual practice spanning architectural photography, portraits, visual framing, and cinematography — training the eye for light, contrast, and composition that shapes every interface I build.",
    challenge:
      "Keep visual intuition sharp outside the code editor by studying real light, geometry, and human emotion through a lens.",
    architecture:
      "Curated visual galleries across Tempalette and Pinterest (@Temoojii), complemented by client storytelling builds like G3NERALOLA.",
    impact:
      "Directly informs the restraint, rhythm, and editorial balance across NIT7ER's digital products.",
    highlights: [
      "Architectural geometry, portrait framing, and visual color discipline",
      "Curated public archives on Tempalette and Pinterest (@Temoojii)",
      "Companion client build: G3NERALOLA monochrome photography portfolio",
    ],
    stack: ["Photography", "Cinematography", "Art Direction", "Color Grading"],
    liveUrl: "https://temoojii.wixsite.com/tempalette",
    repoUrl: "https://github.com/Alqaasimee-jr2/g3neralola-visual-storytelling",
  },
  {
    id: "self-discipline-guide",
    slug: "self-discipline-guide",
    index: "18",
    title: "Guide to Self-Discipline & Spirituality",
    subtitle: "Digital Monograph on Focus, Inner Order & Craft",
    year: "2026",
    category: "visual-craft",
    categoryLabel: "Visual & Craft",
    role: "Author & Developer",
    status: "Published Web Guide",
    image: "/images/works/discipline-guide.webp",
    imageAlt: "A Guide to Self-Discipline & Spirituality warm library reading vault visual",
    gallery: [
      { src: "/images/works/discipline-guide.webp", caption: "Digital Reading Vault — Self-Discipline & Spirituality" },
    ],
    summary:
      "A calm, contemplative web publication examining personal discipline, intentional habits, and spiritual grounding — complementing the cognitive philosophy behind Flow 7 and NIT7ER Academy.",
    challenge:
      "Create a distraction-free reading artifact on the web that invites slow reflection rather than rapid scrolling.",
    architecture:
      "Minimalist typographic web book designed for sustained reading clarity on desktop and mobile.",
    impact:
      "Connects personal philosophy and inner execution with outward technical craft.",
    highlights: [
      "Distraction-free editorial reading environment on the web",
      "Philosophical companion to Flow 7 and NIT7ER Academy",
      "Built for deliberate, contemplative reading",
    ],
    stack: ["Next.js", "Python", "Editorial Typography", "Publishing"],
    liveUrl: "https://a-guide-to-self-discipline-and-spir.vercel.app",
    repoUrl:
      "https://github.com/Alqaasimee-jr2/A-Guide-to-Self-Discipline-and-Spirituality.",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: ProjectItem;
  next: ProjectItem;
} {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const safeIdx = idx === -1 ? 0 : idx;
  const prev = PROJECTS[(safeIdx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(safeIdx + 1) % PROJECTS.length];
  return { prev, next };
}

export const ESSAYS: EssayItem[] = [
  {
    id: "essay-lang-huey-origin",
    number: "01",
    category: "Labs Story",
    title: "My Mother Needed a French Teacher. So I Built One.",
    excerpt:
      "Private schools in Lagos spend millions on smartboards, only to watch them sit dark while French timetables collapse. When virtual classes failed my mother's school, I stopped looking for teachers and started writing code.",
    url: "https://nit7er.vercel.app/blog",
    featured: true,
  },
  {
    id: "essay-flow7-mental-health",
    number: "02",
    category: "Cognitive Systems",
    title:
      "Flow 7: Why We're Turning Our Performance Tracker Into a Mental Health Tool",
    excerpt:
      "Most mental health apps offer breathing bubbles and scented affirmations. Most productivity apps are shame factories. Here is why we pivoted Flow 7 into a factual cognitive regulation engine.",
    url: "https://nit7er.vercel.app/blog",
    featured: true,
  },
  {
    id: "essay-offline-engineering",
    number: "03",
    category: "Engineering Autopsy",
    title: "Why We Engineered Lang Huey to Run 100% Offline (And How It Works)",
    excerpt:
      "If your software needs an internet connection to teach a child to count in French, you haven't built classroom infrastructure — you've built an excuse.",
    url: "https://nit7er.vercel.app/blog",
    featured: true,
  },
  {
    id: "essay-idle-smartboards",
    number: "04",
    category: "African EdTech",
    title: "The Millions in Idle Smartboards Sitting in Nigerian Classrooms",
    excerpt:
      "Schools in Lagos, Abuja, and Port Harcourt spend millions on 75-inch touchscreens only to use them as glorified whiteboards. The missing link was never hardware — it was purposeful software.",
    url: "https://nit7er.vercel.app/blog",
  },
  {
    id: "essay-clasquera-proof",
    number: "05",
    category: "AI Operations",
    title: "Clasquera: Moving from 'Hope' to 'Proof' in Schools",
    excerpt:
      "How can a school owner know what is happening across 20 classrooms at once? Designing an AI audio-accountability system that respects teachers while giving leadership real visibility.",
    url: "https://nit7er.vercel.app/blog",
  },
  {
    id: "essay-lagos-logistics",
    number: "06",
    category: "Systems Case Study",
    title: "Building Logistics Systems: The Lagos Factor",
    excerpt:
      "In Lagos, logistics isn't just about moving packages — it is about navigating traffic reality, tracking fuel leakage, and designing interfaces built for operational honesty.",
    url: "https://nit7er.vercel.app/blog",
  },
  {
    id: "essay-custom-vs-saas",
    number: "07",
    category: "Infrastructure Economics",
    title: "Why 'Custom' Is Actually Cheaper Than SaaS (The $10k Difference)",
    excerpt:
      "Off-the-shelf subscriptions feel cheap on day one, until five disconnected tools tax your team's clarity every single week.",
    url: "https://nit7er.vercel.app/blog",
  },
];

export const DISCIPLINES: DisciplineItem[] = [
  {
    index: "01",
    title: "Custom Operational Infrastructure",
    description:
      "End-to-end internal tools, operations control rooms, inventory architectures, and logistics platforms replacing fragile spreadsheets.",
    tools: ["Next.js 16", "TypeScript", "Node.js", "PostgreSQL", "Firebase"],
  },
  {
    index: "02",
    title: "Applied AI & Agentic Systems",
    description:
      "Audio transcription & lesson scoring pipelines, agentic commerce flows, and domain-specific AI assistants built for measurable utility.",
    tools: ["Gemini Pro", "IBM watsonx.ai", "PayPal Orders v2", "Agentic Flows"],
  },
  {
    index: "03",
    title: "Offline-First & Mobile Engineering",
    description:
      "Cross-platform Flutter apps and resilient PWAs engineered for real African connectivity, classroom smartboards, and everyday campus use.",
    tools: ["Flutter", "Dart", "PWA", "Local Persistence", "Mobile-First UX"],
  },
  {
    index: "04",
    title: "Developer Tooling & Automation",
    description:
      "Sub-10s AST security pre-flight gates, GitHub Actions orchestration, and WhatsApp business automation workflows that eliminate manual drudgery.",
    tools: ["CLI Architecture", "AST / SARIF 2.1.0", "GitHub Actions", "WhatsApp API"],
  },
  {
    index: "05",
    title: "Digital Ateliers & Web Craft",
    description:
      "Editorial brand websites, luxury showrooms, and high-converting digital storefronts designed to be felt as much as read.",
    tools: ["React 19", "Vanilla CSS", "Motion Choreography", "SEO & Performance"],
  },
  {
    index: "06",
    title: "Photography, Cinema & Essays",
    description:
      "Visual storytelling through still photography and cinematography (Tempalette / Temoojii), paired with long-form engineering and product writing.",
    tools: ["Photography", "Cinematography", "Art Direction", "Technical Writing"],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    handle: "Alqaasimee-jr2",
    url: "https://github.com/Alqaasimee-jr2",
    platform: "github",
    group: "social",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "in/abdullahqaasimf001",
    url: "https://linkedin.com/in/abdullahqaasimf001",
    platform: "linkedin",
    group: "social",
  },
  {
    id: "instagram-personal",
    label: "Instagram",
    handle: "@abdullah.qaasim",
    url: "https://instagram.com/abdullah.qaasim",
    platform: "instagram",
    group: "social",
  },
  {
    id: "instagram-studio",
    label: "NIT7ER on Instagram",
    handle: "@nit7er",
    url: "https://instagram.com/nit7er",
    platform: "instagram",
    group: "social",
  },
  {
    id: "pinterest",
    label: "Pinterest",
    handle: "@Temoojii",
    url: "https://www.pinterest.com/Temoojii/",
    platform: "pinterest",
    group: "social",
  },
  // Drop-in slot for X / Twitter when ready:
  // { id: "twitter", label: "X / Twitter", handle: "@yourhandle", url: "https://x.com/yourhandle", platform: "web", group: "social" },
  {
    id: "tempalette",
    label: "Tempalette Photography",
    handle: "temoojii.wixsite.com",
    url: "https://temoojii.wixsite.com/tempalette",
    platform: "camera",
    group: "venture",
  },
  {
    id: "nit7er",
    label: "NIT7ER Studio",
    handle: "nit7er.vercel.app",
    url: "https://nit7er.vercel.app",
    platform: "web",
    group: "venture",
  },
  {
    id: "nit7er-academy",
    label: "NIT7ER Academy",
    handle: "nit7er-academy.vercel.app",
    url: "https://nit7er-academy.vercel.app",
    platform: "web",
    group: "venture",
  },
  {
    id: "booking",
    label: "Book a 30-Min Strategy Call",
    handle: "nit7er.vercel.app/book",
    url: "https://nit7er.vercel.app/book",
    platform: "calendar",
    group: "direct",
  },
  {
    id: "email",
    label: "Email",
    handle: "qaasimkids6@gmail.com",
    url: "mailto:qaasimkids6@gmail.com",
    platform: "mail",
    group: "direct",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "Direct message",
    url: "https://wa.me/2349019597944",
    platform: "whatsapp",
    group: "direct",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Find the Real Bottleneck",
    body: "Before writing a single line of code, I audit the spreadsheets, human friction, connectivity realities, and silent failure points slowing the work down.",
  },
  {
    step: "02",
    title: "Architect from First Principles",
    body: "No forced templates. I design the data model, interaction rhythm, and visual hierarchy specifically around how real users operate.",
  },
  {
    step: "03",
    title: "Ship Proof, Not Prototypes",
    body: "Clean, fast, maintainable software built for production from day one — documented, tested, and crafted to endure as you scale.",
  },
];
