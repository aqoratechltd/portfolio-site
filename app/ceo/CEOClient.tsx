"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Twitter, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";

const MILESTONES = [
  { year: "2012", event: "BSc Computer Science, MIT — Graduated with honors" },
  { year: "2014", event: "Lead engineer at hyper-growth startup — scaled to 50M users" },
  { year: "2017", event: "Director of Engineering at Fortune 500 technology firm" },
  { year: "2019", event: "Founded Nexus Agency — 4 engineers, 1 mission" },
  { year: "2021", event: "Closed Series A — expanded to 25 specialists" },
  { year: "2023", event: "50+ team, $2B+ in client value delivered" },
  { year: "2024", event: "Launched AI Division — now the fastest-growing practice" },
];

const CEO_QUOTES = [
  {
    quote:
      "The difference between good software and great software isn't features — it's the decisions made before a single line of code is written.",
  },
  {
    quote:
      "We don't take every project. We take the ones where we know we can make a meaningful difference.",
  },
  {
    quote:
      "Technical debt is just deferred decisions with interest. We help companies stop borrowing from their future.",
  },
];

export default function CEOClient() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-40 pb-0 overflow-hidden min-h-screen flex items-end">
        <motion.div style={{ y: bgY }} className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-electric/10 blur-[100px] rounded-full" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            {/* Text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-mono text-electric uppercase tracking-widest mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Leadership
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-display font-extrabold text-ghost leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Kashan
                <br />
                <span className="text-gradient-electric">Iqbal</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-mist mb-2"
              >
                Founder & CEO, Nexus Agency
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-sm text-smoke font-mono mb-8"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Former Director of Engineering, Google Cloud
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-mist text-lg leading-relaxed max-w-md mb-10"
              >
                With 15 years architecting systems at global scale, Kashan founded Nexus to
                give ambitious companies access to the kind of engineering excellence previously
                reserved for trillion-dollar tech firms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl glass border border-white/[0.08] flex items-center justify-center text-mist hover:text-electric hover:border-electric/30 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl glass border border-white/[0.08] flex items-center justify-center text-mist hover:text-electric hover:border-electric/30 transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 ml-2 text-sm text-electric hover:gap-3 transition-all"
                >
                  Send a message
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* CEO visual card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[3/4] max-w-md ml-auto rounded-3xl overflow-hidden glass border border-white/[0.08]">
                {/* Abstract portrait */}
                <div className="absolute inset-0 bg-gradient-to-b from-graphite via-onyx to-obsidian" />
                <div className="absolute inset-0 dot-bg opacity-20" />

                {/* Geometric portrait elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-electric to-electric-glow opacity-80 blur-sm" />
                    <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-electric/60 to-electric-glow/40 border-2 border-electric/40" />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                      J
                    </div>
                  </div>
                </div>

                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-void/90 to-transparent">
                  <p className="font-display font-bold text-ghost text-xl" style={{ fontFamily: "var(--font-display)" }}>
                    Kashan Iqbal
                  </p>
                  <p className="text-electric text-sm">CEO & Founder</p>
                </div>
              </div>

              {/* Experience badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/3 glass border border-electric/20 rounded-2xl p-4 text-center"
              >
                <p className="text-3xl font-display font-bold text-gradient-electric" style={{ fontFamily: "var(--font-display)" }}>
                  15+
                </p>
                <p className="text-xs text-smoke">Years Engineering</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Quotes */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-electric uppercase tracking-widest mb-12 text-center"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            In His Own Words
          </motion.p>

          <div className="space-y-8">
            {CEO_QUOTES.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative p-8 rounded-2xl glass border border-white/[0.06] ${i % 2 === 0 ? "ml-0 mr-12" : "ml-12 mr-0"}`}
              >
                <Quote className="absolute top-6 left-6 w-6 h-6 text-electric/30" />
                <p className="text-ghost text-xl leading-relaxed pl-8 font-light">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="text-sm text-electric mt-4 pl-8 font-mono" style={{ fontFamily: "var(--font-mono)" }}>
                  — Kashan Iqbal
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-extrabold text-ghost mb-16 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-electric/50 via-electric/20 to-transparent" />

            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-8"
                >
                  {/* Year */}
                  <div className="w-14 flex-shrink-0 text-right">
                    <span className="text-xs font-mono text-electric" style={{ fontFamily: "var(--font-mono)" }}>
                      {m.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-electric ring-4 ring-electric/20" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <p className="text-mist leading-relaxed">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
