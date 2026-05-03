"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "../ui/AnimatedCounter"

const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered", duration: 2 },
  { value: 6, suffix: "+", label: "Years Experience", duration: 1.5 },
  { value: 30, suffix: "+", label: "Happy Clients", duration: 2 },
  { value: 15, suffix: "", label: "Service Offerings", duration: 1.5 },
  { value: 4, suffix: "", label: "Countries Served", duration: 1 }
]

export function StatsBar() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-x divide-border">
          {STATS.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col items-center justify-center text-center px-4 ${i % 2 === 0 ? '' : 'border-t md:border-t-0 border-border pt-8 md:pt-0'}`}
            >
              <div className="font-syne font-bold text-5xl md:text-6xl text-accent mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={stat.duration} />
              </div>
              <p className="text-text-muted text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
