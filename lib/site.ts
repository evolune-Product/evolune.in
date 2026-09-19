// Central fact sheet for Evolune EdgeTech LLP.
// Every fact here is sourced from the previous site's components, DEPLOYMENT.md,
// and founder-confirmed ground truth. Nothing here is invented.

export const site = {
  name: 'Evolune EdgeTech',
  legalName: 'Evolune EdgeTech LLP',
  domain: 'evolune.in',
  tagline: 'Building What Comes Next',
  founded: 'February 2025',
  hq: 'Bengaluru, India',
  location: 'Bengaluru, India · Global Remote',
  email: 'business@evolune.in',
  dpiitCert: 'DIPP238722',
  dpiitValidThrough: '23-02-2035',
  socials: {
    linkedin: 'https://www.linkedin.com/in/evolune-edgetech-546640389/',
    instagram: 'https://www.instagram.com/evolune.in/',
    github: 'https://github.com/evolune-Product',
  },
};

export const credentials = [
  {
    label: 'Winner',
    badgeTone: 'gold',
    tag: 'I-Summit 2026',
    title: 'Winner, I-Summit — IIT Madras',
    desc: 'Evolune EdgeTech won I-Summit 2026 at IIT Madras, and Flasqo reached the finals of PitchArena, the flagship startup pitching competition of the summit. Evaluated by leading venture capitalists and technical judges as a best-in-class developer tools innovation.',
    meta: ['IIT Madras Campus', 'Developer Tools'],
  },
  {
    label: 'Govt. of India Certified',
    badgeTone: 'emerald',
    tag: 'DIPP238722',
    title: 'DPIIT Startup India Recognition',
    desc: 'Officially recognised as an innovative startup by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, Government of India. Certificate valid through 2035.',
    meta: [],
    certificate: true,
  },
  {
    label: 'Incubation Shortlist',
    badgeTone: 'indigo',
    tag: 'IIM Bangalore',
    title: 'NSRCEL — IIM Bangalore',
    desc: "Shortlisted by NSRCEL (N.S. Raghavan Centre for Entrepreneurial Learning) at Indian Institute of Management Bangalore for incubation consideration—one of India's most selective programmes for high-growth ventures.",
    meta: ['NSRCEL Cohort', 'Enterprise Tech'],
  },
  {
    label: 'Campus Pitch',
    badgeTone: 'gold',
    tag: "E-Summit '26",
    title: 'IIT Madras E-Summit Selection',
    desc: 'Selected among thousands of applicants to pitch directly on the IIT Madras campus at both E-Summit and I-Summit 2026, gaining direct exposure to national angel syndicates, institutional mentors, and enterprise partners.',
    meta: ['IITM E-Cell', 'Chennai, India'],
  },
];

export type ProductSlug = 'evolune-os' | 'flasqo' | 'spendveto';

export interface Product {
  slug: ProductSlug;
  name: string;
  tagline: string;
  category: string;
  pillar: 'AI & Intelligent Systems' | 'Digital Products';
  status: 'Live' | 'Beta' | 'Live · Open Source';
  url: string;
  image: string;
  heroImage?: string;
  dashboardImage?: string;
  /** Real product logo asset (icon/lockup), distinct from `image` (product screenshot). */
  logo?: string;
  openSource?: boolean;
  statement: string;
  description: string;
  capabilities: string[];
  howItWorks: { step: string; detail: string }[];
  technology: string[];
  metrics: { value: string; label: string }[];
}

export const products: Product[] = [
  {
    slug: 'evolune-os',
    name: 'Evolune OS',
    tagline: 'An Autonomous AI Engineering Team That Ships End-to-End',
    category: 'Agentic SDLC Platform',
    pillar: 'AI & Intelligent Systems',
    status: 'Live',
    url: 'https://evoluneos.com',
    image: '/assets/evolune/products/evoluneos-hero.jpg',
    heroImage: '/assets/evolune/products/evoluneos-hero.jpg',
    dashboardImage: '/assets/evolune/products/evoluneos-dashboard.jpg',
    logo: '/images/products/evoluneos-logo.png',
    statement:
      'Software delivery should not depend on human bandwidth for every line of code. Evolune OS gives engineering teams an autonomous team of specialized agents that plans, builds, reviews, and ships — with humans directing intent, not typing every commit.',
    description:
      'Evolune OS orchestrates specialized autonomous agents (Architect, Coder, Reviewer, DevOps Engineer) across the entire software development lifecycle. From issue intake to production deployment, it automates testing, code review, and CI/CD with human-in-the-loop governance.',
    capabilities: [
      'Autonomous multi-agent task planning & execution',
      'Automated architectural design & spec verification',
      'Strict AI code reviews with deterministic quality gates',
      'Continuous autonomous deployment pipelines',
      'Granular human-in-the-loop oversight & approvals',
    ],
    howItWorks: [
      { step: 'Architect', detail: 'Synthesizes API specs, database schema, and system design from a stated intent.' },
      { step: 'Developer', detail: 'Writes type-safe, production-grade implementation code against the approved spec.' },
      { step: 'Reviewer', detail: 'Validates AST rules, runs static security analysis, and enforces deterministic quality gates.' },
      { step: 'DevOps', detail: 'Runs automated container builds and canary deployments with live rollback triggers.' },
    ],
    technology: ['Multi-agent orchestration', 'Deterministic AST verification', 'CI/CD automation', 'Human-in-the-loop governance'],
    metrics: [
      { value: '4', label: 'Specialized Agent Roles' },
      { value: '14ms', label: 'Orchestration Latency' },
      { value: 'Live', label: 'Production Status' },
    ],
  },
  {
    slug: 'flasqo',
    name: 'Flasqo',
    tagline: '13 Types of API Testing Unified in One Intelligent Engine',
    category: 'Developer Tools & Reliability',
    pillar: 'Digital Products',
    status: 'Beta',
    url: 'https://flasqo.com',
    image: '/assets/evolune/products/flasqo-hero.jpg',
    heroImage: '/assets/evolune/products/flasqo-hero.jpg',
    dashboardImage: '/assets/evolune/products/flasqo-dashboard.jpg',
    logo: '/images/products/flasqo-logo-card.png',
    statement:
      'API testing shouldn’t require thirteen different tools glued together with scripts. Flasqo is a single, unified engine that runs every kind of test your API needs — before a regression ever reaches production.',
    description:
      'PitchArena finalist at IIT Madras I-Summit 2026. Flasqo replaces fragmented testing silos with a single unified platform. Execute smoke, regression, load, chaos, GraphQL, contract, and full-send end-to-end browser tests in milliseconds before bugs ever reach production.',
    capabilities: [
      '13 unified testing types in a single dashboard',
      'Autonomous regression & contract drift detection',
      'High-concurrency load & chaos injection testing',
      'Zero-configuration GraphQL & REST schema validation',
      'Sub-second test feedback loop for high-velocity teams',
    ],
    howItWorks: [
      { step: 'Connect', detail: 'Point Flasqo at your API surface — REST, GraphQL, or full-send browser journeys.' },
      { step: 'Run', detail: 'Execute smoke, chaos, load, contract, and E2E suites in a single unified pipeline.' },
      { step: 'Verify', detail: 'Sub-second feedback on assertions, latency, and schema drift before merge.' },
      { step: 'Ship', detail: 'Gate deployments on green checks across all 13 testing engines.' },
    ],
    technology: ['Chaos injection engine', 'GraphQL/REST schema validation', 'High-concurrency load testing', 'Full-send E2E browser automation'],
    metrics: [
      { value: '13', label: 'Testing Engines Unified' },
      { value: '<50ms', label: 'Test Cycle Latency' },
      { value: 'Beta', label: 'PitchArena Finalist' },
    ],
  },
  {
    slug: 'spendveto',
    name: 'SpendVeto',
    tagline: 'The Spend-Governance Layer for AI Agents',
    category: 'AI Agent Payment Governance',
    pillar: 'AI & Intelligent Systems',
    status: 'Live · Open Source',
    url: 'https://spendveto.com',
    image: '/assets/evolune/products/spendveto-hero.jpg',
    heroImage: '/assets/evolune/products/spendveto-hero.jpg',
    dashboardImage: '/assets/evolune/products/spendveto-dashboard.jpg',
    openSource: true,
    statement:
      'Rails move the money; SpendVeto decides whether the agent is allowed to move it — before anything settles. As AI agents start paying for things directly, someone has to hold the veto.',
    description:
      'SpendVeto is the spend-governance layer for AI agents that pay for things, built on x402 and MCP. It sits between an agent and the payment rail, enforcing policy controls, approvals, budgets, and spend scoping before a transaction is allowed to settle — with a kill switch and a hash-chained audit ledger for every decision. Open source, and submitted to ETHOnline 2026 (Round 1 judging: Hedera, World, ENS).',
    capabilities: [
      'Policy controls and pre-settlement approvals for agent payments',
      'Budgets and granular spend scoping per agent',
      'Kill switch to instantly halt an agent’s spending authority',
      'Hash-chained audit ledger with verifiable receipts for every decision',
      'Built on x402 + MCP — works with agents that pay for things directly',
    ],
    howItWorks: [
      { step: 'Intercept', detail: 'An AI agent requests a payment through the x402/MCP payment rail.' },
      { step: 'Evaluate', detail: 'SpendVeto checks the request against policy, budget, and spend-scope rules.' },
      { step: 'Gate', detail: 'The transaction is approved, blocked, or escalated — before anything settles.' },
      { step: 'Record', detail: 'Every decision is written to a hash-chained, verifiable audit ledger.' },
    ],
    technology: ['x402 payment protocol', 'MCP (Model Context Protocol)', 'Policy engine & budget scoping', 'Hash-chained audit ledger'],
    metrics: [
      { value: 'Open Source', label: 'License Model' },
      { value: 'x402 + MCP', label: 'Built On' },
      { value: 'ETHOnline 2026', label: 'Round 1 Judging' },
    ],
  },
];

export const pillars = [
  {
    title: 'AI & Intelligent Systems',
    desc: 'Autonomous multi-agent platforms that reason, plan, and execute production-grade software work under deterministic constraints.',
  },
  {
    title: 'Digital Products',
    desc: 'High-density developer tools that eliminate fragmentation — replacing many brittle point solutions with one unified, reliable engine.',
  },
  {
    title: 'Autonomous & Emerging Technologies',
    desc: 'Ongoing R&D into edge intelligence, deterministic verification, and the next layer of autonomous engineering infrastructure.',
  },
];

export const philosophy = [
  {
    num: '01 / AGENCY',
    title: 'Autonomous Agency',
    desc: 'We do not build thin wrappers or toy prompts. We architect production-grade multi-agent loops that plan, write, verify, and ship real code under deterministic constraints.',
  },
  {
    num: '02 / RIGOR',
    title: 'Mathematical Rigor',
    desc: 'From sub-millisecond API chaos injection in Flasqo to deterministic AST verification in Evolune OS, our algorithms are built on foundational computation.',
  },
  {
    num: '03 / DENSITY',
    title: 'Radical Simplicity',
    desc: 'Flasqo replaces 13 fragmented testing tools with one unified interface. We ruthlessly eliminate dependency bloat and cognitive friction for engineering teams.',
  },
  {
    num: '04 / VELOCITY',
    title: 'Relentless Execution',
    desc: 'Founded in February 2025, recognised by DPIIT, and winner of IIT Madras I-Summit with a PitchArena finals run in our first year. We measure success strictly by software that actually ships.',
  },
];

export function statusBadgeClass(status: Product['status']): string {
  if (status === 'Live' || status === 'Live · Open Source') {
    return 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/30';
  }
  return 'bg-amber-400/10 text-amber-300 border border-amber-400/30';
}

export const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/technology', label: 'Technology' },
  { href: '/projects', label: 'Projects' },
  { href: '/careers', label: 'Careers' },
];
