"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CaseStudyCard } from "../ui/CaseStudyCard"
import { caseStudies } from "@/lib/case-studies"
import MagneticButton from "../ui/MagneticButton"

export function CaseStudiesPreview() {
  const featuredCases = caseStudies.filter(c => c.featured).slice(0, 3)

  return (
    <section className="py-24 bg-secondary/50 border-y border-border relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-[min(600px,80vw)] h-[min(600px,80vw)] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-10 md:mb-16 gap-4 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-xl"
          >
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">Our Work</span>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
              Proven Impact.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Real projects deployed into the wild. See how we've helped startups and enterprises scale their visions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-electric hover:text-ghost transition-colors" style={{ fontFamily: "var(--font-mono)" }}>
              View All Case Studies →
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {featuredCases.map((caseStudy, i) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
            >
              <CaseStudyCard caseStudy={caseStudy} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
