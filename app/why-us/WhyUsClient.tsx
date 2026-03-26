"use client";

import { motion } from "framer-motion";
import {
  Zap, Shield, Brain, Clock, Users, TrendingUp,
  Code2, GitBranch, Star, Award, Globe, Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import CTABanner from "@/components/sections/CTABanner";
import Testimonials from "@/components/sections/Testimonials";

// Bento grid items with varying sizes
const BENTO_ITEMS = [
  {
    icon: Brain,
    title: "Senior-Only Teams",
    description:
      "Every project is led and executed by senior engineers with 8+ years of experience. No juniors on your critical path.",
    color: "#0066FF",
    span: "col-span-2 row-span-2",
    big: true,
    metric: "8+ yrs avg",
    metricLabel: "Team Experience",
  },
  {
    icon: Clock,
    title: "72-Hour Kickoff",
    description: "From signed contract to first working prototype in 72 hours.",
    color: "#10B981",
    span: "col-span-1 row-span-1",
    metric: "72h",
    metricLabel: "To First Prototype",
  },
  {
    icon: Shield,
    title: "Zero-Debt Policy",
    description: "We write code we'd stake our reputation on. No shortcuts.",
    color: "#8B5CF6",
    span: "col-span-1 row-span-1",
    metric: "0",
    metricLabel: "Shortcuts Taken",
  },
  {
    icon: TrendingUp,
    title: "ROI-Focused Engineering",
    description:
      "We measure our success by your business outcomes, not just code shipped.",
    color: "#F59E0B",
    span: "col-span-2 row-span-1",
    metric: "$2B+",
    metricLabel: "Value Generated",
  },
  {
    icon: GitBranch,
    title: "Full Transparency",
    description:
      "Weekly demos, open code repos, real-time dashboards — you're never in the dark.",
    color: "#06B6D4",
    span: "col-span-1 row-span-2",
    metric: "100%",
    metricLabel: "Visibility",
  },
  {
    icon: Globe,
    title: "Global Availability",
    description: "Timezone-compatible teams for US, EU, and APAC clients.",
    color: "#EC4899",
    span: "col-span-1 row-span-1",
    metric: "24/7",
    metricLabel: "Coverage",
  },
  {
    icon: Star,
    title: "98% Retention Rate",
    description: "Our clients keep coming back. That says everything.",
    color: "#F97316",
    span: "col-span-1 row-span-1",
    metric: "98%",
    metricLabel: "Client Retention",
  },
  {
    icon: Lock,
    title: "Instant NDA",
    description: "NDAs signed before any discussion. Your IP stays yours.",
    color: "#0066FF",
    span: "col-span-1 row-span-1",
    metric: "<1hr",
    metricLabel: "NDA Turnaround",
  },
  {
    icon: Award,
    title: "Elite Standards",
    description: "We hold ourselves to Google/Amazon SRE standards — for every client.",
    color: "#8B5CF6",
    span: "col-span-1 row-span-1",
    metric: "99.99%",
    metricLabel: "Uptime SLA",
  },
  {
    icon: Code2,
    title: "Clean Code Guarantee",
    description: "Maintainable, documented, tested code you can hand off to any team.",
    color: "#10B981",
    span: "col-span-2 row-span-1",
    metric: ">90%",
    metricLabel: "Test Coverage",
  },
];

const COMPARISONS = [
  { feature: "Senior engineer teams", us: true, others: false },
  { feature: "Fixed-price engagements available", us: true, others: false },
  { feature: "72-hour project kickoff", us: true, others: false },
  { feature: "Dedicated Slack channel", us: true, others: false },
  { feature: "Weekly video demos", us: true, others: false },
  { feature: "Post-launch 90-day support", us: true, others: false },
  { feature: "Architecture documentation", us: true, others: false },
  { feature: "Zero technical debt policy", us: true, others: false },
];

export default function WhyUsClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-electric/10 blur-[100px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono text-electric uppercase tracking-widest mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            The Difference
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-display font-extrabold text-ghost leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not Another Agency.
            <br />
            <span className="text-gradient-electric">A Technical Partner.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-mist max-w-2xl leading-relaxed"
          >
            Most agencies take your money and ship something barely functional.
            We take your vision and deliver engineering that defines careers and builds companies.
          </motion.p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-8 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px]">
            {BENTO_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={cn(
                  "group relative rounded-2xl p-6 glass border border-white/[0.06] hover:border-opacity-30 transition-all duration-300 overflow-hidden flex flex-col",
                  item.span
                )}
                style={{ borderColor: item.big ? `${item.color}25` : undefined }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${item.color}12 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-auto transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                {/* Metric (bottom for big tiles) */}
                {item.big && (
                  <div className="mt-4">
                    <p
                      className="text-5xl font-display font-extrabold mb-1"
                      style={{ color: item.color, fontFamily: "var(--font-display)" }}
                    >
                      {item.metric}
                    </p>
                    <p className="text-xs text-smoke font-mono uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-mono)" }}>
                      {item.metricLabel}
                    </p>
                  </div>
                )}

                <div className={item.big ? "" : "mt-auto"}>
                  <h3
                    className="font-display font-bold text-ghost mb-1.5"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: item.big ? "1.4rem" : "1rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-smoke leading-relaxed">{item.description}</p>

                  {!item.big && (
                    <div className="flex items-baseline gap-2 mt-3">
                      <span
                        className="text-xl font-display font-bold"
                        style={{ color: item.color, fontFamily: "var(--font-display)" }}
                      >
                        {item.metric}
                      </span>
                      <span className="text-xs text-smoke">{item.metricLabel}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-extrabold text-ghost mb-16 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nexus vs. The Rest
          </motion.h2>

          <div className="glass border border-white/[0.08] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
              <span className="text-sm text-smoke">Feature</span>
              <span className="text-sm font-medium text-electric text-center">Nexus Agency</span>
              <span className="text-sm text-mist text-center">Typical Agency</span>
            </div>

            {COMPARISONS.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="grid grid-cols-3 px-6 py-4 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm text-mist">{c.feature}</span>
                <div className="flex items-center justify-center">
                  {c.us ? (
                    <div className="w-5 h-5 rounded-full bg-electric/20 border border-electric/40 flex items-center justify-center">
                      <span className="text-electric text-xs">✓</span>
                    </div>
                  ) : (
                    <span className="text-smoke text-lg">—</span>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {c.others ? (
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                  ) : (
                    <span className="text-smoke/40 text-lg">✗</span>
                  )}
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
