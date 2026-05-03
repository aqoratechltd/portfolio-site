"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppBubble() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923001234567"
  const waUrl = `https://wa.me/${waNumber}?text=Hi%20Veltrix%2C%20I%27d%20like%20to%20discuss%20a%20project`

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group">
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60"></div>
      <a 
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      {/* Tooltip */}
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-card text-foreground px-3 py-1.5 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border shadow-lg">
        Chat on WhatsApp
      </span>
    </div>
  )
}
