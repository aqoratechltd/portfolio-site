import { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  // ── AI SaaS (3) ──────────────────────────────────────────────────────────
  {
    id: '1',
    slug: 'omnipulse-ai',
    title: 'OmniPulse — AI Support Automation',
    client: 'OmniPulse',
    category: 'AI SaaS',
    summary: 'An enterprise-grade AI support platform that resolves 80% of tickets autonomously using a fine-tuned LLM trained on product documentation and historical conversations.',
    challenge: 'The client\'s support team was drowning in 12,000 monthly tickets with a 19-hour average response time — directly hurting NPS and causing enterprise churn.',
    solution: 'We built a Next.js 14 dashboard with a fine-tuned GPT-4o model trained on 3 years of resolved tickets. A confidence-threshold router escalates edge cases to human agents, while a live analytics layer tracks deflection rate and CSAT in real time.',
    results: [
      { metric: '80%', value: '80%', description: 'Tickets resolved autonomously' },
      { metric: '4 min', value: '4 min', description: 'Average first response (was 19 hrs)' },
      { metric: '+41pts', value: '+41pts', description: 'NPS improvement in 60 days' }
    ],
    techStack: ['Next.js 14', 'OpenAI GPT-4o', 'Pinecone', 'PostgreSQL', 'Intercom API', 'Redis'],
    duration: '3 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/omnipulse-cover.jpg',
    screenshots: [],
    featured: true,
    metaTitle: 'OmniPulse AI Support Automation Case Study - Veltrix',
    metaDescription: 'Fine-tuned AI support platform resolving 80% of tickets autonomously and lifting NPS by 41 points.'
  },
  {
    id: '7',
    slug: 'ai-content-studio',
    title: 'ContentForge — AI Writing Studio',
    client: 'ContentForge',
    category: 'AI SaaS',
    summary: 'A multi-model AI writing platform with brand voice training, SEO scoring, and team collaboration workflows.',
    challenge: 'Marketers were spending 6+ hours per piece of content juggling multiple disconnected tools for ideation, drafting, SEO, and approval flows.',
    solution: 'We built a unified Next.js 14 editor integrating GPT-4o and Claude 3 behind a custom model-router, with real-time co-editing via Liveblocks and an integrated Semrush SEO panel.',
    results: [
      { metric: '5×', value: '5×', description: 'Content output increase per team' },
      { metric: '40%', value: '40%', description: 'Faster SEO ranking uplift' },
      { metric: '1,200+', value: '1,200+', description: 'Active teams at launch' }
    ],
    techStack: ['Next.js 14', 'OpenAI GPT-4o', 'Claude API', 'Liveblocks', 'PostgreSQL'],
    duration: '3 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/ai-content-studio-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'ContentForge AI Writing Studio Case Study - Veltrix',
    metaDescription: 'How we built a multi-model AI writing platform that 5× team content output.'
  },
  {
    id: '8',
    slug: 'neurocrm',
    title: 'NeuroCRM — Predictive Sales Platform',
    client: 'NeuroCRM Inc.',
    category: 'AI SaaS',
    summary: 'A B2B CRM augmented with predictive lead scoring, churn detection, and AI-generated outreach — replacing the human guesswork in sales pipelines.',
    challenge: 'Sales reps wasted 70% of time chasing cold leads. The existing CRM had no intelligence layer to prioritise pipeline or trigger personalised follow-ups automatically.',
    solution: 'We built a React + FastAPI platform with a custom ML pipeline (XGBoost lead scorer + fine-tuned GPT email generator). Zapier and HubSpot sync kept legacy data intact during rollout.',
    results: [
      { metric: '38%', value: '38%', description: 'Increase in deal close rate' },
      { metric: '3×', value: '3×', description: 'Faster lead response time' },
      { metric: '$1.4M', value: '$1.4M', description: 'Additional ARR in first quarter' }
    ],
    techStack: ['React', 'FastAPI', 'XGBoost', 'OpenAI', 'PostgreSQL', 'HubSpot API'],
    duration: '4 Months',
    teamSize: '5 Engineers',
    coverImage: '/case-studies/neurocrm-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'NeuroCRM Predictive Sales Case Study - Veltrix',
    metaDescription: 'AI-augmented CRM that drove a 38% increase in deal close rates.'
  },

  // ── E-Commerce (4) ──────────────────────────────────────────────────────
  {
    id: '2',
    slug: 'bazisto',
    title: 'Bazisto — E-Commerce Platform',
    client: 'Bazisto',
    category: 'E-Commerce',
    summary: 'A localized, scalable B2B/B2C marketplace engineered for high performance and regional payment integrations.',
    challenge: 'Existing platforms lacked crucial local fintech integrations (JazzCash, EasyPaisa) and real-time vendor communications.',
    solution: 'A Next.js 14 multi-vendor platform powered by a robust Node/Express backend. We included a complex real-time messaging layer and 50+ custom endpoint APIs.',
    results: [
      { metric: '50+', value: '50+ APIs', description: 'Custom endpoints developed' },
      { metric: 'Real-time', value: 'Real-time', description: 'Sub-second vendor chat latency' },
      { metric: '3', value: '3 Payment Gateways', description: 'Seamlessly integrated' }
    ],
    techStack: ['Next.js 14', 'Node/Express', 'MongoDB', 'Firebase', 'JazzCash', 'EasyPaisa'],
    duration: '3 Months',
    teamSize: '5 Engineers',
    coverImage: '/case-studies/bazisto-cover.jpg',
    screenshots: [],
    featured: true,
    metaTitle: 'Bazisto E-Commerce Platform Case Study - Veltrix',
    metaDescription: 'Building a complex B2B/B2C online marketplace with local payment flows.'
  },
  {
    id: '9',
    slug: 'luxehive',
    title: 'LuxeHive — Luxury Fashion Marketplace',
    client: 'LuxeHive Ltd.',
    category: 'E-Commerce',
    summary: 'A white-glove luxury fashion marketplace with AR try-on, authenticated resale, and a private-sale auction engine.',
    challenge: 'Luxury buyers demand trust and exclusivity. The client needed authentication workflows, AR previews, and a timed-auction mechanic that existing SaaS platforms could not provide.',
    solution: 'We built a headless commerce stack on Next.js 14 + Medusa.js with a WebGL AR try-on viewer (Three.js), an in-house Stripe-powered auction engine, and a blockchain certificate-of-authenticity issuer.',
    results: [
      { metric: '£4.2M', value: '£4.2M', description: 'GMV in first 90 days' },
      { metric: '22%', value: '22%', description: 'Add-to-cart lift from AR feature' },
      { metric: '0', value: '0', description: 'Fraudulent listings post-launch' }
    ],
    techStack: ['Next.js 14', 'Medusa.js', 'Three.js', 'Stripe', 'Polygon', 'Algolia'],
    duration: '4 Months',
    teamSize: '6 Engineers',
    coverImage: '/case-studies/luxehive-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'LuxeHive Luxury Marketplace Case Study - Veltrix',
    metaDescription: 'Headless luxury marketplace with AR try-on generating £4.2M GMV in 90 days.'
  },
  {
    id: '10',
    slug: 'craftdrop',
    title: 'CraftDrop — Print-on-Demand Store Builder',
    client: 'CraftDrop',
    category: 'E-Commerce',
    summary: 'A self-serve store builder letting creators launch print-on-demand shops in minutes with AI product mockup generation.',
    challenge: 'Creators without technical skills struggled to launch and manage POD stores across Printful, Printify, and Gelato simultaneously, while tracking margins per variant.',
    solution: 'We built a drag-and-drop store builder with a unified fulfillment API layer, a DALL-E 3 mockup generator, and a real-time profit dashboard — all under a single Next.js 15 + tRPC monorepo.',
    results: [
      { metric: '8 min', value: '8 min', description: 'Average store launch time' },
      { metric: '3 Providers', value: '3 Providers', description: 'Unified fulfillment layer' },
      { metric: '2,800+', value: '2,800+', description: 'Stores created in beta' }
    ],
    techStack: ['Next.js 15', 'tRPC', 'Prisma', 'OpenAI DALL-E 3', 'Stripe Connect', 'Redis'],
    duration: '3.5 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/craftdrop-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'CraftDrop Store Builder Case Study - Veltrix',
    metaDescription: 'AI-powered print-on-demand store builder with unified multi-provider fulfillment.'
  },
  {
    id: '11',
    slug: 'grocify',
    title: 'Grocify — Hyperlocal Grocery Delivery',
    client: 'Grocify',
    category: 'E-Commerce',
    summary: 'A 10-minute grocery delivery platform with dynamic dark-store routing, live driver tracking, and ML-based inventory prediction.',
    challenge: 'Competitors were losing 18% of orders to stockouts. The client needed predictive restocking and a dispatcher algorithm that could assign riders to minimize delivery windows.',
    solution: 'We engineered a React Native shopper app, a Next.js merchant dashboard, and a Python microservice that runs a real-time VRP solver for rider dispatch — all fed by an ML demand-forecast model.',
    results: [
      { metric: '9.4 min', value: '9.4 min', description: 'Average delivery time' },
      { metric: '94%', value: '94%', description: 'In-stock rate (up from 82%)' },
      { metric: '4.8★', value: '4.8★', description: 'App store rating' }
    ],
    techStack: ['Next.js 14', 'React Native', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Google Maps'],
    duration: '5 Months',
    teamSize: '7 Engineers',
    coverImage: '/case-studies/grocify-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'Grocify Hyperlocal Grocery Delivery Case Study - Veltrix',
    metaDescription: '10-minute grocery delivery platform with ML-based inventory prediction and 9.4-minute avg delivery.'
  },

  // ── FinTech SaaS (4) ─────────────────────────────────────────────────────
  {
    id: '3',
    slug: 'investor-panel',
    title: 'InvestorPanel — Multi-Tenant SaaS',
    client: 'Confidential FinTech Startup',
    category: 'FinTech SaaS',
    summary: 'A secure, multi-tenant portal for financial stakeholders to track investments in real-time.',
    challenge: 'Security and real-time data sync were critical, requiring strict role-based access control and high-performance querying.',
    solution: 'We architected a NestJS backend utilizing JWT and Firebase Auth for iron-clad security. The Next.js frontend delivers live-updating charts and segmented role dashboards.',
    results: [
      { metric: '3 Roles', value: '3 Access Levels', description: 'Dynamic permission trees' },
      { metric: '99.99%', value: '99.99%', description: 'Uptime achieved for real-time sync' },
      { metric: '< 200ms', value: '< 200ms', description: 'Average API response time' }
    ],
    techStack: ['Next.js 14', 'NestJS', 'Firestore', 'Firebase Auth', 'JWT'],
    duration: '4 Months',
    teamSize: '3 Engineers',
    coverImage: '/case-studies/investor-panel-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'InvestorPanel FinTech Case Study - Veltrix',
    metaDescription: 'Secure real-time investment tracking portal for FinTech startups.'
  },
  {
    id: '12',
    slug: 'payshift',
    title: 'PayShift — Global Payroll Engine',
    client: 'PayShift',
    category: 'FinTech SaaS',
    summary: 'A multi-currency payroll platform covering 28 countries with automated tax filing, contractor management, and real-time FX conversion.',
    challenge: 'Managing payroll across jurisdictions meant teams were manually tracking compliance for each country — a process error-prone enough to generate legal exposure.',
    solution: 'We built a NestJS microservice architecture with a dedicated compliance engine that pulls live tax rules from a headless CMS, a Wise API integration for FX payouts, and a full audit trail on Supabase.',
    results: [
      { metric: '28', value: '28 Countries', description: 'Supported at launch' },
      { metric: '99.8%', value: '99.8%', description: 'Payroll accuracy rate' },
      { metric: '3 hrs', value: '3 hrs', description: 'Saved per pay cycle per HR manager' }
    ],
    techStack: ['NestJS', 'Next.js 14', 'Supabase', 'Wise API', 'Stripe', 'Sanity CMS'],
    duration: '5 Months',
    teamSize: '5 Engineers',
    coverImage: '/case-studies/payshift-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'PayShift Global Payroll Case Study - Veltrix',
    metaDescription: 'Multi-currency payroll platform covering 28 countries with automated compliance.'
  },
  {
    id: '13',
    slug: 'vaultledger',
    title: 'VaultLedger — SMB Accounting Suite',
    client: 'VaultLedger',
    category: 'FinTech SaaS',
    summary: 'A QuickBooks alternative built for emerging-market SMBs with bank-feed reconciliation, VAT filing, and an AI bookkeeper chatbot.',
    challenge: 'Existing accounting tools were priced for Western markets and lacked integration with regional banks. SMBs were using spreadsheets and missing VAT deadlines.',
    solution: 'We built a full double-entry accounting engine in TypeScript, connected to 60+ bank feeds via Plaid and local open-banking APIs. An embedded Gemini-powered chatbot answers bookkeeping questions in plain language.',
    results: [
      { metric: '60+', value: '60+ Banks', description: 'Direct feed integrations' },
      { metric: '18 min', value: '18 min', description: 'Average monthly close time' },
      { metric: '100%', value: '100%', description: 'On-time VAT filing rate for clients' }
    ],
    techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Plaid', 'Google Gemini', 'Stripe'],
    duration: '4.5 Months',
    teamSize: '5 Engineers',
    coverImage: '/case-studies/vaultledger-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'VaultLedger SMB Accounting Case Study - Veltrix',
    metaDescription: 'AI-assisted accounting suite for emerging-market SMBs with 60+ bank integrations.'
  },
  {
    id: '14',
    slug: 'tradepilot',
    title: 'TradePilot — Algo Trading Dashboard',
    client: 'Confidential',
    category: 'FinTech SaaS',
    summary: 'A professional-grade algorithmic trading cockpit with strategy backtesting, live execution via broker APIs, and real-time P&L analytics.',
    challenge: 'Quant traders were building custom tooling from scratch for every strategy. They needed a unified platform to write, test, and deploy algos without rewriting infrastructure.',
    solution: 'We created a React dashboard backed by a FastAPI execution server connected to Interactive Brokers and Alpaca. Strategies are written in a sandboxed Python editor and backtested against 10 years of tick data on ClickHouse.',
    results: [
      { metric: '10 yrs', value: '10 yrs', description: 'Tick data for backtesting' },
      { metric: '< 50ms', value: '< 50ms', description: 'Live order execution latency' },
      { metric: '4×', value: '4×', description: 'Faster strategy iteration cycle' }
    ],
    techStack: ['React', 'FastAPI', 'Python', 'ClickHouse', 'Interactive Brokers API', 'Redis'],
    duration: '4 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/tradepilot-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'TradePilot Algo Trading Dashboard Case Study - Veltrix',
    metaDescription: 'Professional algo trading cockpit with sub-50ms live order execution.'
  },

  // ── AI EdTech (3) ─────────────────────────────────────────────────────────
  {
    id: '4',
    slug: 'learnloop',
    title: 'LearnLoop — Adaptive Micro-Learning',
    client: 'LearnLoop',
    category: 'AI EdTech',
    summary: 'A bite-sized adaptive learning platform that delivers 5-minute daily lessons tailored to each learner\'s pace, gaps, and career goals using a reinforcement-learning recommendation engine.',
    challenge: 'Traditional e-learning courses had a 6% completion rate. Learners abandoned long-form video content because it did not fit into busy schedules or adapt when they already knew certain material.',
    solution: 'We built a React Native + Next.js platform with a spaced-repetition engine backed by a custom RL model. Every lesson card adapts in real time based on response latency, accuracy, and self-reported confidence — surfacing weak spots before the learner notices them.',
    results: [
      { metric: '74%', value: '74%', description: 'Course completion rate (industry avg: 6%)' },
      { metric: '5 min', value: '5 min', description: 'Average daily session — zero friction' },
      { metric: '3.2×', value: '3.2×', description: 'Knowledge retention vs. traditional video' }
    ],
    techStack: ['Next.js 14', 'React Native', 'Python', 'PostgreSQL', 'Redis', 'OpenAI', 'Supabase'],
    duration: '3 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/learnloop-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'LearnLoop Adaptive Micro-Learning Case Study - Veltrix',
    metaDescription: 'RL-powered micro-learning platform achieving 74% completion rate vs. the 6% industry average.'
  },
  {
    id: '15',
    slug: 'skillsync-ai',
    title: 'SkillSync AI — Corporate L&D Platform',
    client: 'SkillSync',
    category: 'AI EdTech',
    summary: 'An enterprise learning & development platform that generates bespoke training paths from employee skill-gap assessments using AI.',
    challenge: 'L&D teams were spending weeks manually curating training content per role. Generic courses had poor completion rates because they were not personalized to individual gaps.',
    solution: 'We built a React + Node platform with an AI assessment engine (Claude API) that maps gaps, recommends a ranked course sequence, and generates micro-learning content via a fine-tuned GPT model.',
    results: [
      { metric: '72%', value: '72%', description: 'Course completion rate (up from 31%)' },
      { metric: '2 days', value: '2 days', description: 'Time to generate full L&D plan (was 3 wks)' },
      { metric: '600+', value: '600+', description: 'Enterprise employees onboarded in pilot' }
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Claude API', 'OpenAI', 'Stripe'],
    duration: '3 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/skillsync-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'SkillSync AI Corporate L&D Case Study - Veltrix',
    metaDescription: 'AI-powered corporate L&D platform that lifted course completion from 31% to 72%.'
  },
  {
    id: '16',
    slug: 'tutorbot',
    title: 'TutorBot — Real-Time AI Math Tutor',
    client: 'TutorBot Inc.',
    category: 'AI EdTech',
    summary: 'A real-time conversational math tutor for K-12 students with step-by-step worked solutions, progress analytics, and Socratic-style probing.',
    challenge: 'Students using generic AI chatbots for homework were getting answers without understanding — reinforcing wrong mental models instead of building conceptual fluency.',
    solution: 'We engineered a purpose-built tutoring engine on top of Claude that enforces a Socratic scaffolding policy (never give the answer outright), tracks concept mastery per topic, and surfaces teacher dashboards.',
    results: [
      { metric: '28%', value: '28%', description: 'Improvement in test scores over 8 weeks' },
      { metric: '15 min', value: '15 min', description: 'Average daily engagement per student' },
      { metric: '4.9★', value: '4.9★', description: 'Parent satisfaction rating' }
    ],
    techStack: ['Next.js 14', 'Claude API', 'Supabase', 'KaTeX', 'Stripe', 'Vercel AI SDK'],
    duration: '2 Months',
    teamSize: '3 Engineers',
    coverImage: '/case-studies/tutorbot-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'TutorBot AI Math Tutor Case Study - Veltrix',
    metaDescription: 'Socratic AI math tutor delivering 28% test score improvements over 8 weeks.'
  },

  // ── SaaS Platform (4) ─────────────────────────────────────────────────────
  {
    id: '5',
    slug: 'nexus-workspace',
    title: 'NexusWS — Remote Team OS',
    client: 'NexusWS',
    category: 'SaaS Platform',
    summary: 'An all-in-one remote team workspace combining async video updates, structured documentation, HR workflows, and org-wide goal tracking under one roof.',
    challenge: 'A 300-person fully remote company was losing cohesion — scattered across Notion, Loom, BambooHR, and Lattice with no single source of truth for who owns what or how the company is performing.',
    solution: 'We built a Next.js 15 + Supabase real-time platform with role-based org trees, async video threads (WebRTC recording + Cloudflare R2 storage), an OKR engine with cascade alignment, and an HR module covering onboarding, PTO, and reviews.',
    results: [
      { metric: '4 Tools', value: '4 Tools', description: 'Fully replaced per team' },
      { metric: '31%', value: '31%', description: 'Increase in cross-team project visibility' },
      { metric: '$8K/yr', value: '$8K/yr', description: 'SaaS cost saved per 50-person team' }
    ],
    techStack: ['Next.js 15', 'Supabase', 'WebRTC', 'Cloudflare R2', 'TypeScript', 'Framer Motion'],
    duration: '4 Months',
    teamSize: '5 Engineers',
    coverImage: '/case-studies/nexus-workspace-cover.jpg',
    screenshots: [],
    featured: true,
    metaTitle: 'NexusWS Remote Team OS Case Study - Veltrix',
    metaDescription: 'All-in-one remote team OS that replaced 4 tools and saved $8K/yr per 50-person team.'
  },
  {
    id: '17',
    slug: 'teamhub',
    title: 'TeamHub — Project Management Suite',
    client: 'TeamHub',
    category: 'SaaS Platform',
    summary: 'A Notion/Linear hybrid with AI-generated sprint plans, deep Git integration, and a real-time collaborative whiteboard.',
    challenge: 'Dev teams were context-switching across Jira, Notion, Slack, and GitHub. The fragmentation was costing an estimated 90 minutes per engineer per day in tool overhead.',
    solution: 'We built a unified workspace with a block-based editor (custom Tiptap), a Kanban/timeline engine, Liveblocks-powered whiteboard, and an AI sprint planner that reads your GitHub backlog.',
    results: [
      { metric: '90 min', value: '90 min/day', description: 'Tool-switching time reclaimed per engineer' },
      { metric: '3 Tools', value: '3 Tools', description: 'Replaced per team on average' },
      { metric: '4,500+', value: '4,500+', description: 'Teams using within 6 months' }
    ],
    techStack: ['Next.js 14', 'Tiptap', 'Liveblocks', 'Supabase', 'GitHub API', 'OpenAI'],
    duration: '5 Months',
    teamSize: '6 Engineers',
    coverImage: '/case-studies/teamhub-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'TeamHub Project Management Case Study - Veltrix',
    metaDescription: 'AI-assisted project management suite that eliminated 90 min/day of tool-switching.'
  },
  {
    id: '18',
    slug: 'devops-dashboard',
    title: 'OpsLens — DevOps Observability Platform',
    client: 'OpsLens',
    category: 'SaaS Platform',
    summary: 'A unified DevOps observability platform aggregating metrics, logs, traces, and deployment events into a single pane of glass with AI-assisted incident triage.',
    challenge: 'Engineering teams were alert-fatigued — receiving 800+ alerts per day from six different monitoring tools with no unified correlation or intelligent suppression.',
    solution: 'We built a Go ingest pipeline handling 2M events/sec, a React dashboard with custom time-series charts (d3.js), and an LLM-based alert correlator that groups and explains incident clusters.',
    results: [
      { metric: '94%', value: '94%', description: 'Alert noise reduction' },
      { metric: '2M/s', value: '2M events/s', description: 'Ingest throughput' },
      { metric: '8 min', value: '8 min', description: 'Mean time to resolution (was 47 min)' }
    ],
    techStack: ['Go', 'React', 'ClickHouse', 'd3.js', 'OpenTelemetry', 'Kafka', 'OpenAI'],
    duration: '5 Months',
    teamSize: '5 Engineers',
    coverImage: '/case-studies/devops-dashboard-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'OpsLens DevOps Observability Case Study - Veltrix',
    metaDescription: 'AI-powered observability platform cutting alert noise by 94% and MTTR to 8 minutes.'
  },
  {
    id: '19',
    slug: 'clientportal',
    title: 'ClientPortal — Agency Client Hub',
    client: 'Multiple Agency Clients',
    category: 'SaaS Platform',
    summary: 'A white-label client portal SaaS letting digital agencies give every client a branded project dashboard, approval flows, and invoice management.',
    challenge: 'Agencies were managing client communications across email, Slack, Drive, and PDF invoices — creating a chaotic experience that eroded client trust and delayed approvals.',
    solution: 'We built a Next.js 14 multi-tenant SaaS with per-agency white-labelling (custom domain, colors, logo), a structured approval workflow engine, and Stripe-powered invoice payments.',
    results: [
      { metric: '3 days', value: '3 days', description: 'Faster project approval cycle' },
      { metric: '100%', value: '100%', description: 'On-time invoice collection rate' },
      { metric: '320+', value: '320+', description: 'Agencies using the platform' }
    ],
    techStack: ['Next.js 14', 'Prisma', 'PostgreSQL', 'Stripe', 'Resend', 'Cloudflare Workers'],
    duration: '3 Months',
    teamSize: '3 Engineers',
    coverImage: '/case-studies/clientportal-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'ClientPortal Agency Hub Case Study - Veltrix',
    metaDescription: 'White-label client portal SaaS powering 320+ digital agencies.'
  },

  // ── Blockchain (4) ────────────────────────────────────────────────────────
  {
    id: '6',
    slug: 'defi-yield-protocol',
    title: 'DeFi Yield Protocol',
    client: 'Confidential Web3 Client',
    category: 'Blockchain',
    summary: 'A decentralized finance protocol offering staking and yield farming with deeply optimized, fully audited smart contracts.',
    challenge: 'Security is paramount in Web3. The client needed mathematically proven smart contracts that minimized gas fees while guarding against flash-loan and reentrancy attacks.',
    solution: 'We wrote robust Solidity contracts and tested them relentlessly via Hardhat. The React front-end interacts via ethers.js, pulling subgraph data instantly via The Graph.',
    results: [
      { metric: '$2M+', value: '$2M+', description: 'Total Value Locked at launch' },
      { metric: 'Zero', value: 'Zero', description: 'Vulnerabilities found in final audit' },
      { metric: '-25%', value: '-25%', description: 'Gas cost reduction post-optimization' }
    ],
    techStack: ['Solidity', 'Hardhat', 'React', 'ethers.js', 'The Graph', 'IPFS'],
    duration: '3 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/defi-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'DeFi Yield Protocol Setup Case Study - Veltrix',
    metaDescription: 'Secure and audited yield farming platform launching with over $2M TVL.'
  },
  {
    id: '20',
    slug: 'nft-marketplace',
    title: 'PixelVault — NFT Marketplace',
    client: 'PixelVault',
    category: 'Blockchain',
    summary: 'A gas-optimized NFT marketplace with lazy minting, royalty enforcement at the contract level, and an AI rarity scorer for collections.',
    challenge: 'Creators on OpenSea were losing 5–10% to gas fees on low-value mints, and royalties were routinely bypassed by aggregators — undermining creator economics.',
    solution: 'We wrote ERC-721A contracts with lazy-mint support (gas savings of up to 60%), implemented EIP-2981 royalties enforced on-chain, and a Python AI service that scores NFT trait rarity on upload.',
    results: [
      { metric: '60%', value: '60%', description: 'Gas savings via ERC-721A lazy mint' },
      { metric: '100%', value: '100%', description: 'Royalty enforcement rate' },
      { metric: '$850K', value: '$850K', description: 'Volume traded in first 30 days' }
    ],
    techStack: ['Solidity', 'ERC-721A', 'Hardhat', 'Next.js 14', 'ethers.js', 'IPFS', 'Python'],
    duration: '2.5 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/nft-marketplace-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'PixelVault NFT Marketplace Case Study - Veltrix',
    metaDescription: 'Gas-optimized NFT marketplace with on-chain royalty enforcement and $850K first-month volume.'
  },
  {
    id: '21',
    slug: 'dao-governance',
    title: 'SynapseDAO — On-Chain Governance',
    client: 'SynapseDAO',
    category: 'Blockchain',
    summary: 'A full on-chain governance system with delegated voting, timelock execution, and a React proposal portal for non-technical token holders.',
    challenge: 'DAO proposals were passing with less than 4% voter participation due to a complex governance UI that required CLI knowledge — creating a plutocracy risk.',
    solution: 'We built Governor Bravo-compatible contracts with gasless voting via EIP-712 signatures, a React voting portal with wallet connect, and a Discord bot that pushes proposals as threads for passive notification.',
    results: [
      { metric: '31%', value: '31%', description: 'Average voter participation (up from 4%)' },
      { metric: 'Gasless', value: 'Gasless', description: 'Voting via EIP-712 signatures' },
      { metric: '12,000+', value: '12,000+', description: 'Token holders onboarded to portal' }
    ],
    techStack: ['Solidity', 'Governor Bravo', 'Hardhat', 'React', 'wagmi', 'viem', 'Discord API'],
    duration: '2 Months',
    teamSize: '3 Engineers',
    coverImage: '/case-studies/dao-governance-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'SynapseDAO Governance Case Study - Veltrix',
    metaDescription: 'On-chain governance portal that raised voter participation from 4% to 31%.'
  },
  {
    id: '22',
    slug: 'token-launchpad',
    title: 'LaunchX — Token IDO Launchpad',
    client: 'LaunchX',
    category: 'Blockchain',
    summary: 'A permissioned IDO launchpad with KYC gating, tiered allocation mechanics, vesting schedules, and a real-time raise dashboard.',
    challenge: 'Previous IDOs were plagued by bot sniping and whale concentration, causing retail backlash. The client needed a fairer, gated distribution mechanism with verifiable allocation logic.',
    solution: 'We built a Solidity IDO contract suite with a Merkle-proof whitelist, tier-based allocation, linear vesting cliffs, and a Chainlink VRF lottery for fair excess-demand resolution — backed by a Next.js dashboard.',
    results: [
      { metric: '$6.5M', value: '$6.5M', description: 'Raised across 4 IDOs' },
      { metric: '0', value: '0', description: 'Successful bot-snipe incidents' },
      { metric: '5,800+', value: '5,800+', description: 'Verified participants across IDOs' }
    ],
    techStack: ['Solidity', 'Chainlink VRF', 'Hardhat', 'Next.js 14', 'Synaps KYC', 'ethers.js'],
    duration: '3 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/token-launchpad-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'LaunchX IDO Launchpad Case Study - Veltrix',
    metaDescription: 'Fair-distribution IDO launchpad raising $6.5M across 4 launches with zero bot incidents.'
  },

  // ── Mobile Apps (3) ──────────────────────────────────────────────────────
  {
    id: '23',
    slug: 'healthtrack',
    title: 'HealthTrack — Chronic Care Companion',
    client: 'HealthTrack',
    category: 'Mobile App',
    summary: 'A React Native app for chronic illness management with symptom journaling, medication reminders, wearable sync, and an AI trend analyser.',
    challenge: 'Patients with conditions like diabetes and hypertension had no easy way to correlate lifestyle factors (sleep, diet, stress) with symptom spikes — leading to reactive rather than proactive care.',
    solution: 'We built a cross-platform React Native + Expo app integrating Apple Health and Google Fit. An on-device LLM (via Core ML) analyses multi-week trends and surfaces actionable insights without sending raw health data to the cloud.',
    results: [
      { metric: '87%', value: '87%', description: 'Medication adherence rate' },
      { metric: 'On-device', value: 'On-device', description: 'AI — zero raw health data sent to cloud' },
      { metric: '4.8★', value: '4.8★', description: 'App Store rating (2,400+ reviews)' }
    ],
    techStack: ['React Native', 'Expo', 'Apple HealthKit', 'Google Fit', 'Core ML', 'Firebase'],
    duration: '3.5 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/healthtrack-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'HealthTrack Chronic Care App Case Study - Veltrix',
    metaDescription: 'React Native chronic care companion with on-device AI and 87% medication adherence.'
  },
  {
    id: '24',
    slug: 'foodrunner',
    title: 'FoodRunner — Dark Kitchen Ordering App',
    client: 'FoodRunner',
    category: 'Mobile App',
    summary: 'A high-throughput food delivery app spanning 14 dark kitchen brands under a single checkout, with live order tracking and AI upsell recommendations.',
    challenge: 'Operating 14 virtual brands from the same kitchen created ordering confusion — customers could not discover complementary items across brands, capping average order value.',
    solution: 'We built a Flutter app with a unified multi-brand cart, a recommendation engine that suggests cross-brand combos, and a WebSocket-powered live order tracker with push notifications via FCM.',
    results: [
      { metric: '+34%', value: '+34%', description: 'Average order value via cross-brand upsell' },
      { metric: '2.1 min', value: '2.1 min', description: 'Average checkout time' },
      { metric: '65K+', value: '65K+', description: 'Downloads in first month' }
    ],
    techStack: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'FCM', 'Google Maps', 'Stripe'],
    duration: '3 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/foodrunner-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'FoodRunner Dark Kitchen App Case Study - Veltrix',
    metaDescription: 'Multi-brand food delivery app driving 34% AOV increase via AI cross-brand upsell.'
  },
  {
    id: '25',
    slug: 'fitcoach',
    title: 'FitCoach — AI Personal Trainer App',
    client: 'FitCoach',
    category: 'Mobile App',
    summary: 'An AI-powered fitness app generating adaptive weekly workout and nutrition plans based on biometric data, recovery scores, and progressive overload principles.',
    challenge: 'Generic fitness apps offer static plans that do not adapt to missed workouts, poor recovery, or plateauing strength — causing 80% of users to churn within 30 days.',
    solution: 'We built a React Native + Expo app with a custom adaptation engine: if the user logs poor sleep or missed sessions, the LLM re-plans the week. Progression graphs and form-check videos keep users engaged long-term.',
    results: [
      { metric: '68%', value: '68%', description: '90-day retention (industry avg: 18%)' },
      { metric: '4.9★', value: '4.9★', description: 'App Store & Play Store rating' },
      { metric: '120K+', value: '120K+', description: 'Active users after 6 months' }
    ],
    techStack: ['React Native', 'Expo', 'OpenAI', 'Supabase', 'RevenueCat', 'Apple HealthKit'],
    duration: '3 Months',
    teamSize: '4 Engineers',
    coverImage: '/case-studies/fitcoach-cover.jpg',
    screenshots: [],
    featured: false,
    metaTitle: 'FitCoach AI Personal Trainer App Case Study - Veltrix',
    metaDescription: 'AI fitness app achieving 68% 90-day retention — nearly 4× the industry average.'
  }
]
