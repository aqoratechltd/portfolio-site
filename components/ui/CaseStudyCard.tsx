"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { CaseStudy } from "@/types"
import { ArrowRight } from "lucide-react"

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full flex flex-col bg-card border border-border hover:border-border-light rounded-xl overflow-hidden"
      >
        <div className="relative h-64 w-full overflow-hidden bg-secondary">
          <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10" />
          {/* We are simulating a placeholder via a generic background if coverImage doesn't exist, but we will assume client puts them in public */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
          
          <Image
            src={caseStudy.coverImage}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            // For this demo, since images might not exist, we'll use a blurred placeholder or fallback logic via unoptimized or a generic div if error.
            // Next.js handles missing images gracefully in dev but we can provide generic fallback if needed.
          />
          
          <div className="absolute top-4 left-4 z-30">
            <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {caseStudy.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="text-text-muted text-sm font-medium mb-3 flex items-center gap-2">
            <span>{caseStudy.client}</span>
            <span>•</span>
            <span>{caseStudy.duration}</span>
          </div>
          
          <h3 className="font-syne font-bold text-2xl text-white mb-4 group-hover:text-accent transition-colors">
            {caseStudy.title}
          </h3>
          
          {/* Highlight Key Metric */}
          {caseStudy.results && caseStudy.results.length > 0 && (
            <div className="mb-6 p-4 bg-secondary rounded-lg border border-border">
              <span className="text-accent font-bold text-xl block mb-1">
                {caseStudy.results[0].value}
              </span>
              <span className="text-text-secondary text-sm">
                {caseStudy.results[0].description}
              </span>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-auto mb-6">
            {caseStudy.techStack.slice(0, 3).map(tech => (
              <span key={tech} className="text-xs font-medium text-text-muted bg-[#1A1A1A] px-2 py-1 rounded border border-border">
                {tech}
              </span>
            ))}
            {caseStudy.techStack.length > 3 && (
              <span className="text-xs font-medium text-text-muted bg-[#1A1A1A] px-2 py-1 rounded border border-border">
                +{caseStudy.techStack.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 font-medium text-sm text-white group-hover:text-accent transition-colors">
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
