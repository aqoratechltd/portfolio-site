"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[10000] bg-void/80 backdrop-blur-sm"
          />

          {/* Slide-over panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 bottom-0 z-[10001] w-full max-w-xl bg-obsidian border-l border-white/[0.08] shadow-glass-lg overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-electric/15 border border-electric/20 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-electric" />
                </div>
                <div>
                  <h2
                    className="font-display font-bold text-ghost text-lg"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Quick Book
                  </h2>
                  <p className="text-xs text-mist">Free 30-min strategy call</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg glass border border-white/[0.08] flex items-center justify-center text-mist hover:text-ghost transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Value props */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Response Time", value: "< 2 hrs" },
                  { label: "NDA", value: "Instant" },
                  { label: "No Obligation", value: "Free" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass rounded-xl p-3 text-center border border-white/[0.06]"
                  >
                    <p
                      className="text-electric font-display font-bold text-lg"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.value}
                    </p>
                    <p className="text-xs text-smoke">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Calendly widget */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-graphite min-h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-electric" />
                  </div>
                  <p className="text-ghost font-medium mb-2">Schedule Your Call</p>
                  <p className="text-sm text-mist mb-6 max-w-xs">
                    Pick a time that works for you. We&apos;ll discuss your project and how we can help.
                  </p>
                  <a
                    href="https://calendly.com/your-agency/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-electric text-white font-medium text-sm hover:bg-electric-dim transition-colors electric-glow"
                  >
                    <Calendar className="w-4 h-4" />
                    Open Calendly
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
