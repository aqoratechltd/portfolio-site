"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number | string
  prefix?: string
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, prefix = "", suffix = "", duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  // Parse numeric value
  const numValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = numValue
      const totalFrames = Math.round(duration * 60)
      let frame = 0

      const counter = setInterval(() => {
        frame++
        const progress = frame / totalFrames
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.round(end * easeProgress)
        
        setCount(currentCount)

        if (frame === totalFrames) {
          clearInterval(counter)
          setCount(end)
        }
      }, 1000 / 60)

      return () => clearInterval(counter)
    }
  }, [isInView, numValue, duration])

  // Detect formatting pattern (if it's a string mapped back essentially)
  const displayValue = isNaN(numValue) ? value : count

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  )
}
