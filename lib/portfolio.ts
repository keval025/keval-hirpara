/**
 * Everything the portfolio renders lives here. Edit this file to change
 * copy, add projects, or write a new case study — no component changes needed.
 */

export const profile = {
  name: 'Keval Hirpara',
  shortName: 'Keval',
  role: 'AI Product Manager',
  headline: 'I turn messy AI problems into products people trust — from the data models learn on to the features people use.',
  location: 'Bengaluru, India',
  timezone: 'Asia/Kolkata',
  /** Shown in the hero and header; update when your job search changes. */
  status: 'Open to AI Product Manager roles',
  focus: 'Embodied AI · Data quality · AI agents',
  company: { name: 'Human Archive', note: 'YC W26' },
  education: {
    school: 'NIT Surat',
    degree: 'B.Tech in Electrical Engineering',
    years: '2022 – 2026',
  },
  bio: [
    'I’m Keval, an AI product manager in Bengaluru. I work on the problems between AI models and the real world — how training data gets collected, how quality is measured, and how AI features earn users’ trust.',
    'In the Founder’s Office at Human Archive (YC W26), a robotics and embodied-AI data startup, I tracked the end-to-end data pipeline — from on-robot collection to AWS storage — where I learned that the hardest product questions in AI are often about data: what counts as usable, how failures are caught, and what they cost. My case studies go deep on exactly that.',
    'I studied Electrical Engineering at NIT Surat and came up as a builder — a software development internship, full-stack apps, AI agent pipelines, and 1,100+ competitive programming problems. It means I can go deep with engineers on feasibility and trade-offs, then zoom back out to the user and the metric.',
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
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Playground', href: '/playground' },
  { label: 'Contact', href: '/#contact' },
]

export const skills = [
  {
    group: 'Product',
    items: ['Problem framing', 'Requirements & process mapping', 'North-star & metric trees', 'Prioritization (RICE, MoSCoW)', 'Experiment design', 'Stakeholder communication'],
  },
  {
    group: 'AI & Data',
    items: ['Embodied AI & robotics data', 'Data pipelines & quality', 'Root cause analysis', 'LLM agents & orchestration', 'Operational reporting', 'Unit economics'],
  },
  {
    group: 'Technical',
    items: ['SQL', 'Python (Pandas, NumPy)', 'JavaScript & TypeScript', 'React & Next.js', 'Node.js & MongoDB', 'C++ & DSA'],
  },
  { group: 'Tools', items: ['Jira', 'Notion', 'Excel & Power BI', 'Git & GitHub', 'Google Colab', 'Claude Code'] },
]

export type Experience = {
  period: string
  title: string
  org: string
  meta?: string
  points: string[]
}

export const experience: Experience[] = [
  {
    period: 'Feb 2026 – Aug 2026',
    title: 'Founder’s Office',
    org: 'Human Archive (YC W26)',
    meta: 'Robotics / embodied-AI data startup · Gurugram, India',
    points: [
      'Tracked and analyzed the end-to-end data pipeline — on-robot collection, processing, AWS-based storage — surfacing bottlenecks, delays and data-sync gaps across cross-functional teams.',
      'Coordinated deployment, data collection, QA and offloading teams to keep operational workflows moving and unblock stalled handoffs.',
      'Monitored pipeline stability and throughput, feeding operational visibility back into deployment and infrastructure priorities.',
      'Ideated and built an internal Deployment & Inventory Tracker giving the team one view of device status and pending work.',
    ],
  },
  {
    period: 'Jun 2025 – Jul 2025',
    title: 'Software Development Intern',
    org: 'Dvij InfoTech',
    meta: 'Surat, India',
    points: [
      'Built full-stack features on the MERN stack (MongoDB, Express.js, Next.js, React.js, Node.js), translating functional requirements into working application components.',
      'Improved front-end responsiveness and refactored components to reduce technical debt and improve long-term maintainability.',
    ],
  },
  {
    period: 'Aug 2024 – Mar 2025',
    title: 'Convenor, Co-Curricular Affairs Council',
    org: 'NIT Surat',
    meta: 'Leadership',
    points: [
      'Led 400+ volunteers to run 30+ events for 5,000+ participants at MindBend, Gujarat’s largest techno-managerial fest — owning planning, timelines and resource allocation.',
      'Designed and ran a multi-channel outreach strategy across 50+ colleges, driving a 30% year-over-year increase in participation.',
    ],
  },
]

export const achievements = [
  'Winner, FINFIESTA 2023 — organized by CEV, NIT Surat',
  '1,100+ algorithmic problems solved across LeetCode and Codeforces; peak LeetCode rating 1642',
  'Participant, Medecro HealthHack 2024 — organized by Medecro.AI',
]

export type Project = {
  slug: string
  title: string
  summary: string
  kind: string
  stack: string[]
  year: string
  /** Omit for internal work with no public link. */
  href?: string
  /** Small label shown next to the title, e.g. where the work was done. */
  badge?: string
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
    title: 'Reducing Unusable Recordings in Embodied AI Data Collection',
    summary: 'Product case study: moving quality checks to where data is recorded to lift usable yield 60% → 80%.',
    kind: 'Product · Case study',
    stack: ['Metric design', 'Root cause analysis', 'RICE', 'Experiment design'],
    year: '2026',
    href: 'https://app.notion.com/p/Case-Study-Reducing-Unusable-Recordings-in-Embodied-AI-Data-Collection-3e6aed45470881909155c902b754360d',
    caseStudy: true,
    palette: ['#0d1b2a', '#5ec8ff'],
  },
  {
    slug: 'deployment-inventory-tracker',
    title: 'Deployment & Inventory Tracker',
    summary: 'Human Archive product I ideated and built to track devices across inventory, deployment, collection and offloading.',
    kind: 'Company product · Operations',
    badge: 'Human Archive',
    stack: ['Web app', 'Ops lifecycle'],
    year: '2026',
    palette: ['#1c1917', '#f59e0b'],
  },
  {
    slug: 'pdfoutliner',
    title: 'PDFOutliner',
    summary: 'Hackathon project: turns unstructured PDFs into hierarchical data — 50+ pages in under 10 s, under 200 MB.',
    kind: 'Hackathon · Document processing',
    badge: 'Hackathon',
    stack: ['Python', 'Regex heuristics', 'OCR'],
    year: '2025',
    href: 'https://github.com/keval025/PDF_metadata_extractor',
    palette: ['#f4f4f1', '#dc2626'],
  },
  {
    slug: 'auros',
    title: 'Auros',
    summary: 'Fintech marketing platform built strictly against a written design system.',
    kind: 'Frontend · Design system',
    stack: ['React 19', 'Vite 7', 'Tailwind v4', 'React Router 7'],
    year: '2026',
    href: 'https://github.com/keval025/Auro',
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
    summary: '1,100+ problems across LeetCode and Codeforces (peak LeetCode 1642); graphs, segment trees, all in C++.',
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
    title: 'Reducing Unusable Recordings in Embodied AI Data Collection',
    tagline:
      'A failure costs seconds on site and a full re-collection at QA. This case moves the checks to where the data is recorded.',
    role: 'Product management (problem framing, metrics, RCA, experiment design)',
    timeline: 'September 2026',
    stack: ['Metric trees', 'Root cause analysis', 'RICE', 'A/B pilot design', 'Unit economics'],
    stackLabel: 'Methods',
    links: [{ label: 'Full case study on Notion', href: 'https://app.notion.com/p/Case-Study-Reducing-Unusable-Recordings-in-Embodied-AI-Data-Collection-3e6aed45470881909155c902b754360d' }],
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
    note: 'Type your name, then move your cursor (or drag a finger) across the letters to watch them swell and lean.',
    tag: 'Typography',
  },
] as const
