'use client'
import { MotionConfig } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : 'never'}>
      {children}
    </MotionConfig>
  )
}
