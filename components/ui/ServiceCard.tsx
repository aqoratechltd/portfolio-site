"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Service } from "@/types"
import { ArrowRight, Brain, Sparkles, Hexagon, Cloud, Globe, Smartphone, CloudLightning, GitBranch, Database, Wallet, ShoppingCart, Users, CheckCircle, UserPlus, Video } from "lucide-react"

const ICONS: Record<string, any> = {
  Brain, Sparkles, Hexagon, Cloud, Globe, Smartphone, CloudLightning, GitBranch, Database, Wallet, ShoppingCart, Users, CheckCircle, UserPlus, Video
}

interface ServiceCardProps {
  service: Service
  featuredStyle?: boolean
}

export function ServiceCard({ service, featuredStyle = false }: ServiceCardProps) {
  const IconComponent = ICONS[service.icon] || Globe

  return (
    <Link href={`/services/${service.slug}`} className={featuredStyle ? 'col-span-1 md:col-span-2' : 'col-span-1'}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ '--hover-accent': service.accentColor } as React.CSSProperties}
        className="group h-full bg-card hover:bg-card-hover border border-border rounded-xl p-8 transition-colors duration-300 hover:border-[var(--hover-accent)] hover:shadow-2xl relative overflow-hidden flex flex-col"
      >
        {/* Subtle background glow effect on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at top right, ${service.accentColor}, transparent 70%)`}}
        />

        <div className="flex items-start justify-between mb-6 relative z-10">
          <div 
            className="w-14 h-14 rounded-lg flex items-center justify-center border border-border bg-secondary"
          >
            <IconComponent className="w-7 h-7" style={{ color: service.accentColor }} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted bg-secondary px-3 py-1 rounded-full border border-border">
            {service.category}
          </span>
        </div>

        <h3 className="font-syne font-bold text-2xl mb-3 text-foreground group-hover:text-white transition-colors relative z-10">
          {service.name}
        </h3>
        
        <p className="text-text-secondary leading-relaxed mb-8 flex-1 relative z-10">
          {service.shortDescription}
        </p>

        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-wrap gap-2">
            {service.techStack.slice(0, 4).map(tech => (
              <span key={tech} className="text-xs font-medium text-text-muted bg-[#1A1A1A] px-2 py-1 rounded border border-border">
                {tech}
              </span>
            ))}
            {service.techStack.length > 4 && (
              <span className="text-xs font-medium text-text-muted bg-[#1A1A1A] px-2 py-1 rounded border border-border">
                +{service.techStack.length - 4}
              </span>
            )}
          </div>

          <div 
            className="flex items-center gap-2 font-medium text-sm transition-colors"
            style={{ color: service.accentColor }}
          >
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
