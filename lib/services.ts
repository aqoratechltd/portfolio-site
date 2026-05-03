import { Service } from '@/types'

export const services: Service[] = [
  {
    id: '1',
    slug: 'ai-services',
    name: 'AI Services',
    shortDescription: 'Enterprise-grade AI integration and orchestration.',
    fullDescription: 'We help you harness the power of artificial intelligence to automate workflows, glean insights from complex data, and create intelligent experiences for your users.',
    category: 'AI',
    featured: true,
    icon: 'Brain',
    accentColor: '#6EE7B7',
    features: [
      'Custom LLM Integration',
      'AI Agent Development',
      'Natural Language Processing',
      'Computer Vision Systems',
      'Predictive Analytics',
      'Data Pipeline Orchestration',
      'Model Fine-Tuning',
      'AI API Development'
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Analyze your data landscape and identify high-ROI AI use cases.' },
      { step: 2, title: 'Prototyping', description: 'Build rapid AI models to validate feasibility and value.' },
      { step: 3, title: 'Development', description: 'Integrate the models into robust, scalable software architectures.' },
      { step: 4, title: 'Deployment', description: 'Deploy, monitor, and continuously improve model performance.' }
    ],
    techStack: ['OpenAI', 'LangChain', 'Pinecone', 'Python', 'TensorFlow', 'PyTorch'],
    relatedSlugs: ['generative-ai', 'system-design', 'saas-development', 'data-engineering'],
    metaTitle: 'AI Services & Integration - Veltrix',
    metaDescription: 'Enterprise-grade artificial intelligence solutions and seamless platform integrations.'
  },
  {
    id: '2',
    slug: 'generative-ai',
    name: 'Generative AI',
    shortDescription: 'Build creative, intelligent products using GenAI.',
    fullDescription: 'Leverage the latest in generative AI to create systems that can generate text, images, and complex multi-modal content tailored to your business needs.',
    category: 'AI',
    featured: true,
    icon: 'Sparkles',
    accentColor: '#A78BFA',
    features: [
      'Text Generation Workflows',
      'Image & Media Generation',
      'RAG (Retrieval-Augmented Generation)',
      'Custom Chatbot Development',
      'Dynamic Content Creation',
      'Prompt Engineering',
      'Voice & Audio Synthesis'
    ],
    process: [
      { step: 1, title: 'Use-Case Mapping', description: 'Identify workflows that can be automated via content generation.' },
      { step: 2, title: 'Infrastructure Setup', description: 'Configure APIs and vector databases for knowledge retrieval.' },
      { step: 3, title: 'Model Orchestration', description: 'Implement RAG and multi-agent workflows.' },
      { step: 4, title: 'Evaluation', description: 'Fine-tune prompts and output criteria for accuracy and tone.' }
    ],
    techStack: ['Claude', 'GPT-4o', 'Midjourney', 'Stable Diffusion', 'Weaviate'],
    relatedSlugs: ['ai-services', 'saas-development', 'cloud-solutions', 'video-editing'],
    metaTitle: 'Generative AI Solutions - Veltrix',
    metaDescription: 'Custom GenAI implementations featuring LLMs, RAG, and multimodal capabilities.'
  },
  {
    id: '3',
    slug: 'blockchain-crypto',
    name: 'Blockchain & Crypto',
    shortDescription: 'Secure Web3 protocols and decentralized applications.',
    fullDescription: 'We build audited, secure, and highly scalable Web3 infrastructure ranging from smart contracts to full DeFi protocols and NFT marketplaces.',
    category: 'Web3',
    featured: true,
    icon: 'Hexagon',
    accentColor: '#60A5FA',
    features: [
      'Smart Contract Development',
      'DeFi Protocol Design',
      'NFT Marketplaces',
      'Tokenomics & Token Creation',
      'Wallet Integrations',
      'Web3 DApps',
      'Layer 2 Scaling Solutions',
      'Security Audits'
    ],
    process: [
      { step: 1, title: 'Architecture Design', description: 'Map out on-chain and off-chain system architecture.' },
      { step: 2, title: 'Smart Contract Coding', description: 'Write secure, gas-optimized Solidity/Rust code.' },
      { step: 3, title: 'Testnet & Audits', description: 'Deploy to testnets and perform rigorous security checks.' },
      { step: 4, title: 'Mainnet Launch', description: 'Seamless deployment and ongoing protocol monitoring.' }
    ],
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'React', 'The Graph', 'IPFS'],
    relatedSlugs: ['fintech', 'system-design', 'infrastructure', 'web-development'],
    metaTitle: 'Blockchain & Web3 Development - Veltrix',
    metaDescription: 'Secure smart contracts, dApps, and DeFi protocols crafted by Web3 experts.'
  },
  {
    id: '4',
    slug: 'saas-development',
    name: 'SaaS Development',
    shortDescription: 'Scalable cloud software platforms built for revenue.',
    fullDescription: 'From multi-tenant architectures to billing integrations, we develop high-performance SaaS applications with world-class user experiences.',
    category: 'Engineering',
    featured: false,
    icon: 'Cloud',
    accentColor: '#FB923C',
    features: [
      'Multi-Tenant Architecture',
      'Subscription Billing (Stripe)',
      'Advanced User Dashboards',
      'Role-Based Access Control',
      'API Development',
      'Serverless Deployments',
      'Analytics & Reporting',
      'Real-Time Sync'
    ],
    process: [
      { step: 1, title: 'Product Strategy', description: 'Define the MVP scope and unit economics.' },
      { step: 2, title: 'UI/UX Design', description: 'Create high-converting user interfaces and dashboards.' },
      { step: 3, title: 'Core Development', description: 'Build the foundational infrastructure and core features.' },
      { step: 4, title: 'Beta & Launch', description: 'Release to early adopters, gather feedback, and scale.' }
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    relatedSlugs: ['web-development', 'system-design', 'cloud-solutions', 'fintech'],
    metaTitle: 'Custom SaaS Development - Veltrix',
    metaDescription: 'B2B and B2C scalable SaaS platforms developed using modern tech stacks.'
  },
  {
    id: '5',
    slug: 'web-development',
    name: 'Web Development',
    shortDescription: 'High-performance websites and web applications.',
    fullDescription: 'We craft stunning, responsive, and SEO-optimized web experiences designed to engage your audience and drive measurable business results.',
    category: 'Engineering',
    featured: false,
    icon: 'Globe',
    accentColor: '#F472B6',
    features: [
      'Full-Stack Web Apps',
      'Responsive UI/UX Design',
      'SEO & Performance Tuning',
      'Headless CMS Integration',
      'E-commerce Capabilities',
      'Progressive Web Apps (PWAs)',
      'Accessibility Compliance',
      'Web Animations'
    ],
    process: [
      { step: 1, title: 'Wireframing', description: 'Build structural layouts focused on user journeys.' },
      { step: 2, title: 'Design & Prototyping', description: 'Apply branding, typography, and visual interactions.' },
      { step: 3, title: 'Frontend & Backend', description: 'Code the logic, connect APIs, and optimize performance.' },
      { step: 4, title: 'QA & Go-Live', description: 'Cross-browser testing, accessibility checks, and final server deployment.' }
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vercel'],
    relatedSlugs: ['ecommerce', 'saas-development', 'app-development', 'qa-testing'],
    metaTitle: 'Modern Web Development - Veltrix',
    metaDescription: 'Fast, secure, and visually breathtaking web platforms.'
  },
  {
    id: '6',
    slug: 'app-development',
    name: 'App Development',
    shortDescription: 'Native and cross-platform mobile experiences.',
    fullDescription: 'Launch iOS and Android apps with beautiful interfaces, fluid animations, and robust backend integrations that users love.',
    category: 'Mobile',
    featured: false,
    icon: 'Smartphone',
    accentColor: '#34D399',
    features: [
      'iOS & Android Apps',
      'Cross-Platform Development',
      'Native Device Features',
      'App Store Optimization',
      'Offline Support',
      'Push Notifications',
      'Mobile Performance Tuning',
      'Complex UI Animations'
    ],
    process: [
      { step: 1, title: 'Concept Validation', description: 'Define the mobile use case and feature set.' },
      { step: 2, title: 'Mobile UI/UX', description: 'Design native-feeling interactions and touch workflows.' },
      { step: 3, title: 'Engineering', description: 'Build the application natively or cross-platform.' },
      { step: 4, title: 'App Store Launch', description: 'Navigate the submission process for App Store and Google Play.' }
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    relatedSlugs: ['web-development', 'saas-development', 'system-design', 'ecommerce'],
    metaTitle: 'Mobile App Development - Veltrix',
    metaDescription: 'Engaging, fast, and scalable mobile apps for iOS and Android.'
  },
  {
    id: '7',
    slug: 'cloud-solutions',
    name: 'Cloud Solutions',
    shortDescription: 'Scalable, secure, and resilient cloud infrastructure.',
    fullDescription: 'Migrate, manage, and optimize your systems in the cloud. We handle complex DevOps, Kubernetes orchestration, and serverless transitions.',
    category: 'Engineering',
    featured: false,
    icon: 'CloudLightning',
    accentColor: '#38BDF8',
    features: [
      'Cloud Migration',
      'Serverless Architectures',
      'CI/CD Pipelines',
      'Containerization (Docker)',
      'Kubernetes Orchestration',
      'Cloud Security',
      'Cost Optimization',
      'Infrastructure as Code'
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Audit current infrastructure and identify bottlenecks.' },
      { step: 2, title: 'Architecture Planning', description: 'Design a resilient cloud topology and deployment strategy.' },
      { step: 3, title: 'Migration & Implementation', description: 'Move workloads securely with zero downtime.' },
      { step: 4, title: 'Optimization', description: 'Implement auto-scaling and cost governance.' }
    ],
    techStack: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    relatedSlugs: ['infrastructure', 'system-design', 'saas-development', 'tech-staffing'],
    metaTitle: 'Cloud Solutions & DevOps - Veltrix',
    metaDescription: 'Modern cloud infrastructure, migrations, and CI/CD automation.'
  },
  {
    id: '8',
    slug: 'system-design',
    name: 'System Design',
    shortDescription: 'Architecting for scale, speed, and endurance.',
    fullDescription: 'Before you write a single line of code, you need a blueprint. We design high-level software architectures meant to scale to millions of users.',
    category: 'Engineering',
    featured: false,
    icon: 'GitBranch',
    accentColor: '#FBBF24',
    features: [
      'Microservices Architecture',
      'Event-Driven Systems',
      'Database Sharding Strategies',
      'API Gateway Design',
      'High-Availability Setups',
      'Load Balancing',
      'Caching Layers',
      'Disaster Recovery'
    ],
    process: [
      { step: 1, title: 'Requirements Gathering', description: 'Understand throughput, latency, and data needs.' },
      { step: 2, title: 'Component Modeling', description: 'Draft microservices and data store boundaries.' },
      { step: 3, title: 'Data Flow Design', description: 'Map out API protocols and event streams.' },
      { step: 4, title: 'Review & Handoff', description: 'Deliver comprehensive technical documentation and C4 models.' }
    ],
    techStack: ['Kafka', 'RabbitMQ', 'Redis', 'PostgreSQL', 'gRPC', 'GraphQL'],
    relatedSlugs: ['infrastructure', 'cloud-solutions', 'saas-development', 'blockchain-crypto'],
    metaTitle: 'Scalable System Design - Veltrix',
    metaDescription: 'Architectural blueprints and microservices for high-traffic applications.'
  },
  {
    id: '9',
    slug: 'infrastructure',
    name: 'Infrastructure Planning',
    shortDescription: 'Solid foundations for mission-critical apps.',
    fullDescription: 'Build the hardware and network topologies that keep your digital products running 24/7 without fail.',
    category: 'Engineering',
    featured: false,
    icon: 'Database',
    accentColor: '#E879F9',
    features: [
      'Network Security',
      'Virtual Private Clouds (VPC)',
      'Data Warehouse Setup',
      'Monitoring & Alerting',
      'Log Aggregation',
      'Compliance Automation',
      'Zero-Trust Security',
      'IAM Configurations'
    ],
    process: [
      { step: 1, title: 'Security Audit', description: 'Evaluate compliance and security baseline.' },
      { step: 2, title: 'Network Design', description: 'Set up isolated subnets, firewalls, and routing.' },
      { step: 3, title: 'Provisioning', description: 'Deploy resources using Terraform/Pulumi.' },
      { step: 4, title: 'Observability', description: 'Integrate Datadog or Prometheus for real-time tracking.' }
    ],
    techStack: ['Terraform', 'Datadog', 'Prometheus', 'Grafana', 'ELK Stack', 'AWS IAM'],
    relatedSlugs: ['cloud-solutions', 'system-design', 'qa-testing', 'tech-staffing'],
    metaTitle: 'Infrastructure Operations - Veltrix',
    metaDescription: 'Secure, compliant, and highly monitored system infrastructures.'
  },
  {
    id: '10',
    slug: 'fintech',
    name: 'FinTech Solutions',
    shortDescription: 'Banking, payment, and financial software platforms.',
    fullDescription: 'We build compliant, secure, and incredibly fast financial technologies—from digital wallets to algorithmic trading platforms.',
    category: 'Finance',
    featured: false,
    icon: 'Wallet',
    accentColor: '#4ADE80',
    features: [
      'Payment Gateway Integration',
      'Digital Wallets',
      'Trading Platforms',
      'Fraud Detection Systems',
      'KYC/AML Automation',
      'Open Banking APIs',
      'Blockchain Payments',
      'Ledger Systems'
    ],
    process: [
      { step: 1, title: 'Compliance Check', description: 'Ensure design meets PCI-DSS and local regulations.' },
      { step: 2, title: 'Core Logic', description: 'Build immutable ledger and transaction systems.' },
      { step: 3, title: 'Third-Party Integration', description: 'Connect Stripe, Plaid, or core banking APIs.' },
      { step: 4, title: 'Security Testing', description: 'Perform penetration testing and vulnerability scans.' }
    ],
    techStack: ['Stripe', 'Plaid', 'PostgreSQL', 'Rust', 'Golang', 'Next.js'],
    relatedSlugs: ['blockchain-crypto', 'saas-development', 'ecommerce', 'system-design'],
    metaTitle: 'FinTech Software Development - Veltrix',
    metaDescription: 'Secure, compliant financial technology platforms and integrations.'
  },
  {
    id: '11',
    slug: 'ecommerce',
    name: 'E-Commerce',
    shortDescription: 'High-conversion online retail platforms.',
    fullDescription: 'Custom, headless B2B and B2C ecommerce stores designed to maximize conversions, handle huge traffic spikes, and integrate seamlessly with your ERP.',
    category: 'Commerce',
    featured: false,
    icon: 'ShoppingCart',
    accentColor: '#F97316',
    features: [
      'Headless Commerce Apps',
      'Multi-Vendor Marketplaces',
      'Inventory Management',
      'Custom Checkout Flows',
      'Global Payment Support',
      'Personalization Engines',
      'Omnichannel Integration',
      'Loyalty Programs'
    ],
    process: [
      { step: 1, title: 'Platform Selection', description: 'Choose between Shopify, MedusaJS, or Custom builds.' },
      { step: 2, title: 'Storefront Design', description: 'Create high-converting, performance-focused product pages.' },
      { step: 3, title: 'Backend Integration', description: 'Connect PIM, ERP, and payment systems.' },
      { step: 4, title: 'Launch', description: 'Execute stress tests and go live.' }
    ],
    techStack: ['Shopify Plus', 'Medusa', 'Next.js', 'Stripe', 'Algolia', 'Tailwind CSS'],
    relatedSlugs: ['web-development', 'fintech', 'crm-systems', 'app-development'],
    metaTitle: 'Enterprise E-Commerce Development - Veltrix',
    metaDescription: 'Headless, scalable e-commerce platforms and multi-vendor marketplaces.'
  },
  {
    id: '12',
    slug: 'crm-systems',
    name: 'CRM Systems',
    shortDescription: 'Custom business operation hubs tailored for growth.',
    fullDescription: 'Ditch the spreadsheets. We build bespoke CRM tools to track leads, manage pipelines, and automate your internal business logic.',
    category: 'Business',
    featured: false,
    icon: 'Users',
    accentColor: '#818CF8',
    features: [
      'Custom Lead Management',
      'Sales Pipeline Automation',
      'Data Visualization & Dashboards',
      'Email/Marketing Integration',
      'Customer Support Ticketing',
      'Role-Based Workflows',
      'ERP Sync',
      'Mobile-Friendly Views'
    ],
    process: [
      { step: 1, title: 'Process Mapping', description: 'Understand your unique sales and support funnels.' },
      { step: 2, title: 'Data Architecture', description: 'Design flexible schemas for contacts, accounts, and tasks.' },
      { step: 3, title: 'Dashboard Coding', description: 'Develop intuitive UI boards and customizable widgets.' },
      { step: 4, title: 'Data Migration', description: 'Safely port existing data from legacy tools.' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'SendGrid', 'Twilio'],
    relatedSlugs: ['saas-development', 'ecommerce', 'ai-services', 'tech-staffing'],
    metaTitle: 'Custom CRM Development - Veltrix',
    metaDescription: 'Bespoke CRM solutions tailored perfectly to your business operations.'
  },
  {
    id: '13',
    slug: 'qa-testing',
    name: 'QA & Testing',
    shortDescription: 'Rigorous quality assurance for flawless deployments.',
    fullDescription: 'We build comprehensive automated test suites to ensure your product works perfectly under all conditions, preventing costly bugs in production.',
    category: 'Quality',
    featured: false,
    icon: 'CheckCircle',
    accentColor: '#2DD4BF',
    features: [
      'End-to-End Automation',
      'Unit & Integration Testing',
      'Performance / Load Testing',
      'Security Vulnerability Scans',
      'API Contract Testing',
      'Cross-Browser Validation',
      'Mobile App Testing',
      'CI/CD Test Integration'
    ],
    process: [
      { step: 1, title: 'Test Planning', description: 'Identify critical user paths and non-functional requirements.' },
      { step: 2, title: 'Script Writing', description: 'Code robust E2E and component-level tests.' },
      { step: 3, title: 'Pipeline Setup', description: 'Integrate testing suites into deployment workflows.' },
      { step: 4, title: 'Continuous Monitoring', description: 'Track coverage and flag regressions dynamically.' }
    ],
    techStack: ['Cypress', 'Playwright', 'Jest', 'K6', 'Selenium', 'GitHub Actions'],
    relatedSlugs: ['infrastructure', 'cloud-solutions', 'web-development', 'system-design'],
    metaTitle: 'Quality Assurance & Testing - Veltrix',
    metaDescription: 'Automated software testing to ensure reliability and performance.'
  },
  {
    id: '14',
    slug: 'tech-staffing',
    name: 'Tech Staffing',
    shortDescription: 'Augment your team with elite engineering talent.',
    fullDescription: 'Need a senior engineer fast? We embed vetted, world-class developers directly into your team to accelerate product delivery.',
    category: 'Business',
    featured: false,
    icon: 'UserPlus',
    accentColor: '#FCD34D',
    features: [
      'Senior Engineering Talent',
      'Flexible Resource Scaling',
      'Time-Zone Alignment',
      'Agile Methodology Integration',
      'Cultural Fit Vetting',
      'Rapid Onboarding',
      'Dedicated Tech Leads',
      'Ongoing Skill Training'
    ],
    process: [
      { step: 1, title: 'Talent Profiling', description: 'Determine the exact tech stack and seniority required.' },
      { step: 2, title: 'Matching', description: 'Pair you with internally-vetted Veltrix engineers.' },
      { step: 3, title: 'Onboarding', description: 'Integrate the talent seamlessly into your Jira/Slack workspace.' },
      { step: 4, title: 'Delivery', description: 'Engineers commit code daily to meet your aggressive sprints.' }
    ],
    techStack: ['React', 'Node', 'Python', 'AWS', 'Agile', 'Scrum'],
    relatedSlugs: ['crm-systems', 'saas-development', 'cloud-solutions', 'app-development'],
    metaTitle: 'Tech Staffing & Team Augmentation - Veltrix',
    metaDescription: 'Scale your engineering capacity instantly with our vetted tech teams.'
  },
  {
    id: '15',
    slug: 'video-editing',
    name: 'Video & Motion',
    shortDescription: 'High-end video, 3D motion, and post-production.',
    fullDescription: 'From product demo reels to immersive 3D explainer videos, our creative studio brings your brand logic to visual life.',
    category: 'Creative',
    featured: false,
    icon: 'Video',
    accentColor: '#F87171',
    features: [
      'Product Demo Videos',
      'Motion Graphics (2D/3D)',
      'Brand Commercials',
      'Social Media Assets',
      'Visual Effects (VFX)',
      'Audio & Sound Design',
      'Color Grading',
      'Video Summarization (AI)'
    ],
    process: [
      { step: 1, title: 'Storyboarding', description: 'Draft scripts and visual flow concepts.' },
      { step: 2, title: 'Asset Creation', description: 'Design vectors, UI screens, and 3D models.' },
      { step: 3, title: 'Animation & Editing', description: 'Bring assets to life with smooth transitions and timing.' },
      { step: 4, title: 'Post-Production', description: 'Add sound effects, voiceovers, and final color.' }
    ],
    techStack: ['After Effects', 'Premiere Pro', 'Blender', 'Cinema 4D', 'DaVinci Resolve', 'Figma'],
    relatedSlugs: ['web-development', 'ecommerce', 'app-development', 'generative-ai'],
    metaTitle: 'Creative Video & Motion Design - Veltrix',
    metaDescription: 'World-class motion graphics and video editing for product marketing.'
  }
]
