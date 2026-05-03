"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PolicySection {
  title: string;
  body: string;
}

interface PolicyLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  effectiveDate: string;
  sections: PolicySection[];
}

export default function PolicyLayout({
  badge,
  title,
  subtitle,
  effectiveDate,
  sections,
}: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-void pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-smoke hover:text-mist transition-colors uppercase tracking-widest"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <span
            className="text-xs font-mono text-electric uppercase tracking-[0.3em] mb-4 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {badge}
          </span>
          <h1
            className="font-display font-extrabold text-4xl md:text-5xl text-ghost leading-tight tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          <p className="text-mist text-base leading-relaxed mb-6">{subtitle}</p>
          <p
            className="text-xs font-mono text-smoke"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Effective date: {effectiveDate}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-14" />

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <h2
                className="font-display font-bold text-lg text-ghost mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    className="text-mist text-sm leading-relaxed whitespace-pre-line"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom links */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap gap-6">
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Cookie Policy", href: "/cookie-policy" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-mono text-smoke hover:text-electric transition-colors uppercase tracking-widest"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
