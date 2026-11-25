export type ProjectCategory =
  | "ai-labs"
  | "engineering"
  | "client-systems"
  | "visual-craft";

export interface ProjectItem {
  id: string;
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
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  status: string;
}

export interface EssayItem {
  id: string;
  number: string;
  category: string;
  title: string;
  excerpt: string;
  url: string;
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
    | "camera";
  group: "social" | "venture" | "direct";
}

export interface DisciplineItem {
  index: string;
  title: string;
  description: string;
  tools: string[];
}

export const PERSON = {
  fullName: "Abdullah Qaasim-Falade",
  shortName: "Abdullah Qaasim",
  monogram: "AQF",
  handle: "@Alqaasimee-jr2",
  visualAlias: "Temoojii",
  title: "Creative Technologist, Systems Architect & Founder of NIT7ER",
  location: "Lagos, Nigeria",
  timezone: "Africa/Lagos",
  coordinates: "6.5244° N, 3.3792° E",
  email: "qaasimkids6@gmail.com",
  phoneDisplay: "+234 901 959 7944",
  whatsappUrl: "https://wa.me/2349019597944",
  availability: "Available for select systems architecture, product & studio commissions",
  heroHeadlinePrefix: "Designing systems that turn",
  heroHeadlineEmphasis: "chaos into proof.",
  heroBio:
    "Nigerian creative technologist, software architect, and founder of NIT7ER. I design and ship custom operational infrastructure, offline-first African EdTech, AI-native products, and tactile digital ateliers — alongside photography and technical essays.",
  aboutLead:
    "I build digital systems from scratch — not pieced together from templates.",
  aboutParagraphs: [
    "Based in Lagos with deep roots in the Obafemi Awolowo University (Great Ife) builder community, my work sits at the intersection of systems engineering, applied AI, and editorial visual craft.",
    "Through NIT7ER, I architect internal operational software for growing businesses replacing fragile spreadsheets, while our internal Labs ship standalone products built for real African constraints — from 100% offline classroom smartboard engines to Gemini-powered lesson accountability and cognitive regulation tools.",
    "Beyond code, I direct NIT7ER Academy to train builders through live production sprints, write honest engineering field notes, and explore light, architecture, and human stories through photography and cinematography under Tempalette.",
  ],
  collaborations: [
    "Custom operational software & internal business infrastructure",
    "AI-native products, agentic workflows & offline-first mobile apps",
    "High-craft brand digital ateliers & editorial web platforms",
    "Open-source developer tools, civic tech & technical writing",
  ],
};

export const CURRENTLY_BUILDING = [
  {
    name: "NIT7ER Infrastructure",
    note: "Custom ops systems for scaling Lagos firms",
    href: "https://nit7er.vercel.app",
  },
  {
    name: "Lang Huey",
    note: "100% offline French engine for classroom smartboards",
    href: "#work",
  },
  {
    name: "Flow 7",
    note: "Reality tracking & cognitive regulation engine",
    href: "https://flow7-two.vercel.app",
  },
  {
    name: "OAUMods",
    note: "Open-source Great Ife freshman companion PWA",
    href: "https://oaumods.vercel.app",
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
      "A Lagos-based creative technology studio and infrastructure engineering firm. We replace disconnected spreadsheets and off-the-shelf SaaS bloat with bespoke operations control systems, logistics platforms, booking engines, and automated workflows — while incubating our own standalone ventures in NIT7ER Labs.",
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
    index: "01",
    title: "Lang Huey",
    subtitle: "100% Offline Autonomous French Classroom Engine",
    year: "2026",
    category: "ai-labs",
    categoryLabel: "AI & Labs",
    role: "Creator & Systems Architect",
    status: "NIT7ER Labs · Production",
    featured: true,
    image: "/images/case-edtech.webp",
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
    stack: ["Flutter", "Dart", "Offline Runtime", "NERDC Curriculum", "Smartboard UI"],
    liveUrl: "https://nit7er.vercel.app/blog",
  },
  {
    id: "flow-7",
    index: "02",
    title: "Flow 7",
    subtitle: "Reality Tracking & Cognitive Regulation Engine",
    year: "2026",
    category: "ai-labs",
    categoryLabel: "AI & Labs",
    role: "Founder & Product Engineer",
    status: "NIT7ER Labs · Live",
    featured: true,
    image: "/images/case-systems.webp",
    imageAlt:
      "Minimalist modular dark charcoal slate slabs with precision brushed brass inlays on warm limestone",
    summary:
      "A mobile-first reality tracking and cognitive regulation engine for young to mid-life adults. Replaces aspirational to-do guilt with factual logging of energy, focus, and daily actions across core life areas.",
    challenge:
      "Most productivity trackers act like shame factories built on optimistic forecasting, while wellness apps stop at surface-level affirmations. People needed a grounded mirror of how their hours and energy actually unfold.",
    architecture:
      "Designed a low-friction logging loop paired with calm daily and weekly energy telemetry, stripping away streak anxiety in favor of honest behavioral reflection and clear pattern visualization.",
    impact:
      "Flagship standalone product inside NIT7ER Labs and integrated as an interactive cognitive simulator inside NIT7ER Academy.",
    stack: ["HTML5", "CSS Architecture", "JavaScript", "Behavioral UX", "Vercel"],
    liveUrl: "https://flow7-two.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Flow7-Landing-Page",
  },
  {
    id: "araxie",
    index: "03",
    title: "Araxie",
    subtitle: "Agentic Commerce Marketplace for Student Builders",
    year: "2026",
    category: "engineering",
    categoryLabel: "Engineering & OSS",
    role: "Lead Full-Stack Engineer",
    status: "PayPal AI Hackathon · Live",
    featured: true,
    image: "/images/case-commerce.webp",
    imageAlt:
      "Machined charcoal aluminum block, smoked glass prism, and copper circuit trace plate on travertine stone",
    summary:
      "“Whop for Students” — an AI-driven digital marketplace where campus developers publish micro-software, Chrome extensions, and study workspaces with intelligent multi-item bundling, PayPal Orders v2 checkout, and automated peer-to-peer payouts.",
    challenge:
      "Student engineers build extraordinarily useful campus tools every semester, yet have no cohesive distribution or payment rail — leaving buyers digging through fragmented group chats.",
    architecture:
      "Built on Next.js 16 App Router and TypeScript 5 with an agentic discovery and bundle-composition layer, verified PayPal Orders v2 server settlement, automated creator payouts, and 14 Vitest integration tests.",
    impact:
      "Shipped live to production for the PayPal AI Hackathon as a full end-to-end blueprint for the campus digital economy.",
    stack: ["Next.js 16", "TypeScript", "PayPal Orders v2", "Agentic AI", "Vitest"],
    liveUrl: "https://araxie.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/araxie",
  },
  {
    id: "oaumods",
    index: "04",
    title: "OAUMods",
    subtitle: "The Great Ife Freshman Companion (Open-Source PWA)",
    year: "2026",
    category: "engineering",
    categoryLabel: "Engineering & OSS",
    role: "Creator & Maintainer",
    status: "Open Source · MIT · Live",
    featured: true,
    image: "/images/visual-lagos.webp",
    imageAlt:
      "Fine-art monochrome architectural photograph of sunlight slicing through modernist West African concrete colonnades",
    summary:
      "An open-source, mobile-first, offline-ready campus survival guide and navigation hub built for incoming Obafemi Awolowo University (Great Ife) freshmen — unifying landmarks, bed-space balloting, clearance checklists, transit fares, and verified academic guides.",
    challenge:
      "Thousands of incoming OAU students face fragmented WhatsApp broadcasts, conflicting clearance instructions, scam-prone accommodation advice, and an expansive campus labyrinth.",
    architecture:
      "Engineered as an ultra-fast TypeScript progressive web app optimized for low-bandwidth mobile devices, structured data lookup across halls, faculties, and shuttle routes, and community-auditable open-source content.",
    impact:
      "100% non-profit civic infrastructure serving the Obafemi Awolowo University student community in Ile-Ife.",
    stack: ["TypeScript", "PWA", "Offline-First", "Mobile Web", "Open Source"],
    liveUrl: "https://oaumods.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/OAUMods",
  },
  {
    id: "clasquera",
    index: "05",
    title: "Clasquera",
    subtitle: "AI Lesson Accountability System for Private Schools",
    year: "2026",
    category: "ai-labs",
    categoryLabel: "AI & Labs",
    role: "Founder & Full-Stack Architect",
    status: "NIT7ER Labs · Live",
    summary:
      "Moves private school oversight from hope to proof: a Flutter teacher app records classroom sessions, Firebase Functions transcribe and evaluate lesson coverage via Gemini Pro against the syllabus, and a Next.js admin dashboard surfaces real-time mastery scores.",
    challenge:
      "Proprietors running 20+ classrooms simultaneously cannot be physically present in every lesson to verify curriculum adherence and instructional quality.",
    architecture:
      "Flutter mobile capture client + Firebase Cloud Functions audio pipeline + Gemini Pro semantic syllabus scoring + Next.js 16 executive dashboard with WhatsApp pilot onboarding.",
    impact:
      "Delivers per-class coverage scores (On Plan / Partial / Off Plan) so administrators intervene early with objective evidence.",
    stack: ["Flutter", "Firebase Functions", "Gemini Pro", "Next.js 16", "TypeScript"],
    liveUrl: "https://clasquera.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Clasquera-Landing-page",
  },
  {
    id: "ci-guardian",
    index: "06",
    title: "CI-Guardian",
    subtitle: "Sub-10s Autonomous Pre-Flight Security & Quality Gate",
    year: "2026",
    category: "engineering",
    categoryLabel: "Engineering & OSS",
    role: "Author & Maintainer",
    status: "Open Source · CLI & GitHub Action",
    summary:
      "Zero-configuration local CLI (`npx ci-guardian`) and GitHub Action chaining syntax-aware AST security scanning (SARIF 2.1.0 compliant), universal test runner auto-discovery, and automated in-place PR documentation in under 10 seconds.",
    challenge:
      "Teams waste CI minutes and miss subtle security regressions because static scanners, test suites, and PR summaries live in slow, disconnected pipelines.",
    architecture:
      "Node.js CLI engine with automatic repository topology detection, AST static analysis outputting SARIF 2.1.0 reports, native test orchestration, and deterministic pre-push verification.",
    impact:
      "Enables solo builders and engineering teams to enforce enterprise pre-flight hygiene with a single command.",
    stack: ["Node.js", "AST Analysis", "SARIF 2.1.0", "GitHub Actions", "CLI"],
    repoUrl: "https://github.com/Alqaasimee-jr2/CI-Guardian",
  },
  {
    id: "schora-ai",
    index: "07",
    title: "Schora AI",
    subtitle: "AI School Operations & Teaching Assistant (IBM watsonx)",
    year: "2026",
    category: "ai-labs",
    categoryLabel: "AI & Labs",
    role: "AI Systems Developer",
    status: "Prototype · Open Source",
    summary:
      "AI-powered school operations platform for African private schools delivering personalized teacher feedback and structured weekly administrative briefings powered by IBM watsonx.ai.",
    challenge:
      "School leaders drown in raw operational notes without structured weekly synthesis or tailored coaching insights for faculty.",
    architecture:
      "TypeScript + React + Node.js service orchestrating IBM watsonx.ai foundation models to synthesize classroom signals into actionable weekly briefings.",
    impact:
      "Demonstrated practical enterprise AI adoption tailored to African K-12 operational workflows.",
    stack: ["TypeScript", "React", "Node.js", "IBM watsonx.ai"],
    repoUrl: "https://github.com/Alqaasimee-jr2/schora-ai-assistant",
  },
  {
    id: "nit7er-platform",
    index: "08",
    title: "NIT7ER Studio Platform",
    subtitle: "Custom Operations Infrastructure Agency & Editorial Hub",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Founder & Lead Architect",
    status: "Live Production",
    summary:
      "The digital headquarters, engineering manifesto, strategy-call intake, and technical essay publication for NIT7ER — showcasing internal ops systems, logistics dashboards, and Labs ventures.",
    challenge:
      "Position NIT7ER sharply apart from generic web agencies by leading with systems thinking, operational ROI, and real proof from Labs.",
    architecture:
      "Custom editorial interface, structured case-study architecture, interactive booking intake, and long-form engineering publication.",
    impact:
      "Serves as the primary inbound engine for Lagos and international operational software engagements.",
    stack: ["Next.js", "TypeScript", "Editorial Systems", "Automation"],
    liveUrl: "https://nit7er.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Agency-NIT7ER",
  },
  {
    id: "nit7er-academy",
    index: "09",
    title: "NIT7ER Academy",
    subtitle: "High-Performance Creative Tech & Cognitive Systems Institute",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Director & Architect",
    status: "Live Production",
    summary:
      "Public admissions platform, curriculum catalog, Studio Labs portal, and interactive Flow 7 simulator for NIT7ER's talent-engineering institute.",
    challenge:
      "Communicate an uncompromising, production-first alternative to conventional coding bootcamps with clarity and authority.",
    architecture:
      "Next.js 16 + React 19 + TypeScript application featuring modular program pages, admissions intake, and interactive lab modules.",
    impact:
      "Establishes the talent pipeline bridging self-driven builders into commercial software delivery.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Admissions Engine"],
    liveUrl: "https://nit7er-academy.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/NIT7ER-ACADEMY",
  },
  {
    id: "royal-grain",
    index: "10",
    title: "Royal Grain Interiors",
    subtitle: "Luxury Furniture & Interiors Digital Atelier (Ibadan)",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Design Engineer",
    status: "Client Delivery · Live",
    summary:
      "Heritage-driven digital showroom and consultation engine for Royal Grain in Mokola, Ibadan — celebrating handcrafted pieces in African Mahogany, Iroko, Zuma Granite, and full-grain leather.",
    challenge:
      "Elevate a master West African furniture maker into a contemporary luxury atelier whose digital presence feels as tactile as the timber and stone.",
    architecture:
      "Next.js 16 + React 19 + TypeScript with curated showroom collections, craft storytelling pages, and private consultation booking.",
    impact:
      "Transformed brand positioning from local workshop to high-ticket architectural interiors studio.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Brand Atelier"],
    liveUrl: "https://royal-grain.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/royal-grain",
  },
  {
    id: "barryham-intl",
    index: "11",
    title: "Barryham International",
    subtitle: "Enterprise Sanitary, Plumbing & Electrical Catalogue (Lagos)",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Full-Stack Developer",
    status: "Client Delivery · Live",
    summary:
      "Corporate platform, structured product catalogue, and RFQ quote engine for a Lagos distributor of Grohe, Geberit, Villeroy & Boch, and Ideal Standard serving clients like CBN, Polaris Bank, and LASU.",
    challenge:
      "Institutional contractors and procurement teams needed fast verification of genuine European brands, completed commercial projects, and direct quote requests.",
    architecture:
      "Next.js 14 + TypeScript catalogue architecture with brand directories, project credentials, and streamlined quote capture.",
    impact:
      "Digitized commercial specification discovery for 30+ major Nigerian construction projects.",
    stack: ["Next.js 14", "React 18", "TypeScript", "RFQ System"],
    liveUrl: "https://barryham-intl.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/BARRYHAM-INTL",
  },
  {
    id: "kinetic-logistics",
    index: "12",
    title: "Kinetic Logistics",
    subtitle: "Supply Chain & Last-Mile Operations Platform (Ikeja, Lagos)",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Systems Engineer",
    status: "Live Production",
    summary:
      "Enterprise-grade logistics and fleet visibility platform engineered for Ikeja, Lagos supply chain operations — addressing global freight, last-mile routing, and operational precision.",
    challenge:
      "Logistics in Lagos demands real-time operational clarity across traffic, fuel accountability, and dispatch workflows.",
    architecture:
      "Next.js 15 + TypeScript architectural dark interface with structured service telemetry and dispatch inquiry workflows.",
    impact:
      "Translated complex freight operations into a high-trust enterprise digital interface.",
    stack: ["Next.js 15", "TypeScript", "Framer Motion", "Logistics UI"],
    liveUrl: "https://last-mile-chi.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/web",
  },
  {
    id: "crestview-health-hub",
    index: "13",
    title: "Crestview Health Hub",
    subtitle: "Clinical Diagnostic Platform (Agege, Lagos)",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Frontend Architect",
    status: "Live Production",
    summary:
      "Clinical precision meets human clarity: digital diagnostic portal engineered for Crestview Diagnostic Center in Agege, giving patients and clinicians calm, high-confidence access to services and scheduling.",
    challenge:
      "Medical websites frequently overwhelm anxious patients with cluttered copy and slow mobile flows.",
    architecture:
      "Next.js 16 + React 19 + TypeScript with crisp diagnostic service taxonomy and accessible mobile appointment paths.",
    impact:
      "Raised patient trust and mobile booking clarity for a premier Lagos diagnostic center.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Healthcare UX"],
    liveUrl: "https://crestview-umber.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Health-Hub",
  },
  {
    id: "pure-essence-school",
    index: "14",
    title: "Pure Essence School",
    subtitle: "Digital Sanctuary for Holistic Education (Ogun State)",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Creative Technologist",
    status: "Live Production",
    summary:
      "Official web platform for Pure Essence School in Ibogun, Ogun State — blending traditional Islamic geometric harmony and maroon-gold warmth with responsive modern web engineering.",
    challenge:
      "Honor deep cultural and spiritual heritage without sacrificing modern accessibility, speed, or admissions clarity.",
    architecture:
      "Next.js 14 + TypeScript + Framer Motion featuring bespoke organic section framing and admissions guidance.",
    impact:
      "Gave parents a warm, credible digital window into the school's mission of purity, piety, and purpose.",
    stack: ["Next.js 14", "TypeScript", "Framer Motion", "Editorial UI"],
    liveUrl: "https://pure-essence-school.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/pure-essence-school",
  },
  {
    id: "zenith-suites-lekki",
    index: "15",
    title: "The Zenith Suites Lekki",
    subtitle: "Luxury Hospitality & WhatsApp Booking Engine",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Design & Automation Builder",
    status: "Live Production",
    summary:
      "High-exclusivity hospitality experience for Lekki, Lagos featuring black-and-gold editorial framing, bespoke interior visuals, and automated WhatsApp booking capture.",
    challenge:
      "Convert discerning short-let guests directly via mobile without losing leads to third-party OTA commissions.",
    architecture:
      "Responsive JavaScript web experience paired with pre-structured WhatsApp lead routing and direct booking incentives.",
    impact:
      "Streamlined high-intent guest inquiries straight into the concierge WhatsApp channel.",
    stack: ["JavaScript", "WhatsApp Automation", "Hospitality UX", "SEO"],
    liveUrl: "https://housing-tan.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Housing",
  },
  {
    id: "saveur-restaurante",
    index: "16",
    title: "Saveur (Restaurante)",
    subtitle: "Nigerian Soul · Continental Craft Dining App",
    year: "2026",
    category: "client-systems",
    categoryLabel: "Client Systems",
    role: "Frontend Engineer",
    status: "Live Production",
    summary:
      "Full-featured dining web application pairing Nigerian & Continental menu curation, live cart management, light/dark modes, and WhatsApp order fulfillment.",
    challenge:
      "Demonstrate how modern hospitality brands can own their digital storefront and direct ordering flow with zero friction.",
    architecture:
      "React 19 + Vite + React Router 7 + Vanilla CSS with responsive menu filtering and direct WhatsApp checkout formatting.",
    impact:
      "Became a reference storefront architecture for NIT7ER's restaurant systems practice.",
    stack: ["React 19", "Vite", "Vanilla CSS", "WhatsApp Ordering"],
    liveUrl: "https://restaurante-rose-gamma.vercel.app",
    repoUrl: "https://github.com/Alqaasimee-jr2/Restaurante",
  },
  {
    id: "tempalette-photography",
    index: "17",
    title: "Tempalette & Temoojii",
    subtitle: "Photography, Cinematography & Visual Storytelling",
    year: "Ongoing",
    category: "visual-craft",
    categoryLabel: "Visual & Craft",
    role: "Photographer & Visual Director",
    status: "Active Practice",
    summary:
      "My personal visual practice spanning architectural photography, portraits, visual framing, and cinematography — training the eye for light, contrast, and composition that shapes every interface I build.",
    challenge:
      "Keep visual intuition sharp outside the code editor by studying real light, geometry, and human emotion through a lens.",
    architecture:
      "Curated visual galleries across Tempalette and Pinterest (@Temoojii), complemented by client storytelling builds like G3NERALOLA.",
    impact:
      "Directly informs the restraint, rhythm, and editorial balance across NIT7ER's digital products.",
    stack: ["Photography", "Cinematography", "Art Direction", "Color Grading"],
    liveUrl: "https://temoojii.wixsite.com/tempalette",
    repoUrl: "https://github.com/Alqaasimee-jr2/g3neralola-visual-storytelling",
  },
  {
    id: "self-discipline-guide",
    index: "18",
    title: "Guide to Self-Discipline & Spirituality",
    subtitle: "Digital Monograph on Focus, Inner Order & Craft",
    year: "2026",
    category: "visual-craft",
    categoryLabel: "Visual & Craft",
    role: "Author & Developer",
    status: "Published Web Guide",
    summary:
      "A calm, contemplative web publication examining personal discipline, intentional habits, and spiritual grounding — complementing the cognitive philosophy behind Flow 7 and NIT7ER Academy.",
    challenge:
      "Create a distraction-free reading artifact on the web that invites slow reflection rather than rapid scrolling.",
    architecture:
      "Minimalist typographic web book designed for sustained reading clarity on desktop and mobile.",
    impact:
      "Connects personal philosophy and inner execution with outward technical craft.",
    stack: ["Next.js", "Python", "Editorial Typography", "Publishing"],
    liveUrl: "https://a-guide-to-self-discipline-and-spir.vercel.app",
    repoUrl:
      "https://github.com/Alqaasimee-jr2/A-Guide-to-Self-Discipline-and-Spirituality.",
  },
];

export const ESSAYS: EssayItem[] = [
  {
    id: "essay-lang-huey-origin",
    number: "01",
    category: "Labs Story",
    title: "My Mother Needed a French Teacher. So I Built One.",
    excerpt:
      "Private schools in Lagos spend millions on smartboards, only to watch them sit dark while French timetables collapse. When virtual classes failed my mother's school, I stopped looking for teachers and started writing code.",
    url: "https://nit7er.vercel.app/blog",
  },
  {
    id: "essay-flow7-mental-health",
    number: "02",
    category: "Cognitive Systems",
    title: "Flow 7: Why We're Turning Our Performance Tracker Into a Mental Health Tool",
    excerpt:
      "Most mental health apps offer breathing bubbles and scented affirmations. Most productivity apps are shame factories. Here is why we pivoted Flow 7 into a factual cognitive regulation engine.",
    url: "https://nit7er.vercel.app/blog",
  },
  {
    id: "essay-offline-engineering",
    number: "03",
    category: "Engineering Autopsy",
    title: "Why We Engineered Lang Huey to Run 100% Offline (And How It Works)",
    excerpt:
      "If your software needs an internet connection to teach a child to count in French, you haven't built classroom infrastructure — you've built an excuse.",
    url: "https://nit7er.vercel.app/blog",
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
    id: "email",
    label: "Email",
    handle: "qaasimkids6@gmail.com",
    url: "mailto:qaasimkids6@gmail.com",
    platform: "mail",
    group: "direct",
  },
  {
    id: "whatsapp",
    label: "WhatsApp / Phone",
    handle: "+234 901 959 7944",
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
