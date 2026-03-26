"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";
import CalendlyModal from "./CalendlyModal";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  if (dismissed && !modalOpen) return null;

  return (
    <>
      <AnimatePresence>
        {visible && !dismissed && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-8 right-8 z-[9998] flex items-end gap-3"
          >
            {/* Label bubble */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-xl px-4 py-2 border border-white/[0.08] text-sm text-ghost mb-1"
            >
              Free strategy call →
            </motion.div>

            {/* Main button */}
            <div className="relative">
              {/* Pulse rings */}
              <span className="absolute inset-0 rounded-full bg-electric/30 animate-ping" />
              <button
                onClick={() => setModalOpen(true)}
                className="relative w-14 h-14 rounded-full bg-electric electric-glow flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
              >
                <Calendar className="w-6 h-6" />
              </button>
            </div>

            {/* Dismiss */}
            <button
              onClick={() => {
                setDismissed(true);
                setVisible(false);
              }}
              className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-graphite border border-white/10 flex items-center justify-center text-smoke hover:text-mist transition-colors"
            >
              <X className="w-2.5 h-2.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CalendlyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
