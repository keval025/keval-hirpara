/**
 * Everything the portfolio renders lives here. Edit this file to change
 * copy, add projects, or write a new case study — no component changes needed.
 */

export const profile = {
  name: 'Keval Hirpara',
  shortName: 'Keval',
  role: 'Full-Stack Developer & Problem Solver',
  headline: 'I build real-world products on the web — and the systems behind them.',
  location: 'Bengaluru, India',
  timezone: 'Asia/Kolkata',
  currently: {
    title: 'Tech – Operations Manager',
    company: 'Human Archive',
    note: 'YC W26',
  },
  education: {
    school: 'SVNIT Surat',
    degree: 'B.Tech in Electrical Engineering',
  },
  bio: [
    'I’m Keval, a full-stack developer based in Bengaluru. I currently work as Tech – Operations Manager at Human Archive (YC W26), where I sit between engineering and operations — shipping internal tooling and keeping the machine running.',
    'I studied Electrical Engineering at SVNIT Surat and grew up as an engineer through competitive programming: data structures, algorithms, and a lot of Codeforces. That habit of breaking problems down carries straight into how I build products — from design-system-driven frontends to backends, auth, and AI agent pipelines.',
  ],
  email: 'kevalhirpara2003@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/keval025', handle: '@keval025' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/keval-hirpara', handle: 'in/keval-hirpara' },
    { label: 'X / Twitter', href: 'https://x.com/keval0139', handle: '@keval0139' },
    { label: 'Codeforces practice', href: 'https://github.com/keval025/CodeForces', handle: 'CodeForces repo' },
  ],
}

export const navItems = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Playground', href: '/playground' },
  { label: 'Contact', href: '/#contact' },
]

export const skills = [
  { group: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'shadcn/ui', 'GSAP'] },
  { group: 'Backend & Data', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Drizzle ORM', 'Neon'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Linux', 'Vercel', 'Notion', 'Claude Code'] },
]

export const experience = [
  {
    period: 'Now',
    title: 'Tech – Operations Manager',
    org: 'Human Archive (YC W26)',
    detail: 'Bridging engineering and operations — internal tooling, data pipelines, and process automation.',
  },
  {
    period: 'Ongoing',
    title: 'Full-Stack Developer',
    org: 'Independent projects',
    detail: 'Marketing sites, e-commerce storefronts, SaaS prototypes, and AI agent workflows.',
  },
  {
    period: 'Education',
    title: 'B.Tech, Electrical Engineering',
    org: 'SVNIT Surat',
    detail: 'Competitive programming, DSA, and low-level system design in C++.',
  },
]

export type Project = {
  slug: string
  title: string
  summary: string
  kind: string
  stack: string[]
  year: string
  href: string
  live?: string
  caseStudy?: boolean
  /** Two colors used for the generated cover art. */
  palette: [string, string]
}

export const projects: Project[] = [
  {
    slug: 'whatsapp-scheduled-messages',
    title: 'WhatsApp Scheduled Messages',
    summary: 'Product case study: native message scheduling for 3B users — research, flows, metrics, rollout.',
    kind: 'Product · Case study',
    stack: ['Product strategy', 'UX flows', 'Metrics', 'GTM'],
    year: '2026',
    href: 'https://app.notion.com/p/WhatsApp-Scheduled-Messages-Product-Case-Study-3e9aed454708812abe89db94cda27bbb',
    caseStudy: true,
    palette: ['#0f3d2c', '#7ee2a8'],
  },
  {
    slug: 'embodied-ai-data-quality',
    title: 'Embodied AI Data Yield',
    summary: 'Product case study: shifting quality checks to the collection site to lift usable yield 68% → 85%.',
    kind: 'Product · Case study',
    stack: ['Metric design', 'Root cause analysis', 'RICE', 'Experiment design'],
    year: '2026',
    href: 'https://app.notion.com/p/Case-Study-Reducing-Unusable-Recordings-in-Embodied-AI-Data-Collection-3e6aed45470881909155c902b754360d',
    caseStudy: true,
    palette: ['#0d1b2a', '#5ec8ff'],
  },
  {
    slug: 'auros',
    title: 'Auros',
    summary: 'Fintech marketing platform built strictly against a written design system.',
    kind: 'Frontend · Design system',
    stack: ['React 19', 'Vite 7', 'Tailwind v4', 'React Router 7'],
    year: '2026',
    href: 'https://github.com/keval025/Auro',
    caseStudy: true,
    palette: ['#012624', '#e5a6ff'],
  },
  {
    slug: 'atelier',
    title: 'Atelier',
    summary: 'Fashion e-commerce with live catalogue, auth, and server-validated checkout.',
    kind: 'Full-stack · E-commerce',
    stack: ['React', 'Vite', 'Tailwind', 'InsForge BaaS'],
    year: '2026',
    href: 'https://github.com/keval025/Agents',
    caseStudy: true,
    palette: ['#1d1b18', '#d9c3a0'],
  },
  {
    slug: 'youtube-script-agent',
    title: 'YouTube Script Agent',
    summary: 'Orchestrator + subagent pipeline that turns a brief into a fact-checked script.',
    kind: 'AI · Agents',
    stack: ['Claude Code', 'Subagents', 'Prompt design'],
    year: '2026',
    href: 'https://github.com/keval025/youtube-script-agent',
    caseStudy: true,
    palette: ['#ff3d2e', '#1a1a1a'],
  },
  {
    slug: 'aurelia',
    title: 'AURELIA Coffee House',
    summary: 'Editorial café site with filterable menu, persistent cart, and reservations.',
    kind: 'Frontend · Marketing',
    stack: ['Next.js 16', 'React 19', 'Tailwind v4', 'Web3Forms'],
    year: '2026',
    href: 'https://github.com/keval025/AURELIA',
    live: 'https://aurelia-coffee-house-mu.vercel.app',
    caseStudy: true,
    palette: ['#faf7f2', '#a9843d'],
  },
  {
    slug: 'maison-homme',
    title: 'MAISON Premier Homme',
    summary: 'Luxury menswear storefront with hero carousel, filters, and cart.',
    kind: 'Frontend · E-commerce',
    stack: ['React', 'Vite', 'Tailwind', 'Axios'],
    year: '2026',
    href: 'https://github.com/keval025/MAISON-HOMME',
    palette: ['#111111', '#c9b38a'],
  },
  {
    slug: 'cloudinary-saas',
    title: 'Cloudinary SaaS',
    summary: 'Media SaaS for uploading and transforming images and video, with Clerk auth.',
    kind: 'Full-stack · SaaS',
    stack: ['Next.js', 'Clerk', 'Cloudinary', 'daisyUI'],
    year: '2026',
    href: 'https://github.com/keval025/Cloudinary-SAAS',
    palette: ['#3448c5', '#f5f5f0'],
  },
  {
    slug: 'droply',
    title: 'Droply',
    summary: 'File storage and sharing dashboard with authenticated uploads.',
    kind: 'Full-stack · Web app',
    stack: ['Next.js', 'TypeScript', 'API routes'],
    year: '2025',
    href: 'https://github.com/keval025/Droply',
    palette: ['#0f766e', '#ecfeff'],
  },
  {
    slug: 'url-shortener',
    title: 'URL Shortener',
    summary: 'Short links with a Node/Express backend and a separate frontend client.',
    kind: 'Full-stack · Backend',
    stack: ['Node.js', 'Express', 'MongoDB'],
    year: '2025',
    href: 'https://github.com/keval025/URL-Shorter',
    palette: ['#18181b', '#a3e635'],
  },
  {
    slug: 'system-design',
    title: 'System Design (LLD)',
    summary: 'Low-level design notes in C++: OOP pillars, composite and template-method patterns.',
    kind: 'Engineering · Notes',
    stack: ['C++', 'OOP', 'Design patterns'],
    year: '2026',
    href: 'https://github.com/keval025/System-Design',
    palette: ['#f4f4f1', '#2563eb'],
  },
  {
    slug: 'dsa',
    title: 'DSA & Codeforces',
    summary: 'Graphs, segment trees, and Codeforces problems rated 800–1300, all in C++.',
    kind: 'Competitive programming',
    stack: ['C++', 'Algorithms'],
    year: '2025',
    href: 'https://github.com/keval025/CodeForces',
    palette: ['#1f2937', '#fbbf24'],
  },
]

type CaseStudyBase = {
  slug: string
  title: string
  tagline: string
  role: string
  timeline: string
  stack: string[]
  /** Header label for `stack`; defaults to "Stack". */
  stackLabel?: string
  links: { label: string; href: string }[]
}

/**
 * `product` case studies render a bespoke layout (see
 * components/product-case-study.tsx); `engineering` ones use the shared
 * overview → approach → outcome template.
 */
export type CaseStudy =
  | (CaseStudyBase & { format: 'product' })
  | (CaseStudyBase & EngineeringCaseStudy & { format?: 'engineering' })

type EngineeringCaseStudy = {
  overview: string
  problem: string
  approach: { title: string; body: string }[]
  decisions: string[]
  outcome: string[]
  learned: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'whatsapp-scheduled-messages',
    format: 'product',
    title: 'WhatsApp Scheduled Messages',
    tagline: 'Say the right thing at the right time — a product case study on native message scheduling.',
    role: 'Product management (independent concept)',
    timeline: 'September 2026',
    stack: ['User research', 'Personas & JTBD', 'UX flows', 'Metrics', 'RICE / MoSCoW', 'GTM'],
    stackLabel: 'Methods',
    links: [
      {
        label: 'Full case study on Notion',
        href: 'https://app.notion.com/p/WhatsApp-Scheduled-Messages-Product-Case-Study-3e9aed454708812abe89db94cda27bbb',
      },
    ],
  },
  {
    slug: 'embodied-ai-data-quality',
    format: 'product',
    title: 'Embodied AI Data Yield',
    tagline: 'Reducing unusable recordings in embodied-AI data collection by catching failures where they happen.',
    role: 'Product management (problem framing, metrics, RCA, experiment design)',
    timeline: 'September 2026',
    stack: ['Metric trees', 'Root cause analysis', 'RICE', 'A/B pilot design', 'Unit economics'],
    stackLabel: 'Methods',
    links: [{ label: 'Full case study on Notion', href: 'https://app.notion.com/p/Case-Study-Reducing-Unusable-Recordings-in-Embodied-AI-Data-Collection-3e6aed45470881909155c902b754360d' }],
  },
  {
    slug: 'auros',
    title: 'Auros',
    tagline: 'A fintech marketing platform where every pixel traces back to a written spec.',
    role: 'Design engineering, frontend architecture',
    timeline: '2026',
    stack: ['React 19', 'Vite 7', 'Tailwind CSS v4', 'React Router 7', 'Canvas / SVG'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/keval025/Auro' }],
    overview:
      'Auros is the marketing site and frontend platform for a fictional institutional liquidity and market-infrastructure firm. The brief was an “abyssal fintech terminal”: near-black teal canvas, bioluminescent data orbs, and instrument-like components.',
    problem:
      'Visual consistency on marketing sites erodes fast — every new section invents its own spacing, color, and button. I wanted a codebase where design decisions could not drift, and where the motion felt premium without shipping an animation library.',
    approach: [
      {
        title: 'Design system first',
        body: 'Before writing components I wrote DESIGN.md — color roles, type scale, radii, and do’s and don’ts. It is the authoritative source; Tailwind v4 @theme tokens mirror it, and a small JS token mirror exists only for canvas and SVG.',
      },
      {
        title: 'Composable layout primitives',
        body: 'An AppShell, Container, and PageHeader layer, a tiny UI kit (Button, Card, Field, Stat, SectionHeading), and page “bands” composed from them. New pages are assembled, not designed from scratch.',
      },
      {
        title: 'A 120-line motion layer',
        body: 'Reveal, Parallax, ScrollProgressBar, and CountUp all share one requestAnimationFrame loop. No CSS-in-JS, no animation dependency — and reduced-motion is respected everywhere.',
      },
    ],
    decisions: [
      'Color is rationed: achromatic whites carry content; chromatic gradients are reserved for atmosphere and a single signature pill button.',
      'Depth through surface tint instead of shadows — cards lift with teal-tinted fills, reading as depth-of-water.',
      'Documented known gaps (missing font files, test targets, unbuilt routes) instead of hiding them — ARCHITECTURE.md sketches the backend this is Phase 0 of.',
    ],
    outcome: [
      'A complete, responsive, accessible frontend with zero UI dependencies beyond React and the router.',
      'Three living docs (DESIGN, FRONTEND, ARCHITECTURE) that let anyone extend the site without asking me.',
    ],
    learned:
      'Writing the spec first is slower on day one and dramatically faster by day five. The constraint is the feature.',
  },
  {
    slug: 'atelier',
    title: 'Atelier',
    tagline: 'A fashion storefront that keeps selling even when its backend is down.',
    role: 'Full-stack development',
    timeline: '2026',
    stack: ['React 18', 'Vite 6', 'Tailwind CSS', 'InsForge BaaS', 'React Router 6'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/keval025/Agents' }],
    overview:
      'Atelier is a modern fashion e-commerce app. Products, categories, variants, and orders are served from a live InsForge database through a dedicated service layer, with auth, wishlist, cart, checkout, and order history.',
    problem:
      'Most demo storefronts trust the client: the cart says an item costs $40, so the order costs $40. I wanted a checkout that could not be tampered with, and a catalogue that degrades gracefully instead of rendering a blank page when the API fails.',
    approach: [
      {
        title: 'A service layer between UI and data',
        body: 'productService, categoryService, and orderService own every query. Components never talk to the SDK directly, which made fallback and validation logic live in exactly one place.',
      },
      {
        title: 'Graceful fallback',
        body: 'If a fetch fails or returns empty, services transparently fall back to bundled mock data — the storefront stays browsable during an outage.',
      },
      {
        title: 'Server-validated checkout',
        body: 'At checkout, stock levels and prices are re-read from the database per variant (size / color). Client cart data can never set the final total; orders are written with line items to orders and order_items.',
      },
    ],
    decisions: [
      'Context providers for Auth, Cart, Wishlist, and Toast — small enough that a state library would be overhead.',
      'Debounced search in both the navbar and shop page via a shared useDebounce hook.',
      'Human-readable auth error messages instead of raw SDK errors.',
    ],
    outcome: [
      'Full shopping loop: sign up → browse & filter → quick view → cart → validated checkout → order history.',
      'A resilient catalogue that never shows an empty state because of a network blip.',
    ],
    learned:
      'Trust boundaries are a design decision, not a backend detail. Deciding early what the client is allowed to assert simplified everything after.',
  },
  {
    slug: 'youtube-script-agent',
    title: 'YouTube Script Agent',
    tagline: 'An AI pipeline that refuses to make things up.',
    role: 'Agent design, prompt engineering',
    timeline: '2026',
    stack: ['Claude Code', 'Orchestrator + subagents', 'Markdown specs'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/keval025/youtube-script-agent' }],
    overview:
      'A Claude Code agent that turns a topic brief into a complete, ready-to-shoot YouTube script — research, structure, dialogue, fact-check, and packaging metadata — in one run.',
    problem:
      'Single-prompt script generators hallucinate statistics, drift in tone, and ignore pacing. Creators end up fact-checking everything by hand, which defeats the purpose.',
    approach: [
      {
        title: 'Orchestrator + specialists',
        body: 'CLAUDE.md defines a five-stage pipeline and the orchestrator’s role. Research, writing, fact-checking, and metadata are each delegated to a dedicated subagent with narrow instructions.',
      },
      {
        title: 'One source of truth',
        body: 'The Stage 1 Research Brief is the only factual basis later stages may use. The writer is explicitly forbidden from pulling facts from its own memory.',
      },
      {
        title: 'A fact-check gate',
        body: 'Stage 4 traces every claim back to the brief and flags anything it cannot verify with ⚠️ UNVERIFIED rather than silently passing it through.',
      },
    ],
    decisions: [
      'Required inputs (audience, length, tone, region, CTA) are always asked for — the agent never silently defaults.',
      'Word budgets are computed from spoken pace (130–150 wpm), not reading pace.',
      'Output is a two-column AUDIO / VISUAL script, the format editors actually shoot from.',
    ],
    outcome: [
      'One command produces research, a beat sheet, a full script, and titles, thumbnail text, description, and tags.',
      'Hard rules — no invented stats, quotes, or source links — enforced structurally rather than by hope.',
    ],
    learned:
      'Reliability in LLM systems comes from architecture: isolate responsibilities, constrain inputs, and gate outputs.',
  },
  {
    slug: 'aurelia',
    title: 'AURELIA Coffee House',
    tagline: 'An editorial café site with a real ordering flow and zero backend.',
    role: 'Design & frontend development',
    timeline: '2026',
    stack: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'shadcn/ui', 'Web3Forms'],
    links: [
      { label: 'Live site', href: 'https://aurelia-coffee-house-mu.vercel.app' },
      { label: 'Source on GitHub', href: 'https://github.com/keval025/AURELIA' },
    ],
    overview:
      'A single-page marketing and ordering site for a fictional neighbourhood coffee house — hero and story sections, a filterable menu, favourites, a cart drawer, reservations, and a newsletter.',
    problem:
      'Small hospitality businesses need something that feels boutique and actually works — a menu people can browse, a bag they can build, a table they can book — without paying for a backend.',
    approach: [
      {
        title: 'Editorial design language',
        body: 'Warm ivory, espresso charcoal, and a muted brass accent; Cormorant Garamond for display and Inter for body; scroll reveals driven by IntersectionObserver and pure CSS.',
      },
      {
        title: 'A cart that behaves',
        body: 'Adding an existing item increments quantity, rows are editable inline, and subtotal, tax, and total update live. Cart and favourites persist to localStorage and are rebuilt against the current menu on load, so prices are never stale.',
      },
      {
        title: 'Forms without a server',
        body: 'Reservation and newsletter forms validate inline and deliver via Web3Forms when a key is configured — and fall back to a local success state when it is not, so the demo always works.',
      },
    ],
    decisions: [
      'Storage reads happen only in mount effects and are guarded with try/catch — blocked storage or bad JSON can’t break the page.',
      'Product name is the identity key, kept deliberately simple and documented in the README.',
      'Deployed on Vercel with no extra configuration.',
    ],
    outcome: [
      'A fully responsive, deployed site with a complete browse → bag → checkout → reserve flow.',
      'Documented customisation points so the owner can edit menu, tax, and hours in one file.',
    ],
    learned:
      'The details users never notice — stale prices, duplicated rows, a storage exception — are what separate a template from a product.',
  },
]

export const playground = [
  {
    id: 'dot-field',
    title: 'Dot Field',
    note: 'A grid of points that gets pushed around by your cursor. Canvas + spring physics.',
    tag: 'Canvas',
  },
  {
    id: 'sorting',
    title: 'Sort Visualizer',
    note: 'Bubble, insertion, and selection sort, step by step. A nod to my DSA roots.',
    tag: 'Algorithms',
  },
  {
    id: 'pathfinder',
    title: 'BFS Pathfinder',
    note: 'Draw walls, then watch breadth-first search flood the grid and find the shortest path.',
    tag: 'Graphs',
  },
  {
    id: 'kinetic-type',
    title: 'Kinetic Type',
    note: 'Letters that swell and lean as you move across them. Variable font weight, no library.',
    tag: 'Typography',
  },
] as const
