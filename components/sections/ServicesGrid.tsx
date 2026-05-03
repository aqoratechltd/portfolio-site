"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Film, Server, Brain, Layers, TrendingUp, Network,
  Sparkles, Smartphone, Users, Globe, Database, Link as LinkIcon,
  ShoppingCart, Cloud, ShieldCheck, ArrowRight,
  Palette, Video, Search, Package, Star, Code, Award, Camera, ShoppingBag, Share2,
  Zap,
} from "lucide-react";
import { SERVICES } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { pricingServices } from "@/lib/pricing-data";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Film, Server, Brain, Layers, TrendingUp, Network,
  Sparkles, Smartphone, Users, Globe, Database,
  Link: LinkIcon, ShoppingCart, Cloud, ShieldCheck,
  Palette, Video, Search, Package, Star, Code, Award, Camera, ShoppingBag, Share2,
  Zap,
};

const BENTO_SPANS = [
  "col-span-1",                  // 0: ecommerce
  "col-span-1",                  // 1: smm
  "col-span-1",                  // 2: seo
  "col-span-1",                  // 3: development
  "col-span-1",                  // 4: performance-marketing
  "col-span-1",                  // 5: lead-generation
  "col-span-1 md:col-span-2",    // 6: branding — spans 2 cols
  // New pricing services — all single-column
  "col-span-1", // 7:  graphic-design
  "col-span-1", // 8:  video-editing
  "col-span-1", // 9:  seo-packages
  "col-span-1", // 10: courier-management
  "col-span-1", // 11: performance-ads
  "col-span-1", // 12: digital-marketing
  "col-span-1", // 13: social-media-marketing
  "col-span-1", // 14: video-production
  "col-span-1", // 15: influencer-content
  "col-span-1", // 16: web-dev
  "col-span-1", // 17: brand-identity
  "col-span-1", // 18: content-creation
  "col-span-1",              // 19: marketing-advanced
  "col-span-1",              // 20: ecommerce-support
  "col-span-1",              // 21: ai-integrations
  "col-span-1",              // 22: business-automations
  "col-span-1",              // 23: infrastructure
  "col-span-1",              // 24: cloud-design
  "col-span-1",              // 25: blockchain-dev
  "col-span-1",              // 26: saas-development
  "col-span-1 md:col-span-2", // 27: blockchain-crypto
  "col-span-1 md:col-span-2", // 28: generative-ai
];

type GridService = {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  icon: string;
  featured: boolean;
};

export default function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleCount, setVisibleCount] = useState(7);

  const oldServices: GridService[] = [
    SERVICES.find((s) => s.id === "ecommerce")!,
    SERVICES.find((s) => s.id === "smm")!,
    SERVICES.find((s) => s.id === "seo")!,
    SERVICES.find((s) => s.id === "development")!,
    SERVICES.find((s) => s.id === "performance-marketing")!,
    SERVICES.find((s) => s.id === "lead-generation")!,
    SERVICES.find((s) => s.id === "branding")!,
  ].map((s) => ({
    id: s.id,
    title: s.title,
    category: s.category,
    description: s.description,
    color: s.color,
    icon: s.icon,
    featured: s.featured ?? false,
  }));

  const newServices: GridService[] = pricingServices.map((s) => ({
    id: s.slug,
    title: s.title,
    category: s.category,
    description: s.description,
    color: s.color,
    icon: s.icon,
    featured: false,
  }));

  const allServices = [...oldServices, ...newServices];
  const visibleServices = allServices.slice(0, visibleCount);
  const hasMore = visibleCount < allServices.length;

  return (
    <section className="py-32 relative" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-electric uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            What We Do
          </motion.p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-ghost leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Services That
              <br />
              <span className="text-gradient-electric">Scale Your Business</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/services"
                className="flex items-center gap-2 text-sm text-mist hover:text-electric transition-colors group"
              >
                View all services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bento Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden"
        >
          {visibleServices.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Brain;
            const span = BENTO_SPANS[i] || "col-span-1";
            const isFeatured = service.featured;
            const isEcommerce = i === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: Math.min(i * 0.04, 0.6), duration: 0.5 }}
                className={cn(span, "relative")}
              >
                <Link
                  href={`/services/${service.id}`}
                  className={cn(
                    "service-card group relative flex flex-col h-full min-h-[160px] sm:min-h-[180px] md:min-h-[200px] p-4 sm:p-5 md:p-6 transition-colors duration-300 overflow-hidden",
                    "bg-obsidian hover:bg-graphite",
                    isFeatured && !isEcommerce && "md:min-h-[280px]"
                  )}
                >
                  {/* Background glow — hover-only */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${service.color}10 0%, transparent 60%)`,
                    }}
                  />

                  {/* Category tag */}
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest mb-4 block"
                    style={{ color: service.color, fontFamily: "var(--font-mono)" }}
                  >
                    {service.category}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>

                  {/* Content */}
                  <h3
                    className="font-display font-bold text-ghost mb-2 group-hover:text-white transition-colors"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: isFeatured ? "1.4rem" : "1.1rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-smoke leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 mt-4 text-xs text-smoke group-hover:text-electric transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Featured badge */}
                  {isFeatured && (
                    <div
                      className="absolute top-4 right-4 text-[10px] font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        color: service.color,
                        borderColor: `${service.color}30`,
                        backgroundColor: `${service.color}10`,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      Featured
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Load More */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <p className="text-xs text-smoke font-mono" style={{ fontFamily: "var(--font-mono)" }}>
              Showing {visibleCount} of {allServices.length} services
            </p>
            <button
              onClick={() => setVisibleCount(allServices.length)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08] text-sm text-mist hover:text-ghost hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200 font-mono"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Load More Services
              <ArrowRight className="w-4 h-4 rotate-90" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
