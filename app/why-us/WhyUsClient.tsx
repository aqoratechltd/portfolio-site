"use client";

import { motion } from "framer-motion";
import {
  Layers, Brain, TrendingUp, Users, Star, Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import CTABanner from "@/components/sections/CTABanner";
import Testimonials from "@/components/sections/Testimonials";

const BENTO_ITEMS = [
  {
    icon: Layers,
    title: "Full-Service, One Roof",
    description:
      "From branding and web development to SEO, paid ads, and lead generation — you get everything under one roof. No juggling five agencies. No communication gaps.",
    color: "#0066FF",
    span: "col-span-1 md:col-span-2",
    metric: "7+",
    metricLabel: "Services Under One Roof",
    featured: true,
  },
  {
    icon: Brain,
    title: "Strategy Before Execution",
    description:
      "We start with a deep audit of your business, your competition, and your market. Every campaign is built on research — not guesswork.",
    color: "#10B981",
    span: "col-span-1",
    metric: "100%",
    metricLabel: "Strategy-Backed",
  },
  {
    icon: TrendingUp,
    title: "Transparent Reporting",
    description:
      "Real-time access to your campaign dashboards. No waiting for monthly reports. No surprises. Just clear data, all the time.",
    color: "#8B5CF6",
    span: "col-span-1",
    metric: "24/7",
    metricLabel: "Dashboard Access",
  },
  {
    icon: Users,
    title: "Dedicated Account Managers",
    description:
      "Every Aqora partner gets a dedicated account manager who knows your business inside out — not a rotating door of contacts.",
    color: "#F59E0B",
    span: "col-span-1",
    metric: "1-on-1",
    metricLabel: "Direct Support",
  },
  {
    icon: Star,
    title: "Proven Track Record",
    description:
      "150+ campaigns delivered. 95% client retention. Over $50M in revenue generated for our clients. The numbers speak for themselves.",
    color: "#06B6D4",
    span: "col-span-1",
    metric: "$50M+",
    metricLabel: "Revenue Generated",
  },
  {
    icon: Lock,
    title: "No Lock-In Contracts",
    description:
      "We earn your business every single month. Our clients stay because of results — not because they're trapped in a contract.",
    color: "#EC4899",
    span: "col-span-1 md:col-span-2",
    metric: "0",
    metricLabel: "Lock-in Contracts",
  },
];

const COMPARISONS = [
  { feature: "Strategy Before Execution", us: true, others: false },
  { feature: "No Lock-In Contracts", us: true, others: false },
  { feature: "Real-time Dashboards", us: true, others: false },
  { feature: "Dedicated Account Managers", us: true, others: false },
  { feature: "Full-service capabilities", us: true, others: false },
  { feature: "Focus on Revenue and ROAS", us: true, others: false },
];

export default function WhyUsClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[min(400px,60vw)] bg-electric/10 blur-[100px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono text-electric uppercase tracking-widest mb-5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Why Aqora
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-ghost leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Agency That Treats
            <br />
            <span className="text-gradient-electric">Your Business Like Its Own.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-mist max-w-2xl leading-relaxed"
          >
            We&apos;re not here to impress you with buzzwords and pretty reports. We&apos;re here
            to grow your business. Here&apos;s why hundreds of brands choose Aqora.
          </motion.p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="pb-16 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENTO_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className={cn(
                  "group relative rounded-2xl p-5 md:p-7 bg-obsidian border transition-all duration-300 overflow-hidden flex flex-col gap-4",
                  item.featured
                    ? "border-electric/20 min-h-[200px] md:min-h-[220px]"
                    : "border-white/[0.06] hover:border-white/[0.12] min-h-[200px] md:min-h-[220px]",
                  item.span
                )}
              >
                {/* Hover / featured glow */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500 pointer-events-none",
                    item.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                  style={{
                    background: `radial-gradient(ellipse at top left, ${item.color}14 0%, transparent 65%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}18`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                {/* Text */}
                <div className="relative flex flex-col gap-2 flex-1">
                  <h3
                    className={cn(
                      "font-display font-bold text-ghost leading-snug",
                      item.featured ? "text-lg md:text-xl" : "text-base md:text-lg"
                    )}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-mist leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Metric */}
                <div className="relative flex items-baseline gap-2 pt-2 border-t border-white/[0.05]">
                  <span
                    className={cn(
                      "font-display font-extrabold leading-none",
                      item.featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                    )}
                    style={{ color: item.color, fontFamily: "var(--font-display)" }}
                  >
                    {item.metric}
                  </span>
                  <span className="text-xs text-smoke">{item.metricLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-14 md:py-24 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-ghost mb-10 md:mb-16 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Aqora vs. The Rest
          </motion.h2>

          <div className="bg-obsidian border border-white/[0.08] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 px-4 sm:px-6 py-3 sm:py-4 border-b border-white/[0.06] bg-white/[0.02]">
              <span className="text-xs sm:text-sm text-smoke font-medium">Feature</span>
              <span className="text-xs sm:text-sm font-semibold text-electric text-center">Aqora</span>
              <span className="text-xs sm:text-sm text-mist text-center">Typical Agency</span>
            </div>

            {COMPARISONS.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="grid grid-cols-3 px-4 sm:px-6 py-3 sm:py-4 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-xs sm:text-sm text-ghost pr-2">{c.feature}</span>
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-electric/20 border border-electric/40 flex items-center justify-center">
                    <span className="text-electric text-xs font-bold">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-smoke/50 text-base font-bold">✗</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
