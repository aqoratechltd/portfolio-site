export interface Service {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  category: 'AI' | 'Web3' | 'Engineering' | 'Mobile' | 'Finance' | 'Commerce' | 'Business' | 'Quality' | 'Creative'
  featured: boolean
  icon: string                    // Lucide icon name
  accentColor: string             // CSS hex
  features: string[]              // 6-8 bullet features
  process: ProcessStep[]          // 4-5 steps
  techStack: string[]             // Technology names
  relatedSlugs: string[]          // 4 related service slugs
  metaTitle: string
  metaDescription: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  category: string
  summary: string
  challenge: string
  solution: string
  results: Result[]
  techStack: string[]
  duration: string
  teamSize: string
  coverImage: string              // placeholder: '/case-studies/[slug]-cover.jpg'
  screenshots: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  featured: boolean
  metaTitle: string
  metaDescription: string
}

export interface Result {
  metric: string
  value: string
  description: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string                  // placeholder: '/team/[name].jpg'
  skills: string[]
  linkedin: string
  twitter?: string
  github?: string
  isFounder: boolean
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  rating: number
  projectType: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  budget: string
  message: string
}

export interface ProjectFormData {
  name: string
  email: string
  company: string
  phone: string
  projectType: string
  services: string[]
  budget: string
  timeline: string
  description: string
  hasDesign: boolean
  referralSource: string
}
