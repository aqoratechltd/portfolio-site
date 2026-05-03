"use client"

import { motion } from "framer-motion"
import { CaseStudy } from "@/types"
import { TechBadge } from "@/components/ui/TechBadge"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import Link from "next/link"

const COVER_IMAGES: Record<string, string> = {
  "omnipulse-ai": "https://picsum.photos/seed/omnipulse-ai/1200/675",
  bazisto: "https://picsum.photos/seed/bazisto-store/1200/675",
  "investor-panel": "https://picsum.photos/seed/investor-finance/1200/675",
  learnloop: "https://picsum.photos/seed/learnloop-ed/1200/675",
  "nexus-workspace": "https://picsum.photos/seed/nexus-workspace/1200/675",
  "defi-yield-protocol": "https://picsum.photos/seed/defi-crypto/1200/675",
  "ai-content-studio": "https://picsum.photos/seed/content-forge/1200/675",
  neurocrm: "https://picsum.photos/seed/neuro-crm/1200/675",
  luxehive: "https://picsum.photos/seed/luxe-fashion/1200/675",
  craftdrop: "https://picsum.photos/seed/craft-pod/1200/675",
  grocify: "https://picsum.photos/seed/grocify-dark/1200/675",
  payshift: "https://picsum.photos/seed/pay-shift/1200/675",
  vaultledger: "https://picsum.photos/seed/vault-ledger/1200/675",
  tradepilot: "https://picsum.photos/seed/trade-pilot/1200/675",
  "skillsync-ai": "https://picsum.photos/seed/skill-sync/1200/675",
  tutorbot: "https://picsum.photos/seed/tutor-bot/1200/675",
  teamhub: "https://picsum.photos/seed/team-hub/1200/675",
  "devops-dashboard": "https://picsum.photos/seed/ops-lens/1200/675",
  clientportal: "https://picsum.photos/seed/client-portal/1200/675",
  "nft-marketplace": "https://picsum.photos/seed/pixel-vault/1200/675",
  "dao-governance": "https://picsum.photos/seed/synapse-dao/1200/675",
  "token-launchpad": "https://picsum.photos/seed/launch-x/1200/675",
  healthtrack: "https://picsum.photos/seed/health-track/1200/675",
  foodrunner: "https://picsum.photos/seed/food-runner/1200/675",
  fitcoach: "https://picsum.photos/seed/fit-coach/1200/675",
}

export default function CaseStudyClient({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-8 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {caseStudy.category}
            </span>
            <span className="text-text-muted text-sm font-medium">For {caseStudy.client}</span>
          </div>
          <h1 className="font-syne font-bold text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight text-white">
            {caseStudy.title}
          </h1>
          <div className="flex gap-8 text-sm text-text-secondary border-t border-border pt-6 mt-6">
            <div>
              <p className="text-text-muted mb-1">Duration</p>
              <p className="font-medium text-white">{caseStudy.duration}</p>
            </div>
            <div>
              <p className="text-text-muted mb-1">Team Size</p>
              <p className="font-medium text-white">{caseStudy.teamSize}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Cover Image */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden bg-secondary border border-border"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent z-10" />
          <img
            src={COVER_IMAGES[caseStudy.slug] ?? `https://picsum.photos/seed/${caseStudy.slug}/1200/675`}
            alt={caseStudy.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-syne font-bold text-3xl mb-6">The Challenge</h2>
              <p className="text-text-secondary text-lg leading-relaxed">{caseStudy.challenge}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-syne font-bold text-3xl mb-6">The Solution</h2>
              <p className="text-text-secondary text-lg leading-relaxed">{caseStudy.solution}</p>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-secondary border border-border p-8 rounded-2xl">
              <h3 className="font-syne font-bold text-xl mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map(tech => (
                  <TechBadge key={tech} name={tech} className="bg-background" />
                ))}
              </div>
            </motion.div>

            {caseStudy.testimonial && (
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-accent/5 border border-accent/20 p-8 rounded-2xl">
                <blockquote className="text-white italic leading-relaxed mb-6">"{caseStudy.testimonial.quote}"</blockquote>
                <div>
                  <p className="font-syne font-bold text-accent">{caseStudy.testimonial.author}</p>
                  <p className="text-xs text-text-muted">{caseStudy.testimonial.role}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="bg-card border border-border rounded-3xl p-10 md:p-16">
          <h2 className="font-syne font-bold text-3xl mb-12 text-center">The Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
            {caseStudy.results.map((result, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`flex flex-col items-center text-center px-6 ${i !== 0 ? 'pt-8 md:pt-0' : ''}`}
              >
                <span className="font-syne font-bold text-4xl lg:text-5xl text-accent mb-4">
                  <AnimatedCounter value={result.value} />
                </span>
                <span className="text-text-secondary text-lg">{result.description}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-8 text-center pt-16 border-t border-border">
        <h2 className="font-syne font-bold text-4xl mb-8 text-white">Ready to achieve similar results?</h2>
        <div className="flex justify-center">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-electric text-white text-sm font-mono uppercase tracking-widest px-8 py-4 hover:bg-electric/90 transition-colors" style={{ fontFamily: "var(--font-mono)" }}>Build Something Similar</Link>
        </div>
      </section>
    </div>
  )
}
