import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CALENDLY_URL = "https://calendly.com/your-agency/30min";

export const SERVICES = [
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Cinematic post-production, motion graphics, and brand storytelling that converts.",
    icon: "Film",
    color: "#FF6B35",
    category: "Creative",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description: "Scalable cloud architecture, DevOps pipelines, and zero-downtime deployments.",
    icon: "Server",
    color: "#0066FF",
    category: "Engineering",
  },
  {
    id: "ai-services",
    title: "AI Services",
    description: "Custom ML models, LLM integrations, and intelligent automation at enterprise scale.",
    icon: "Brain",
    color: "#8B5CF6",
    category: "AI",
    featured: true,
  },
  {
    id: "saas",
    title: "SaaS Development",
    description: "End-to-end SaaS platforms with multi-tenancy, billing, and scalable architecture.",
    icon: "Layers",
    color: "#06B6D4",
    category: "Engineering",
  },
  {
    id: "fintech",
    title: "FinTech",
    description: "Secure payment systems, trading platforms, and regulatory-compliant financial apps.",
    icon: "TrendingUp",
    color: "#10B981",
    category: "Finance",
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Distributed systems, microservices architecture, and high-performance APIs.",
    icon: "Network",
    color: "#F59E0B",
    category: "Engineering",
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description: "RAG pipelines, fine-tuned models, AI agents, and multimodal applications.",
    icon: "Sparkles",
    color: "#EC4899",
    category: "AI",
    featured: true,
  },
  {
    id: "app-dev",
    title: "App Development",
    description: "Native iOS/Android and cross-platform apps with exceptional UX and performance.",
    icon: "Smartphone",
    color: "#0066FF",
    category: "Mobile",
  },
  {
    id: "staffing",
    title: "Tech Staffing",
    description: "Elite engineering talent on-demand — vetted senior developers, architects, and leads.",
    icon: "Users",
    color: "#6366F1",
    category: "Talent",
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Performance-first web applications with cutting-edge frameworks and design systems.",
    icon: "Globe",
    color: "#0066FF",
    category: "Engineering",
  },
  {
    id: "crm",
    title: "CRM Systems",
    description: "Custom CRM platforms, Salesforce integrations, and sales pipeline automation.",
    icon: "Database",
    color: "#F97316",
    category: "Business",
  },
  {
    id: "blockchain",
    title: "Blockchain & Crypto",
    description: "Smart contracts, DeFi protocols, NFT marketplaces, and Web3 infrastructure.",
    icon: "Link",
    color: "#F59E0B",
    category: "Web3",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "High-conversion storefronts, headless commerce, and omnichannel retail solutions.",
    icon: "ShoppingCart",
    color: "#10B981",
    category: "Commerce",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description: "AWS, GCP, Azure architecture, cost optimization, and managed cloud operations.",
    icon: "Cloud",
    color: "#0EA5E9",
    category: "Engineering",
  },
  {
    id: "qa",
    title: "QA & Testing",
    description: "Automated testing suites, performance testing, security audits, and CI/CD quality gates.",
    icon: "ShieldCheck",
    color: "#22D3EE",
    category: "Quality",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO, NexaFlow",
    quote: "They rebuilt our entire data infrastructure in 6 weeks. What our internal team estimated at 8 months, they delivered with zero technical debt. Absolutely elite execution.",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Webb",
    role: "Founder, Arcadian Labs",
    quote: "The AI integration they built for us increased lead qualification by 340%. They don't just write code — they understand business outcomes.",
    avatar: "/avatars/marcus.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "VP Engineering, Vortex Capital",
    quote: "Our FinTech platform handles $2M in daily transactions with 99.99% uptime. The system design is world-class. I trust this team with our most critical systems.",
    avatar: "/avatars/priya.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Jordan Khalid",
    role: "CEO, Meshwork Protocol",
    quote: "We launched our DeFi protocol in 10 weeks with a team that deeply understood both the technical and regulatory landscape. Exceptional talent.",
    avatar: "/avatars/jordan.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Elena Vasquez",
    role: "Head of Product, Luminary SaaS",
    quote: "From zero to 10k active users in 3 months post-launch. The platform they built scales beautifully. Best technical investment we've ever made.",
    avatar: "/avatars/elena.jpg",
    rating: 5,
  },
];

export const PARTNERS = [
  "Vercel", "Stripe", "OpenAI", "AWS", "Google Cloud", "Supabase",
  "Figma", "Linear", "Notion", "Cloudflare", "MongoDB", "Prisma",
  "Docker", "Kubernetes", "Terraform", "GitHub",
];

export const STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Engineers" },
  { value: "$2B+", label: "Value Generated" },
];
