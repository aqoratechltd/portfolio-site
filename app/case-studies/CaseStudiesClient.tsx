"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

const FILTERS = [
  { label: "All Work", value: "all" },
  { label: "Web & App", value: "web", sub: ["SaaS Platform", "E-Commerce", "FinTech SaaS"] },
  { label: "AI / Data", value: "ai", sub: ["AI SaaS", "AI EdTech"] },
  { label: "Blockchain", value: "blockchain", sub: ["Blockchain"] },
  { label: "Mobile", value: "mobile", sub: ["Mobile App"] },
];

const CATEGORY_MAP: Record<string, string> = {
  "AI SaaS": "ai",
  "E-Commerce": "web",
  "FinTech SaaS": "web",
  "AI EdTech": "ai",
  "SaaS Platform": "web",
  Blockchain: "blockchain",
  "Mobile App": "mobile",
};

const COVER_IMAGES: Record<string, string> = {
  "omnipulse-ai": "https://picsum.photos/seed/omnipulse-ai/800/800",
  bazisto: "https://picsum.photos/seed/bazisto-store/800/800",
  "investor-panel": "https://picsum.photos/seed/investor-finance/800/800",
  learnloop: "https://picsum.photos/seed/learnloop-ed/800/800",
  "nexus-workspace": "https://picsum.photos/seed/nexus-workspace/800/800",
  "defi-yield-protocol": "https://picsum.photos/seed/defi-crypto/800/800",
  "ai-content-studio": "https://picsum.photos/seed/content-forge/800/800",
  neurocrm: "https://picsum.photos/seed/neuro-crm/800/800",
  luxehive: "https://picsum.photos/seed/luxe-fashion/800/800",
  craftdrop: "https://picsum.photos/seed/craft-pod/800/800",
  grocify: "https://picsum.photos/seed/grocify-dark/800/800",
  payshift: "https://picsum.photos/seed/pay-shift/800/800",
  vaultledger: "https://picsum.photos/seed/vault-ledger/800/800",
  tradepilot: "https://picsum.photos/seed/trade-pilot/800/800",
  "skillsync-ai": "https://picsum.photos/seed/skill-sync/800/800",
  tutorbot: "https://picsum.photos/seed/tutor-bot/800/800",
  teamhub: "https://picsum.photos/seed/team-hub/800/800",
  "devops-dashboard": "https://picsum.photos/seed/ops-lens/800/800",
  clientportal: "https://picsum.photos/seed/client-portal/800/800",
  "nft-marketplace": "https://picsum.photos/seed/pixel-vault/800/800",
  "dao-governance": "https://picsum.photos/seed/synapse-dao/800/800",
  "token-launchpad": "https://picsum.photos/seed/launch-x/800/800",
  healthtrack: "https://picsum.photos/seed/health-track/800/800",
  foodrunner: "https://picsum.photos/seed/food-runner/800/800",
  fitcoach: "https://picsum.photos/seed/fit-coach/800/800",
};

export default function CaseStudiesClient() {
  const [active, setActive] = useState("all");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const filtered =
    active === "all"
      ? caseStudies
      : caseStudies.filter((cs) => CATEGORY_MAP[cs.category] === active);

  return (
    <div className="min-h-screen bg-void pt-20 sm:pt-24 md:pt-28">
      {/* ── Hero ── */}
      <section className="text-center px-4 sm:px-6 pb-12 md:pb-16 pt-6 md:pt-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono text-smoke uppercase tracking-[0.3em] mb-4"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Selected Projects
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl text-ghost leading-[0.95] tracking-tight mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Work.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-mist text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed"
        >
          We build software that solves real problems. The following projects give
          a flavour of what we do and who we&apos;ve worked with.
        </motion.p>
      </section>

      {/* ── Filter Tabs ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center justify-center flex-wrap gap-y-3 mb-10 md:mb-14 px-4 sm:px-6"
      >
        {FILTERS.map((f, i) => (
          <div key={f.value} className="flex items-center relative">
            {i > 0 && (
              <span className="hidden sm:inline text-graphite mx-3 md:mx-5 select-none text-lg font-light">|</span>
            )}
            {i > 0 && (
              <span className="sm:hidden text-graphite mx-2 select-none text-sm font-light">·</span>
            )}
            <div className="relative group">
              <button
                onClick={() => {
                  setActive(f.value);
                  setOpenDropdown(openDropdown === f.value ? null : f.value);
                }}
                className={`flex items-center gap-1.5 text-xs sm:text-sm font-mono uppercase tracking-widest transition-colors duration-200 pb-0.5 border-b ${
                  active === f.value
                    ? "text-ghost border-electric"
                    : "text-smoke border-transparent hover:text-mist hover:border-white/20"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {f.label}
                {f.sub && (
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${openDropdown === f.value ? "rotate-180" : ""}`}
                  />
                )}
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {f.sub && openDropdown === f.value && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 glass border border-white/[0.08] rounded-lg py-2 min-w-[160px] z-20"
                  >
                    {f.sub.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => {
                          setActive(f.value);
                          setOpenDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-xs text-mist hover:text-ghost hover:bg-white/[0.04] transition-colors"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {sub}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── Grid ── */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gap: "4px" }}
        onClick={() => setOpenDropdown(null)}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((cs, i) => (
            <motion.div
              key={cs.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.4) }}
              className="relative aspect-square overflow-hidden group"
            >
              {/* Background image */}
              <img
                src={COVER_IMAGES[cs.slug] ?? `https://picsum.photos/seed/${cs.slug}/800/800`}
                alt={cs.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay — lighter default on mobile so text is always readable */}
              <div className="absolute inset-0 bg-black/60 sm:bg-black/50 transition-all duration-300 group-hover:bg-black/70" />

              {/* Electric tint on hover */}
              <div className="absolute inset-0 bg-electric/0 group-hover:bg-electric/10 transition-all duration-300" />

              {/* Top-left: category badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 group-hover:text-electric/80 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {cs.category}
                </span>
              </div>

              {/* Featured dot */}
              {cs.featured && (
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-electric" />
              )}

              {/* Center: client name + summary always visible on mobile */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h3
                  className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-white leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cs.client === "Confidential" ? cs.title.split("—")[0].trim() : cs.client}
                </h3>
                {/* Summary: always visible on mobile, hover-only on sm+ */}
                <p className="text-white/70 text-xs sm:text-sm mt-2 max-w-[200px] leading-snug sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  {cs.summary.length > 70 ? cs.summary.slice(0, 70) + "…" : cs.summary}
                </p>
              </div>

              {/* Bottom CTA — always visible on mobile, slide-up on sm+ */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center justify-between border-t border-white/20 pt-3">
                  <div className="flex gap-1.5 flex-wrap">
                    {cs.techStack.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-white/50 bg-white/10 px-2 py-0.5 rounded"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="flex items-center gap-1.5 text-xs sm:text-sm text-white font-medium hover:text-electric transition-colors whitespace-nowrap"
                  >
                    View case
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <div className="text-center py-24 text-smoke font-mono text-sm" style={{ fontFamily: "var(--font-mono)" }}>
          No projects in this category yet.
        </div>
      )}

      {/* ── Bottom CTA ── */}
      <section className="text-center py-16 md:py-24 px-4 sm:px-6 border-t border-white/[0.06] mt-1">
        <p className="text-smoke text-xs font-mono uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)" }}>
          Ready to build?
        </p>
        <h2
          className="font-display font-extrabold text-2xl sm:text-3xl md:text-5xl text-ghost mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your project could be next.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-electric text-white text-xs sm:text-sm font-mono uppercase tracking-widest px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-electric/90 transition-colors duration-200"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Start a Project
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
